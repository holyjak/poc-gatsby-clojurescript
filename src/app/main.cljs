(ns app.main
    (:require [reagent.core :as r]))

(defn init []
  (println "init"))

(defn start []
  (println "start")
  (r/render [:div {:style {:border "1px black solid"}} "Hi, main.cljs here!"]
    (js/document.getElementById "app"))
  {::app true})

(defn stop [app]
  (prn [:stop app]))
