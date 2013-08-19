(ns taskmaster.web
  (:require [monger.core :as mg]
            [monger.collection :as mc]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [ring.middleware.json :as middleware]
            [monger.json])
  (:use compojure.core)
  (:use cheshire.core)
  (:use ring.util.response)
  (:import (org.bson.types ObjectId)))

(def doc-db-name "taskmaster")

(defn init
  []
  (mg/connect!)
  (mg/set-db! (mg/get-db doc-db-name)))

(defn destroy
  []
  (mg/disconnect!))

(defn- get-all-stories
  []
  (response (mc/find-maps doc-db-name)))

(defn- create-new-story
  [body]
  )

(defn- get-story
  [id]
  (response (mc/find-map-by-id doc-db-name (ObjectId. id))))

(defn- update-story
  [id body]
  )

(defn- delete-story
  [id]
  )

(defroutes app-routes
  (context "/stories" []
    (defroutes stories-routes
      (GET "/" request (get-all-stories))
      (POST "/" {body :body} (create-new-story body))
      (context "/:id" [id]
        (defroutes story-routes
          (GET "/" [] (get-story id))
          (PUT "/" {body :body} (update-story id body))
          (DELETE "/" [] (delete-story id))))))
  (route/not-found "Not Found"))

(def handler
  (-> (handler/api app-routes)
    (middleware/wrap-json-body)
    (middleware/wrap-json-response)))
