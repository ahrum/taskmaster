(defproject taskmaster/taskmaster "0.0.1-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [ring "1.2.0"]
                 [compojure "1.1.5"]
                 [ring/ring-json "0.2.0"]
                 [com.novemberain/monger "1.5.0"]
                 [cheshire "5.2.0"]]
  :plugins [[lein-ring "0.8.6"]]
  :ring {:handler taskmaster.web/handler
         :init taskmaster.web/init
         :destory taskmaster.web/destroy}
  :source-paths ["src/main/clojure"]
  :resource-paths ["web/app"])
