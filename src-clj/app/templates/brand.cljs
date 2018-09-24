(ns app.templates.brand
    (:require [reagent.core :as r]))

(defn body [{:keys [brand]}]
  [:div.clj
   [:p {:style {:background-color :red}}
       (str "Awesome brand page for " brand)]])

(def ^:export Body (r/reactify-component body))
