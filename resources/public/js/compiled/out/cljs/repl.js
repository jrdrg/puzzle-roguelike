// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__66297_66311 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66298_66312 = null;
var count__66299_66313 = (0);
var i__66300_66314 = (0);
while(true){
if((i__66300_66314 < count__66299_66313)){
var f_66315 = cljs.core._nth.call(null,chunk__66298_66312,i__66300_66314);
cljs.core.println.call(null,"  ",f_66315);

var G__66316 = seq__66297_66311;
var G__66317 = chunk__66298_66312;
var G__66318 = count__66299_66313;
var G__66319 = (i__66300_66314 + (1));
seq__66297_66311 = G__66316;
chunk__66298_66312 = G__66317;
count__66299_66313 = G__66318;
i__66300_66314 = G__66319;
continue;
} else {
var temp__4425__auto___66320 = cljs.core.seq.call(null,seq__66297_66311);
if(temp__4425__auto___66320){
var seq__66297_66321__$1 = temp__4425__auto___66320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66297_66321__$1)){
var c__17629__auto___66322 = cljs.core.chunk_first.call(null,seq__66297_66321__$1);
var G__66323 = cljs.core.chunk_rest.call(null,seq__66297_66321__$1);
var G__66324 = c__17629__auto___66322;
var G__66325 = cljs.core.count.call(null,c__17629__auto___66322);
var G__66326 = (0);
seq__66297_66311 = G__66323;
chunk__66298_66312 = G__66324;
count__66299_66313 = G__66325;
i__66300_66314 = G__66326;
continue;
} else {
var f_66327 = cljs.core.first.call(null,seq__66297_66321__$1);
cljs.core.println.call(null,"  ",f_66327);

var G__66328 = cljs.core.next.call(null,seq__66297_66321__$1);
var G__66329 = null;
var G__66330 = (0);
var G__66331 = (0);
seq__66297_66311 = G__66328;
chunk__66298_66312 = G__66329;
count__66299_66313 = G__66330;
i__66300_66314 = G__66331;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_66332 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_66332);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_66332)))?cljs.core.second.call(null,arglists_66332):arglists_66332));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__66301 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66302 = null;
var count__66303 = (0);
var i__66304 = (0);
while(true){
if((i__66304 < count__66303)){
var vec__66305 = cljs.core._nth.call(null,chunk__66302,i__66304);
var name = cljs.core.nth.call(null,vec__66305,(0),null);
var map__66306 = cljs.core.nth.call(null,vec__66305,(1),null);
var map__66306__$1 = ((((!((map__66306 == null)))?((((map__66306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66306):map__66306);
var doc = cljs.core.get.call(null,map__66306__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__66306__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__66333 = seq__66301;
var G__66334 = chunk__66302;
var G__66335 = count__66303;
var G__66336 = (i__66304 + (1));
seq__66301 = G__66333;
chunk__66302 = G__66334;
count__66303 = G__66335;
i__66304 = G__66336;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__66301);
if(temp__4425__auto__){
var seq__66301__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66301__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__66301__$1);
var G__66337 = cljs.core.chunk_rest.call(null,seq__66301__$1);
var G__66338 = c__17629__auto__;
var G__66339 = cljs.core.count.call(null,c__17629__auto__);
var G__66340 = (0);
seq__66301 = G__66337;
chunk__66302 = G__66338;
count__66303 = G__66339;
i__66304 = G__66340;
continue;
} else {
var vec__66308 = cljs.core.first.call(null,seq__66301__$1);
var name = cljs.core.nth.call(null,vec__66308,(0),null);
var map__66309 = cljs.core.nth.call(null,vec__66308,(1),null);
var map__66309__$1 = ((((!((map__66309 == null)))?((((map__66309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66309):map__66309);
var doc = cljs.core.get.call(null,map__66309__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__66309__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__66341 = cljs.core.next.call(null,seq__66301__$1);
var G__66342 = null;
var G__66343 = (0);
var G__66344 = (0);
seq__66301 = G__66341;
chunk__66302 = G__66342;
count__66303 = G__66343;
i__66304 = G__66344;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1453136835473