// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__58944 = cljs.core._EQ_;
var expr__58945 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__58944.call(null,"true",expr__58945))){
return true;
} else {
if(cljs.core.truth_(pred__58944.call(null,"false",expr__58945))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__58945)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58947__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__58947 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58948__i = 0, G__58948__a = new Array(arguments.length -  0);
while (G__58948__i < G__58948__a.length) {G__58948__a[G__58948__i] = arguments[G__58948__i + 0]; ++G__58948__i;}
  args = new cljs.core.IndexedSeq(G__58948__a,0);
} 
return G__58947__delegate.call(this,args);};
G__58947.cljs$lang$maxFixedArity = 0;
G__58947.cljs$lang$applyTo = (function (arglist__58949){
var args = cljs.core.seq(arglist__58949);
return G__58947__delegate(args);
});
G__58947.cljs$core$IFn$_invoke$arity$variadic = G__58947__delegate;
return G__58947;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__58950){
var map__58953 = p__58950;
var map__58953__$1 = ((((!((map__58953 == null)))?((((map__58953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58953):map__58953);
var message = cljs.core.get.call(null,map__58953__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__58953__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16826__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16814__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16814__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16814__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18924__auto___59115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___59115,ch){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___59115,ch){
return (function (state_59084){
var state_val_59085 = (state_59084[(1)]);
if((state_val_59085 === (7))){
var inst_59080 = (state_59084[(2)]);
var state_59084__$1 = state_59084;
var statearr_59086_59116 = state_59084__$1;
(statearr_59086_59116[(2)] = inst_59080);

(statearr_59086_59116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59085 === (1))){
var state_59084__$1 = state_59084;
var statearr_59087_59117 = state_59084__$1;
(statearr_59087_59117[(2)] = null);

(statearr_59087_59117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59085 === (4))){
var inst_59037 = (state_59084[(7)]);
var inst_59037__$1 = (state_59084[(2)]);
var state_59084__$1 = (function (){var statearr_59088 = state_59084;
(statearr_59088[(7)] = inst_59037__$1);

return statearr_59088;
})();
if(cljs.core.truth_(inst_59037__$1)){
var statearr_59089_59118 = state_59084__$1;
(statearr_59089_59118[(1)] = (5));

} else {
var statearr_59090_59119 = state_59084__$1;
(statearr_59090_59119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59085 === (15))){
var inst_59044 = (state_59084[(8)]);
var inst_59059 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_59044);
var inst_59060 = cljs.core.first.call(null,inst_59059);
var inst_59061 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_59060);
var inst_59062 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_59061)].join('');
var inst_59063 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_59062);
var state_59084__$1 = state_59084;
var statearr_59091_59120 = state_59084__$1;
(statearr_59091_59120[(2)] = inst_59063);

(statearr_59091_59120[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59085 === (13))){
var inst_59068 = (state_59084[(2)]);
var state_59084__$1 = state_59084;
var statearr_59092_59121 = state_59084__$1;
(statearr_59092_59121[(2)] = inst_59068);

(statearr_59092_59121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59085 === (6))){
var state_59084__$1 = state_59084;
var statearr_59093_59122 = state_59084__$1;
(statearr_59093_59122[(2)] = null);

(statearr_59093_59122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59085 === (17))){
var inst_59066 = (state_59084[(2)]);
var state_59084__$1 = state_59084;
var statearr_59094_59123 = state_59084__$1;
(statearr_59094_59123[(2)] = inst_59066);

(statearr_59094_59123[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59085 === (3))){
var inst_59082 = (state_59084[(2)]);
var state_59084__$1 = state_59084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59084__$1,inst_59082);
} else {
if((state_val_59085 === (12))){
var inst_59043 = (state_59084[(9)]);
var inst_59057 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_59043,opts);
var state_59084__$1 = state_59084;
if(cljs.core.truth_(inst_59057)){
var statearr_59095_59124 = state_59084__$1;
(statearr_59095_59124[(1)] = (15));

} else {
var statearr_59096_59125 = state_59084__$1;
(statearr_59096_59125[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59085 === (2))){
var state_59084__$1 = state_59084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59084__$1,(4),ch);
} else {
if((state_val_59085 === (11))){
var inst_59044 = (state_59084[(8)]);
var inst_59049 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59050 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_59044);
var inst_59051 = cljs.core.async.timeout.call(null,(1000));
var inst_59052 = [inst_59050,inst_59051];
var inst_59053 = (new cljs.core.PersistentVector(null,2,(5),inst_59049,inst_59052,null));
var state_59084__$1 = state_59084;
return cljs.core.async.ioc_alts_BANG_.call(null,state_59084__$1,(14),inst_59053);
} else {
if((state_val_59085 === (9))){
var inst_59044 = (state_59084[(8)]);
var inst_59070 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_59071 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_59044);
var inst_59072 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_59071);
var inst_59073 = [cljs.core.str("Not loading: "),cljs.core.str(inst_59072)].join('');
var inst_59074 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_59073);
var state_59084__$1 = (function (){var statearr_59097 = state_59084;
(statearr_59097[(10)] = inst_59070);

return statearr_59097;
})();
var statearr_59098_59126 = state_59084__$1;
(statearr_59098_59126[(2)] = inst_59074);

(statearr_59098_59126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59085 === (5))){
var inst_59037 = (state_59084[(7)]);
var inst_59039 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_59040 = (new cljs.core.PersistentArrayMap(null,2,inst_59039,null));
var inst_59041 = (new cljs.core.PersistentHashSet(null,inst_59040,null));
var inst_59042 = figwheel.client.focus_msgs.call(null,inst_59041,inst_59037);
var inst_59043 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_59042);
var inst_59044 = cljs.core.first.call(null,inst_59042);
var inst_59045 = figwheel.client.autoload_QMARK_.call(null);
var state_59084__$1 = (function (){var statearr_59099 = state_59084;
(statearr_59099[(9)] = inst_59043);

(statearr_59099[(8)] = inst_59044);

return statearr_59099;
})();
if(cljs.core.truth_(inst_59045)){
var statearr_59100_59127 = state_59084__$1;
(statearr_59100_59127[(1)] = (8));

} else {
var statearr_59101_59128 = state_59084__$1;
(statearr_59101_59128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59085 === (14))){
var inst_59055 = (state_59084[(2)]);
var state_59084__$1 = state_59084;
var statearr_59102_59129 = state_59084__$1;
(statearr_59102_59129[(2)] = inst_59055);

(statearr_59102_59129[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59085 === (16))){
var state_59084__$1 = state_59084;
var statearr_59103_59130 = state_59084__$1;
(statearr_59103_59130[(2)] = null);

(statearr_59103_59130[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59085 === (10))){
var inst_59076 = (state_59084[(2)]);
var state_59084__$1 = (function (){var statearr_59104 = state_59084;
(statearr_59104[(11)] = inst_59076);

return statearr_59104;
})();
var statearr_59105_59131 = state_59084__$1;
(statearr_59105_59131[(2)] = null);

(statearr_59105_59131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59085 === (8))){
var inst_59043 = (state_59084[(9)]);
var inst_59047 = figwheel.client.reload_file_state_QMARK_.call(null,inst_59043,opts);
var state_59084__$1 = state_59084;
if(cljs.core.truth_(inst_59047)){
var statearr_59106_59132 = state_59084__$1;
(statearr_59106_59132[(1)] = (11));

} else {
var statearr_59107_59133 = state_59084__$1;
(statearr_59107_59133[(1)] = (12));

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
});})(c__18924__auto___59115,ch))
;
return ((function (switch__18903__auto__,c__18924__auto___59115,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18904__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18904__auto____0 = (function (){
var statearr_59111 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59111[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18904__auto__);

(statearr_59111[(1)] = (1));

return statearr_59111;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18904__auto____1 = (function (state_59084){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_59084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e59112){if((e59112 instanceof Object)){
var ex__18907__auto__ = e59112;
var statearr_59113_59134 = state_59084;
(statearr_59113_59134[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59135 = state_59084;
state_59084 = G__59135;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18904__auto__ = function(state_59084){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18904__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18904__auto____1.call(this,state_59084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18904__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18904__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___59115,ch))
})();
var state__18926__auto__ = (function (){var statearr_59114 = f__18925__auto__.call(null);
(statearr_59114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___59115);

return statearr_59114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___59115,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__59136_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__59136_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_59143 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_59143){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_59141 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_59142 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_59141,_STAR_print_newline_STAR_59142,base_path_59143){
return (function() { 
var G__59144__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__59144 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59145__i = 0, G__59145__a = new Array(arguments.length -  0);
while (G__59145__i < G__59145__a.length) {G__59145__a[G__59145__i] = arguments[G__59145__i + 0]; ++G__59145__i;}
  args = new cljs.core.IndexedSeq(G__59145__a,0);
} 
return G__59144__delegate.call(this,args);};
G__59144.cljs$lang$maxFixedArity = 0;
G__59144.cljs$lang$applyTo = (function (arglist__59146){
var args = cljs.core.seq(arglist__59146);
return G__59144__delegate(args);
});
G__59144.cljs$core$IFn$_invoke$arity$variadic = G__59144__delegate;
return G__59144;
})()
;})(_STAR_print_fn_STAR_59141,_STAR_print_newline_STAR_59142,base_path_59143))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_59142;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_59141;
}}catch (e59140){if((e59140 instanceof Error)){
var e = e59140;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_59143], null));
} else {
var e = e59140;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_59143))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__59147){
var map__59154 = p__59147;
var map__59154__$1 = ((((!((map__59154 == null)))?((((map__59154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59154):map__59154);
var opts = map__59154__$1;
var build_id = cljs.core.get.call(null,map__59154__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__59154,map__59154__$1,opts,build_id){
return (function (p__59156){
var vec__59157 = p__59156;
var map__59158 = cljs.core.nth.call(null,vec__59157,(0),null);
var map__59158__$1 = ((((!((map__59158 == null)))?((((map__59158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59158):map__59158);
var msg = map__59158__$1;
var msg_name = cljs.core.get.call(null,map__59158__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__59157,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__59157,map__59158,map__59158__$1,msg,msg_name,_,map__59154,map__59154__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__59157,map__59158,map__59158__$1,msg,msg_name,_,map__59154,map__59154__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__59154,map__59154__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__59164){
var vec__59165 = p__59164;
var map__59166 = cljs.core.nth.call(null,vec__59165,(0),null);
var map__59166__$1 = ((((!((map__59166 == null)))?((((map__59166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59166):map__59166);
var msg = map__59166__$1;
var msg_name = cljs.core.get.call(null,map__59166__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__59165,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__59168){
var map__59178 = p__59168;
var map__59178__$1 = ((((!((map__59178 == null)))?((((map__59178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59178):map__59178);
var on_compile_warning = cljs.core.get.call(null,map__59178__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__59178__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__59178,map__59178__$1,on_compile_warning,on_compile_fail){
return (function (p__59180){
var vec__59181 = p__59180;
var map__59182 = cljs.core.nth.call(null,vec__59181,(0),null);
var map__59182__$1 = ((((!((map__59182 == null)))?((((map__59182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59182):map__59182);
var msg = map__59182__$1;
var msg_name = cljs.core.get.call(null,map__59182__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__59181,(1));
var pred__59184 = cljs.core._EQ_;
var expr__59185 = msg_name;
if(cljs.core.truth_(pred__59184.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__59185))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__59184.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__59185))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__59178,map__59178__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto__,msg_hist,msg_names,msg){
return (function (state_59401){
var state_val_59402 = (state_59401[(1)]);
if((state_val_59402 === (7))){
var inst_59325 = (state_59401[(2)]);
var state_59401__$1 = state_59401;
if(cljs.core.truth_(inst_59325)){
var statearr_59403_59449 = state_59401__$1;
(statearr_59403_59449[(1)] = (8));

} else {
var statearr_59404_59450 = state_59401__$1;
(statearr_59404_59450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (20))){
var inst_59395 = (state_59401[(2)]);
var state_59401__$1 = state_59401;
var statearr_59405_59451 = state_59401__$1;
(statearr_59405_59451[(2)] = inst_59395);

(statearr_59405_59451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (27))){
var inst_59391 = (state_59401[(2)]);
var state_59401__$1 = state_59401;
var statearr_59406_59452 = state_59401__$1;
(statearr_59406_59452[(2)] = inst_59391);

(statearr_59406_59452[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (1))){
var inst_59318 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_59401__$1 = state_59401;
if(cljs.core.truth_(inst_59318)){
var statearr_59407_59453 = state_59401__$1;
(statearr_59407_59453[(1)] = (2));

} else {
var statearr_59408_59454 = state_59401__$1;
(statearr_59408_59454[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (24))){
var inst_59393 = (state_59401[(2)]);
var state_59401__$1 = state_59401;
var statearr_59409_59455 = state_59401__$1;
(statearr_59409_59455[(2)] = inst_59393);

(statearr_59409_59455[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (4))){
var inst_59399 = (state_59401[(2)]);
var state_59401__$1 = state_59401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59401__$1,inst_59399);
} else {
if((state_val_59402 === (15))){
var inst_59397 = (state_59401[(2)]);
var state_59401__$1 = state_59401;
var statearr_59410_59456 = state_59401__$1;
(statearr_59410_59456[(2)] = inst_59397);

(statearr_59410_59456[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (21))){
var inst_59356 = (state_59401[(2)]);
var state_59401__$1 = state_59401;
var statearr_59411_59457 = state_59401__$1;
(statearr_59411_59457[(2)] = inst_59356);

(statearr_59411_59457[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (31))){
var inst_59380 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_59401__$1 = state_59401;
if(cljs.core.truth_(inst_59380)){
var statearr_59412_59458 = state_59401__$1;
(statearr_59412_59458[(1)] = (34));

} else {
var statearr_59413_59459 = state_59401__$1;
(statearr_59413_59459[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (32))){
var inst_59389 = (state_59401[(2)]);
var state_59401__$1 = state_59401;
var statearr_59414_59460 = state_59401__$1;
(statearr_59414_59460[(2)] = inst_59389);

(statearr_59414_59460[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (33))){
var inst_59378 = (state_59401[(2)]);
var state_59401__$1 = state_59401;
var statearr_59415_59461 = state_59401__$1;
(statearr_59415_59461[(2)] = inst_59378);

(statearr_59415_59461[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (13))){
var inst_59339 = figwheel.client.heads_up.clear.call(null);
var state_59401__$1 = state_59401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59401__$1,(16),inst_59339);
} else {
if((state_val_59402 === (22))){
var inst_59360 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59361 = figwheel.client.heads_up.append_message.call(null,inst_59360);
var state_59401__$1 = state_59401;
var statearr_59416_59462 = state_59401__$1;
(statearr_59416_59462[(2)] = inst_59361);

(statearr_59416_59462[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (36))){
var inst_59387 = (state_59401[(2)]);
var state_59401__$1 = state_59401;
var statearr_59417_59463 = state_59401__$1;
(statearr_59417_59463[(2)] = inst_59387);

(statearr_59417_59463[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (29))){
var inst_59371 = (state_59401[(2)]);
var state_59401__$1 = state_59401;
var statearr_59418_59464 = state_59401__$1;
(statearr_59418_59464[(2)] = inst_59371);

(statearr_59418_59464[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (6))){
var inst_59320 = (state_59401[(7)]);
var state_59401__$1 = state_59401;
var statearr_59419_59465 = state_59401__$1;
(statearr_59419_59465[(2)] = inst_59320);

(statearr_59419_59465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (28))){
var inst_59367 = (state_59401[(2)]);
var inst_59368 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59369 = figwheel.client.heads_up.display_warning.call(null,inst_59368);
var state_59401__$1 = (function (){var statearr_59420 = state_59401;
(statearr_59420[(8)] = inst_59367);

return statearr_59420;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59401__$1,(29),inst_59369);
} else {
if((state_val_59402 === (25))){
var inst_59365 = figwheel.client.heads_up.clear.call(null);
var state_59401__$1 = state_59401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59401__$1,(28),inst_59365);
} else {
if((state_val_59402 === (34))){
var inst_59382 = figwheel.client.heads_up.flash_loaded.call(null);
var state_59401__$1 = state_59401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59401__$1,(37),inst_59382);
} else {
if((state_val_59402 === (17))){
var inst_59347 = (state_59401[(2)]);
var state_59401__$1 = state_59401;
var statearr_59421_59466 = state_59401__$1;
(statearr_59421_59466[(2)] = inst_59347);

(statearr_59421_59466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (3))){
var inst_59337 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_59401__$1 = state_59401;
if(cljs.core.truth_(inst_59337)){
var statearr_59422_59467 = state_59401__$1;
(statearr_59422_59467[(1)] = (13));

} else {
var statearr_59423_59468 = state_59401__$1;
(statearr_59423_59468[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (12))){
var inst_59333 = (state_59401[(2)]);
var state_59401__$1 = state_59401;
var statearr_59424_59469 = state_59401__$1;
(statearr_59424_59469[(2)] = inst_59333);

(statearr_59424_59469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (2))){
var inst_59320 = (state_59401[(7)]);
var inst_59320__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_59401__$1 = (function (){var statearr_59425 = state_59401;
(statearr_59425[(7)] = inst_59320__$1);

return statearr_59425;
})();
if(cljs.core.truth_(inst_59320__$1)){
var statearr_59426_59470 = state_59401__$1;
(statearr_59426_59470[(1)] = (5));

} else {
var statearr_59427_59471 = state_59401__$1;
(statearr_59427_59471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (23))){
var inst_59363 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_59401__$1 = state_59401;
if(cljs.core.truth_(inst_59363)){
var statearr_59428_59472 = state_59401__$1;
(statearr_59428_59472[(1)] = (25));

} else {
var statearr_59429_59473 = state_59401__$1;
(statearr_59429_59473[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (35))){
var state_59401__$1 = state_59401;
var statearr_59430_59474 = state_59401__$1;
(statearr_59430_59474[(2)] = null);

(statearr_59430_59474[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (19))){
var inst_59358 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_59401__$1 = state_59401;
if(cljs.core.truth_(inst_59358)){
var statearr_59431_59475 = state_59401__$1;
(statearr_59431_59475[(1)] = (22));

} else {
var statearr_59432_59476 = state_59401__$1;
(statearr_59432_59476[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (11))){
var inst_59329 = (state_59401[(2)]);
var state_59401__$1 = state_59401;
var statearr_59433_59477 = state_59401__$1;
(statearr_59433_59477[(2)] = inst_59329);

(statearr_59433_59477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (9))){
var inst_59331 = figwheel.client.heads_up.clear.call(null);
var state_59401__$1 = state_59401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59401__$1,(12),inst_59331);
} else {
if((state_val_59402 === (5))){
var inst_59322 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_59401__$1 = state_59401;
var statearr_59434_59478 = state_59401__$1;
(statearr_59434_59478[(2)] = inst_59322);

(statearr_59434_59478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (14))){
var inst_59349 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_59401__$1 = state_59401;
if(cljs.core.truth_(inst_59349)){
var statearr_59435_59479 = state_59401__$1;
(statearr_59435_59479[(1)] = (18));

} else {
var statearr_59436_59480 = state_59401__$1;
(statearr_59436_59480[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (26))){
var inst_59373 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_59401__$1 = state_59401;
if(cljs.core.truth_(inst_59373)){
var statearr_59437_59481 = state_59401__$1;
(statearr_59437_59481[(1)] = (30));

} else {
var statearr_59438_59482 = state_59401__$1;
(statearr_59438_59482[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (16))){
var inst_59341 = (state_59401[(2)]);
var inst_59342 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59343 = figwheel.client.format_messages.call(null,inst_59342);
var inst_59344 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59345 = figwheel.client.heads_up.display_error.call(null,inst_59343,inst_59344);
var state_59401__$1 = (function (){var statearr_59439 = state_59401;
(statearr_59439[(9)] = inst_59341);

return statearr_59439;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59401__$1,(17),inst_59345);
} else {
if((state_val_59402 === (30))){
var inst_59375 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59376 = figwheel.client.heads_up.display_warning.call(null,inst_59375);
var state_59401__$1 = state_59401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59401__$1,(33),inst_59376);
} else {
if((state_val_59402 === (10))){
var inst_59335 = (state_59401[(2)]);
var state_59401__$1 = state_59401;
var statearr_59440_59483 = state_59401__$1;
(statearr_59440_59483[(2)] = inst_59335);

(statearr_59440_59483[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (18))){
var inst_59351 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59352 = figwheel.client.format_messages.call(null,inst_59351);
var inst_59353 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59354 = figwheel.client.heads_up.display_error.call(null,inst_59352,inst_59353);
var state_59401__$1 = state_59401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59401__$1,(21),inst_59354);
} else {
if((state_val_59402 === (37))){
var inst_59384 = (state_59401[(2)]);
var state_59401__$1 = state_59401;
var statearr_59441_59484 = state_59401__$1;
(statearr_59441_59484[(2)] = inst_59384);

(statearr_59441_59484[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59402 === (8))){
var inst_59327 = figwheel.client.heads_up.flash_loaded.call(null);
var state_59401__$1 = state_59401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59401__$1,(11),inst_59327);
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
});})(c__18924__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18903__auto__,c__18924__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto____0 = (function (){
var statearr_59445 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59445[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto__);

(statearr_59445[(1)] = (1));

return statearr_59445;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto____1 = (function (state_59401){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_59401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e59446){if((e59446 instanceof Object)){
var ex__18907__auto__ = e59446;
var statearr_59447_59485 = state_59401;
(statearr_59447_59485[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59486 = state_59401;
state_59401 = G__59486;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto__ = function(state_59401){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto____1.call(this,state_59401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto__,msg_hist,msg_names,msg))
})();
var state__18926__auto__ = (function (){var statearr_59448 = f__18925__auto__.call(null);
(statearr_59448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto__);

return statearr_59448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto__,msg_hist,msg_names,msg))
);

return c__18924__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18924__auto___59549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto___59549,ch){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto___59549,ch){
return (function (state_59532){
var state_val_59533 = (state_59532[(1)]);
if((state_val_59533 === (1))){
var state_59532__$1 = state_59532;
var statearr_59534_59550 = state_59532__$1;
(statearr_59534_59550[(2)] = null);

(statearr_59534_59550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59533 === (2))){
var state_59532__$1 = state_59532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59532__$1,(4),ch);
} else {
if((state_val_59533 === (3))){
var inst_59530 = (state_59532[(2)]);
var state_59532__$1 = state_59532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59532__$1,inst_59530);
} else {
if((state_val_59533 === (4))){
var inst_59520 = (state_59532[(7)]);
var inst_59520__$1 = (state_59532[(2)]);
var state_59532__$1 = (function (){var statearr_59535 = state_59532;
(statearr_59535[(7)] = inst_59520__$1);

return statearr_59535;
})();
if(cljs.core.truth_(inst_59520__$1)){
var statearr_59536_59551 = state_59532__$1;
(statearr_59536_59551[(1)] = (5));

} else {
var statearr_59537_59552 = state_59532__$1;
(statearr_59537_59552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59533 === (5))){
var inst_59520 = (state_59532[(7)]);
var inst_59522 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_59520);
var state_59532__$1 = state_59532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59532__$1,(8),inst_59522);
} else {
if((state_val_59533 === (6))){
var state_59532__$1 = state_59532;
var statearr_59538_59553 = state_59532__$1;
(statearr_59538_59553[(2)] = null);

(statearr_59538_59553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59533 === (7))){
var inst_59528 = (state_59532[(2)]);
var state_59532__$1 = state_59532;
var statearr_59539_59554 = state_59532__$1;
(statearr_59539_59554[(2)] = inst_59528);

(statearr_59539_59554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59533 === (8))){
var inst_59524 = (state_59532[(2)]);
var state_59532__$1 = (function (){var statearr_59540 = state_59532;
(statearr_59540[(8)] = inst_59524);

return statearr_59540;
})();
var statearr_59541_59555 = state_59532__$1;
(statearr_59541_59555[(2)] = null);

(statearr_59541_59555[(1)] = (2));


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
});})(c__18924__auto___59549,ch))
;
return ((function (switch__18903__auto__,c__18924__auto___59549,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18904__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18904__auto____0 = (function (){
var statearr_59545 = [null,null,null,null,null,null,null,null,null];
(statearr_59545[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18904__auto__);

(statearr_59545[(1)] = (1));

return statearr_59545;
});
var figwheel$client$heads_up_plugin_$_state_machine__18904__auto____1 = (function (state_59532){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_59532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e59546){if((e59546 instanceof Object)){
var ex__18907__auto__ = e59546;
var statearr_59547_59556 = state_59532;
(statearr_59547_59556[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59557 = state_59532;
state_59532 = G__59557;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18904__auto__ = function(state_59532){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18904__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18904__auto____1.call(this,state_59532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18904__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18904__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto___59549,ch))
})();
var state__18926__auto__ = (function (){var statearr_59548 = f__18925__auto__.call(null);
(statearr_59548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto___59549);

return statearr_59548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto___59549,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto__){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto__){
return (function (state_59578){
var state_val_59579 = (state_59578[(1)]);
if((state_val_59579 === (1))){
var inst_59573 = cljs.core.async.timeout.call(null,(3000));
var state_59578__$1 = state_59578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59578__$1,(2),inst_59573);
} else {
if((state_val_59579 === (2))){
var inst_59575 = (state_59578[(2)]);
var inst_59576 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_59578__$1 = (function (){var statearr_59580 = state_59578;
(statearr_59580[(7)] = inst_59575);

return statearr_59580;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59578__$1,inst_59576);
} else {
return null;
}
}
});})(c__18924__auto__))
;
return ((function (switch__18903__auto__,c__18924__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18904__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18904__auto____0 = (function (){
var statearr_59584 = [null,null,null,null,null,null,null,null];
(statearr_59584[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18904__auto__);

(statearr_59584[(1)] = (1));

return statearr_59584;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18904__auto____1 = (function (state_59578){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_59578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e59585){if((e59585 instanceof Object)){
var ex__18907__auto__ = e59585;
var statearr_59586_59588 = state_59578;
(statearr_59586_59588[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59589 = state_59578;
state_59578 = G__59589;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18904__auto__ = function(state_59578){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18904__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18904__auto____1.call(this,state_59578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18904__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18904__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto__))
})();
var state__18926__auto__ = (function (){var statearr_59587 = f__18925__auto__.call(null);
(statearr_59587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto__);

return statearr_59587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto__))
);

return c__18924__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__59590){
var map__59597 = p__59590;
var map__59597__$1 = ((((!((map__59597 == null)))?((((map__59597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59597):map__59597);
var ed = map__59597__$1;
var formatted_exception = cljs.core.get.call(null,map__59597__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__59597__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__59597__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__59599_59603 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__59600_59604 = null;
var count__59601_59605 = (0);
var i__59602_59606 = (0);
while(true){
if((i__59602_59606 < count__59601_59605)){
var msg_59607 = cljs.core._nth.call(null,chunk__59600_59604,i__59602_59606);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_59607);

var G__59608 = seq__59599_59603;
var G__59609 = chunk__59600_59604;
var G__59610 = count__59601_59605;
var G__59611 = (i__59602_59606 + (1));
seq__59599_59603 = G__59608;
chunk__59600_59604 = G__59609;
count__59601_59605 = G__59610;
i__59602_59606 = G__59611;
continue;
} else {
var temp__4425__auto___59612 = cljs.core.seq.call(null,seq__59599_59603);
if(temp__4425__auto___59612){
var seq__59599_59613__$1 = temp__4425__auto___59612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59599_59613__$1)){
var c__17629__auto___59614 = cljs.core.chunk_first.call(null,seq__59599_59613__$1);
var G__59615 = cljs.core.chunk_rest.call(null,seq__59599_59613__$1);
var G__59616 = c__17629__auto___59614;
var G__59617 = cljs.core.count.call(null,c__17629__auto___59614);
var G__59618 = (0);
seq__59599_59603 = G__59615;
chunk__59600_59604 = G__59616;
count__59601_59605 = G__59617;
i__59602_59606 = G__59618;
continue;
} else {
var msg_59619 = cljs.core.first.call(null,seq__59599_59613__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_59619);

var G__59620 = cljs.core.next.call(null,seq__59599_59613__$1);
var G__59621 = null;
var G__59622 = (0);
var G__59623 = (0);
seq__59599_59603 = G__59620;
chunk__59600_59604 = G__59621;
count__59601_59605 = G__59622;
i__59602_59606 = G__59623;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__59624){
var map__59627 = p__59624;
var map__59627__$1 = ((((!((map__59627 == null)))?((((map__59627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59627):map__59627);
var w = map__59627__$1;
var message = cljs.core.get.call(null,map__59627__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16814__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16814__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16814__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__59635 = cljs.core.seq.call(null,plugins);
var chunk__59636 = null;
var count__59637 = (0);
var i__59638 = (0);
while(true){
if((i__59638 < count__59637)){
var vec__59639 = cljs.core._nth.call(null,chunk__59636,i__59638);
var k = cljs.core.nth.call(null,vec__59639,(0),null);
var plugin = cljs.core.nth.call(null,vec__59639,(1),null);
if(cljs.core.truth_(plugin)){
var pl_59641 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__59635,chunk__59636,count__59637,i__59638,pl_59641,vec__59639,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_59641.call(null,msg_hist);
});})(seq__59635,chunk__59636,count__59637,i__59638,pl_59641,vec__59639,k,plugin))
);
} else {
}

var G__59642 = seq__59635;
var G__59643 = chunk__59636;
var G__59644 = count__59637;
var G__59645 = (i__59638 + (1));
seq__59635 = G__59642;
chunk__59636 = G__59643;
count__59637 = G__59644;
i__59638 = G__59645;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__59635);
if(temp__4425__auto__){
var seq__59635__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59635__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__59635__$1);
var G__59646 = cljs.core.chunk_rest.call(null,seq__59635__$1);
var G__59647 = c__17629__auto__;
var G__59648 = cljs.core.count.call(null,c__17629__auto__);
var G__59649 = (0);
seq__59635 = G__59646;
chunk__59636 = G__59647;
count__59637 = G__59648;
i__59638 = G__59649;
continue;
} else {
var vec__59640 = cljs.core.first.call(null,seq__59635__$1);
var k = cljs.core.nth.call(null,vec__59640,(0),null);
var plugin = cljs.core.nth.call(null,vec__59640,(1),null);
if(cljs.core.truth_(plugin)){
var pl_59650 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__59635,chunk__59636,count__59637,i__59638,pl_59650,vec__59640,k,plugin,seq__59635__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_59650.call(null,msg_hist);
});})(seq__59635,chunk__59636,count__59637,i__59638,pl_59650,vec__59640,k,plugin,seq__59635__$1,temp__4425__auto__))
);
} else {
}

var G__59651 = cljs.core.next.call(null,seq__59635__$1);
var G__59652 = null;
var G__59653 = (0);
var G__59654 = (0);
seq__59635 = G__59651;
chunk__59636 = G__59652;
count__59637 = G__59653;
i__59638 = G__59654;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args59655 = [];
var len__17884__auto___59658 = arguments.length;
var i__17885__auto___59659 = (0);
while(true){
if((i__17885__auto___59659 < len__17884__auto___59658)){
args59655.push((arguments[i__17885__auto___59659]));

var G__59660 = (i__17885__auto___59659 + (1));
i__17885__auto___59659 = G__59660;
continue;
} else {
}
break;
}

var G__59657 = args59655.length;
switch (G__59657) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59655.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17891__auto__ = [];
var len__17884__auto___59666 = arguments.length;
var i__17885__auto___59667 = (0);
while(true){
if((i__17885__auto___59667 < len__17884__auto___59666)){
args__17891__auto__.push((arguments[i__17885__auto___59667]));

var G__59668 = (i__17885__auto___59667 + (1));
i__17885__auto___59667 = G__59668;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__59663){
var map__59664 = p__59663;
var map__59664__$1 = ((((!((map__59664 == null)))?((((map__59664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59664):map__59664);
var opts = map__59664__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq59662){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59662));
});

//# sourceMappingURL=client.js.map?rel=1453728832951