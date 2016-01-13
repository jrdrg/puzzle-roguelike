(ns puzzle-roguelike.macros
  )

(defmacro handler-fn
  ([& body]
   `(fn [~'event]
      ~@body
      nil)))

