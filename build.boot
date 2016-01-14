(set-env!
 :resource-paths #{"src/puzzle_roguelike"}
 :dependencies '[[adzerk/boot-cljs "1.7.228-1" :scope "test"]
                 [org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/core.async "0.2.374"]
                 [reagent "0.5.0"]])

(require '[adzerk.boot-cljs :refer [cljs]])

(deftask dev[]
  (comp (cljs)
        )) 
 
