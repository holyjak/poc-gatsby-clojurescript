(ns app.templates.brand
    (:require [reagent.core :as r]))

(defn simple-example []
  [:div
   [:p {:style {:background-color :red}} "Hello from app.brand!"]])

(defn ^:export run []
  (r/render [simple-example]
    (js/document.getElementById "brand")))
