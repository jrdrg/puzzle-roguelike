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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__57749_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__57749_SHARP_));
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
var seq__57754 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__57755 = null;
var count__57756 = (0);
var i__57757 = (0);
while(true){
if((i__57757 < count__57756)){
var n = cljs.core._nth.call(null,chunk__57755,i__57757);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__57758 = seq__57754;
var G__57759 = chunk__57755;
var G__57760 = count__57756;
var G__57761 = (i__57757 + (1));
seq__57754 = G__57758;
chunk__57755 = G__57759;
count__57756 = G__57760;
i__57757 = G__57761;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__57754);
if(temp__4425__auto__){
var seq__57754__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57754__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__57754__$1);
var G__57762 = cljs.core.chunk_rest.call(null,seq__57754__$1);
var G__57763 = c__17629__auto__;
var G__57764 = cljs.core.count.call(null,c__17629__auto__);
var G__57765 = (0);
seq__57754 = G__57762;
chunk__57755 = G__57763;
count__57756 = G__57764;
i__57757 = G__57765;
continue;
} else {
var n = cljs.core.first.call(null,seq__57754__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__57766 = cljs.core.next.call(null,seq__57754__$1);
var G__57767 = null;
var G__57768 = (0);
var G__57769 = (0);
seq__57754 = G__57766;
chunk__57755 = G__57767;
count__57756 = G__57768;
i__57757 = G__57769;
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

var seq__57808_57815 = cljs.core.seq.call(null,deps);
var chunk__57809_57816 = null;
var count__57810_57817 = (0);
var i__57811_57818 = (0);
while(true){
if((i__57811_57818 < count__57810_57817)){
var dep_57819 = cljs.core._nth.call(null,chunk__57809_57816,i__57811_57818);
topo_sort_helper_STAR_.call(null,dep_57819,(depth + (1)),state);

var G__57820 = seq__57808_57815;
var G__57821 = chunk__57809_57816;
var G__57822 = count__57810_57817;
var G__57823 = (i__57811_57818 + (1));
seq__57808_57815 = G__57820;
chunk__57809_57816 = G__57821;
count__57810_57817 = G__57822;
i__57811_57818 = G__57823;
continue;
} else {
var temp__4425__auto___57824 = cljs.core.seq.call(null,seq__57808_57815);
if(temp__4425__auto___57824){
var seq__57808_57825__$1 = temp__4425__auto___57824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57808_57825__$1)){
var c__17629__auto___57826 = cljs.core.chunk_first.call(null,seq__57808_57825__$1);
var G__57827 = cljs.core.chunk_rest.call(null,seq__57808_57825__$1);
var G__57828 = c__17629__auto___57826;
var G__57829 = cljs.core.count.call(null,c__17629__auto___57826);
var G__57830 = (0);
seq__57808_57815 = G__57827;
chunk__57809_57816 = G__57828;
count__57810_57817 = G__57829;
i__57811_57818 = G__57830;
continue;
} else {
var dep_57831 = cljs.core.first.call(null,seq__57808_57825__$1);
topo_sort_helper_STAR_.call(null,dep_57831,(depth + (1)),state);

var G__57832 = cljs.core.next.call(null,seq__57808_57825__$1);
var G__57833 = null;
var G__57834 = (0);
var G__57835 = (0);
seq__57808_57815 = G__57832;
chunk__57809_57816 = G__57833;
count__57810_57817 = G__57834;
i__57811_57818 = G__57835;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__57812){
var vec__57814 = p__57812;
var x = cljs.core.nth.call(null,vec__57814,(0),null);
var xs = cljs.core.nthnext.call(null,vec__57814,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__57814,x,xs,get_deps__$1){
return (function (p1__57770_SHARP_){
return clojure.set.difference.call(null,p1__57770_SHARP_,x);
});})(vec__57814,x,xs,get_deps__$1))
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
var seq__57848 = cljs.core.seq.call(null,provides);
var chunk__57849 = null;
var count__57850 = (0);
var i__57851 = (0);
while(true){
if((i__57851 < count__57850)){
var prov = cljs.core._nth.call(null,chunk__57849,i__57851);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__57852_57860 = cljs.core.seq.call(null,requires);
var chunk__57853_57861 = null;
var count__57854_57862 = (0);
var i__57855_57863 = (0);
while(true){
if((i__57855_57863 < count__57854_57862)){
var req_57864 = cljs.core._nth.call(null,chunk__57853_57861,i__57855_57863);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57864,prov);

var G__57865 = seq__57852_57860;
var G__57866 = chunk__57853_57861;
var G__57867 = count__57854_57862;
var G__57868 = (i__57855_57863 + (1));
seq__57852_57860 = G__57865;
chunk__57853_57861 = G__57866;
count__57854_57862 = G__57867;
i__57855_57863 = G__57868;
continue;
} else {
var temp__4425__auto___57869 = cljs.core.seq.call(null,seq__57852_57860);
if(temp__4425__auto___57869){
var seq__57852_57870__$1 = temp__4425__auto___57869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57852_57870__$1)){
var c__17629__auto___57871 = cljs.core.chunk_first.call(null,seq__57852_57870__$1);
var G__57872 = cljs.core.chunk_rest.call(null,seq__57852_57870__$1);
var G__57873 = c__17629__auto___57871;
var G__57874 = cljs.core.count.call(null,c__17629__auto___57871);
var G__57875 = (0);
seq__57852_57860 = G__57872;
chunk__57853_57861 = G__57873;
count__57854_57862 = G__57874;
i__57855_57863 = G__57875;
continue;
} else {
var req_57876 = cljs.core.first.call(null,seq__57852_57870__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57876,prov);

var G__57877 = cljs.core.next.call(null,seq__57852_57870__$1);
var G__57878 = null;
var G__57879 = (0);
var G__57880 = (0);
seq__57852_57860 = G__57877;
chunk__57853_57861 = G__57878;
count__57854_57862 = G__57879;
i__57855_57863 = G__57880;
continue;
}
} else {
}
}
break;
}

var G__57881 = seq__57848;
var G__57882 = chunk__57849;
var G__57883 = count__57850;
var G__57884 = (i__57851 + (1));
seq__57848 = G__57881;
chunk__57849 = G__57882;
count__57850 = G__57883;
i__57851 = G__57884;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__57848);
if(temp__4425__auto__){
var seq__57848__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57848__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__57848__$1);
var G__57885 = cljs.core.chunk_rest.call(null,seq__57848__$1);
var G__57886 = c__17629__auto__;
var G__57887 = cljs.core.count.call(null,c__17629__auto__);
var G__57888 = (0);
seq__57848 = G__57885;
chunk__57849 = G__57886;
count__57850 = G__57887;
i__57851 = G__57888;
continue;
} else {
var prov = cljs.core.first.call(null,seq__57848__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__57856_57889 = cljs.core.seq.call(null,requires);
var chunk__57857_57890 = null;
var count__57858_57891 = (0);
var i__57859_57892 = (0);
while(true){
if((i__57859_57892 < count__57858_57891)){
var req_57893 = cljs.core._nth.call(null,chunk__57857_57890,i__57859_57892);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57893,prov);

var G__57894 = seq__57856_57889;
var G__57895 = chunk__57857_57890;
var G__57896 = count__57858_57891;
var G__57897 = (i__57859_57892 + (1));
seq__57856_57889 = G__57894;
chunk__57857_57890 = G__57895;
count__57858_57891 = G__57896;
i__57859_57892 = G__57897;
continue;
} else {
var temp__4425__auto___57898__$1 = cljs.core.seq.call(null,seq__57856_57889);
if(temp__4425__auto___57898__$1){
var seq__57856_57899__$1 = temp__4425__auto___57898__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57856_57899__$1)){
var c__17629__auto___57900 = cljs.core.chunk_first.call(null,seq__57856_57899__$1);
var G__57901 = cljs.core.chunk_rest.call(null,seq__57856_57899__$1);
var G__57902 = c__17629__auto___57900;
var G__57903 = cljs.core.count.call(null,c__17629__auto___57900);
var G__57904 = (0);
seq__57856_57889 = G__57901;
chunk__57857_57890 = G__57902;
count__57858_57891 = G__57903;
i__57859_57892 = G__57904;
continue;
} else {
var req_57905 = cljs.core.first.call(null,seq__57856_57899__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57905,prov);

var G__57906 = cljs.core.next.call(null,seq__57856_57899__$1);
var G__57907 = null;
var G__57908 = (0);
var G__57909 = (0);
seq__57856_57889 = G__57906;
chunk__57857_57890 = G__57907;
count__57858_57891 = G__57908;
i__57859_57892 = G__57909;
continue;
}
} else {
}
}
break;
}

var G__57910 = cljs.core.next.call(null,seq__57848__$1);
var G__57911 = null;
var G__57912 = (0);
var G__57913 = (0);
seq__57848 = G__57910;
chunk__57849 = G__57911;
count__57850 = G__57912;
i__57851 = G__57913;
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
var seq__57918_57922 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__57919_57923 = null;
var count__57920_57924 = (0);
var i__57921_57925 = (0);
while(true){
if((i__57921_57925 < count__57920_57924)){
var ns_57926 = cljs.core._nth.call(null,chunk__57919_57923,i__57921_57925);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_57926);

var G__57927 = seq__57918_57922;
var G__57928 = chunk__57919_57923;
var G__57929 = count__57920_57924;
var G__57930 = (i__57921_57925 + (1));
seq__57918_57922 = G__57927;
chunk__57919_57923 = G__57928;
count__57920_57924 = G__57929;
i__57921_57925 = G__57930;
continue;
} else {
var temp__4425__auto___57931 = cljs.core.seq.call(null,seq__57918_57922);
if(temp__4425__auto___57931){
var seq__57918_57932__$1 = temp__4425__auto___57931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57918_57932__$1)){
var c__17629__auto___57933 = cljs.core.chunk_first.call(null,seq__57918_57932__$1);
var G__57934 = cljs.core.chunk_rest.call(null,seq__57918_57932__$1);
var G__57935 = c__17629__auto___57933;
var G__57936 = cljs.core.count.call(null,c__17629__auto___57933);
var G__57937 = (0);
seq__57918_57922 = G__57934;
chunk__57919_57923 = G__57935;
count__57920_57924 = G__57936;
i__57921_57925 = G__57937;
continue;
} else {
var ns_57938 = cljs.core.first.call(null,seq__57918_57932__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_57938);

var G__57939 = cljs.core.next.call(null,seq__57918_57932__$1);
var G__57940 = null;
var G__57941 = (0);
var G__57942 = (0);
seq__57918_57922 = G__57939;
chunk__57919_57923 = G__57940;
count__57920_57924 = G__57941;
i__57921_57925 = G__57942;
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
var G__57943__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__57943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57944__i = 0, G__57944__a = new Array(arguments.length -  0);
while (G__57944__i < G__57944__a.length) {G__57944__a[G__57944__i] = arguments[G__57944__i + 0]; ++G__57944__i;}
  args = new cljs.core.IndexedSeq(G__57944__a,0);
} 
return G__57943__delegate.call(this,args);};
G__57943.cljs$lang$maxFixedArity = 0;
G__57943.cljs$lang$applyTo = (function (arglist__57945){
var args = cljs.core.seq(arglist__57945);
return G__57943__delegate(args);
});
G__57943.cljs$core$IFn$_invoke$arity$variadic = G__57943__delegate;
return G__57943;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__57947 = cljs.core._EQ_;
var expr__57948 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__57947.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__57948))){
var path_parts = ((function (pred__57947,expr__57948){
return (function (p1__57946_SHARP_){
return clojure.string.split.call(null,p1__57946_SHARP_,/[\/\\]/);
});})(pred__57947,expr__57948))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__57947,expr__57948){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e57950){if((e57950 instanceof Error)){
var e = e57950;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e57950;

}
}})());
});
;})(path_parts,sep,root,pred__57947,expr__57948))
} else {
if(cljs.core.truth_(pred__57947.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__57948))){
return ((function (pred__57947,expr__57948){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__57947,expr__57948){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__57947,expr__57948))
);

return deferred.addErrback(((function (deferred,pred__57947,expr__57948){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__57947,expr__57948))
);
});
;})(pred__57947,expr__57948))
} else {
return ((function (pred__57947,expr__57948){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__57947,expr__57948))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__57951,callback){
var map__57954 = p__57951;
var map__57954__$1 = ((((!((map__57954 == null)))?((((map__57954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57954):map__57954);
var file_msg = map__57954__$1;
var request_url = cljs.core.get.call(null,map__57954__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__57954,map__57954__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__57954,map__57954__$1,file_msg,request_url))
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
return (function (state_57978){
var state_val_57979 = (state_57978[(1)]);
if((state_val_57979 === (7))){
var inst_57974 = (state_57978[(2)]);
var state_57978__$1 = state_57978;
var statearr_57980_58000 = state_57978__$1;
(statearr_57980_58000[(2)] = inst_57974);

(statearr_57980_58000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57979 === (1))){
var state_57978__$1 = state_57978;
var statearr_57981_58001 = state_57978__$1;
(statearr_57981_58001[(2)] = null);

(statearr_57981_58001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57979 === (4))){
var inst_57958 = (state_57978[(7)]);
var inst_57958__$1 = (state_57978[(2)]);
var state_57978__$1 = (function (){var statearr_57982 = state_57978;
(statearr_57982[(7)] = inst_57958__$1);

return statearr_57982;
})();
if(cljs.core.truth_(inst_57958__$1)){
var statearr_57983_58002 = state_57978__$1;
(statearr_57983_58002[(1)] = (5));

} else {
var statearr_57984_58003 = state_57978__$1;
(statearr_57984_58003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57979 === (6))){
var state_57978__$1 = state_57978;
var statearr_57985_58004 = state_57978__$1;
(statearr_57985_58004[(2)] = null);

(statearr_57985_58004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57979 === (3))){
var inst_57976 = (state_57978[(2)]);
var state_57978__$1 = state_57978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57978__$1,inst_57976);
} else {
if((state_val_57979 === (2))){
var state_57978__$1 = state_57978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57978__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_57979 === (11))){
var inst_57970 = (state_57978[(2)]);
var state_57978__$1 = (function (){var statearr_57986 = state_57978;
(statearr_57986[(8)] = inst_57970);

return statearr_57986;
})();
var statearr_57987_58005 = state_57978__$1;
(statearr_57987_58005[(2)] = null);

(statearr_57987_58005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57979 === (9))){
var inst_57964 = (state_57978[(9)]);
var inst_57962 = (state_57978[(10)]);
var inst_57966 = inst_57964.call(null,inst_57962);
var state_57978__$1 = state_57978;
var statearr_57988_58006 = state_57978__$1;
(statearr_57988_58006[(2)] = inst_57966);

(statearr_57988_58006[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57979 === (5))){
var inst_57958 = (state_57978[(7)]);
var inst_57960 = figwheel.client.file_reloading.blocking_load.call(null,inst_57958);
var state_57978__$1 = state_57978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57978__$1,(8),inst_57960);
} else {
if((state_val_57979 === (10))){
var inst_57962 = (state_57978[(10)]);
var inst_57968 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_57962);
var state_57978__$1 = state_57978;
var statearr_57989_58007 = state_57978__$1;
(statearr_57989_58007[(2)] = inst_57968);

(statearr_57989_58007[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57979 === (8))){
var inst_57958 = (state_57978[(7)]);
var inst_57964 = (state_57978[(9)]);
var inst_57962 = (state_57978[(2)]);
var inst_57963 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_57964__$1 = cljs.core.get.call(null,inst_57963,inst_57958);
var state_57978__$1 = (function (){var statearr_57990 = state_57978;
(statearr_57990[(9)] = inst_57964__$1);

(statearr_57990[(10)] = inst_57962);

return statearr_57990;
})();
if(cljs.core.truth_(inst_57964__$1)){
var statearr_57991_58008 = state_57978__$1;
(statearr_57991_58008[(1)] = (9));

} else {
var statearr_57992_58009 = state_57978__$1;
(statearr_57992_58009[(1)] = (10));

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
var statearr_57996 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57996[(0)] = figwheel$client$file_reloading$state_machine__18904__auto__);

(statearr_57996[(1)] = (1));

return statearr_57996;
});
var figwheel$client$file_reloading$state_machine__18904__auto____1 = (function (state_57978){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_57978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e57997){if((e57997 instanceof Object)){
var ex__18907__auto__ = e57997;
var statearr_57998_58010 = state_57978;
(statearr_57998_58010[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58011 = state_57978;
state_57978 = G__58011;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18904__auto__ = function(state_57978){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18904__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18904__auto____1.call(this,state_57978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18904__auto____0;
figwheel$client$file_reloading$state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18904__auto____1;
return figwheel$client$file_reloading$state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto__))
})();
var state__18926__auto__ = (function (){var statearr_57999 = f__18925__auto__.call(null);
(statearr_57999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto__);

return statearr_57999;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__58012,callback){
var map__58015 = p__58012;
var map__58015__$1 = ((((!((map__58015 == null)))?((((map__58015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58015):map__58015);
var file_msg = map__58015__$1;
var namespace = cljs.core.get.call(null,map__58015__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__58015,map__58015__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__58015,map__58015__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__58017){
var map__58020 = p__58017;
var map__58020__$1 = ((((!((map__58020 == null)))?((((map__58020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58020):map__58020);
var file_msg = map__58020__$1;
var namespace = cljs.core.get.call(null,map__58020__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__58022,callback){
var map__58025 = p__58022;
var map__58025__$1 = ((((!((map__58025 == null)))?((((map__58025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58025):map__58025);
var file_msg = map__58025__$1;
var request_url = cljs.core.get.call(null,map__58025__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__58025__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__18924__auto___58113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___58113,out){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___58113,out){
return (function (state_58095){
var state_val_58096 = (state_58095[(1)]);
if((state_val_58096 === (1))){
var inst_58073 = cljs.core.nth.call(null,files,(0),null);
var inst_58074 = cljs.core.nthnext.call(null,files,(1));
var inst_58075 = files;
var state_58095__$1 = (function (){var statearr_58097 = state_58095;
(statearr_58097[(7)] = inst_58074);

(statearr_58097[(8)] = inst_58075);

(statearr_58097[(9)] = inst_58073);

return statearr_58097;
})();
var statearr_58098_58114 = state_58095__$1;
(statearr_58098_58114[(2)] = null);

(statearr_58098_58114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58096 === (2))){
var inst_58075 = (state_58095[(8)]);
var inst_58078 = (state_58095[(10)]);
var inst_58078__$1 = cljs.core.nth.call(null,inst_58075,(0),null);
var inst_58079 = cljs.core.nthnext.call(null,inst_58075,(1));
var inst_58080 = (inst_58078__$1 == null);
var inst_58081 = cljs.core.not.call(null,inst_58080);
var state_58095__$1 = (function (){var statearr_58099 = state_58095;
(statearr_58099[(10)] = inst_58078__$1);

(statearr_58099[(11)] = inst_58079);

return statearr_58099;
})();
if(inst_58081){
var statearr_58100_58115 = state_58095__$1;
(statearr_58100_58115[(1)] = (4));

} else {
var statearr_58101_58116 = state_58095__$1;
(statearr_58101_58116[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58096 === (3))){
var inst_58093 = (state_58095[(2)]);
var state_58095__$1 = state_58095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58095__$1,inst_58093);
} else {
if((state_val_58096 === (4))){
var inst_58078 = (state_58095[(10)]);
var inst_58083 = figwheel.client.file_reloading.reload_js_file.call(null,inst_58078);
var state_58095__$1 = state_58095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58095__$1,(7),inst_58083);
} else {
if((state_val_58096 === (5))){
var inst_58089 = cljs.core.async.close_BANG_.call(null,out);
var state_58095__$1 = state_58095;
var statearr_58102_58117 = state_58095__$1;
(statearr_58102_58117[(2)] = inst_58089);

(statearr_58102_58117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58096 === (6))){
var inst_58091 = (state_58095[(2)]);
var state_58095__$1 = state_58095;
var statearr_58103_58118 = state_58095__$1;
(statearr_58103_58118[(2)] = inst_58091);

(statearr_58103_58118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58096 === (7))){
var inst_58079 = (state_58095[(11)]);
var inst_58085 = (state_58095[(2)]);
var inst_58086 = cljs.core.async.put_BANG_.call(null,out,inst_58085);
var inst_58075 = inst_58079;
var state_58095__$1 = (function (){var statearr_58104 = state_58095;
(statearr_58104[(8)] = inst_58075);

(statearr_58104[(12)] = inst_58086);

return statearr_58104;
})();
var statearr_58105_58119 = state_58095__$1;
(statearr_58105_58119[(2)] = null);

(statearr_58105_58119[(1)] = (2));


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
});})(c__18924__auto___58113,out))
;
return ((function (switch__18903__auto__,c__18924__auto___58113,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto____0 = (function (){
var statearr_58109 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58109[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto__);

(statearr_58109[(1)] = (1));

return statearr_58109;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto____1 = (function (state_58095){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_58095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e58110){if((e58110 instanceof Object)){
var ex__18907__auto__ = e58110;
var statearr_58111_58120 = state_58095;
(statearr_58111_58120[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58121 = state_58095;
state_58095 = G__58121;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto__ = function(state_58095){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto____1.call(this,state_58095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___58113,out))
})();
var state__18926__auto__ = (function (){var statearr_58112 = f__18925__auto__.call(null);
(statearr_58112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___58113);

return statearr_58112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___58113,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__58122,opts){
var map__58126 = p__58122;
var map__58126__$1 = ((((!((map__58126 == null)))?((((map__58126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58126):map__58126);
var eval_body__$1 = cljs.core.get.call(null,map__58126__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__58126__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e58128){var e = e58128;
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
return (function (p1__58129_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__58129_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__58134){
var vec__58135 = p__58134;
var k = cljs.core.nth.call(null,vec__58135,(0),null);
var v = cljs.core.nth.call(null,vec__58135,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__58136){
var vec__58137 = p__58136;
var k = cljs.core.nth.call(null,vec__58137,(0),null);
var v = cljs.core.nth.call(null,vec__58137,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__58141,p__58142){
var map__58389 = p__58141;
var map__58389__$1 = ((((!((map__58389 == null)))?((((map__58389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58389):map__58389);
var opts = map__58389__$1;
var before_jsload = cljs.core.get.call(null,map__58389__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__58389__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__58389__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__58390 = p__58142;
var map__58390__$1 = ((((!((map__58390 == null)))?((((map__58390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58390):map__58390);
var msg = map__58390__$1;
var files = cljs.core.get.call(null,map__58390__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__58390__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__58390__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto__,map__58389,map__58389__$1,opts,before_jsload,on_jsload,reload_dependents,map__58390,map__58390__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto__,map__58389,map__58389__$1,opts,before_jsload,on_jsload,reload_dependents,map__58390,map__58390__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_58543){
var state_val_58544 = (state_58543[(1)]);
if((state_val_58544 === (7))){
var inst_58406 = (state_58543[(7)]);
var inst_58404 = (state_58543[(8)]);
var inst_58407 = (state_58543[(9)]);
var inst_58405 = (state_58543[(10)]);
var inst_58412 = cljs.core._nth.call(null,inst_58405,inst_58407);
var inst_58413 = figwheel.client.file_reloading.eval_body.call(null,inst_58412,opts);
var inst_58414 = (inst_58407 + (1));
var tmp58545 = inst_58406;
var tmp58546 = inst_58404;
var tmp58547 = inst_58405;
var inst_58404__$1 = tmp58546;
var inst_58405__$1 = tmp58547;
var inst_58406__$1 = tmp58545;
var inst_58407__$1 = inst_58414;
var state_58543__$1 = (function (){var statearr_58548 = state_58543;
(statearr_58548[(7)] = inst_58406__$1);

(statearr_58548[(8)] = inst_58404__$1);

(statearr_58548[(11)] = inst_58413);

(statearr_58548[(9)] = inst_58407__$1);

(statearr_58548[(10)] = inst_58405__$1);

return statearr_58548;
})();
var statearr_58549_58635 = state_58543__$1;
(statearr_58549_58635[(2)] = null);

(statearr_58549_58635[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (20))){
var inst_58447 = (state_58543[(12)]);
var inst_58455 = figwheel.client.file_reloading.sort_files.call(null,inst_58447);
var state_58543__$1 = state_58543;
var statearr_58550_58636 = state_58543__$1;
(statearr_58550_58636[(2)] = inst_58455);

(statearr_58550_58636[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (27))){
var state_58543__$1 = state_58543;
var statearr_58551_58637 = state_58543__$1;
(statearr_58551_58637[(2)] = null);

(statearr_58551_58637[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (1))){
var inst_58396 = (state_58543[(13)]);
var inst_58393 = before_jsload.call(null,files);
var inst_58394 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_58395 = (function (){return ((function (inst_58396,inst_58393,inst_58394,state_val_58544,c__18924__auto__,map__58389,map__58389__$1,opts,before_jsload,on_jsload,reload_dependents,map__58390,map__58390__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__58138_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__58138_SHARP_);
});
;})(inst_58396,inst_58393,inst_58394,state_val_58544,c__18924__auto__,map__58389,map__58389__$1,opts,before_jsload,on_jsload,reload_dependents,map__58390,map__58390__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58396__$1 = cljs.core.filter.call(null,inst_58395,files);
var inst_58397 = cljs.core.not_empty.call(null,inst_58396__$1);
var state_58543__$1 = (function (){var statearr_58552 = state_58543;
(statearr_58552[(14)] = inst_58394);

(statearr_58552[(13)] = inst_58396__$1);

(statearr_58552[(15)] = inst_58393);

return statearr_58552;
})();
if(cljs.core.truth_(inst_58397)){
var statearr_58553_58638 = state_58543__$1;
(statearr_58553_58638[(1)] = (2));

} else {
var statearr_58554_58639 = state_58543__$1;
(statearr_58554_58639[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (24))){
var state_58543__$1 = state_58543;
var statearr_58555_58640 = state_58543__$1;
(statearr_58555_58640[(2)] = null);

(statearr_58555_58640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (39))){
var inst_58497 = (state_58543[(16)]);
var state_58543__$1 = state_58543;
var statearr_58556_58641 = state_58543__$1;
(statearr_58556_58641[(2)] = inst_58497);

(statearr_58556_58641[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (46))){
var inst_58538 = (state_58543[(2)]);
var state_58543__$1 = state_58543;
var statearr_58557_58642 = state_58543__$1;
(statearr_58557_58642[(2)] = inst_58538);

(statearr_58557_58642[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (4))){
var inst_58441 = (state_58543[(2)]);
var inst_58442 = cljs.core.List.EMPTY;
var inst_58443 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_58442);
var inst_58444 = (function (){return ((function (inst_58441,inst_58442,inst_58443,state_val_58544,c__18924__auto__,map__58389,map__58389__$1,opts,before_jsload,on_jsload,reload_dependents,map__58390,map__58390__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__58139_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__58139_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__58139_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_58441,inst_58442,inst_58443,state_val_58544,c__18924__auto__,map__58389,map__58389__$1,opts,before_jsload,on_jsload,reload_dependents,map__58390,map__58390__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58445 = cljs.core.filter.call(null,inst_58444,files);
var inst_58446 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_58447 = cljs.core.concat.call(null,inst_58445,inst_58446);
var state_58543__$1 = (function (){var statearr_58558 = state_58543;
(statearr_58558[(17)] = inst_58441);

(statearr_58558[(12)] = inst_58447);

(statearr_58558[(18)] = inst_58443);

return statearr_58558;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_58559_58643 = state_58543__$1;
(statearr_58559_58643[(1)] = (16));

} else {
var statearr_58560_58644 = state_58543__$1;
(statearr_58560_58644[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (15))){
var inst_58431 = (state_58543[(2)]);
var state_58543__$1 = state_58543;
var statearr_58561_58645 = state_58543__$1;
(statearr_58561_58645[(2)] = inst_58431);

(statearr_58561_58645[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (21))){
var inst_58457 = (state_58543[(19)]);
var inst_58457__$1 = (state_58543[(2)]);
var inst_58458 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_58457__$1);
var state_58543__$1 = (function (){var statearr_58562 = state_58543;
(statearr_58562[(19)] = inst_58457__$1);

return statearr_58562;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58543__$1,(22),inst_58458);
} else {
if((state_val_58544 === (31))){
var inst_58541 = (state_58543[(2)]);
var state_58543__$1 = state_58543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58543__$1,inst_58541);
} else {
if((state_val_58544 === (32))){
var inst_58497 = (state_58543[(16)]);
var inst_58502 = inst_58497.cljs$lang$protocol_mask$partition0$;
var inst_58503 = (inst_58502 & (64));
var inst_58504 = inst_58497.cljs$core$ISeq$;
var inst_58505 = (inst_58503) || (inst_58504);
var state_58543__$1 = state_58543;
if(cljs.core.truth_(inst_58505)){
var statearr_58563_58646 = state_58543__$1;
(statearr_58563_58646[(1)] = (35));

} else {
var statearr_58564_58647 = state_58543__$1;
(statearr_58564_58647[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (40))){
var inst_58518 = (state_58543[(20)]);
var inst_58517 = (state_58543[(2)]);
var inst_58518__$1 = cljs.core.get.call(null,inst_58517,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_58519 = cljs.core.get.call(null,inst_58517,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_58520 = cljs.core.not_empty.call(null,inst_58518__$1);
var state_58543__$1 = (function (){var statearr_58565 = state_58543;
(statearr_58565[(21)] = inst_58519);

(statearr_58565[(20)] = inst_58518__$1);

return statearr_58565;
})();
if(cljs.core.truth_(inst_58520)){
var statearr_58566_58648 = state_58543__$1;
(statearr_58566_58648[(1)] = (41));

} else {
var statearr_58567_58649 = state_58543__$1;
(statearr_58567_58649[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (33))){
var state_58543__$1 = state_58543;
var statearr_58568_58650 = state_58543__$1;
(statearr_58568_58650[(2)] = false);

(statearr_58568_58650[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (13))){
var inst_58417 = (state_58543[(22)]);
var inst_58421 = cljs.core.chunk_first.call(null,inst_58417);
var inst_58422 = cljs.core.chunk_rest.call(null,inst_58417);
var inst_58423 = cljs.core.count.call(null,inst_58421);
var inst_58404 = inst_58422;
var inst_58405 = inst_58421;
var inst_58406 = inst_58423;
var inst_58407 = (0);
var state_58543__$1 = (function (){var statearr_58569 = state_58543;
(statearr_58569[(7)] = inst_58406);

(statearr_58569[(8)] = inst_58404);

(statearr_58569[(9)] = inst_58407);

(statearr_58569[(10)] = inst_58405);

return statearr_58569;
})();
var statearr_58570_58651 = state_58543__$1;
(statearr_58570_58651[(2)] = null);

(statearr_58570_58651[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (22))){
var inst_58461 = (state_58543[(23)]);
var inst_58460 = (state_58543[(24)]);
var inst_58465 = (state_58543[(25)]);
var inst_58457 = (state_58543[(19)]);
var inst_58460__$1 = (state_58543[(2)]);
var inst_58461__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_58460__$1);
var inst_58462 = (function (){var all_files = inst_58457;
var res_SINGLEQUOTE_ = inst_58460__$1;
var res = inst_58461__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_58461,inst_58460,inst_58465,inst_58457,inst_58460__$1,inst_58461__$1,state_val_58544,c__18924__auto__,map__58389,map__58389__$1,opts,before_jsload,on_jsload,reload_dependents,map__58390,map__58390__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__58140_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__58140_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_58461,inst_58460,inst_58465,inst_58457,inst_58460__$1,inst_58461__$1,state_val_58544,c__18924__auto__,map__58389,map__58389__$1,opts,before_jsload,on_jsload,reload_dependents,map__58390,map__58390__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58463 = cljs.core.filter.call(null,inst_58462,inst_58460__$1);
var inst_58464 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_58465__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_58464);
var inst_58466 = cljs.core.not_empty.call(null,inst_58465__$1);
var state_58543__$1 = (function (){var statearr_58571 = state_58543;
(statearr_58571[(23)] = inst_58461__$1);

(statearr_58571[(24)] = inst_58460__$1);

(statearr_58571[(25)] = inst_58465__$1);

(statearr_58571[(26)] = inst_58463);

return statearr_58571;
})();
if(cljs.core.truth_(inst_58466)){
var statearr_58572_58652 = state_58543__$1;
(statearr_58572_58652[(1)] = (23));

} else {
var statearr_58573_58653 = state_58543__$1;
(statearr_58573_58653[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (36))){
var state_58543__$1 = state_58543;
var statearr_58574_58654 = state_58543__$1;
(statearr_58574_58654[(2)] = false);

(statearr_58574_58654[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (41))){
var inst_58518 = (state_58543[(20)]);
var inst_58522 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_58523 = cljs.core.map.call(null,inst_58522,inst_58518);
var inst_58524 = cljs.core.pr_str.call(null,inst_58523);
var inst_58525 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_58524)].join('');
var inst_58526 = figwheel.client.utils.log.call(null,inst_58525);
var state_58543__$1 = state_58543;
var statearr_58575_58655 = state_58543__$1;
(statearr_58575_58655[(2)] = inst_58526);

(statearr_58575_58655[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (43))){
var inst_58519 = (state_58543[(21)]);
var inst_58529 = (state_58543[(2)]);
var inst_58530 = cljs.core.not_empty.call(null,inst_58519);
var state_58543__$1 = (function (){var statearr_58576 = state_58543;
(statearr_58576[(27)] = inst_58529);

return statearr_58576;
})();
if(cljs.core.truth_(inst_58530)){
var statearr_58577_58656 = state_58543__$1;
(statearr_58577_58656[(1)] = (44));

} else {
var statearr_58578_58657 = state_58543__$1;
(statearr_58578_58657[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (29))){
var inst_58461 = (state_58543[(23)]);
var inst_58460 = (state_58543[(24)]);
var inst_58465 = (state_58543[(25)]);
var inst_58463 = (state_58543[(26)]);
var inst_58497 = (state_58543[(16)]);
var inst_58457 = (state_58543[(19)]);
var inst_58493 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_58496 = (function (){var all_files = inst_58457;
var res_SINGLEQUOTE_ = inst_58460;
var res = inst_58461;
var files_not_loaded = inst_58463;
var dependencies_that_loaded = inst_58465;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58461,inst_58460,inst_58465,inst_58463,inst_58497,inst_58457,inst_58493,state_val_58544,c__18924__auto__,map__58389,map__58389__$1,opts,before_jsload,on_jsload,reload_dependents,map__58390,map__58390__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__58495){
var map__58579 = p__58495;
var map__58579__$1 = ((((!((map__58579 == null)))?((((map__58579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58579):map__58579);
var namespace = cljs.core.get.call(null,map__58579__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58461,inst_58460,inst_58465,inst_58463,inst_58497,inst_58457,inst_58493,state_val_58544,c__18924__auto__,map__58389,map__58389__$1,opts,before_jsload,on_jsload,reload_dependents,map__58390,map__58390__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58497__$1 = cljs.core.group_by.call(null,inst_58496,inst_58463);
var inst_58499 = (inst_58497__$1 == null);
var inst_58500 = cljs.core.not.call(null,inst_58499);
var state_58543__$1 = (function (){var statearr_58581 = state_58543;
(statearr_58581[(28)] = inst_58493);

(statearr_58581[(16)] = inst_58497__$1);

return statearr_58581;
})();
if(inst_58500){
var statearr_58582_58658 = state_58543__$1;
(statearr_58582_58658[(1)] = (32));

} else {
var statearr_58583_58659 = state_58543__$1;
(statearr_58583_58659[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (44))){
var inst_58519 = (state_58543[(21)]);
var inst_58532 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_58519);
var inst_58533 = cljs.core.pr_str.call(null,inst_58532);
var inst_58534 = [cljs.core.str("not required: "),cljs.core.str(inst_58533)].join('');
var inst_58535 = figwheel.client.utils.log.call(null,inst_58534);
var state_58543__$1 = state_58543;
var statearr_58584_58660 = state_58543__$1;
(statearr_58584_58660[(2)] = inst_58535);

(statearr_58584_58660[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (6))){
var inst_58438 = (state_58543[(2)]);
var state_58543__$1 = state_58543;
var statearr_58585_58661 = state_58543__$1;
(statearr_58585_58661[(2)] = inst_58438);

(statearr_58585_58661[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (28))){
var inst_58463 = (state_58543[(26)]);
var inst_58490 = (state_58543[(2)]);
var inst_58491 = cljs.core.not_empty.call(null,inst_58463);
var state_58543__$1 = (function (){var statearr_58586 = state_58543;
(statearr_58586[(29)] = inst_58490);

return statearr_58586;
})();
if(cljs.core.truth_(inst_58491)){
var statearr_58587_58662 = state_58543__$1;
(statearr_58587_58662[(1)] = (29));

} else {
var statearr_58588_58663 = state_58543__$1;
(statearr_58588_58663[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (25))){
var inst_58461 = (state_58543[(23)]);
var inst_58477 = (state_58543[(2)]);
var inst_58478 = cljs.core.not_empty.call(null,inst_58461);
var state_58543__$1 = (function (){var statearr_58589 = state_58543;
(statearr_58589[(30)] = inst_58477);

return statearr_58589;
})();
if(cljs.core.truth_(inst_58478)){
var statearr_58590_58664 = state_58543__$1;
(statearr_58590_58664[(1)] = (26));

} else {
var statearr_58591_58665 = state_58543__$1;
(statearr_58591_58665[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (34))){
var inst_58512 = (state_58543[(2)]);
var state_58543__$1 = state_58543;
if(cljs.core.truth_(inst_58512)){
var statearr_58592_58666 = state_58543__$1;
(statearr_58592_58666[(1)] = (38));

} else {
var statearr_58593_58667 = state_58543__$1;
(statearr_58593_58667[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (17))){
var state_58543__$1 = state_58543;
var statearr_58594_58668 = state_58543__$1;
(statearr_58594_58668[(2)] = recompile_dependents);

(statearr_58594_58668[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (3))){
var state_58543__$1 = state_58543;
var statearr_58595_58669 = state_58543__$1;
(statearr_58595_58669[(2)] = null);

(statearr_58595_58669[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (12))){
var inst_58434 = (state_58543[(2)]);
var state_58543__$1 = state_58543;
var statearr_58596_58670 = state_58543__$1;
(statearr_58596_58670[(2)] = inst_58434);

(statearr_58596_58670[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (2))){
var inst_58396 = (state_58543[(13)]);
var inst_58403 = cljs.core.seq.call(null,inst_58396);
var inst_58404 = inst_58403;
var inst_58405 = null;
var inst_58406 = (0);
var inst_58407 = (0);
var state_58543__$1 = (function (){var statearr_58597 = state_58543;
(statearr_58597[(7)] = inst_58406);

(statearr_58597[(8)] = inst_58404);

(statearr_58597[(9)] = inst_58407);

(statearr_58597[(10)] = inst_58405);

return statearr_58597;
})();
var statearr_58598_58671 = state_58543__$1;
(statearr_58598_58671[(2)] = null);

(statearr_58598_58671[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (23))){
var inst_58461 = (state_58543[(23)]);
var inst_58460 = (state_58543[(24)]);
var inst_58465 = (state_58543[(25)]);
var inst_58463 = (state_58543[(26)]);
var inst_58457 = (state_58543[(19)]);
var inst_58468 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_58470 = (function (){var all_files = inst_58457;
var res_SINGLEQUOTE_ = inst_58460;
var res = inst_58461;
var files_not_loaded = inst_58463;
var dependencies_that_loaded = inst_58465;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58461,inst_58460,inst_58465,inst_58463,inst_58457,inst_58468,state_val_58544,c__18924__auto__,map__58389,map__58389__$1,opts,before_jsload,on_jsload,reload_dependents,map__58390,map__58390__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__58469){
var map__58599 = p__58469;
var map__58599__$1 = ((((!((map__58599 == null)))?((((map__58599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58599):map__58599);
var request_url = cljs.core.get.call(null,map__58599__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58461,inst_58460,inst_58465,inst_58463,inst_58457,inst_58468,state_val_58544,c__18924__auto__,map__58389,map__58389__$1,opts,before_jsload,on_jsload,reload_dependents,map__58390,map__58390__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58471 = cljs.core.reverse.call(null,inst_58465);
var inst_58472 = cljs.core.map.call(null,inst_58470,inst_58471);
var inst_58473 = cljs.core.pr_str.call(null,inst_58472);
var inst_58474 = figwheel.client.utils.log.call(null,inst_58473);
var state_58543__$1 = (function (){var statearr_58601 = state_58543;
(statearr_58601[(31)] = inst_58468);

return statearr_58601;
})();
var statearr_58602_58672 = state_58543__$1;
(statearr_58602_58672[(2)] = inst_58474);

(statearr_58602_58672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (35))){
var state_58543__$1 = state_58543;
var statearr_58603_58673 = state_58543__$1;
(statearr_58603_58673[(2)] = true);

(statearr_58603_58673[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (19))){
var inst_58447 = (state_58543[(12)]);
var inst_58453 = figwheel.client.file_reloading.expand_files.call(null,inst_58447);
var state_58543__$1 = state_58543;
var statearr_58604_58674 = state_58543__$1;
(statearr_58604_58674[(2)] = inst_58453);

(statearr_58604_58674[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (11))){
var state_58543__$1 = state_58543;
var statearr_58605_58675 = state_58543__$1;
(statearr_58605_58675[(2)] = null);

(statearr_58605_58675[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (9))){
var inst_58436 = (state_58543[(2)]);
var state_58543__$1 = state_58543;
var statearr_58606_58676 = state_58543__$1;
(statearr_58606_58676[(2)] = inst_58436);

(statearr_58606_58676[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (5))){
var inst_58406 = (state_58543[(7)]);
var inst_58407 = (state_58543[(9)]);
var inst_58409 = (inst_58407 < inst_58406);
var inst_58410 = inst_58409;
var state_58543__$1 = state_58543;
if(cljs.core.truth_(inst_58410)){
var statearr_58607_58677 = state_58543__$1;
(statearr_58607_58677[(1)] = (7));

} else {
var statearr_58608_58678 = state_58543__$1;
(statearr_58608_58678[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (14))){
var inst_58417 = (state_58543[(22)]);
var inst_58426 = cljs.core.first.call(null,inst_58417);
var inst_58427 = figwheel.client.file_reloading.eval_body.call(null,inst_58426,opts);
var inst_58428 = cljs.core.next.call(null,inst_58417);
var inst_58404 = inst_58428;
var inst_58405 = null;
var inst_58406 = (0);
var inst_58407 = (0);
var state_58543__$1 = (function (){var statearr_58609 = state_58543;
(statearr_58609[(7)] = inst_58406);

(statearr_58609[(8)] = inst_58404);

(statearr_58609[(32)] = inst_58427);

(statearr_58609[(9)] = inst_58407);

(statearr_58609[(10)] = inst_58405);

return statearr_58609;
})();
var statearr_58610_58679 = state_58543__$1;
(statearr_58610_58679[(2)] = null);

(statearr_58610_58679[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (45))){
var state_58543__$1 = state_58543;
var statearr_58611_58680 = state_58543__$1;
(statearr_58611_58680[(2)] = null);

(statearr_58611_58680[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (26))){
var inst_58461 = (state_58543[(23)]);
var inst_58460 = (state_58543[(24)]);
var inst_58465 = (state_58543[(25)]);
var inst_58463 = (state_58543[(26)]);
var inst_58457 = (state_58543[(19)]);
var inst_58480 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_58482 = (function (){var all_files = inst_58457;
var res_SINGLEQUOTE_ = inst_58460;
var res = inst_58461;
var files_not_loaded = inst_58463;
var dependencies_that_loaded = inst_58465;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58461,inst_58460,inst_58465,inst_58463,inst_58457,inst_58480,state_val_58544,c__18924__auto__,map__58389,map__58389__$1,opts,before_jsload,on_jsload,reload_dependents,map__58390,map__58390__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__58481){
var map__58612 = p__58481;
var map__58612__$1 = ((((!((map__58612 == null)))?((((map__58612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58612):map__58612);
var namespace = cljs.core.get.call(null,map__58612__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__58612__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58461,inst_58460,inst_58465,inst_58463,inst_58457,inst_58480,state_val_58544,c__18924__auto__,map__58389,map__58389__$1,opts,before_jsload,on_jsload,reload_dependents,map__58390,map__58390__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58483 = cljs.core.map.call(null,inst_58482,inst_58461);
var inst_58484 = cljs.core.pr_str.call(null,inst_58483);
var inst_58485 = figwheel.client.utils.log.call(null,inst_58484);
var inst_58486 = (function (){var all_files = inst_58457;
var res_SINGLEQUOTE_ = inst_58460;
var res = inst_58461;
var files_not_loaded = inst_58463;
var dependencies_that_loaded = inst_58465;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58461,inst_58460,inst_58465,inst_58463,inst_58457,inst_58480,inst_58482,inst_58483,inst_58484,inst_58485,state_val_58544,c__18924__auto__,map__58389,map__58389__$1,opts,before_jsload,on_jsload,reload_dependents,map__58390,map__58390__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58461,inst_58460,inst_58465,inst_58463,inst_58457,inst_58480,inst_58482,inst_58483,inst_58484,inst_58485,state_val_58544,c__18924__auto__,map__58389,map__58389__$1,opts,before_jsload,on_jsload,reload_dependents,map__58390,map__58390__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58487 = setTimeout(inst_58486,(10));
var state_58543__$1 = (function (){var statearr_58614 = state_58543;
(statearr_58614[(33)] = inst_58480);

(statearr_58614[(34)] = inst_58485);

return statearr_58614;
})();
var statearr_58615_58681 = state_58543__$1;
(statearr_58615_58681[(2)] = inst_58487);

(statearr_58615_58681[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (16))){
var state_58543__$1 = state_58543;
var statearr_58616_58682 = state_58543__$1;
(statearr_58616_58682[(2)] = reload_dependents);

(statearr_58616_58682[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (38))){
var inst_58497 = (state_58543[(16)]);
var inst_58514 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58497);
var state_58543__$1 = state_58543;
var statearr_58617_58683 = state_58543__$1;
(statearr_58617_58683[(2)] = inst_58514);

(statearr_58617_58683[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (30))){
var state_58543__$1 = state_58543;
var statearr_58618_58684 = state_58543__$1;
(statearr_58618_58684[(2)] = null);

(statearr_58618_58684[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (10))){
var inst_58417 = (state_58543[(22)]);
var inst_58419 = cljs.core.chunked_seq_QMARK_.call(null,inst_58417);
var state_58543__$1 = state_58543;
if(inst_58419){
var statearr_58619_58685 = state_58543__$1;
(statearr_58619_58685[(1)] = (13));

} else {
var statearr_58620_58686 = state_58543__$1;
(statearr_58620_58686[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (18))){
var inst_58451 = (state_58543[(2)]);
var state_58543__$1 = state_58543;
if(cljs.core.truth_(inst_58451)){
var statearr_58621_58687 = state_58543__$1;
(statearr_58621_58687[(1)] = (19));

} else {
var statearr_58622_58688 = state_58543__$1;
(statearr_58622_58688[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (42))){
var state_58543__$1 = state_58543;
var statearr_58623_58689 = state_58543__$1;
(statearr_58623_58689[(2)] = null);

(statearr_58623_58689[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (37))){
var inst_58509 = (state_58543[(2)]);
var state_58543__$1 = state_58543;
var statearr_58624_58690 = state_58543__$1;
(statearr_58624_58690[(2)] = inst_58509);

(statearr_58624_58690[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58544 === (8))){
var inst_58404 = (state_58543[(8)]);
var inst_58417 = (state_58543[(22)]);
var inst_58417__$1 = cljs.core.seq.call(null,inst_58404);
var state_58543__$1 = (function (){var statearr_58625 = state_58543;
(statearr_58625[(22)] = inst_58417__$1);

return statearr_58625;
})();
if(inst_58417__$1){
var statearr_58626_58691 = state_58543__$1;
(statearr_58626_58691[(1)] = (10));

} else {
var statearr_58627_58692 = state_58543__$1;
(statearr_58627_58692[(1)] = (11));

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
});})(c__18924__auto__,map__58389,map__58389__$1,opts,before_jsload,on_jsload,reload_dependents,map__58390,map__58390__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18903__auto__,c__18924__auto__,map__58389,map__58389__$1,opts,before_jsload,on_jsload,reload_dependents,map__58390,map__58390__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto____0 = (function (){
var statearr_58631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58631[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto__);

(statearr_58631[(1)] = (1));

return statearr_58631;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto____1 = (function (state_58543){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_58543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e58632){if((e58632 instanceof Object)){
var ex__18907__auto__ = e58632;
var statearr_58633_58693 = state_58543;
(statearr_58633_58693[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58694 = state_58543;
state_58543 = G__58694;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto__ = function(state_58543){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto____1.call(this,state_58543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto__,map__58389,map__58389__$1,opts,before_jsload,on_jsload,reload_dependents,map__58390,map__58390__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18926__auto__ = (function (){var statearr_58634 = f__18925__auto__.call(null);
(statearr_58634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto__);

return statearr_58634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto__,map__58389,map__58389__$1,opts,before_jsload,on_jsload,reload_dependents,map__58390,map__58390__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18924__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__58697,link){
var map__58700 = p__58697;
var map__58700__$1 = ((((!((map__58700 == null)))?((((map__58700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58700):map__58700);
var file = cljs.core.get.call(null,map__58700__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__58700,map__58700__$1,file){
return (function (p1__58695_SHARP_,p2__58696_SHARP_){
if(cljs.core._EQ_.call(null,p1__58695_SHARP_,p2__58696_SHARP_)){
return p1__58695_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__58700,map__58700__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__58706){
var map__58707 = p__58706;
var map__58707__$1 = ((((!((map__58707 == null)))?((((map__58707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58707):map__58707);
var match_length = cljs.core.get.call(null,map__58707__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__58707__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__58702_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__58702_SHARP_);
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
var args58709 = [];
var len__17884__auto___58712 = arguments.length;
var i__17885__auto___58713 = (0);
while(true){
if((i__17885__auto___58713 < len__17884__auto___58712)){
args58709.push((arguments[i__17885__auto___58713]));

var G__58714 = (i__17885__auto___58713 + (1));
i__17885__auto___58713 = G__58714;
continue;
} else {
}
break;
}

var G__58711 = args58709.length;
switch (G__58711) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58709.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__58716_SHARP_,p2__58717_SHARP_){
return cljs.core.assoc.call(null,p1__58716_SHARP_,cljs.core.get.call(null,p2__58717_SHARP_,key),p2__58717_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__58718){
var map__58721 = p__58718;
var map__58721__$1 = ((((!((map__58721 == null)))?((((map__58721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58721):map__58721);
var f_data = map__58721__$1;
var file = cljs.core.get.call(null,map__58721__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__58723,files_msg){
var map__58730 = p__58723;
var map__58730__$1 = ((((!((map__58730 == null)))?((((map__58730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58730):map__58730);
var opts = map__58730__$1;
var on_cssload = cljs.core.get.call(null,map__58730__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__58732_58736 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__58733_58737 = null;
var count__58734_58738 = (0);
var i__58735_58739 = (0);
while(true){
if((i__58735_58739 < count__58734_58738)){
var f_58740 = cljs.core._nth.call(null,chunk__58733_58737,i__58735_58739);
figwheel.client.file_reloading.reload_css_file.call(null,f_58740);

var G__58741 = seq__58732_58736;
var G__58742 = chunk__58733_58737;
var G__58743 = count__58734_58738;
var G__58744 = (i__58735_58739 + (1));
seq__58732_58736 = G__58741;
chunk__58733_58737 = G__58742;
count__58734_58738 = G__58743;
i__58735_58739 = G__58744;
continue;
} else {
var temp__4425__auto___58745 = cljs.core.seq.call(null,seq__58732_58736);
if(temp__4425__auto___58745){
var seq__58732_58746__$1 = temp__4425__auto___58745;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58732_58746__$1)){
var c__17629__auto___58747 = cljs.core.chunk_first.call(null,seq__58732_58746__$1);
var G__58748 = cljs.core.chunk_rest.call(null,seq__58732_58746__$1);
var G__58749 = c__17629__auto___58747;
var G__58750 = cljs.core.count.call(null,c__17629__auto___58747);
var G__58751 = (0);
seq__58732_58736 = G__58748;
chunk__58733_58737 = G__58749;
count__58734_58738 = G__58750;
i__58735_58739 = G__58751;
continue;
} else {
var f_58752 = cljs.core.first.call(null,seq__58732_58746__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_58752);

var G__58753 = cljs.core.next.call(null,seq__58732_58746__$1);
var G__58754 = null;
var G__58755 = (0);
var G__58756 = (0);
seq__58732_58736 = G__58753;
chunk__58733_58737 = G__58754;
count__58734_58738 = G__58755;
i__58735_58739 = G__58756;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__58730,map__58730__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__58730,map__58730__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1453728832494