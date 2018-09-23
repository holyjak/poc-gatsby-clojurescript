(ns app.templates.brand
    (:require [reagent.core :as r]))

(defn body [{:keys [brand]}]
  [:div
   [:p {:style {:background-color :red}}
       (str "Awesome brand page for " brand)]])

(def Body (r/reactify-component body))
