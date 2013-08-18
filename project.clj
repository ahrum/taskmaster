(defproject taskmaster/taskmaster "0.0.1-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [ring "1.2.0"]
                 [compojure "1.1.5"]
                 [com.novemberain/monger "1.5.0"]]
  :plugins [[lein-ring "0.8.6"]]
  :ring {:handler taskmaster.web/routes})
