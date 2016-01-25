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
var seq__58894_58908 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__58895_58909 = null;
var count__58896_58910 = (0);
var i__58897_58911 = (0);
while(true){
if((i__58897_58911 < count__58896_58910)){
var f_58912 = cljs.core._nth.call(null,chunk__58895_58909,i__58897_58911);
cljs.core.println.call(null,"  ",f_58912);

var G__58913 = seq__58894_58908;
var G__58914 = chunk__58895_58909;
var G__58915 = count__58896_58910;
var G__58916 = (i__58897_58911 + (1));
seq__58894_58908 = G__58913;
chunk__58895_58909 = G__58914;
count__58896_58910 = G__58915;
i__58897_58911 = G__58916;
continue;
} else {
var temp__4425__auto___58917 = cljs.core.seq.call(null,seq__58894_58908);
if(temp__4425__auto___58917){
var seq__58894_58918__$1 = temp__4425__auto___58917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58894_58918__$1)){
var c__17629__auto___58919 = cljs.core.chunk_first.call(null,seq__58894_58918__$1);
var G__58920 = cljs.core.chunk_rest.call(null,seq__58894_58918__$1);
var G__58921 = c__17629__auto___58919;
var G__58922 = cljs.core.count.call(null,c__17629__auto___58919);
var G__58923 = (0);
seq__58894_58908 = G__58920;
chunk__58895_58909 = G__58921;
count__58896_58910 = G__58922;
i__58897_58911 = G__58923;
continue;
} else {
var f_58924 = cljs.core.first.call(null,seq__58894_58918__$1);
cljs.core.println.call(null,"  ",f_58924);

var G__58925 = cljs.core.next.call(null,seq__58894_58918__$1);
var G__58926 = null;
var G__58927 = (0);
var G__58928 = (0);
seq__58894_58908 = G__58925;
chunk__58895_58909 = G__58926;
count__58896_58910 = G__58927;
i__58897_58911 = G__58928;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_58929 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_58929);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_58929)))?cljs.core.second.call(null,arglists_58929):arglists_58929));
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
var seq__58898 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__58899 = null;
var count__58900 = (0);
var i__58901 = (0);
while(true){
if((i__58901 < count__58900)){
var vec__58902 = cljs.core._nth.call(null,chunk__58899,i__58901);
var name = cljs.core.nth.call(null,vec__58902,(0),null);
var map__58903 = cljs.core.nth.call(null,vec__58902,(1),null);
var map__58903__$1 = ((((!((map__58903 == null)))?((((map__58903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58903):map__58903);
var doc = cljs.core.get.call(null,map__58903__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__58903__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__58930 = seq__58898;
var G__58931 = chunk__58899;
var G__58932 = count__58900;
var G__58933 = (i__58901 + (1));
seq__58898 = G__58930;
chunk__58899 = G__58931;
count__58900 = G__58932;
i__58901 = G__58933;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__58898);
if(temp__4425__auto__){
var seq__58898__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58898__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__58898__$1);
var G__58934 = cljs.core.chunk_rest.call(null,seq__58898__$1);
var G__58935 = c__17629__auto__;
var G__58936 = cljs.core.count.call(null,c__17629__auto__);
var G__58937 = (0);
seq__58898 = G__58934;
chunk__58899 = G__58935;
count__58900 = G__58936;
i__58901 = G__58937;
continue;
} else {
var vec__58905 = cljs.core.first.call(null,seq__58898__$1);
var name = cljs.core.nth.call(null,vec__58905,(0),null);
var map__58906 = cljs.core.nth.call(null,vec__58905,(1),null);
var map__58906__$1 = ((((!((map__58906 == null)))?((((map__58906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58906):map__58906);
var doc = cljs.core.get.call(null,map__58906__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__58906__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__58938 = cljs.core.next.call(null,seq__58898__$1);
var G__58939 = null;
var G__58940 = (0);
var G__58941 = (0);
seq__58898 = G__58938;
chunk__58899 = G__58939;
count__58900 = G__58940;
i__58901 = G__58941;
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

//# sourceMappingURL=repl.js.map?rel=1453728832632