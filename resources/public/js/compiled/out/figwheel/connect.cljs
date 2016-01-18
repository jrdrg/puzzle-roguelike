(ns figwheel.connect (:require [puzzle-roguelike.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/puzzle-roguelike.core.on-js-reload (apply js/puzzle-roguelike.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'puzzle-roguelike.core/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

