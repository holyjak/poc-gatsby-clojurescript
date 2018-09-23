(ns app.main
    (:require
        [reagent.core :as r]
        ["gatsby" :refer (Link)]))

(defn body []
    [:div
        {:style {:border "1px black solid"}}
        [:p "Hi, main.cljs IS here!"]
        [:p [:> Link {:to "/brand/tesla/"} "Go to the Tesla brand page"]]])

(def Body (r/reactify-component body))

;; This does not work for we can't require a JSX file:
; :require ["/components/layout" :as Layout]
; (defn page []
;     [:> Layout
;         [body]])
;
; ;; Make into a component we can use from JS/JSX:
; (def IndexPage (r/reactify-component page))
