(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{209:function(t,e,n){var content=n(212);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("625bf64c",content,!0,{sourceMap:!1})},211:function(t,e,n){"use strict";var r=n(209);n.n(r).a},212:function(t,e,n){(e=n(17)(!1)).push([t.i,".nuxt-content h1,h1{font-weight:700;font-size:28px}.nuxt-content h2{font-weight:700;font-size:20px}.nuxt-content h3{font-weight:700;font-size:22px}.nuxt-content p{margin-bottom:20px}",""]),t.exports=e},221:function(t,e,n){"use strict";n.r(e);n(16);var r=n(2),c={transition:"fade",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("topics",r.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()}},o=(n(211),n(11)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"w-full px-0",attrs:{id:"store"}},[n("div",{staticClass:"w-full container mx-auto flex flex-wrap items-center mt-0 py-3"},[n("nuxt-link",{staticClass:"text-gray-800 flex items-center opacity-50 hover:opacity-75",attrs:{to:"/"}},[n("svg",{attrs:{width:"20",height:"10",viewBox:"0 0 282 181",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M98.15 0.85303C93.816 0.998731 89.7406 2.68889 86.765 5.51553L5 80.1155C-1.13153 85.7654 -1.13153 95.4469 5 101.097L86.765 175.697C93.2014 181.612 103.745 181.729 110.311 175.93C116.877 170.131 117.006 160.631 110.57 154.716L56.4913 105.526H264.268C270.251 105.614 275.782 102.787 278.79 98.1244C281.83 93.4911 281.83 87.7212 278.79 83.0879C275.782 78.4254 270.251 75.5987 264.268 75.6861H56.4913L110.57 26.4968C115.551 22.1548 117.039 15.5108 114.257 9.77007C111.476 4.05851 105.072 0.503343 98.15 0.85303Z",fill:"currentColor"}})]),t._v(" "),n("div",{staticClass:"ml-2 tracking-wide no-underline hover:no-underline font-bold"},[t._v("\n          Go back\n        ")])])],1)]),t._v(" "),n("article",[n("div",{staticClass:"grid grid-cols-6 gap-5 mt-4"},[n("div",{staticClass:"order-2 sm:order-1 col-span-6 sm:col-span-4"},[n("h1",[t._v(t._s(t.article.title))]),t._v(" "),n("nuxt-content",{attrs:{document:t.article}})],1),t._v(" "),n("div",{staticClass:"order-1 sm:order-2 col-span-6 sm:col-span-2"},[t.article.documentTextLink?n("div",[n("div",{staticClass:"font-bold"},[t._v("Documents")]),t._v(" "),n("a",{attrs:{target:"_blank",href:t.article.documentLink}},[n("button",{staticClass:"my-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded inline-flex items-center shadow"},[n("svg",{staticClass:"fill-current w-4 h-4 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30"}},[n("path",{attrs:{d:"M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2 V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,21h-8c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1 C19,20.552,18.552,21,18,21z M20,17H10c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1h10c0.552,0,1,0.448,1,1C21,16.552,20.552,17,20,17 z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"}})]),t._v("\n              "+t._s(t.article.documentTextLink)+"\n            ")])])]):t._e(),t._v(" "),n("div",{staticClass:"mt-2 font-bold"},[t._v("Contact")]),t._v(" "),n("div",[t._v(t._s(t.article.contactName))]),t._v(" "),n("div",[n("a",{staticClass:"hover:text-blue-600",attrs:{href:"mailto:"+t.article.contactEmail}},[t._v("\n            "+t._s(t.article.contactEmail)+"\n          ")])]),t._v(" "),n("img",{staticClass:"mt-3",attrs:{src:t.article.image}}),t._v(" "),n("div",{staticClass:"text-s text-gray-500"},[t._v(t._s(t.article.creditsImage))])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);