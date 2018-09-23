(ns app.main
    (:require [reagent.core :as r]))

(defn init []
  (println "init"))

(defn body-reagent []
    (r/as-element
        [:div {:style {:border "1px black solid"}} "Hi, main.cljs here!"]))

;; Make into a component we can use from JS/JSX:
(def body (r/reactify-component body-reagent))

(defn start []
  (println "start")
  (r/render [body]
    (js/document.getElementById "app"))
  {::app true})

(defn stop [app]
  (prn [:stop app]))
