(ns app.main
    (:require [reagent.core :as r]))

(defn init []
  (println "init"))

(defn ^:export body []
    [:div {:style {:border "1px black solid"}} "Hi, main.cljs here!"])

(defn start []
  (println "start")
  (r/render [body]
    (js/document.getElementById "app"))
  {::app true})

(defn stop [app]
  (prn [:stop app]))
