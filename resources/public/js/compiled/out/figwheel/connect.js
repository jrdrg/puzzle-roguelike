// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('puzzle_roguelike.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__47440__delegate = function (x){
if(cljs.core.truth_(puzzle_roguelike.core.on_js_reload)){
return cljs.core.apply.call(null,puzzle_roguelike.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'puzzle-roguelike.core/on-js-reload' is missing");
}
};
var G__47440 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__47441__i = 0, G__47441__a = new Array(arguments.length -  0);
while (G__47441__i < G__47441__a.length) {G__47441__a[G__47441__i] = arguments[G__47441__i + 0]; ++G__47441__i;}
  x = new cljs.core.IndexedSeq(G__47441__a,0);
} 
return G__47440__delegate.call(this,x);};
G__47440.cljs$lang$maxFixedArity = 0;
G__47440.cljs$lang$applyTo = (function (arglist__47442){
var x = cljs.core.seq(arglist__47442);
return G__47440__delegate(x);
});
G__47440.cljs$core$IFn$_invoke$arity$variadic = G__47440__delegate;
return G__47440;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1454291747990