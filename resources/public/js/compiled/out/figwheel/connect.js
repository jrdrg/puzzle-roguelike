// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('puzzle_roguelike.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__59628__delegate = function (x){
if(cljs.core.truth_(puzzle_roguelike.core.on_js_reload)){
return cljs.core.apply.call(null,puzzle_roguelike.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'puzzle-roguelike.core/on-js-reload' is missing");
}
};
var G__59628 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__59629__i = 0, G__59629__a = new Array(arguments.length -  0);
while (G__59629__i < G__59629__a.length) {G__59629__a[G__59629__i] = arguments[G__59629__i + 0]; ++G__59629__i;}
  x = new cljs.core.IndexedSeq(G__59629__a,0);
} 
return G__59628__delegate.call(this,x);};
G__59628.cljs$lang$maxFixedArity = 0;
G__59628.cljs$lang$applyTo = (function (arglist__59630){
var x = cljs.core.seq(arglist__59630);
return G__59628__delegate(x);
});
G__59628.cljs$core$IFn$_invoke$arity$variadic = G__59628__delegate;
return G__59628;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1454505522309