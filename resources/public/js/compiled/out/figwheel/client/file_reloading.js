// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16826__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16826__auto__){
return or__16826__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16826__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__65188_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__65188_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__65193 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__65194 = null;
var count__65195 = (0);
var i__65196 = (0);
while(true){
if((i__65196 < count__65195)){
var n = cljs.core._nth.call(null,chunk__65194,i__65196);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__65197 = seq__65193;
var G__65198 = chunk__65194;
var G__65199 = count__65195;
var G__65200 = (i__65196 + (1));
seq__65193 = G__65197;
chunk__65194 = G__65198;
count__65195 = G__65199;
i__65196 = G__65200;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__65193);
if(temp__4425__auto__){
var seq__65193__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65193__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__65193__$1);
var G__65201 = cljs.core.chunk_rest.call(null,seq__65193__$1);
var G__65202 = c__17629__auto__;
var G__65203 = cljs.core.count.call(null,c__17629__auto__);
var G__65204 = (0);
seq__65193 = G__65201;
chunk__65194 = G__65202;
count__65195 = G__65203;
i__65196 = G__65204;
continue;
} else {
var n = cljs.core.first.call(null,seq__65193__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__65205 = cljs.core.next.call(null,seq__65193__$1);
var G__65206 = null;
var G__65207 = (0);
var G__65208 = (0);
seq__65193 = G__65205;
chunk__65194 = G__65206;
count__65195 = G__65207;
i__65196 = G__65208;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__65247_65254 = cljs.core.seq.call(null,deps);
var chunk__65248_65255 = null;
var count__65249_65256 = (0);
var i__65250_65257 = (0);
while(true){
if((i__65250_65257 < count__65249_65256)){
var dep_65258 = cljs.core._nth.call(null,chunk__65248_65255,i__65250_65257);
topo_sort_helper_STAR_.call(null,dep_65258,(depth + (1)),state);

var G__65259 = seq__65247_65254;
var G__65260 = chunk__65248_65255;
var G__65261 = count__65249_65256;
var G__65262 = (i__65250_65257 + (1));
seq__65247_65254 = G__65259;
chunk__65248_65255 = G__65260;
count__65249_65256 = G__65261;
i__65250_65257 = G__65262;
continue;
} else {
var temp__4425__auto___65263 = cljs.core.seq.call(null,seq__65247_65254);
if(temp__4425__auto___65263){
var seq__65247_65264__$1 = temp__4425__auto___65263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65247_65264__$1)){
var c__17629__auto___65265 = cljs.core.chunk_first.call(null,seq__65247_65264__$1);
var G__65266 = cljs.core.chunk_rest.call(null,seq__65247_65264__$1);
var G__65267 = c__17629__auto___65265;
var G__65268 = cljs.core.count.call(null,c__17629__auto___65265);
var G__65269 = (0);
seq__65247_65254 = G__65266;
chunk__65248_65255 = G__65267;
count__65249_65256 = G__65268;
i__65250_65257 = G__65269;
continue;
} else {
var dep_65270 = cljs.core.first.call(null,seq__65247_65264__$1);
topo_sort_helper_STAR_.call(null,dep_65270,(depth + (1)),state);

var G__65271 = cljs.core.next.call(null,seq__65247_65264__$1);
var G__65272 = null;
var G__65273 = (0);
var G__65274 = (0);
seq__65247_65254 = G__65271;
chunk__65248_65255 = G__65272;
count__65249_65256 = G__65273;
i__65250_65257 = G__65274;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__65251){
var vec__65253 = p__65251;
var x = cljs.core.nth.call(null,vec__65253,(0),null);
var xs = cljs.core.nthnext.call(null,vec__65253,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__65253,x,xs,get_deps__$1){
return (function (p1__65209_SHARP_){
return clojure.set.difference.call(null,p1__65209_SHARP_,x);
});})(vec__65253,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__65287 = cljs.core.seq.call(null,provides);
var chunk__65288 = null;
var count__65289 = (0);
var i__65290 = (0);
while(true){
if((i__65290 < count__65289)){
var prov = cljs.core._nth.call(null,chunk__65288,i__65290);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__65291_65299 = cljs.core.seq.call(null,requires);
var chunk__65292_65300 = null;
var count__65293_65301 = (0);
var i__65294_65302 = (0);
while(true){
if((i__65294_65302 < count__65293_65301)){
var req_65303 = cljs.core._nth.call(null,chunk__65292_65300,i__65294_65302);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65303,prov);

var G__65304 = seq__65291_65299;
var G__65305 = chunk__65292_65300;
var G__65306 = count__65293_65301;
var G__65307 = (i__65294_65302 + (1));
seq__65291_65299 = G__65304;
chunk__65292_65300 = G__65305;
count__65293_65301 = G__65306;
i__65294_65302 = G__65307;
continue;
} else {
var temp__4425__auto___65308 = cljs.core.seq.call(null,seq__65291_65299);
if(temp__4425__auto___65308){
var seq__65291_65309__$1 = temp__4425__auto___65308;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65291_65309__$1)){
var c__17629__auto___65310 = cljs.core.chunk_first.call(null,seq__65291_65309__$1);
var G__65311 = cljs.core.chunk_rest.call(null,seq__65291_65309__$1);
var G__65312 = c__17629__auto___65310;
var G__65313 = cljs.core.count.call(null,c__17629__auto___65310);
var G__65314 = (0);
seq__65291_65299 = G__65311;
chunk__65292_65300 = G__65312;
count__65293_65301 = G__65313;
i__65294_65302 = G__65314;
continue;
} else {
var req_65315 = cljs.core.first.call(null,seq__65291_65309__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65315,prov);

var G__65316 = cljs.core.next.call(null,seq__65291_65309__$1);
var G__65317 = null;
var G__65318 = (0);
var G__65319 = (0);
seq__65291_65299 = G__65316;
chunk__65292_65300 = G__65317;
count__65293_65301 = G__65318;
i__65294_65302 = G__65319;
continue;
}
} else {
}
}
break;
}

var G__65320 = seq__65287;
var G__65321 = chunk__65288;
var G__65322 = count__65289;
var G__65323 = (i__65290 + (1));
seq__65287 = G__65320;
chunk__65288 = G__65321;
count__65289 = G__65322;
i__65290 = G__65323;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__65287);
if(temp__4425__auto__){
var seq__65287__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65287__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__65287__$1);
var G__65324 = cljs.core.chunk_rest.call(null,seq__65287__$1);
var G__65325 = c__17629__auto__;
var G__65326 = cljs.core.count.call(null,c__17629__auto__);
var G__65327 = (0);
seq__65287 = G__65324;
chunk__65288 = G__65325;
count__65289 = G__65326;
i__65290 = G__65327;
continue;
} else {
var prov = cljs.core.first.call(null,seq__65287__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__65295_65328 = cljs.core.seq.call(null,requires);
var chunk__65296_65329 = null;
var count__65297_65330 = (0);
var i__65298_65331 = (0);
while(true){
if((i__65298_65331 < count__65297_65330)){
var req_65332 = cljs.core._nth.call(null,chunk__65296_65329,i__65298_65331);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65332,prov);

var G__65333 = seq__65295_65328;
var G__65334 = chunk__65296_65329;
var G__65335 = count__65297_65330;
var G__65336 = (i__65298_65331 + (1));
seq__65295_65328 = G__65333;
chunk__65296_65329 = G__65334;
count__65297_65330 = G__65335;
i__65298_65331 = G__65336;
continue;
} else {
var temp__4425__auto___65337__$1 = cljs.core.seq.call(null,seq__65295_65328);
if(temp__4425__auto___65337__$1){
var seq__65295_65338__$1 = temp__4425__auto___65337__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65295_65338__$1)){
var c__17629__auto___65339 = cljs.core.chunk_first.call(null,seq__65295_65338__$1);
var G__65340 = cljs.core.chunk_rest.call(null,seq__65295_65338__$1);
var G__65341 = c__17629__auto___65339;
var G__65342 = cljs.core.count.call(null,c__17629__auto___65339);
var G__65343 = (0);
seq__65295_65328 = G__65340;
chunk__65296_65329 = G__65341;
count__65297_65330 = G__65342;
i__65298_65331 = G__65343;
continue;
} else {
var req_65344 = cljs.core.first.call(null,seq__65295_65338__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65344,prov);

var G__65345 = cljs.core.next.call(null,seq__65295_65338__$1);
var G__65346 = null;
var G__65347 = (0);
var G__65348 = (0);
seq__65295_65328 = G__65345;
chunk__65296_65329 = G__65346;
count__65297_65330 = G__65347;
i__65298_65331 = G__65348;
continue;
}
} else {
}
}
break;
}

var G__65349 = cljs.core.next.call(null,seq__65287__$1);
var G__65350 = null;
var G__65351 = (0);
var G__65352 = (0);
seq__65287 = G__65349;
chunk__65288 = G__65350;
count__65289 = G__65351;
i__65290 = G__65352;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__65357_65361 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__65358_65362 = null;
var count__65359_65363 = (0);
var i__65360_65364 = (0);
while(true){
if((i__65360_65364 < count__65359_65363)){
var ns_65365 = cljs.core._nth.call(null,chunk__65358_65362,i__65360_65364);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_65365);

var G__65366 = seq__65357_65361;
var G__65367 = chunk__65358_65362;
var G__65368 = count__65359_65363;
var G__65369 = (i__65360_65364 + (1));
seq__65357_65361 = G__65366;
chunk__65358_65362 = G__65367;
count__65359_65363 = G__65368;
i__65360_65364 = G__65369;
continue;
} else {
var temp__4425__auto___65370 = cljs.core.seq.call(null,seq__65357_65361);
if(temp__4425__auto___65370){
var seq__65357_65371__$1 = temp__4425__auto___65370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65357_65371__$1)){
var c__17629__auto___65372 = cljs.core.chunk_first.call(null,seq__65357_65371__$1);
var G__65373 = cljs.core.chunk_rest.call(null,seq__65357_65371__$1);
var G__65374 = c__17629__auto___65372;
var G__65375 = cljs.core.count.call(null,c__17629__auto___65372);
var G__65376 = (0);
seq__65357_65361 = G__65373;
chunk__65358_65362 = G__65374;
count__65359_65363 = G__65375;
i__65360_65364 = G__65376;
continue;
} else {
var ns_65377 = cljs.core.first.call(null,seq__65357_65371__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_65377);

var G__65378 = cljs.core.next.call(null,seq__65357_65371__$1);
var G__65379 = null;
var G__65380 = (0);
var G__65381 = (0);
seq__65357_65361 = G__65378;
chunk__65358_65362 = G__65379;
count__65359_65363 = G__65380;
i__65360_65364 = G__65381;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16826__auto__ = goog.require__;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__65382__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__65382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65383__i = 0, G__65383__a = new Array(arguments.length -  0);
while (G__65383__i < G__65383__a.length) {G__65383__a[G__65383__i] = arguments[G__65383__i + 0]; ++G__65383__i;}
  args = new cljs.core.IndexedSeq(G__65383__a,0);
} 
return G__65382__delegate.call(this,args);};
G__65382.cljs$lang$maxFixedArity = 0;
G__65382.cljs$lang$applyTo = (function (arglist__65384){
var args = cljs.core.seq(arglist__65384);
return G__65382__delegate(args);
});
G__65382.cljs$core$IFn$_invoke$arity$variadic = G__65382__delegate;
return G__65382;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__65386 = cljs.core._EQ_;
var expr__65387 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__65386.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__65387))){
var path_parts = ((function (pred__65386,expr__65387){
return (function (p1__65385_SHARP_){
return clojure.string.split.call(null,p1__65385_SHARP_,/[\/\\]/);
});})(pred__65386,expr__65387))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__65386,expr__65387){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e65389){if((e65389 instanceof Error)){
var e = e65389;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e65389;

}
}})());
});
;})(path_parts,sep,root,pred__65386,expr__65387))
} else {
if(cljs.core.truth_(pred__65386.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__65387))){
return ((function (pred__65386,expr__65387){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__65386,expr__65387){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__65386,expr__65387))
);

return deferred.addErrback(((function (deferred,pred__65386,expr__65387){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__65386,expr__65387))
);
});
;})(pred__65386,expr__65387))
} else {
return ((function (pred__65386,expr__65387){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__65386,expr__65387))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__65390,callback){
var map__65393 = p__65390;
var map__65393__$1 = ((((!((map__65393 == null)))?((((map__65393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65393):map__65393);
var file_msg = map__65393__$1;
var request_url = cljs.core.get.call(null,map__65393__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__65393,map__65393__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__65393,map__65393__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__18924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto__){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto__){
return (function (state_65417){
var state_val_65418 = (state_65417[(1)]);
if((state_val_65418 === (7))){
var inst_65413 = (state_65417[(2)]);
var state_65417__$1 = state_65417;
var statearr_65419_65439 = state_65417__$1;
(statearr_65419_65439[(2)] = inst_65413);

(statearr_65419_65439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65418 === (1))){
var state_65417__$1 = state_65417;
var statearr_65420_65440 = state_65417__$1;
(statearr_65420_65440[(2)] = null);

(statearr_65420_65440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65418 === (4))){
var inst_65397 = (state_65417[(7)]);
var inst_65397__$1 = (state_65417[(2)]);
var state_65417__$1 = (function (){var statearr_65421 = state_65417;
(statearr_65421[(7)] = inst_65397__$1);

return statearr_65421;
})();
if(cljs.core.truth_(inst_65397__$1)){
var statearr_65422_65441 = state_65417__$1;
(statearr_65422_65441[(1)] = (5));

} else {
var statearr_65423_65442 = state_65417__$1;
(statearr_65423_65442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65418 === (6))){
var state_65417__$1 = state_65417;
var statearr_65424_65443 = state_65417__$1;
(statearr_65424_65443[(2)] = null);

(statearr_65424_65443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65418 === (3))){
var inst_65415 = (state_65417[(2)]);
var state_65417__$1 = state_65417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65417__$1,inst_65415);
} else {
if((state_val_65418 === (2))){
var state_65417__$1 = state_65417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65417__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_65418 === (11))){
var inst_65409 = (state_65417[(2)]);
var state_65417__$1 = (function (){var statearr_65425 = state_65417;
(statearr_65425[(8)] = inst_65409);

return statearr_65425;
})();
var statearr_65426_65444 = state_65417__$1;
(statearr_65426_65444[(2)] = null);

(statearr_65426_65444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65418 === (9))){
var inst_65401 = (state_65417[(9)]);
var inst_65403 = (state_65417[(10)]);
var inst_65405 = inst_65403.call(null,inst_65401);
var state_65417__$1 = state_65417;
var statearr_65427_65445 = state_65417__$1;
(statearr_65427_65445[(2)] = inst_65405);

(statearr_65427_65445[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65418 === (5))){
var inst_65397 = (state_65417[(7)]);
var inst_65399 = figwheel.client.file_reloading.blocking_load.call(null,inst_65397);
var state_65417__$1 = state_65417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65417__$1,(8),inst_65399);
} else {
if((state_val_65418 === (10))){
var inst_65401 = (state_65417[(9)]);
var inst_65407 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_65401);
var state_65417__$1 = state_65417;
var statearr_65428_65446 = state_65417__$1;
(statearr_65428_65446[(2)] = inst_65407);

(statearr_65428_65446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65418 === (8))){
var inst_65403 = (state_65417[(10)]);
var inst_65397 = (state_65417[(7)]);
var inst_65401 = (state_65417[(2)]);
var inst_65402 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_65403__$1 = cljs.core.get.call(null,inst_65402,inst_65397);
var state_65417__$1 = (function (){var statearr_65429 = state_65417;
(statearr_65429[(9)] = inst_65401);

(statearr_65429[(10)] = inst_65403__$1);

return statearr_65429;
})();
if(cljs.core.truth_(inst_65403__$1)){
var statearr_65430_65447 = state_65417__$1;
(statearr_65430_65447[(1)] = (9));

} else {
var statearr_65431_65448 = state_65417__$1;
(statearr_65431_65448[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18924__auto__))
;
return ((function (switch__18903__auto__,c__18924__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18904__auto__ = null;
var figwheel$client$file_reloading$state_machine__18904__auto____0 = (function (){
var statearr_65435 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65435[(0)] = figwheel$client$file_reloading$state_machine__18904__auto__);

(statearr_65435[(1)] = (1));

return statearr_65435;
});
var figwheel$client$file_reloading$state_machine__18904__auto____1 = (function (state_65417){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_65417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e65436){if((e65436 instanceof Object)){
var ex__18907__auto__ = e65436;
var statearr_65437_65449 = state_65417;
(statearr_65437_65449[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65450 = state_65417;
state_65417 = G__65450;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18904__auto__ = function(state_65417){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18904__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18904__auto____1.call(this,state_65417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18904__auto____0;
figwheel$client$file_reloading$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18904__auto____1;
return figwheel$client$file_reloading$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto__))
})();
var state__18926__auto__ = (function (){var statearr_65438 = f__18925__auto__.call(null);
(statearr_65438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto__);

return statearr_65438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto__))
);

return c__18924__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__65451,callback){
var map__65454 = p__65451;
var map__65454__$1 = ((((!((map__65454 == null)))?((((map__65454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65454):map__65454);
var file_msg = map__65454__$1;
var namespace = cljs.core.get.call(null,map__65454__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__65454,map__65454__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__65454,map__65454__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__65456){
var map__65459 = p__65456;
var map__65459__$1 = ((((!((map__65459 == null)))?((((map__65459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65459):map__65459);
var file_msg = map__65459__$1;
var namespace = cljs.core.get.call(null,map__65459__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16814__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16814__auto__){
var or__16826__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var or__16826__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto____$1)){
return or__16826__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16814__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__65461,callback){
var map__65464 = p__65461;
var map__65464__$1 = ((((!((map__65464 == null)))?((((map__65464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65464):map__65464);
var file_msg = map__65464__$1;
var request_url = cljs.core.get.call(null,map__65464__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__65464__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18924__auto___65552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___65552,out){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___65552,out){
return (function (state_65534){
var state_val_65535 = (state_65534[(1)]);
if((state_val_65535 === (1))){
var inst_65512 = cljs.core.nth.call(null,files,(0),null);
var inst_65513 = cljs.core.nthnext.call(null,files,(1));
var inst_65514 = files;
var state_65534__$1 = (function (){var statearr_65536 = state_65534;
(statearr_65536[(7)] = inst_65512);

(statearr_65536[(8)] = inst_65514);

(statearr_65536[(9)] = inst_65513);

return statearr_65536;
})();
var statearr_65537_65553 = state_65534__$1;
(statearr_65537_65553[(2)] = null);

(statearr_65537_65553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65535 === (2))){
var inst_65514 = (state_65534[(8)]);
var inst_65517 = (state_65534[(10)]);
var inst_65517__$1 = cljs.core.nth.call(null,inst_65514,(0),null);
var inst_65518 = cljs.core.nthnext.call(null,inst_65514,(1));
var inst_65519 = (inst_65517__$1 == null);
var inst_65520 = cljs.core.not.call(null,inst_65519);
var state_65534__$1 = (function (){var statearr_65538 = state_65534;
(statearr_65538[(11)] = inst_65518);

(statearr_65538[(10)] = inst_65517__$1);

return statearr_65538;
})();
if(inst_65520){
var statearr_65539_65554 = state_65534__$1;
(statearr_65539_65554[(1)] = (4));

} else {
var statearr_65540_65555 = state_65534__$1;
(statearr_65540_65555[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65535 === (3))){
var inst_65532 = (state_65534[(2)]);
var state_65534__$1 = state_65534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65534__$1,inst_65532);
} else {
if((state_val_65535 === (4))){
var inst_65517 = (state_65534[(10)]);
var inst_65522 = figwheel.client.file_reloading.reload_js_file.call(null,inst_65517);
var state_65534__$1 = state_65534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65534__$1,(7),inst_65522);
} else {
if((state_val_65535 === (5))){
var inst_65528 = cljs.core.async.close_BANG_.call(null,out);
var state_65534__$1 = state_65534;
var statearr_65541_65556 = state_65534__$1;
(statearr_65541_65556[(2)] = inst_65528);

(statearr_65541_65556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65535 === (6))){
var inst_65530 = (state_65534[(2)]);
var state_65534__$1 = state_65534;
var statearr_65542_65557 = state_65534__$1;
(statearr_65542_65557[(2)] = inst_65530);

(statearr_65542_65557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65535 === (7))){
var inst_65518 = (state_65534[(11)]);
var inst_65524 = (state_65534[(2)]);
var inst_65525 = cljs.core.async.put_BANG_.call(null,out,inst_65524);
var inst_65514 = inst_65518;
var state_65534__$1 = (function (){var statearr_65543 = state_65534;
(statearr_65543[(12)] = inst_65525);

(statearr_65543[(8)] = inst_65514);

return statearr_65543;
})();
var statearr_65544_65558 = state_65534__$1;
(statearr_65544_65558[(2)] = null);

(statearr_65544_65558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__18924__auto___65552,out))
;
return ((function (switch__18903__auto__,c__18924__auto___65552,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto____0 = (function (){
var statearr_65548 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65548[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto__);

(statearr_65548[(1)] = (1));

return statearr_65548;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto____1 = (function (state_65534){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_65534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e65549){if((e65549 instanceof Object)){
var ex__18907__auto__ = e65549;
var statearr_65550_65559 = state_65534;
(statearr_65550_65559[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65560 = state_65534;
state_65534 = G__65560;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto__ = function(state_65534){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto____1.call(this,state_65534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___65552,out))
})();
var state__18926__auto__ = (function (){var statearr_65551 = f__18925__auto__.call(null);
(statearr_65551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___65552);

return statearr_65551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___65552,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__65561,opts){
var map__65565 = p__65561;
var map__65565__$1 = ((((!((map__65565 == null)))?((((map__65565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65565):map__65565);
var eval_body__$1 = cljs.core.get.call(null,map__65565__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__65565__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16814__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16814__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16814__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e65567){var e = e65567;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__65568_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__65568_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__65573){
var vec__65574 = p__65573;
var k = cljs.core.nth.call(null,vec__65574,(0),null);
var v = cljs.core.nth.call(null,vec__65574,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__65575){
var vec__65576 = p__65575;
var k = cljs.core.nth.call(null,vec__65576,(0),null);
var v = cljs.core.nth.call(null,vec__65576,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__65580,p__65581){
var map__65828 = p__65580;
var map__65828__$1 = ((((!((map__65828 == null)))?((((map__65828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65828):map__65828);
var opts = map__65828__$1;
var before_jsload = cljs.core.get.call(null,map__65828__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__65828__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__65828__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__65829 = p__65581;
var map__65829__$1 = ((((!((map__65829 == null)))?((((map__65829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65829):map__65829);
var msg = map__65829__$1;
var files = cljs.core.get.call(null,map__65829__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__65829__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__65829__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto__,map__65828,map__65828__$1,opts,before_jsload,on_jsload,reload_dependents,map__65829,map__65829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto__,map__65828,map__65828__$1,opts,before_jsload,on_jsload,reload_dependents,map__65829,map__65829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_65982){
var state_val_65983 = (state_65982[(1)]);
if((state_val_65983 === (7))){
var inst_65843 = (state_65982[(7)]);
var inst_65846 = (state_65982[(8)]);
var inst_65845 = (state_65982[(9)]);
var inst_65844 = (state_65982[(10)]);
var inst_65851 = cljs.core._nth.call(null,inst_65844,inst_65846);
var inst_65852 = figwheel.client.file_reloading.eval_body.call(null,inst_65851,opts);
var inst_65853 = (inst_65846 + (1));
var tmp65984 = inst_65843;
var tmp65985 = inst_65845;
var tmp65986 = inst_65844;
var inst_65843__$1 = tmp65984;
var inst_65844__$1 = tmp65986;
var inst_65845__$1 = tmp65985;
var inst_65846__$1 = inst_65853;
var state_65982__$1 = (function (){var statearr_65987 = state_65982;
(statearr_65987[(7)] = inst_65843__$1);

(statearr_65987[(8)] = inst_65846__$1);

(statearr_65987[(9)] = inst_65845__$1);

(statearr_65987[(11)] = inst_65852);

(statearr_65987[(10)] = inst_65844__$1);

return statearr_65987;
})();
var statearr_65988_66074 = state_65982__$1;
(statearr_65988_66074[(2)] = null);

(statearr_65988_66074[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (20))){
var inst_65886 = (state_65982[(12)]);
var inst_65894 = figwheel.client.file_reloading.sort_files.call(null,inst_65886);
var state_65982__$1 = state_65982;
var statearr_65989_66075 = state_65982__$1;
(statearr_65989_66075[(2)] = inst_65894);

(statearr_65989_66075[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (27))){
var state_65982__$1 = state_65982;
var statearr_65990_66076 = state_65982__$1;
(statearr_65990_66076[(2)] = null);

(statearr_65990_66076[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (1))){
var inst_65835 = (state_65982[(13)]);
var inst_65832 = before_jsload.call(null,files);
var inst_65833 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_65834 = (function (){return ((function (inst_65835,inst_65832,inst_65833,state_val_65983,c__18924__auto__,map__65828,map__65828__$1,opts,before_jsload,on_jsload,reload_dependents,map__65829,map__65829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__65577_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__65577_SHARP_);
});
;})(inst_65835,inst_65832,inst_65833,state_val_65983,c__18924__auto__,map__65828,map__65828__$1,opts,before_jsload,on_jsload,reload_dependents,map__65829,map__65829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65835__$1 = cljs.core.filter.call(null,inst_65834,files);
var inst_65836 = cljs.core.not_empty.call(null,inst_65835__$1);
var state_65982__$1 = (function (){var statearr_65991 = state_65982;
(statearr_65991[(14)] = inst_65833);

(statearr_65991[(13)] = inst_65835__$1);

(statearr_65991[(15)] = inst_65832);

return statearr_65991;
})();
if(cljs.core.truth_(inst_65836)){
var statearr_65992_66077 = state_65982__$1;
(statearr_65992_66077[(1)] = (2));

} else {
var statearr_65993_66078 = state_65982__$1;
(statearr_65993_66078[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (24))){
var state_65982__$1 = state_65982;
var statearr_65994_66079 = state_65982__$1;
(statearr_65994_66079[(2)] = null);

(statearr_65994_66079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (39))){
var inst_65936 = (state_65982[(16)]);
var state_65982__$1 = state_65982;
var statearr_65995_66080 = state_65982__$1;
(statearr_65995_66080[(2)] = inst_65936);

(statearr_65995_66080[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (46))){
var inst_65977 = (state_65982[(2)]);
var state_65982__$1 = state_65982;
var statearr_65996_66081 = state_65982__$1;
(statearr_65996_66081[(2)] = inst_65977);

(statearr_65996_66081[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (4))){
var inst_65880 = (state_65982[(2)]);
var inst_65881 = cljs.core.List.EMPTY;
var inst_65882 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_65881);
var inst_65883 = (function (){return ((function (inst_65880,inst_65881,inst_65882,state_val_65983,c__18924__auto__,map__65828,map__65828__$1,opts,before_jsload,on_jsload,reload_dependents,map__65829,map__65829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__65578_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__65578_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__65578_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_65880,inst_65881,inst_65882,state_val_65983,c__18924__auto__,map__65828,map__65828__$1,opts,before_jsload,on_jsload,reload_dependents,map__65829,map__65829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65884 = cljs.core.filter.call(null,inst_65883,files);
var inst_65885 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_65886 = cljs.core.concat.call(null,inst_65884,inst_65885);
var state_65982__$1 = (function (){var statearr_65997 = state_65982;
(statearr_65997[(17)] = inst_65882);

(statearr_65997[(18)] = inst_65880);

(statearr_65997[(12)] = inst_65886);

return statearr_65997;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_65998_66082 = state_65982__$1;
(statearr_65998_66082[(1)] = (16));

} else {
var statearr_65999_66083 = state_65982__$1;
(statearr_65999_66083[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (15))){
var inst_65870 = (state_65982[(2)]);
var state_65982__$1 = state_65982;
var statearr_66000_66084 = state_65982__$1;
(statearr_66000_66084[(2)] = inst_65870);

(statearr_66000_66084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (21))){
var inst_65896 = (state_65982[(19)]);
var inst_65896__$1 = (state_65982[(2)]);
var inst_65897 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_65896__$1);
var state_65982__$1 = (function (){var statearr_66001 = state_65982;
(statearr_66001[(19)] = inst_65896__$1);

return statearr_66001;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65982__$1,(22),inst_65897);
} else {
if((state_val_65983 === (31))){
var inst_65980 = (state_65982[(2)]);
var state_65982__$1 = state_65982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65982__$1,inst_65980);
} else {
if((state_val_65983 === (32))){
var inst_65936 = (state_65982[(16)]);
var inst_65941 = inst_65936.cljs$lang$protocol_mask$partition0$;
var inst_65942 = (inst_65941 & (64));
var inst_65943 = inst_65936.cljs$core$ISeq$;
var inst_65944 = (inst_65942) || (inst_65943);
var state_65982__$1 = state_65982;
if(cljs.core.truth_(inst_65944)){
var statearr_66002_66085 = state_65982__$1;
(statearr_66002_66085[(1)] = (35));

} else {
var statearr_66003_66086 = state_65982__$1;
(statearr_66003_66086[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (40))){
var inst_65957 = (state_65982[(20)]);
var inst_65956 = (state_65982[(2)]);
var inst_65957__$1 = cljs.core.get.call(null,inst_65956,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_65958 = cljs.core.get.call(null,inst_65956,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_65959 = cljs.core.not_empty.call(null,inst_65957__$1);
var state_65982__$1 = (function (){var statearr_66004 = state_65982;
(statearr_66004[(20)] = inst_65957__$1);

(statearr_66004[(21)] = inst_65958);

return statearr_66004;
})();
if(cljs.core.truth_(inst_65959)){
var statearr_66005_66087 = state_65982__$1;
(statearr_66005_66087[(1)] = (41));

} else {
var statearr_66006_66088 = state_65982__$1;
(statearr_66006_66088[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (33))){
var state_65982__$1 = state_65982;
var statearr_66007_66089 = state_65982__$1;
(statearr_66007_66089[(2)] = false);

(statearr_66007_66089[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (13))){
var inst_65856 = (state_65982[(22)]);
var inst_65860 = cljs.core.chunk_first.call(null,inst_65856);
var inst_65861 = cljs.core.chunk_rest.call(null,inst_65856);
var inst_65862 = cljs.core.count.call(null,inst_65860);
var inst_65843 = inst_65861;
var inst_65844 = inst_65860;
var inst_65845 = inst_65862;
var inst_65846 = (0);
var state_65982__$1 = (function (){var statearr_66008 = state_65982;
(statearr_66008[(7)] = inst_65843);

(statearr_66008[(8)] = inst_65846);

(statearr_66008[(9)] = inst_65845);

(statearr_66008[(10)] = inst_65844);

return statearr_66008;
})();
var statearr_66009_66090 = state_65982__$1;
(statearr_66009_66090[(2)] = null);

(statearr_66009_66090[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (22))){
var inst_65904 = (state_65982[(23)]);
var inst_65896 = (state_65982[(19)]);
var inst_65899 = (state_65982[(24)]);
var inst_65900 = (state_65982[(25)]);
var inst_65899__$1 = (state_65982[(2)]);
var inst_65900__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_65899__$1);
var inst_65901 = (function (){var all_files = inst_65896;
var res_SINGLEQUOTE_ = inst_65899__$1;
var res = inst_65900__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_65904,inst_65896,inst_65899,inst_65900,inst_65899__$1,inst_65900__$1,state_val_65983,c__18924__auto__,map__65828,map__65828__$1,opts,before_jsload,on_jsload,reload_dependents,map__65829,map__65829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__65579_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__65579_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_65904,inst_65896,inst_65899,inst_65900,inst_65899__$1,inst_65900__$1,state_val_65983,c__18924__auto__,map__65828,map__65828__$1,opts,before_jsload,on_jsload,reload_dependents,map__65829,map__65829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65902 = cljs.core.filter.call(null,inst_65901,inst_65899__$1);
var inst_65903 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_65904__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_65903);
var inst_65905 = cljs.core.not_empty.call(null,inst_65904__$1);
var state_65982__$1 = (function (){var statearr_66010 = state_65982;
(statearr_66010[(23)] = inst_65904__$1);

(statearr_66010[(26)] = inst_65902);

(statearr_66010[(24)] = inst_65899__$1);

(statearr_66010[(25)] = inst_65900__$1);

return statearr_66010;
})();
if(cljs.core.truth_(inst_65905)){
var statearr_66011_66091 = state_65982__$1;
(statearr_66011_66091[(1)] = (23));

} else {
var statearr_66012_66092 = state_65982__$1;
(statearr_66012_66092[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (36))){
var state_65982__$1 = state_65982;
var statearr_66013_66093 = state_65982__$1;
(statearr_66013_66093[(2)] = false);

(statearr_66013_66093[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (41))){
var inst_65957 = (state_65982[(20)]);
var inst_65961 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_65962 = cljs.core.map.call(null,inst_65961,inst_65957);
var inst_65963 = cljs.core.pr_str.call(null,inst_65962);
var inst_65964 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_65963)].join('');
var inst_65965 = figwheel.client.utils.log.call(null,inst_65964);
var state_65982__$1 = state_65982;
var statearr_66014_66094 = state_65982__$1;
(statearr_66014_66094[(2)] = inst_65965);

(statearr_66014_66094[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (43))){
var inst_65958 = (state_65982[(21)]);
var inst_65968 = (state_65982[(2)]);
var inst_65969 = cljs.core.not_empty.call(null,inst_65958);
var state_65982__$1 = (function (){var statearr_66015 = state_65982;
(statearr_66015[(27)] = inst_65968);

return statearr_66015;
})();
if(cljs.core.truth_(inst_65969)){
var statearr_66016_66095 = state_65982__$1;
(statearr_66016_66095[(1)] = (44));

} else {
var statearr_66017_66096 = state_65982__$1;
(statearr_66017_66096[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (29))){
var inst_65904 = (state_65982[(23)]);
var inst_65896 = (state_65982[(19)]);
var inst_65936 = (state_65982[(16)]);
var inst_65902 = (state_65982[(26)]);
var inst_65899 = (state_65982[(24)]);
var inst_65900 = (state_65982[(25)]);
var inst_65932 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_65935 = (function (){var all_files = inst_65896;
var res_SINGLEQUOTE_ = inst_65899;
var res = inst_65900;
var files_not_loaded = inst_65902;
var dependencies_that_loaded = inst_65904;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65904,inst_65896,inst_65936,inst_65902,inst_65899,inst_65900,inst_65932,state_val_65983,c__18924__auto__,map__65828,map__65828__$1,opts,before_jsload,on_jsload,reload_dependents,map__65829,map__65829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__65934){
var map__66018 = p__65934;
var map__66018__$1 = ((((!((map__66018 == null)))?((((map__66018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66018):map__66018);
var namespace = cljs.core.get.call(null,map__66018__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65904,inst_65896,inst_65936,inst_65902,inst_65899,inst_65900,inst_65932,state_val_65983,c__18924__auto__,map__65828,map__65828__$1,opts,before_jsload,on_jsload,reload_dependents,map__65829,map__65829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65936__$1 = cljs.core.group_by.call(null,inst_65935,inst_65902);
var inst_65938 = (inst_65936__$1 == null);
var inst_65939 = cljs.core.not.call(null,inst_65938);
var state_65982__$1 = (function (){var statearr_66020 = state_65982;
(statearr_66020[(28)] = inst_65932);

(statearr_66020[(16)] = inst_65936__$1);

return statearr_66020;
})();
if(inst_65939){
var statearr_66021_66097 = state_65982__$1;
(statearr_66021_66097[(1)] = (32));

} else {
var statearr_66022_66098 = state_65982__$1;
(statearr_66022_66098[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (44))){
var inst_65958 = (state_65982[(21)]);
var inst_65971 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_65958);
var inst_65972 = cljs.core.pr_str.call(null,inst_65971);
var inst_65973 = [cljs.core.str("not required: "),cljs.core.str(inst_65972)].join('');
var inst_65974 = figwheel.client.utils.log.call(null,inst_65973);
var state_65982__$1 = state_65982;
var statearr_66023_66099 = state_65982__$1;
(statearr_66023_66099[(2)] = inst_65974);

(statearr_66023_66099[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (6))){
var inst_65877 = (state_65982[(2)]);
var state_65982__$1 = state_65982;
var statearr_66024_66100 = state_65982__$1;
(statearr_66024_66100[(2)] = inst_65877);

(statearr_66024_66100[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (28))){
var inst_65902 = (state_65982[(26)]);
var inst_65929 = (state_65982[(2)]);
var inst_65930 = cljs.core.not_empty.call(null,inst_65902);
var state_65982__$1 = (function (){var statearr_66025 = state_65982;
(statearr_66025[(29)] = inst_65929);

return statearr_66025;
})();
if(cljs.core.truth_(inst_65930)){
var statearr_66026_66101 = state_65982__$1;
(statearr_66026_66101[(1)] = (29));

} else {
var statearr_66027_66102 = state_65982__$1;
(statearr_66027_66102[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (25))){
var inst_65900 = (state_65982[(25)]);
var inst_65916 = (state_65982[(2)]);
var inst_65917 = cljs.core.not_empty.call(null,inst_65900);
var state_65982__$1 = (function (){var statearr_66028 = state_65982;
(statearr_66028[(30)] = inst_65916);

return statearr_66028;
})();
if(cljs.core.truth_(inst_65917)){
var statearr_66029_66103 = state_65982__$1;
(statearr_66029_66103[(1)] = (26));

} else {
var statearr_66030_66104 = state_65982__$1;
(statearr_66030_66104[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (34))){
var inst_65951 = (state_65982[(2)]);
var state_65982__$1 = state_65982;
if(cljs.core.truth_(inst_65951)){
var statearr_66031_66105 = state_65982__$1;
(statearr_66031_66105[(1)] = (38));

} else {
var statearr_66032_66106 = state_65982__$1;
(statearr_66032_66106[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (17))){
var state_65982__$1 = state_65982;
var statearr_66033_66107 = state_65982__$1;
(statearr_66033_66107[(2)] = recompile_dependents);

(statearr_66033_66107[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (3))){
var state_65982__$1 = state_65982;
var statearr_66034_66108 = state_65982__$1;
(statearr_66034_66108[(2)] = null);

(statearr_66034_66108[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (12))){
var inst_65873 = (state_65982[(2)]);
var state_65982__$1 = state_65982;
var statearr_66035_66109 = state_65982__$1;
(statearr_66035_66109[(2)] = inst_65873);

(statearr_66035_66109[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (2))){
var inst_65835 = (state_65982[(13)]);
var inst_65842 = cljs.core.seq.call(null,inst_65835);
var inst_65843 = inst_65842;
var inst_65844 = null;
var inst_65845 = (0);
var inst_65846 = (0);
var state_65982__$1 = (function (){var statearr_66036 = state_65982;
(statearr_66036[(7)] = inst_65843);

(statearr_66036[(8)] = inst_65846);

(statearr_66036[(9)] = inst_65845);

(statearr_66036[(10)] = inst_65844);

return statearr_66036;
})();
var statearr_66037_66110 = state_65982__$1;
(statearr_66037_66110[(2)] = null);

(statearr_66037_66110[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (23))){
var inst_65904 = (state_65982[(23)]);
var inst_65896 = (state_65982[(19)]);
var inst_65902 = (state_65982[(26)]);
var inst_65899 = (state_65982[(24)]);
var inst_65900 = (state_65982[(25)]);
var inst_65907 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_65909 = (function (){var all_files = inst_65896;
var res_SINGLEQUOTE_ = inst_65899;
var res = inst_65900;
var files_not_loaded = inst_65902;
var dependencies_that_loaded = inst_65904;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65904,inst_65896,inst_65902,inst_65899,inst_65900,inst_65907,state_val_65983,c__18924__auto__,map__65828,map__65828__$1,opts,before_jsload,on_jsload,reload_dependents,map__65829,map__65829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__65908){
var map__66038 = p__65908;
var map__66038__$1 = ((((!((map__66038 == null)))?((((map__66038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66038):map__66038);
var request_url = cljs.core.get.call(null,map__66038__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65904,inst_65896,inst_65902,inst_65899,inst_65900,inst_65907,state_val_65983,c__18924__auto__,map__65828,map__65828__$1,opts,before_jsload,on_jsload,reload_dependents,map__65829,map__65829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65910 = cljs.core.reverse.call(null,inst_65904);
var inst_65911 = cljs.core.map.call(null,inst_65909,inst_65910);
var inst_65912 = cljs.core.pr_str.call(null,inst_65911);
var inst_65913 = figwheel.client.utils.log.call(null,inst_65912);
var state_65982__$1 = (function (){var statearr_66040 = state_65982;
(statearr_66040[(31)] = inst_65907);

return statearr_66040;
})();
var statearr_66041_66111 = state_65982__$1;
(statearr_66041_66111[(2)] = inst_65913);

(statearr_66041_66111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (35))){
var state_65982__$1 = state_65982;
var statearr_66042_66112 = state_65982__$1;
(statearr_66042_66112[(2)] = true);

(statearr_66042_66112[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (19))){
var inst_65886 = (state_65982[(12)]);
var inst_65892 = figwheel.client.file_reloading.expand_files.call(null,inst_65886);
var state_65982__$1 = state_65982;
var statearr_66043_66113 = state_65982__$1;
(statearr_66043_66113[(2)] = inst_65892);

(statearr_66043_66113[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (11))){
var state_65982__$1 = state_65982;
var statearr_66044_66114 = state_65982__$1;
(statearr_66044_66114[(2)] = null);

(statearr_66044_66114[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (9))){
var inst_65875 = (state_65982[(2)]);
var state_65982__$1 = state_65982;
var statearr_66045_66115 = state_65982__$1;
(statearr_66045_66115[(2)] = inst_65875);

(statearr_66045_66115[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (5))){
var inst_65846 = (state_65982[(8)]);
var inst_65845 = (state_65982[(9)]);
var inst_65848 = (inst_65846 < inst_65845);
var inst_65849 = inst_65848;
var state_65982__$1 = state_65982;
if(cljs.core.truth_(inst_65849)){
var statearr_66046_66116 = state_65982__$1;
(statearr_66046_66116[(1)] = (7));

} else {
var statearr_66047_66117 = state_65982__$1;
(statearr_66047_66117[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (14))){
var inst_65856 = (state_65982[(22)]);
var inst_65865 = cljs.core.first.call(null,inst_65856);
var inst_65866 = figwheel.client.file_reloading.eval_body.call(null,inst_65865,opts);
var inst_65867 = cljs.core.next.call(null,inst_65856);
var inst_65843 = inst_65867;
var inst_65844 = null;
var inst_65845 = (0);
var inst_65846 = (0);
var state_65982__$1 = (function (){var statearr_66048 = state_65982;
(statearr_66048[(7)] = inst_65843);

(statearr_66048[(8)] = inst_65846);

(statearr_66048[(9)] = inst_65845);

(statearr_66048[(32)] = inst_65866);

(statearr_66048[(10)] = inst_65844);

return statearr_66048;
})();
var statearr_66049_66118 = state_65982__$1;
(statearr_66049_66118[(2)] = null);

(statearr_66049_66118[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (45))){
var state_65982__$1 = state_65982;
var statearr_66050_66119 = state_65982__$1;
(statearr_66050_66119[(2)] = null);

(statearr_66050_66119[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (26))){
var inst_65904 = (state_65982[(23)]);
var inst_65896 = (state_65982[(19)]);
var inst_65902 = (state_65982[(26)]);
var inst_65899 = (state_65982[(24)]);
var inst_65900 = (state_65982[(25)]);
var inst_65919 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_65921 = (function (){var all_files = inst_65896;
var res_SINGLEQUOTE_ = inst_65899;
var res = inst_65900;
var files_not_loaded = inst_65902;
var dependencies_that_loaded = inst_65904;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65904,inst_65896,inst_65902,inst_65899,inst_65900,inst_65919,state_val_65983,c__18924__auto__,map__65828,map__65828__$1,opts,before_jsload,on_jsload,reload_dependents,map__65829,map__65829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__65920){
var map__66051 = p__65920;
var map__66051__$1 = ((((!((map__66051 == null)))?((((map__66051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66051):map__66051);
var namespace = cljs.core.get.call(null,map__66051__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__66051__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65904,inst_65896,inst_65902,inst_65899,inst_65900,inst_65919,state_val_65983,c__18924__auto__,map__65828,map__65828__$1,opts,before_jsload,on_jsload,reload_dependents,map__65829,map__65829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65922 = cljs.core.map.call(null,inst_65921,inst_65900);
var inst_65923 = cljs.core.pr_str.call(null,inst_65922);
var inst_65924 = figwheel.client.utils.log.call(null,inst_65923);
var inst_65925 = (function (){var all_files = inst_65896;
var res_SINGLEQUOTE_ = inst_65899;
var res = inst_65900;
var files_not_loaded = inst_65902;
var dependencies_that_loaded = inst_65904;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65904,inst_65896,inst_65902,inst_65899,inst_65900,inst_65919,inst_65921,inst_65922,inst_65923,inst_65924,state_val_65983,c__18924__auto__,map__65828,map__65828__$1,opts,before_jsload,on_jsload,reload_dependents,map__65829,map__65829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65904,inst_65896,inst_65902,inst_65899,inst_65900,inst_65919,inst_65921,inst_65922,inst_65923,inst_65924,state_val_65983,c__18924__auto__,map__65828,map__65828__$1,opts,before_jsload,on_jsload,reload_dependents,map__65829,map__65829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65926 = setTimeout(inst_65925,(10));
var state_65982__$1 = (function (){var statearr_66053 = state_65982;
(statearr_66053[(33)] = inst_65924);

(statearr_66053[(34)] = inst_65919);

return statearr_66053;
})();
var statearr_66054_66120 = state_65982__$1;
(statearr_66054_66120[(2)] = inst_65926);

(statearr_66054_66120[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (16))){
var state_65982__$1 = state_65982;
var statearr_66055_66121 = state_65982__$1;
(statearr_66055_66121[(2)] = reload_dependents);

(statearr_66055_66121[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (38))){
var inst_65936 = (state_65982[(16)]);
var inst_65953 = cljs.core.apply.call(null,cljs.core.hash_map,inst_65936);
var state_65982__$1 = state_65982;
var statearr_66056_66122 = state_65982__$1;
(statearr_66056_66122[(2)] = inst_65953);

(statearr_66056_66122[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (30))){
var state_65982__$1 = state_65982;
var statearr_66057_66123 = state_65982__$1;
(statearr_66057_66123[(2)] = null);

(statearr_66057_66123[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (10))){
var inst_65856 = (state_65982[(22)]);
var inst_65858 = cljs.core.chunked_seq_QMARK_.call(null,inst_65856);
var state_65982__$1 = state_65982;
if(inst_65858){
var statearr_66058_66124 = state_65982__$1;
(statearr_66058_66124[(1)] = (13));

} else {
var statearr_66059_66125 = state_65982__$1;
(statearr_66059_66125[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (18))){
var inst_65890 = (state_65982[(2)]);
var state_65982__$1 = state_65982;
if(cljs.core.truth_(inst_65890)){
var statearr_66060_66126 = state_65982__$1;
(statearr_66060_66126[(1)] = (19));

} else {
var statearr_66061_66127 = state_65982__$1;
(statearr_66061_66127[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (42))){
var state_65982__$1 = state_65982;
var statearr_66062_66128 = state_65982__$1;
(statearr_66062_66128[(2)] = null);

(statearr_66062_66128[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (37))){
var inst_65948 = (state_65982[(2)]);
var state_65982__$1 = state_65982;
var statearr_66063_66129 = state_65982__$1;
(statearr_66063_66129[(2)] = inst_65948);

(statearr_66063_66129[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65983 === (8))){
var inst_65843 = (state_65982[(7)]);
var inst_65856 = (state_65982[(22)]);
var inst_65856__$1 = cljs.core.seq.call(null,inst_65843);
var state_65982__$1 = (function (){var statearr_66064 = state_65982;
(statearr_66064[(22)] = inst_65856__$1);

return statearr_66064;
})();
if(inst_65856__$1){
var statearr_66065_66130 = state_65982__$1;
(statearr_66065_66130[(1)] = (10));

} else {
var statearr_66066_66131 = state_65982__$1;
(statearr_66066_66131[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18924__auto__,map__65828,map__65828__$1,opts,before_jsload,on_jsload,reload_dependents,map__65829,map__65829__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18903__auto__,c__18924__auto__,map__65828,map__65828__$1,opts,before_jsload,on_jsload,reload_dependents,map__65829,map__65829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto____0 = (function (){
var statearr_66070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66070[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto__);

(statearr_66070[(1)] = (1));

return statearr_66070;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto____1 = (function (state_65982){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_65982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e66071){if((e66071 instanceof Object)){
var ex__18907__auto__ = e66071;
var statearr_66072_66132 = state_65982;
(statearr_66072_66132[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66133 = state_65982;
state_65982 = G__66133;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto__ = function(state_65982){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto____1.call(this,state_65982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto__,map__65828,map__65828__$1,opts,before_jsload,on_jsload,reload_dependents,map__65829,map__65829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18926__auto__ = (function (){var statearr_66073 = f__18925__auto__.call(null);
(statearr_66073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto__);

return statearr_66073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto__,map__65828,map__65828__$1,opts,before_jsload,on_jsload,reload_dependents,map__65829,map__65829__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18924__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__66136,link){
var map__66139 = p__66136;
var map__66139__$1 = ((((!((map__66139 == null)))?((((map__66139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66139):map__66139);
var file = cljs.core.get.call(null,map__66139__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__66139,map__66139__$1,file){
return (function (p1__66134_SHARP_,p2__66135_SHARP_){
if(cljs.core._EQ_.call(null,p1__66134_SHARP_,p2__66135_SHARP_)){
return p1__66134_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__66139,map__66139__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__66145){
var map__66146 = p__66145;
var map__66146__$1 = ((((!((map__66146 == null)))?((((map__66146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66146):map__66146);
var match_length = cljs.core.get.call(null,map__66146__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__66146__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__66141_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__66141_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args66148 = [];
var len__17884__auto___66151 = arguments.length;
var i__17885__auto___66152 = (0);
while(true){
if((i__17885__auto___66152 < len__17884__auto___66151)){
args66148.push((arguments[i__17885__auto___66152]));

var G__66153 = (i__17885__auto___66152 + (1));
i__17885__auto___66152 = G__66153;
continue;
} else {
}
break;
}

var G__66150 = args66148.length;
switch (G__66150) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66148.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__66155_SHARP_,p2__66156_SHARP_){
return cljs.core.assoc.call(null,p1__66155_SHARP_,cljs.core.get.call(null,p2__66156_SHARP_,key),p2__66156_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__66157){
var map__66160 = p__66157;
var map__66160__$1 = ((((!((map__66160 == null)))?((((map__66160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66160):map__66160);
var f_data = map__66160__$1;
var file = cljs.core.get.call(null,map__66160__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__66162,files_msg){
var map__66169 = p__66162;
var map__66169__$1 = ((((!((map__66169 == null)))?((((map__66169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66169):map__66169);
var opts = map__66169__$1;
var on_cssload = cljs.core.get.call(null,map__66169__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__66171_66175 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__66172_66176 = null;
var count__66173_66177 = (0);
var i__66174_66178 = (0);
while(true){
if((i__66174_66178 < count__66173_66177)){
var f_66179 = cljs.core._nth.call(null,chunk__66172_66176,i__66174_66178);
figwheel.client.file_reloading.reload_css_file.call(null,f_66179);

var G__66180 = seq__66171_66175;
var G__66181 = chunk__66172_66176;
var G__66182 = count__66173_66177;
var G__66183 = (i__66174_66178 + (1));
seq__66171_66175 = G__66180;
chunk__66172_66176 = G__66181;
count__66173_66177 = G__66182;
i__66174_66178 = G__66183;
continue;
} else {
var temp__4425__auto___66184 = cljs.core.seq.call(null,seq__66171_66175);
if(temp__4425__auto___66184){
var seq__66171_66185__$1 = temp__4425__auto___66184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66171_66185__$1)){
var c__17629__auto___66186 = cljs.core.chunk_first.call(null,seq__66171_66185__$1);
var G__66187 = cljs.core.chunk_rest.call(null,seq__66171_66185__$1);
var G__66188 = c__17629__auto___66186;
var G__66189 = cljs.core.count.call(null,c__17629__auto___66186);
var G__66190 = (0);
seq__66171_66175 = G__66187;
chunk__66172_66176 = G__66188;
count__66173_66177 = G__66189;
i__66174_66178 = G__66190;
continue;
} else {
var f_66191 = cljs.core.first.call(null,seq__66171_66185__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_66191);

var G__66192 = cljs.core.next.call(null,seq__66171_66185__$1);
var G__66193 = null;
var G__66194 = (0);
var G__66195 = (0);
seq__66171_66175 = G__66192;
chunk__66172_66176 = G__66193;
count__66173_66177 = G__66194;
i__66174_66178 = G__66195;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__66169,map__66169__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__66169,map__66169__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1453136835359