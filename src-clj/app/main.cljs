(ns app.main
    (:require
        [reagent.core :as r]
        ["gatsby" :refer (Link)]))

(defn init []
  (println "init"))

(defn body-reagent []
    (r/as-element
        [:div
            {:style {:border "1px black solid"}}
            [:p "Hi, main.cljs IS here!"]
            [:> Link {:to "/page-2/"} "Go to page 2"]]))

;; Make into a component we can use from JS/JSX:
(def body (r/reactify-component body-reagent))

(defn start []
  (println "start")
  (r/render [body]
    (js/document.getElementById "app"))
  {::app true})

(defn stop [app]
  (prn [:stop app]))
