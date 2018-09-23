(ns app.templates.brand
    (:require [reagent.core :as r]))

(defn ^:export body []
  [:div
   [:p {:style {:background-color :red}} "Hello from app.brand!"]])

(defn ^:export run []
  (r/render [body]
    (js/document.getElementById "brand")))
