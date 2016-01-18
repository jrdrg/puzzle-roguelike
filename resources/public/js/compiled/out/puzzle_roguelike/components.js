// Compiled by ClojureScript 1.7.170 {}
goog.provide('puzzle_roguelike.components');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('puzzle_roguelike.map');
puzzle_roguelike.components.tile_size = (50);
puzzle_roguelike.components.tile_view = (function puzzle_roguelike$components$tile_view(tile,x,y,out_chan){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.noselect","div.tile.noselect",-1879654456),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(tile),new cljs.core.Keyword(null,"color","color",1011675173),"antiquewhite",new cljs.core.Keyword(null,"top","top",-1856271961),(y * puzzle_roguelike.components.tile_size),new cljs.core.Keyword(null,"left","left",-399115937),(x * puzzle_roguelike.components.tile_size),new cljs.core.Keyword(null,"height","height",1025178622),puzzle_roguelike.components.tile_size,new cljs.core.Keyword(null,"width","width",-384071477),puzzle_roguelike.components.tile_size], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
cljs.core.async.put_BANG_.call(null,out_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));

return null;
})], null),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(tile)], null);
});
puzzle_roguelike.components.player_view = (function puzzle_roguelike$components$player_view(p__68998,out_chan){
var vec__69000 = p__68998;
var x = cljs.core.nth.call(null,vec__69000,(0),null);
var y = cljs.core.nth.call(null,vec__69000,(1),null);
var pos_x = (x * puzzle_roguelike.components.tile_size);
var pos_y = (y * puzzle_roguelike.components.tile_size);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.player.tile.noselect","div.player.tile.noselect",-1153715743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),pos_y,new cljs.core.Keyword(null,"left","left",-399115937),pos_x,new cljs.core.Keyword(null,"width","width",-384071477),puzzle_roguelike.components.tile_size,new cljs.core.Keyword(null,"height","height",1025178622),puzzle_roguelike.components.tile_size], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (pos_x,pos_y,vec__69000,x,y){
return (function (event){
cljs.core.async.put_BANG_.call(null,out_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stairs-down","stairs-down",951351901),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));

return null;
});})(pos_x,pos_y,vec__69000,x,y))
], null),"@"], null);
});
puzzle_roguelike.components.map_view = (function puzzle_roguelike$components$map_view(tiles,position,out_chan){
var vec__69009 = puzzle_roguelike.map.map_size;
var width = cljs.core.nth.call(null,vec__69009,(0),null);
var height = cljs.core.nth.call(null,vec__69009,(1),null);
var vec__69010 = position;
var player_x = cljs.core.nth.call(null,vec__69010,(0),null);
var player_y = cljs.core.nth.call(null,vec__69010,(1),null);
var pixel_position = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(player_x * puzzle_roguelike.components.tile_size),(player_y * puzzle_roguelike.components.tile_size)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map","div.map",-288957849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(puzzle_roguelike.components.tile_size * height),new cljs.core.Keyword(null,"width","width",-384071477),(puzzle_roguelike.components.tile_size * width),new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),(puzzle_roguelike.components.tile_size * width)], null)], null),(function (){var iter__17598__auto__ = ((function (vec__69009,width,height,vec__69010,player_x,player_y,pixel_position){
return (function puzzle_roguelike$components$map_view_$_iter__69011(s__69012){
return (new cljs.core.LazySeq(null,((function (vec__69009,width,height,vec__69010,player_x,player_y,pixel_position){
return (function (){
var s__69012__$1 = s__69012;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__69012__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var y = cljs.core.first.call(null,xs__4977__auto__);
var iterys__17594__auto__ = ((function (s__69012__$1,y,xs__4977__auto__,temp__4425__auto__,vec__69009,width,height,vec__69010,player_x,player_y,pixel_position){
return (function puzzle_roguelike$components$map_view_$_iter__69011_$_iter__69013(s__69014){
return (new cljs.core.LazySeq(null,((function (s__69012__$1,y,xs__4977__auto__,temp__4425__auto__,vec__69009,width,height,vec__69010,player_x,player_y,pixel_position){
return (function (){
var s__69014__$1 = s__69014;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__69014__$1);
if(temp__4425__auto____$1){
var s__69014__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__69014__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__69014__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__69016 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__69015 = (0);
while(true){
if((i__69015 < size__17597__auto__)){
var x = cljs.core._nth.call(null,c__17596__auto__,i__69015);
var tile = puzzle_roguelike.map.get_tile_at.call(null,tiles,x,y);
cljs.core.chunk_append.call(null,b__69016,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.tile_view,tile,x,y,out_chan], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(x),cljs.core.str(":"),cljs.core.str(y)].join('')], null)));

var G__69017 = (i__69015 + (1));
i__69015 = G__69017;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69016),puzzle_roguelike$components$map_view_$_iter__69011_$_iter__69013.call(null,cljs.core.chunk_rest.call(null,s__69014__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69016),null);
}
} else {
var x = cljs.core.first.call(null,s__69014__$2);
var tile = puzzle_roguelike.map.get_tile_at.call(null,tiles,x,y);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.tile_view,tile,x,y,out_chan], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(x),cljs.core.str(":"),cljs.core.str(y)].join('')], null)),puzzle_roguelike$components$map_view_$_iter__69011_$_iter__69013.call(null,cljs.core.rest.call(null,s__69014__$2)));
}
} else {
return null;
}
break;
}
});})(s__69012__$1,y,xs__4977__auto__,temp__4425__auto__,vec__69009,width,height,vec__69010,player_x,player_y,pixel_position))
,null,null));
});})(s__69012__$1,y,xs__4977__auto__,temp__4425__auto__,vec__69009,width,height,vec__69010,player_x,player_y,pixel_position))
;
var fs__17595__auto__ = cljs.core.seq.call(null,iterys__17594__auto__.call(null,cljs.core.range.call(null,width)));
if(fs__17595__auto__){
return cljs.core.concat.call(null,fs__17595__auto__,puzzle_roguelike$components$map_view_$_iter__69011.call(null,cljs.core.rest.call(null,s__69012__$1)));
} else {
var G__69018 = cljs.core.rest.call(null,s__69012__$1);
s__69012__$1 = G__69018;
continue;
}
} else {
return null;
}
break;
}
});})(vec__69009,width,height,vec__69010,player_x,player_y,pixel_position))
,null,null));
});})(vec__69009,width,height,vec__69010,player_x,player_y,pixel_position))
;
return iter__17598__auto__.call(null,cljs.core.range.call(null,height));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.player_view,position,out_chan], null)], null);
});
puzzle_roguelike.components.stat = (function puzzle_roguelike$components$stat(header,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.stat-header","span.stat-header",1986431861),header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.stat-value","span.stat-value",-1328493845),value], null)], null);
});
puzzle_roguelike.components.stats_view = (function puzzle_roguelike$components$stats_view(player){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stats","div.stats",399263141),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.stat,"hp: ",[cljs.core.str(new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(player)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696).cljs$core$IFn$_invoke$arity$1(player))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.stat,"atk: ",new cljs.core.Keyword(null,"atk","atk",-473986036).cljs$core$IFn$_invoke$arity$1(player)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.stat,"def: ",new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(player)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.stat,"food: ",new cljs.core.Keyword(null,"food","food",1842183121).cljs$core$IFn$_invoke$arity$1(player)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.stat,"xp: ",new cljs.core.Keyword(null,"xp","xp",550374458).cljs$core$IFn$_invoke$arity$1(player)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.stat,"gold: ",new cljs.core.Keyword(null,"gold","gold",-806826416).cljs$core$IFn$_invoke$arity$1(player)], null)], null);
});
puzzle_roguelike.components.message = (function puzzle_roguelike$components$message(message__$1,idx){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message","div.message",197515312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),idx], null)], null),message__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null));
});
puzzle_roguelike.components.message_log = (function puzzle_roguelike$components$message_log(messages){
var msg_count = cljs.core.count.call(null,messages);
var get_opacities = ((function (msg_count){
return (function (n){
return (n / (msg_count - (1)));
});})(msg_count))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message-log","div.message-log",209482833),cljs.core.map.call(null,puzzle_roguelike.components.message,messages,cljs.core.map.call(null,get_opacities,cljs.core.range.call(null,msg_count,(0),(-1))))], null);
});

//# sourceMappingURL=components.js.map?rel=1453137891873