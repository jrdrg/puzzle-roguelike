// Compiled by ClojureScript 1.7.170 {}
goog.provide('puzzle_roguelike.components');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('puzzle_roguelike.map');
goog.require('puzzle_roguelike.state');
goog.require('puzzle_roguelike.images');
puzzle_roguelike.components.tile_size = (48);
puzzle_roguelike.components.scaled_img_size = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(48)], null);
puzzle_roguelike.components.monster_tiles = "Monsters.png";
puzzle_roguelike.components.terrain_tiles = "Terrain_Objects.png";
puzzle_roguelike.components.item_tiles = "Items.png";
puzzle_roguelike.components.scale_factors = cljs.core.mapv.call(null,(function (p1__66181_SHARP_,p2__66182_SHARP_){
return (p1__66181_SHARP_ / p2__66182_SHARP_);
}),puzzle_roguelike.components.scaled_img_size,puzzle_roguelike.images.sprite_image_size);
puzzle_roguelike.components.sprite_to_string = (function puzzle_roguelike$components$sprite_to_string(p__66183){
var vec__66185 = p__66183;
var x = cljs.core.nth.call(null,vec__66185,(0),null);
var y = cljs.core.nth.call(null,vec__66185,(1),null);
return [cljs.core.str(x),cljs.core.str("px "),cljs.core.str(y),cljs.core.str("px")].join('');
});
puzzle_roguelike.components.transform_scale = (function puzzle_roguelike$components$transform_scale(){
var vec__66187 = puzzle_roguelike.components.scale_factors;
var scale_factor_x = cljs.core.nth.call(null,vec__66187,(0),null);
var scale_factor_y = cljs.core.nth.call(null,vec__66187,(1),null);
return [cljs.core.str("scaleX("),cljs.core.str(scale_factor_x),cljs.core.str(") scaleY("),cljs.core.str(scale_factor_y),cljs.core.str(")")].join('');
});
puzzle_roguelike.components.entity_view = (function puzzle_roguelike$components$entity_view(tile_x,tile_y,tiles_img,sprite){
var vec__66189 = puzzle_roguelike.images.sprite_image_size;
var img_size_x = cljs.core.nth.call(null,vec__66189,(0),null);
var img_size_y = cljs.core.nth.call(null,vec__66189,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.scaled-image.sprite","div.scaled-image.sprite",-1303983363),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),[cljs.core.str("url("),cljs.core.str(tiles_img),cljs.core.str(") "),cljs.core.str(sprite)].join(''),new cljs.core.Keyword(null,"width","width",-384071477),img_size_x,new cljs.core.Keyword(null,"height","height",1025178622),img_size_y], null)], null)], null);
});
puzzle_roguelike.components.tile_view = (function puzzle_roguelike$components$tile_view(x,y,tile,enemy,item,player_QMARK_,out_chan){
var vec__66192 = puzzle_roguelike.images.sprite_image_size;
var img_size_x = cljs.core.nth.call(null,vec__66192,(0),null);
var img_size_y = cljs.core.nth.call(null,vec__66192,(1),null);
var entity = (function (){var or__16826__auto__ = enemy;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var or__16826__auto____$1 = item;
if(cljs.core.truth_(or__16826__auto____$1)){
return or__16826__auto____$1;
} else {
return tile;
}
}
})();
var symbol = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(entity);
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(entity);
var sprite = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__66192,img_size_x,img_size_y,entity,symbol,color){
return (function (p1__66190_SHARP_){
return [cljs.core.str(p1__66190_SHARP_),cljs.core.str("px ")].join('');
});})(vec__66192,img_size_x,img_size_y,entity,symbol,color))
,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(entity)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.noselect.scaled-image","div.tile.noselect.scaled-image",-2090419249),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),[cljs.core.str("url("),cljs.core.str(puzzle_roguelike.components.terrain_tiles),cljs.core.str(") "),cljs.core.str(puzzle_roguelike.components.sprite_to_string.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(tile))),cljs.core.str(" black")].join(''),new cljs.core.Keyword(null,"transform","transform",1381301764),puzzle_roguelike.components.transform_scale.call(null),new cljs.core.Keyword(null,"color","color",1011675173),(function (){var or__16826__auto__ = color;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "antiquewhite";
}
})(),new cljs.core.Keyword(null,"top","top",-1856271961),(y * puzzle_roguelike.components.tile_size),new cljs.core.Keyword(null,"left","left",-399115937),(x * puzzle_roguelike.components.tile_size),new cljs.core.Keyword(null,"height","height",1025178622),img_size_y,new cljs.core.Keyword(null,"width","width",-384071477),img_size_x], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__66192,img_size_x,img_size_y,entity,symbol,color,sprite){
return (function (event){
cljs.core.async.put_BANG_.call(null,out_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));

return null;
});})(vec__66192,img_size_x,img_size_y,entity,symbol,color,sprite))
], null),(cljs.core.truth_(enemy)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.entity_view,x,y,puzzle_roguelike.components.monster_tiles,sprite], null):(cljs.core.truth_(item)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.entity_view,x,y,puzzle_roguelike.components.item_tiles,sprite], null):null))], null);
});
puzzle_roguelike.components.player_view = (function puzzle_roguelike$components$player_view(p__66193,out_chan){
var vec__66196 = p__66193;
var x = cljs.core.nth.call(null,vec__66196,(0),null);
var y = cljs.core.nth.call(null,vec__66196,(1),null);
var vec__66197 = puzzle_roguelike.images.sprite_image_size;
var img_size_x = cljs.core.nth.call(null,vec__66197,(0),null);
var img_size_y = cljs.core.nth.call(null,vec__66197,(1),null);
var pos_x = (x * puzzle_roguelike.components.tile_size);
var pos_y = (y * puzzle_roguelike.components.tile_size);
var sprite = puzzle_roguelike.components.sprite_to_string.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(puzzle_roguelike.images.player));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.player.tile.noselect","div.player.tile.noselect",-1153715743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),pos_y,new cljs.core.Keyword(null,"left","left",-399115937),pos_x,new cljs.core.Keyword(null,"width","width",-384071477),puzzle_roguelike.components.tile_size,new cljs.core.Keyword(null,"height","height",1025178622),puzzle_roguelike.components.tile_size], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__66197,img_size_x,img_size_y,pos_x,pos_y,sprite,vec__66196,x,y){
return (function (event){
cljs.core.async.put_BANG_.call(null,out_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stairs-down","stairs-down",951351901),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));

return null;
});})(vec__66197,img_size_x,img_size_y,pos_x,pos_y,sprite,vec__66196,x,y))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile.scaled-image","div.tile.scaled-image",-948844543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),[cljs.core.str("url("),cljs.core.str(puzzle_roguelike.components.monster_tiles),cljs.core.str(") "),cljs.core.str(sprite)].join(''),new cljs.core.Keyword(null,"transform","transform",1381301764),puzzle_roguelike.components.transform_scale.call(null),new cljs.core.Keyword(null,"width","width",-384071477),img_size_x,new cljs.core.Keyword(null,"height","height",1025178622),img_size_y], null)], null)], null),""], null);
});
puzzle_roguelike.components.map_view = (function puzzle_roguelike$components$map_view(tiles,enemies,items,position,out_chan){
var vec__66206 = puzzle_roguelike.map.map_size;
var width = cljs.core.nth.call(null,vec__66206,(0),null);
var height = cljs.core.nth.call(null,vec__66206,(1),null);
var vec__66207 = position;
var player_x = cljs.core.nth.call(null,vec__66207,(0),null);
var player_y = cljs.core.nth.call(null,vec__66207,(1),null);
var pixel_position = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(player_x * puzzle_roguelike.components.tile_size),(player_y * puzzle_roguelike.components.tile_size)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map","div.map",-288957849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(puzzle_roguelike.components.tile_size * height),new cljs.core.Keyword(null,"width","width",-384071477),(puzzle_roguelike.components.tile_size * width),new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),(puzzle_roguelike.components.tile_size * width)], null)], null),(function (){var iter__17598__auto__ = ((function (vec__66206,width,height,vec__66207,player_x,player_y,pixel_position){
return (function puzzle_roguelike$components$map_view_$_iter__66208(s__66209){
return (new cljs.core.LazySeq(null,((function (vec__66206,width,height,vec__66207,player_x,player_y,pixel_position){
return (function (){
var s__66209__$1 = s__66209;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__66209__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var y = cljs.core.first.call(null,xs__4977__auto__);
var iterys__17594__auto__ = ((function (s__66209__$1,y,xs__4977__auto__,temp__4425__auto__,vec__66206,width,height,vec__66207,player_x,player_y,pixel_position){
return (function puzzle_roguelike$components$map_view_$_iter__66208_$_iter__66210(s__66211){
return (new cljs.core.LazySeq(null,((function (s__66209__$1,y,xs__4977__auto__,temp__4425__auto__,vec__66206,width,height,vec__66207,player_x,player_y,pixel_position){
return (function (){
var s__66211__$1 = s__66211;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__66211__$1);
if(temp__4425__auto____$1){
var s__66211__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__66211__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__66211__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__66213 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__66212 = (0);
while(true){
if((i__66212 < size__17597__auto__)){
var x = cljs.core._nth.call(null,c__17596__auto__,i__66212);
var tile = puzzle_roguelike.map.get_tile_at.call(null,tiles,x,y);
var enemy = cljs.core.get.call(null,enemies,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var item = cljs.core.get.call(null,items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var item_QMARK_ = cljs.core.contains_QMARK_.call(null,items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
cljs.core.chunk_append.call(null,b__66213,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.tile_view,x,y,tile,enemy,item,cljs.core._EQ_.call(null,position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),out_chan], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("T"),cljs.core.str(x),cljs.core.str(":"),cljs.core.str(y)].join('')], null))
);

var G__66214 = (i__66212 + (1));
i__66212 = G__66214;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66213),puzzle_roguelike$components$map_view_$_iter__66208_$_iter__66210.call(null,cljs.core.chunk_rest.call(null,s__66211__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66213),null);
}
} else {
var x = cljs.core.first.call(null,s__66211__$2);
var tile = puzzle_roguelike.map.get_tile_at.call(null,tiles,x,y);
var enemy = cljs.core.get.call(null,enemies,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var item = cljs.core.get.call(null,items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var item_QMARK_ = cljs.core.contains_QMARK_.call(null,items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.tile_view,x,y,tile,enemy,item,cljs.core._EQ_.call(null,position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),out_chan], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("T"),cljs.core.str(x),cljs.core.str(":"),cljs.core.str(y)].join('')], null))
,puzzle_roguelike$components$map_view_$_iter__66208_$_iter__66210.call(null,cljs.core.rest.call(null,s__66211__$2)));
}
} else {
return null;
}
break;
}
});})(s__66209__$1,y,xs__4977__auto__,temp__4425__auto__,vec__66206,width,height,vec__66207,player_x,player_y,pixel_position))
,null,null));
});})(s__66209__$1,y,xs__4977__auto__,temp__4425__auto__,vec__66206,width,height,vec__66207,player_x,player_y,pixel_position))
;
var fs__17595__auto__ = cljs.core.seq.call(null,iterys__17594__auto__.call(null,cljs.core.range.call(null,width)));
if(fs__17595__auto__){
return cljs.core.concat.call(null,fs__17595__auto__,puzzle_roguelike$components$map_view_$_iter__66208.call(null,cljs.core.rest.call(null,s__66209__$1)));
} else {
var G__66215 = cljs.core.rest.call(null,s__66209__$1);
s__66209__$1 = G__66215;
continue;
}
} else {
return null;
}
break;
}
});})(vec__66206,width,height,vec__66207,player_x,player_y,pixel_position))
,null,null));
});})(vec__66206,width,height,vec__66207,player_x,player_y,pixel_position))
;
return iter__17598__auto__.call(null,cljs.core.range.call(null,height));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.player_view,position,out_chan], null)], null);
});
puzzle_roguelike.components.stat = (function puzzle_roguelike$components$stat(header,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.stat-header","span.stat-header",1986431861),header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.stat-value","span.stat-value",-1328493845),value], null)], null);
});
puzzle_roguelike.components.stats_view = (function puzzle_roguelike$components$stats_view(player,floor){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stats","div.stats",399263141),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.floor-indicator","div.floor-indicator",2145523018),[cljs.core.str("floor "),cljs.core.str(floor)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.stat,"hp",[cljs.core.str(new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(player)),cljs.core.str(" / "),cljs.core.str(new cljs.core.Keyword(null,"max-hp","max-hp",-1065196696).cljs$core$IFn$_invoke$arity$1(player))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.stat,"atk",new cljs.core.Keyword(null,"atk","atk",-473986036).cljs$core$IFn$_invoke$arity$1(player)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.stat,"def",new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(player)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.stat,"food",new cljs.core.Keyword(null,"food","food",1842183121).cljs$core$IFn$_invoke$arity$1(player)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.stat,"xp",new cljs.core.Keyword(null,"xp","xp",550374458).cljs$core$IFn$_invoke$arity$1(player)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.stat,"level",new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(player)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.stat,"gold",new cljs.core.Keyword(null,"gold","gold",-806826416).cljs$core$IFn$_invoke$arity$1(player)], null)], null);
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
puzzle_roguelike.components.final_stat = (function puzzle_roguelike$components$final_stat(header,value){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(500)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(20)], null)], null),header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"width","width",-384071477),(300)], null)], null),value], null)], null);
});
puzzle_roguelike.components.game_over = (function puzzle_roguelike$components$game_over(player,floor){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Game Over",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(20),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.final_stat,"killed by",new cljs.core.Keyword(null,"cause-of-death","cause-of-death",-887003024).cljs$core$IFn$_invoke$arity$1(player)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.final_stat,"floor",floor], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.final_stat,"level",new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(player)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.final_stat,"gold",new cljs.core.Keyword(null,"gold","gold",-806826416).cljs$core$IFn$_invoke$arity$1(player)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
puzzle_roguelike.state.initialize_BANG_.call(null);

return null;
})], null),"try again"], null)], null);
});
puzzle_roguelike.components.game_play = (function puzzle_roguelike$components$game_play(events_chan,player,floor,tiles,enemies,items,position,messages){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game-wrapper","div.game-wrapper",115045040),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.map_view,tiles,enemies,items,position,events_chan], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.stats_view,player,floor], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [puzzle_roguelike.components.message_log,messages], null)], null);
});

//# sourceMappingURL=components.js.map?rel=1454508981896