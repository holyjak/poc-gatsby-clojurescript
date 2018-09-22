(ns app.templates.brand
    (:require [reagent.core :as r]))

(defn simple-example []
  [:div
   [:p "Hello world, it is Reagent speaking!"]])

(defn ^:export run []
  (r/render [simple-example]
    (js/document.getElementById "app")))

(run)
