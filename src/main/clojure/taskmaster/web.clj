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
  (response (mc/find-seq doc-db-name)))

(defn- create-new-story
  [body]
  {:status 201 :headers {} :body (mc/insert-and-return doc-db-name body)})

(defn- get-story
  [id]
  (try
    (if-let [body (mc/find-map-by-id doc-db-name (ObjectId. id))]
      (response body)
      {:status 404})
    (catch IllegalArgumentException e
      {:status 404})))

(defn- update-story
  [id body]
  (mc/update-by-id doc-db-name (ObjectId. id) body)
  {:status 200})

(defn- delete-story
  [id]
  (mc/remove-by-id doc-db-name (ObjectId. id))
  {:status 200})

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

(defroutes main-routes
  (GET "/" [] "<h1>Welcome!</h1>")
  (context "/api" [] app-routes)
  (route/resources "/" {:root nil})
  (route/not-found "<h1>Page not found</h1>"))

(def handler
  (-> (handler/api main-routes)
    (middleware/wrap-json-body)
    (middleware/wrap-json-response)))
