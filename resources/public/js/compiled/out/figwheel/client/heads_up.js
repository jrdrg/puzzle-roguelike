// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17891__auto__ = [];
var len__17884__auto___57028 = arguments.length;
var i__17885__auto___57029 = (0);
while(true){
if((i__17885__auto___57029 < len__17884__auto___57028)){
args__17891__auto__.push((arguments[i__17885__auto___57029]));

var G__57030 = (i__17885__auto___57029 + (1));
i__17885__auto___57029 = G__57030;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((2) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17892__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__57020_57031 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__57021_57032 = null;
var count__57022_57033 = (0);
var i__57023_57034 = (0);
while(true){
if((i__57023_57034 < count__57022_57033)){
var k_57035 = cljs.core._nth.call(null,chunk__57021_57032,i__57023_57034);
e.setAttribute(cljs.core.name.call(null,k_57035),cljs.core.get.call(null,attrs,k_57035));

var G__57036 = seq__57020_57031;
var G__57037 = chunk__57021_57032;
var G__57038 = count__57022_57033;
var G__57039 = (i__57023_57034 + (1));
seq__57020_57031 = G__57036;
chunk__57021_57032 = G__57037;
count__57022_57033 = G__57038;
i__57023_57034 = G__57039;
continue;
} else {
var temp__4425__auto___57040 = cljs.core.seq.call(null,seq__57020_57031);
if(temp__4425__auto___57040){
var seq__57020_57041__$1 = temp__4425__auto___57040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57020_57041__$1)){
var c__17629__auto___57042 = cljs.core.chunk_first.call(null,seq__57020_57041__$1);
var G__57043 = cljs.core.chunk_rest.call(null,seq__57020_57041__$1);
var G__57044 = c__17629__auto___57042;
var G__57045 = cljs.core.count.call(null,c__17629__auto___57042);
var G__57046 = (0);
seq__57020_57031 = G__57043;
chunk__57021_57032 = G__57044;
count__57022_57033 = G__57045;
i__57023_57034 = G__57046;
continue;
} else {
var k_57047 = cljs.core.first.call(null,seq__57020_57041__$1);
e.setAttribute(cljs.core.name.call(null,k_57047),cljs.core.get.call(null,attrs,k_57047));

var G__57048 = cljs.core.next.call(null,seq__57020_57041__$1);
var G__57049 = null;
var G__57050 = (0);
var G__57051 = (0);
seq__57020_57031 = G__57048;
chunk__57021_57032 = G__57049;
count__57022_57033 = G__57050;
i__57023_57034 = G__57051;
continue;
}
} else {
}
}
break;
}

var seq__57024_57052 = cljs.core.seq.call(null,children);
var chunk__57025_57053 = null;
var count__57026_57054 = (0);
var i__57027_57055 = (0);
while(true){
if((i__57027_57055 < count__57026_57054)){
var ch_57056 = cljs.core._nth.call(null,chunk__57025_57053,i__57027_57055);
e.appendChild(ch_57056);

var G__57057 = seq__57024_57052;
var G__57058 = chunk__57025_57053;
var G__57059 = count__57026_57054;
var G__57060 = (i__57027_57055 + (1));
seq__57024_57052 = G__57057;
chunk__57025_57053 = G__57058;
count__57026_57054 = G__57059;
i__57027_57055 = G__57060;
continue;
} else {
var temp__4425__auto___57061 = cljs.core.seq.call(null,seq__57024_57052);
if(temp__4425__auto___57061){
var seq__57024_57062__$1 = temp__4425__auto___57061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57024_57062__$1)){
var c__17629__auto___57063 = cljs.core.chunk_first.call(null,seq__57024_57062__$1);
var G__57064 = cljs.core.chunk_rest.call(null,seq__57024_57062__$1);
var G__57065 = c__17629__auto___57063;
var G__57066 = cljs.core.count.call(null,c__17629__auto___57063);
var G__57067 = (0);
seq__57024_57052 = G__57064;
chunk__57025_57053 = G__57065;
count__57026_57054 = G__57066;
i__57027_57055 = G__57067;
continue;
} else {
var ch_57068 = cljs.core.first.call(null,seq__57024_57062__$1);
e.appendChild(ch_57068);

var G__57069 = cljs.core.next.call(null,seq__57024_57062__$1);
var G__57070 = null;
var G__57071 = (0);
var G__57072 = (0);
seq__57024_57052 = G__57069;
chunk__57025_57053 = G__57070;
count__57026_57054 = G__57071;
i__57027_57055 = G__57072;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq57017){
var G__57018 = cljs.core.first.call(null,seq57017);
var seq57017__$1 = cljs.core.next.call(null,seq57017);
var G__57019 = cljs.core.first.call(null,seq57017__$1);
var seq57017__$2 = cljs.core.next.call(null,seq57017__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__57018,G__57019,seq57017__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17742__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17743__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__,hierarchy__17743__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__,hierarchy__17743__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17743__auto__,method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_57073 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_57073.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_57073.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_57073.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_57073);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__57074,st_map){
var map__57079 = p__57074;
var map__57079__$1 = ((((!((map__57079 == null)))?((((map__57079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57079):map__57079);
var container_el = cljs.core.get.call(null,map__57079__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__57079,map__57079__$1,container_el){
return (function (p__57081){
var vec__57082 = p__57081;
var k = cljs.core.nth.call(null,vec__57082,(0),null);
var v = cljs.core.nth.call(null,vec__57082,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__57079,map__57079__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__57083,dom_str){
var map__57086 = p__57083;
var map__57086__$1 = ((((!((map__57086 == null)))?((((map__57086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57086):map__57086);
var c = map__57086__$1;
var content_area_el = cljs.core.get.call(null,map__57086__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__57088){
var map__57091 = p__57088;
var map__57091__$1 = ((((!((map__57091 == null)))?((((map__57091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57091):map__57091);
var content_area_el = cljs.core.get.call(null,map__57091__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__18924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto__){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto__){
return (function (state_57134){
var state_val_57135 = (state_57134[(1)]);
if((state_val_57135 === (1))){
var inst_57119 = (state_57134[(7)]);
var inst_57119__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_57120 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_57121 = ["10px","10px","100%","68px","1.0"];
var inst_57122 = cljs.core.PersistentHashMap.fromArrays(inst_57120,inst_57121);
var inst_57123 = cljs.core.merge.call(null,inst_57122,style);
var inst_57124 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_57119__$1,inst_57123);
var inst_57125 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_57119__$1,msg);
var inst_57126 = cljs.core.async.timeout.call(null,(300));
var state_57134__$1 = (function (){var statearr_57136 = state_57134;
(statearr_57136[(7)] = inst_57119__$1);

(statearr_57136[(8)] = inst_57125);

(statearr_57136[(9)] = inst_57124);

return statearr_57136;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57134__$1,(2),inst_57126);
} else {
if((state_val_57135 === (2))){
var inst_57119 = (state_57134[(7)]);
var inst_57128 = (state_57134[(2)]);
var inst_57129 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_57130 = ["auto"];
var inst_57131 = cljs.core.PersistentHashMap.fromArrays(inst_57129,inst_57130);
var inst_57132 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_57119,inst_57131);
var state_57134__$1 = (function (){var statearr_57137 = state_57134;
(statearr_57137[(10)] = inst_57128);

return statearr_57137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57134__$1,inst_57132);
} else {
return null;
}
}
});})(c__18924__auto__))
;
return ((function (switch__18903__auto__,c__18924__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__18904__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__18904__auto____0 = (function (){
var statearr_57141 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57141[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__18904__auto__);

(statearr_57141[(1)] = (1));

return statearr_57141;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__18904__auto____1 = (function (state_57134){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_57134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e57142){if((e57142 instanceof Object)){
var ex__18907__auto__ = e57142;
var statearr_57143_57145 = state_57134;
(statearr_57143_57145[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57146 = state_57134;
state_57134 = G__57146;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__18904__auto__ = function(state_57134){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18904__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18904__auto____1.call(this,state_57134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__18904__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__18904__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto__))
})();
var state__18926__auto__ = (function (){var statearr_57144 = f__18925__auto__.call(null);
(statearr_57144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto__);

return statearr_57144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto__))
);

return c__18924__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__57148 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__57148,(0),null);
var ln = cljs.core.nth.call(null,vec__57148,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__57151 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__57151,(0),null);
var file_line = cljs.core.nth.call(null,vec__57151,(1),null);
var file_column = cljs.core.nth.call(null,vec__57151,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__57151,file_name,file_line,file_column){
return (function (p1__57149_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__57149_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__57151,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16826__auto__ = file_line;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var and__16814__auto__ = cause;
if(cljs.core.truth_(and__16814__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16814__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__57154 = figwheel.client.heads_up.ensure_container.call(null);
var map__57154__$1 = ((((!((map__57154 == null)))?((((map__57154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57154):map__57154);
var content_area_el = cljs.core.get.call(null,map__57154__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__18924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto__){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto__){
return (function (state_57202){
var state_val_57203 = (state_57202[(1)]);
if((state_val_57203 === (1))){
var inst_57185 = (state_57202[(7)]);
var inst_57185__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_57186 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_57187 = ["0.0"];
var inst_57188 = cljs.core.PersistentHashMap.fromArrays(inst_57186,inst_57187);
var inst_57189 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_57185__$1,inst_57188);
var inst_57190 = cljs.core.async.timeout.call(null,(300));
var state_57202__$1 = (function (){var statearr_57204 = state_57202;
(statearr_57204[(8)] = inst_57189);

(statearr_57204[(7)] = inst_57185__$1);

return statearr_57204;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57202__$1,(2),inst_57190);
} else {
if((state_val_57203 === (2))){
var inst_57185 = (state_57202[(7)]);
var inst_57192 = (state_57202[(2)]);
var inst_57193 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_57194 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_57195 = cljs.core.PersistentHashMap.fromArrays(inst_57193,inst_57194);
var inst_57196 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_57185,inst_57195);
var inst_57197 = cljs.core.async.timeout.call(null,(200));
var state_57202__$1 = (function (){var statearr_57205 = state_57202;
(statearr_57205[(9)] = inst_57192);

(statearr_57205[(10)] = inst_57196);

return statearr_57205;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57202__$1,(3),inst_57197);
} else {
if((state_val_57203 === (3))){
var inst_57185 = (state_57202[(7)]);
var inst_57199 = (state_57202[(2)]);
var inst_57200 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_57185,"");
var state_57202__$1 = (function (){var statearr_57206 = state_57202;
(statearr_57206[(11)] = inst_57199);

return statearr_57206;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57202__$1,inst_57200);
} else {
return null;
}
}
}
});})(c__18924__auto__))
;
return ((function (switch__18903__auto__,c__18924__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__18904__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__18904__auto____0 = (function (){
var statearr_57210 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57210[(0)] = figwheel$client$heads_up$clear_$_state_machine__18904__auto__);

(statearr_57210[(1)] = (1));

return statearr_57210;
});
var figwheel$client$heads_up$clear_$_state_machine__18904__auto____1 = (function (state_57202){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_57202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e57211){if((e57211 instanceof Object)){
var ex__18907__auto__ = e57211;
var statearr_57212_57214 = state_57202;
(statearr_57212_57214[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57215 = state_57202;
state_57202 = G__57215;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__18904__auto__ = function(state_57202){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__18904__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__18904__auto____1.call(this,state_57202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__18904__auto____0;
figwheel$client$heads_up$clear_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__18904__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto__))
})();
var state__18926__auto__ = (function (){var statearr_57213 = f__18925__auto__.call(null);
(statearr_57213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto__);

return statearr_57213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto__))
);

return c__18924__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__18924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18924__auto__){
return (function (){
var f__18925__auto__ = (function (){var switch__18903__auto__ = ((function (c__18924__auto__){
return (function (state_57247){
var state_val_57248 = (state_57247[(1)]);
if((state_val_57248 === (1))){
var inst_57237 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_57247__$1 = state_57247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57247__$1,(2),inst_57237);
} else {
if((state_val_57248 === (2))){
var inst_57239 = (state_57247[(2)]);
var inst_57240 = cljs.core.async.timeout.call(null,(400));
var state_57247__$1 = (function (){var statearr_57249 = state_57247;
(statearr_57249[(7)] = inst_57239);

return statearr_57249;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57247__$1,(3),inst_57240);
} else {
if((state_val_57248 === (3))){
var inst_57242 = (state_57247[(2)]);
var inst_57243 = figwheel.client.heads_up.clear.call(null);
var state_57247__$1 = (function (){var statearr_57250 = state_57247;
(statearr_57250[(8)] = inst_57242);

return statearr_57250;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57247__$1,(4),inst_57243);
} else {
if((state_val_57248 === (4))){
var inst_57245 = (state_57247[(2)]);
var state_57247__$1 = state_57247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57247__$1,inst_57245);
} else {
return null;
}
}
}
}
});})(c__18924__auto__))
;
return ((function (switch__18903__auto__,c__18924__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__18904__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__18904__auto____0 = (function (){
var statearr_57254 = [null,null,null,null,null,null,null,null,null];
(statearr_57254[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__18904__auto__);

(statearr_57254[(1)] = (1));

return statearr_57254;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__18904__auto____1 = (function (state_57247){
while(true){
var ret_value__18905__auto__ = (function (){try{while(true){
var result__18906__auto__ = switch__18903__auto__.call(null,state_57247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18906__auto__;
}
break;
}
}catch (e57255){if((e57255 instanceof Object)){
var ex__18907__auto__ = e57255;
var statearr_57256_57258 = state_57247;
(statearr_57256_57258[(5)] = ex__18907__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57259 = state_57247;
state_57247 = G__57259;
continue;
} else {
return ret_value__18905__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__18904__auto__ = function(state_57247){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18904__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18904__auto____1.call(this,state_57247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__18904__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__18904__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__18904__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__18904__auto__;
})()
;})(switch__18903__auto__,c__18924__auto__))
})();
var state__18926__auto__ = (function (){var statearr_57257 = f__18925__auto__.call(null);
(statearr_57257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18924__auto__);

return statearr_57257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18926__auto__);
});})(c__18924__auto__))
);

return c__18924__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1453728831405