(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{169:function(t,e,n){var content=n(181);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("acd32e82",content,!0,{sourceMap:!1})},178:function(t,e,n){var r=n(6),c=n(179)(!1);r(r.S,"Object",{values:function(t){return c(t)}})},179:function(t,e,n){var r=n(7),c=n(27),o=n(20),l=n(48).f;t.exports=function(t){return function(e){for(var n,f=o(e),d=c(f),h=d.length,i=0,v=[];h>i;)n=d[i++],r&&!l.call(f,n)||v.push(t?[n,f[n]]:f[n]);return v}}},180:function(t,e,n){"use strict";var r=n(169);n.n(r).a},181:function(t,e,n){(e=n(35)(!1)).push([t.i,'.worksans{font-family:"Work Sans",sans-serif}#menu-toggle:checked+#menu{display:block}.hover\\:grow{transition:all .3s;transform:scale(1)}.hover\\:grow:hover{transform:scale(1.02)}.carousel-open:checked+.carousel-item{position:static;opacity:1}.carousel-item{transition:opacity .6s ease-out}#carousel-1:checked~.control-1,#carousel-2:checked~.control-2,#carousel-3:checked~.control-3{display:block}.carousel-indicators{list-style:none;margin:0;padding:0;position:absolute;bottom:2%;left:0;right:0;text-align:center;z-index:10}#carousel-1:checked~.control-1~.carousel-indicators li:first-child .carousel-bullet,#carousel-2:checked~.control-2~.carousel-indicators li:nth-child(2) .carousel-bullet,#carousel-3:checked~.control-3~.carousel-indicators li:nth-child(3) .carousel-bullet{color:#000}',""]),t.exports=e},198:function(t,e,n){"use strict";n.r(e);n(24),n(9),n(178),n(14);var r=n(2),c={fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("topics").fetch();case 2:n=e.sent,t.topicsList=Object.values(n).filter((function(t){return!!t.path}));case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{topicsList:[]}}},o=(n(180),n(22)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"bg-white py-8"},[n("div",{staticClass:"container mx-auto flex items-center flex-wrap pt-4 pb-12"},[t._m(0),t._v(" "),t._l(t.topicsList,(function(e,r){return n("div",{key:e.slug,staticClass:"w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col justify-center"},[n("nuxt-link",{attrs:{to:e.slug}},[n("img",{staticClass:"hover:grow hover:shadow-lg",attrs:{src:e.image||"https://picsum.photos/id/"+r+"/300/300"}}),t._v(" "),n("div",{staticClass:"pt-3 flex items-center justify-between"},[n("p",{staticClass:"font-bold"},[t._v(t._s(e.title))])])])],1)}))],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"w-full z-30 top-0 px-6 py-1 sticky bg-white",staticStyle:{top:"90px"},attrs:{id:"store"}},[e("div",{staticClass:"w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3"},[e("div",{staticClass:"uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl",attrs:{href:"#"}},[this._v("\n          Topics\n        ")])])])}],!1,null,null,null);e.default=component.exports}}]);