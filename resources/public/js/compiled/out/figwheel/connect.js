// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('puzzle_roguelike.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__59671__delegate = function (x){
if(cljs.core.truth_(puzzle_roguelike.core.on_js_reload)){
return cljs.core.apply.call(null,puzzle_roguelike.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'puzzle-roguelike.core/on-js-reload' is missing");
}
};
var G__59671 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__59672__i = 0, G__59672__a = new Array(arguments.length -  0);
while (G__59672__i < G__59672__a.length) {G__59672__a[G__59672__i] = arguments[G__59672__i + 0]; ++G__59672__i;}
  x = new cljs.core.IndexedSeq(G__59672__a,0);
} 
return G__59671__delegate.call(this,x);};
G__59671.cljs$lang$maxFixedArity = 0;
G__59671.cljs$lang$applyTo = (function (arglist__59673){
var x = cljs.core.seq(arglist__59673);
return G__59671__delegate(x);
});
G__59671.cljs$core$IFn$_invoke$arity$variadic = G__59671__delegate;
return G__59671;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1453728832970