webpackJsonp([1],{585:function(t,i,e){function n(t){e(625)}var s=e(10)(e(604),e(637),n,null,null);t.exports=s.exports},596:function(t,i,e){"use strict";function n(){var t=o()({},a.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq"});return e.i(l.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,a.c)}function s(t){var i=o()({},a.b,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:80,songstatus:1,singermid:t});return e.i(l.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",i,a.c)}i.b=n,i.a=s;var r=e(90),o=e.n(r),l=e(205),a=e(67)},597:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(68),s=e.n(n),r=e(206),o=e.n(r),l=e(133);i.default={created:function(){this.touch={},this.listenScroll=!0,this.listHeight=[],this.probeType=3},data:function(){return{scrollY:-1,currentIndex:0,diff:-1}},props:{data:{type:Array,default:[]}},computed:{shortcutList:function(){return this.data.map(function(t){return t.title.substr(0,1)})},fixedTitle:function(){return this.scrollY>0?"":this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},methods:{selectItem:function(t){this.$emit("select",t)},onShortcutTouchStart:function(t){var i=e.i(l.b)(t.target,"index"),n=t.touches[0];this.touch.y1=n.pageY,this.touch.anchorIndex=i,this._scrollTo(i)},onShortcutTouchMove:function(t){var i=t.touches[0];this.touch.y2=i.pageY;var e=(this.touch.y2-this.touch.y1)/18|0,n=parseInt(this.touch.anchorIndex)+e;this._scrollTo(n)},scroll:function(t){this.scrollY=t.y},refresh:function(){this.$refs.listview.refresh()},_scrollTo:function(t){(t||0===t)&&(t<0?t=0:t>this.listHeight.length-2&&(t=this.listHeight.length-2),this.scrollY=-this.listHeight[t],this.$refs.listview.scrollToElement(this.$refs.listGroup[t],0))},_calculateHeight:function(){this.listHeight=[];var t=this.$refs.listGroup,i=0;this.listHeight.push(i);for(var e=0;e<t.length;e++){i+=t[e].clientHeight,this.listHeight.push(i)}}},watch:{data:function(){var t=this;setTimeout(function(){t._calculateHeight()},20)},scrollY:function(t){var i=this.listHeight;if(t>0)return void(this.currentIndex=0);for(var e=0;e<i.length;e++){var n=i[e],s=i[e+1];if(-t>=n&&-t<s)return this.currentIndex=e,void(this.diff=s+t)}this.currentIndex=i.length-2},diff:function(t){var i=t>0&&t<30?t-30:0;this.fixedTop!==i&&(this.fixedTop=i,this.$refs.fixed.style.transform="translate3d(0,"+i+"px,0)")}},components:{Scroll:s.a,Loading:o.a}}},604:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(58),s=e.n(n),r=e(596),o=e(67),l=e(210),a=e(627),A=e.n(a),c=e(49),u=e(89);i.default={mixins:[u.c],data:function(){return{singers:[]}},created:function(){this._getSingerList()},methods:s()({handlePlaylist:function(t){var i=t.length>0?"60px":"";this.$refs.singer.style.bottom=i,this.$refs.list.refresh()},selectSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)},_getSingerList:function(){var t=this;e.i(r.b)().then(function(i){i.code===o.a&&(t.singers=t._normalizeSinger(i.data.list))})},_normalizeSinger:function(t){var i={hot:{title:"热门",items:[]}};t.forEach(function(t,e){e<10&&i.hot.items.push(new l.a({id:t.Fsinger_mid,name:t.Fsinger_name}));var n=t.Findex;i[n]||(i[n]={title:n,items:[]}),i[n].items.push(new l.a({id:t.Fsinger_mid,name:t.Fsinger_name}))});var e=[],n=[];for(var s in i){var r=i[s];r.title.match(/[a-zA-Z]/)?n.push(r):"热门"===r.title&&e.push(r)}return n.sort(function(t,i){return t.title.charCodeAt(0)-i.title.charCodeAt(0)}),e.concat(n)}},e.i(c.b)({setSinger:"SET_SINGER"})),components:{ListView:A.a}}},608:function(t,i,e){i=t.exports=e(578)(!0),i.push([t.i,".listview{position:relative;width:100%;height:100%;overflow:hidden;background:#222}.listview .list-group{padding-bottom:30px}.listview .list-group .list-group-title{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.listview .list-group .list-group-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:20px 0 0 30px}.listview .list-group .list-group-item .avatar{width:50px;height:50px;border-radius:50%}.listview .list-group .list-group-item .name{margin-left:20px;color:hsla(0,0%,100%,.5);font-size:14px}.listview .list-shortcut{position:absolute;z-index:30;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:20px;padding:20px 0;border-radius:10px;text-align:center;background:rgba(0,0,0,.3);font-family:Helvetica}.listview .list-shortcut .item{padding:3px;line-height:1;color:hsla(0,0%,100%,.5);font-size:12px}.listview .list-shortcut .item.current{color:#ffcd32}.listview .list-fixed{position:absolute;top:0;left:0;width:100%}.listview .list-fixed .fixed-title{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.listview .loading-container{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["/home/circleci/mern-starter/src/base/listview/listview.vue"],names:[],mappings:"AACA,UACE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,eAAiB,CAClB,AACD,sBACE,mBAAqB,CACtB,AACD,wCACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAA6B,AAC7B,eAAiB,CAClB,AACD,uCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,qBAAuB,CACxB,AACD,+CACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,6CACE,iBAAkB,AAClB,yBAA6B,AAC7B,cAAgB,CACjB,AACD,yBACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,QAAS,AACT,mCAAoC,AAC5B,2BAA4B,AACpC,WAAY,AACZ,eAAgB,AAChB,mBAAoB,AACpB,kBAAmB,AACnB,0BAA4B,AAC5B,qBAAuB,CACxB,AACD,+BACE,YAAa,AACb,cAAe,AACf,yBAA6B,AAC7B,cAAgB,CACjB,AACD,uCACE,aAAe,CAChB,AACD,sBACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,UAAY,CACb,AACD,mCACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAA6B,AAC7B,eAAiB,CAClB,AACD,6BACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"listview.vue",sourcesContent:["\n.listview {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #222;\n}\n.listview .list-group {\n  padding-bottom: 30px;\n}\n.listview .list-group .list-group-title {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .list-group .list-group-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px 0 0 30px;\n}\n.listview .list-group .list-group-item .avatar {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.listview .list-group .list-group-item .name {\n  margin-left: 20px;\n  color: rgba(255,255,255,0.5);\n  font-size: 14px;\n}\n.listview .list-shortcut {\n  position: absolute;\n  z-index: 30;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 20px;\n  padding: 20px 0;\n  border-radius: 10px;\n  text-align: center;\n  background: rgba(0,0,0,0.3);\n  font-family: Helvetica;\n}\n.listview .list-shortcut .item {\n  padding: 3px;\n  line-height: 1;\n  color: rgba(255,255,255,0.5);\n  font-size: 12px;\n}\n.listview .list-shortcut .item.current {\n  color: #ffcd32;\n}\n.listview .list-fixed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.listview .list-fixed .fixed-title {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .loading-container {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},615:function(t,i,e){i=t.exports=e(578)(!0),i.push([t.i,".singer{position:fixed;top:88px;bottom:0;width:100%}","",{version:3,sources:["/home/circleci/mern-starter/src/components/singer/singer.vue"],names:[],mappings:"AACA,QACE,eAAgB,AAChB,SAAU,AACV,SAAU,AACV,UAAY,CACb",file:"singer.vue",sourcesContent:["\n.singer {\n  position: fixed;\n  top: 88px;\n  bottom: 0;\n  width: 100%;\n}"],sourceRoot:""}])},618:function(t,i,e){var n=e(608);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(579)("3376d084",n,!0,{})},625:function(t,i,e){var n=e(615);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(579)("228216c9",n,!0,{})},627:function(t,i,e){function n(t){e(618)}var s=e(10)(e(597),e(630),n,null,null);t.exports=s.exports},630:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("scroll",{ref:"listview",staticClass:"listview",attrs:{data:t.data,listenScroll:t.listenScroll,probeType:t.probeType},on:{scroll:t.scroll}},[e("ul",t._l(t.data,function(i){return e("li",{ref:"listGroup",refInFor:!0,staticClass:"list-group"},[e("h2",{staticClass:"list-group-title"},[t._v(t._s(i.title))]),t._v(" "),e("ul",t._l(i.items,function(i){return e("li",{staticClass:"list-group-item",on:{click:function(e){t.selectItem(i)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.avatar,expression:"item.avatar"}],staticClass:"avatar"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(i.name))])])}),0)])}),0),t._v(" "),e("div",{staticClass:"list-shortcut",on:{touchstart:t.onShortcutTouchStart,touchmove:function(i){return i.stopPropagation(),i.preventDefault(),t.onShortcutTouchMove(i)}}},[e("ul",t._l(t.shortcutList,function(i,n){return e("li",{staticClass:"item",class:{current:t.currentIndex==n},attrs:{"data-index":n}},[t._v("\n        "+t._s(i)+"\n      ")])}),0)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle,expression:"fixedTitle"}],ref:"fixed",staticClass:"list-fixed"},[e("h1",{staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle))])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.data.length,expression:"!data.length"}],staticClass:"loading-container"},[e("loading")],1)])},staticRenderFns:[]}},637:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"singer",staticClass:"singer"},[e("list-view",{ref:"list",attrs:{data:t.singers},on:{select:t.selectSinger}}),t._v(" "),e("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=1.e003204e248c7ab944c7.js.map