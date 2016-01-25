(set-env!
 :source-paths #{"src"}
 :resource-paths #{"resources"}
 :dependencies '[[adzerk/boot-cljs "1.7.228-1" :scope "test"]
                 [ajchemist/boot-figwheel "0.5.0-2"] ;; latest release
                 [danielsz/boot-autoprefixer "0.0.4"]
                 [com.cemerick/piggieback "0.2.1" :scope "test"]
                 [org.clojure/tools.nrepl "0.2.10"]
                 [figwheel-sidecar "0.5.0-2" :scope "test"]
                 [org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/core.async "0.2.374"]
                 [reagent "0.5.0"]])

(require '[adzerk.boot-cljs :refer [cljs]]
         '[boot-figwheel])
(refer 'boot-figwheel :rename '{cljs-repl fw-cljs-repl}) ; avoid some symbols

(set-env! :dependencies '[[danielsz/boot-autoprefixer "0.0.4"]]) ; latest release is indicated above
(require '[danielsz.autoprefixer :refer [autoprefixer]])


(task-options!
 dev {
      }
 autoprefixer {:files ["style.css"]
               :browsers "last 2 versions"}
 figwheel {:build-ids  ["dev"]
           :all-builds [{:id "dev"
                         :compiler {:main 'puzzle-roguelike.core
                                    :asset-path "js/compiled/out"
                                    :output-to "resources/public/js/compiled/puzzle_roguelike.js"
                                    :output-dir "resources/public/js/compiled/out"}
                         :figwheel {:build-id  "dev"
                                    :on-jsload 'puzzle-roguelike.core/on-js-reload
                                    :heads-up-display true
                                    :autoload true
                                    :debug false}}]
           :figwheel-options {:repl true
                              :http-server-root "public"
                              :css-dirs ["resources/public/css"]
                              :open-file-command "emacsclient"}})

(deftask dev []
  (set-env! :source-paths #(into % ["src"]))
  (comp (autoprefixer)
        (cljs)
        )) 
 
(deftask figwheel-repl []
  (set-env! :source-paths #(into % ["src"]))
  (comp (autoprefixer)
        (repl)
        (figwheel)
        ))
