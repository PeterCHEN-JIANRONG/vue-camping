(function(e){function n(n){for(var c,a,o=n[0],i=n[1],h=n[2],d=0,l=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);f&&f(n);while(l.length)l.shift()();return u.push.apply(u,h||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,a=1;a<t.length;a++){var o=t[a];0!==r[o]&&(c=!1)}c&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},a={app:0},r={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-181653ee":"28b8f017","chunk-2a66a18e":"4857a5c1","chunk-33b71de0":"b5070ad9","chunk-408a1ce1":"ca595b77","chunk-41ca1d16":"dacc04d0","chunk-41ecbf15":"9cbbacf3","chunk-4460c7cd":"df8055c1","chunk-55149c50":"1ac00daf","chunk-610d37c3":"ad37fb7a","chunk-4c8d2ee9":"53461d59","chunk-53587222":"442a83a5","chunk-5ebef650":"03c511e3","chunk-6a20cae6":"d13ee77e","chunk-742e390e":"6b8594a8","chunk-882cd096":"8bde0c7b","chunk-907a7c28":"3198227e","chunk-968a7f22":"cdd9b85e","chunk-b8b1554a":"6f4e4c38","chunk-d95a352c":"ccb9029c","chunk-e3550fb4":"812ee0cf"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-181653ee":1,"chunk-33b71de0":1,"chunk-610d37c3":1,"chunk-4c8d2ee9":1,"chunk-53587222":1,"chunk-5ebef650":1,"chunk-6a20cae6":1,"chunk-742e390e":1,"chunk-907a7c28":1,"chunk-968a7f22":1,"chunk-b8b1554a":1,"chunk-d95a352c":1,"chunk-e3550fb4":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-181653ee":"c7574ff5","chunk-2a66a18e":"31d6cfe0","chunk-33b71de0":"178a05a5","chunk-408a1ce1":"31d6cfe0","chunk-41ca1d16":"31d6cfe0","chunk-41ecbf15":"31d6cfe0","chunk-4460c7cd":"31d6cfe0","chunk-55149c50":"31d6cfe0","chunk-610d37c3":"9f1ae477","chunk-4c8d2ee9":"18b49bb3","chunk-53587222":"4b3406be","chunk-5ebef650":"d3a6d588","chunk-6a20cae6":"61661fdd","chunk-742e390e":"37029aae","chunk-882cd096":"31d6cfe0","chunk-907a7c28":"ef4ce808","chunk-968a7f22":"07031593","chunk-b8b1554a":"8b516a1e","chunk-d95a352c":"5ff835dc","chunk-e3550fb4":"154f8f1c"}[e]+".css",r=i.p+c,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var h=u[o],d=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(d===c||d===r))return n()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){h=l[o],d=h.getAttribute("data-href");if(d===c||d===r)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var c=n&&n.target&&n.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete a[e],f.parentNode.removeChild(f),t(u)},f.href=r;var s=document.getElementsByTagName("head")[0];s.appendChild(f)})).then((function(){a[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=u);var h,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(e);var l=new Error;h=function(n){d.onerror=d.onload=null,clearTimeout(f);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",l.name="ChunkLoadError",l.type=c,l.request=a,t[1](l)}r[e]=void 0}};var f=setTimeout((function(){h({type:"timeout",target:d})}),12e4);d.onerror=d.onload=h,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/dist/",i.oe=function(e){throw console.error(e),e};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],d=h.push.bind(h);h.push=n,h=h.slice();for(var l=0;l<h.length;l++)n(h[l]);var f=d;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"37ca":function(e,n,t){"use strict";var c=t("1344"),a=Object(c["a"])();n["a"]=a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("7a23"),a=(t("7b17"),t("bc3a")),r=t.n(a),u=t("2106"),o=t.n(u),i=t("f9d5"),h=t.n(i),d=(t("4413"),t("8a14")),l=(t("fe26"),t("3730")),f=t.n(l),s=t("7bb1"),p=t("3aa8"),b=t("cbdf"),m=t("9457"),k=(t("a15b"),t("37ca")),g=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"更新";if(e.data.success)k["a"].emit("push-message",{style:"success",title:"".concat(n,"成功")});else{var t="string"===typeof e.data.message?[e.data.message]:e.data.message;k["a"].emit("push-message",{style:"danger",title:"".concat(n,"失敗"),content:t.join("、")})}};t("ac1f"),t("5319"),t("b680");function v(e){var n=parseInt(e,10);return"".concat(n.toFixed(0).replace(/./g,(function(e,n,t){return n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e})))}function y(e){var n=new Date(1e3*e);return n.toLocaleDateString()}function O(e){var n=new Date(1e3*e);return n.toLocaleString()}function j(e,n){var t=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])(t)}t("a5fb");const w={};w.render=j;var P=w,S=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),_=[{path:"/",component:function(){return t.e("chunk-b8b1554a").then(t.bind(null,"4415"))},children:[{path:"",name:"首頁",component:function(){return t.e("chunk-e3550fb4").then(t.bind(null,"1dbc"))}},{path:"about",name:"關於我們",component:function(){return t.e("chunk-968a7f22").then(t.bind(null,"c7d9"))}},{path:"products/:selectCategory",name:"產品列表",component:function(){return t.e("chunk-6a20cae6").then(t.bind(null,"bd5a"))}},{path:"product/:id",name:"產品詳細頁",component:function(){return t.e("chunk-907a7c28").then(t.bind(null,"8a7d"))},props:function(e){return{id:e.params.id}}},{path:"carts",name:"購物車",component:function(){return t.e("chunk-53587222").then(t.bind(null,"0e71"))}},{path:"order",name:"購物車確認完成",component:function(){return t.e("chunk-d95a352c").then(t.bind(null,"d513"))}},{path:"checkout/:orderId",name:"付款頁",component:function(){return t.e("chunk-4c8d2ee9").then(t.bind(null,"9cff"))}},{path:"completed/:orderId",name:"付款完成頁",component:function(){return t.e("chunk-742e390e").then(t.bind(null,"7f44"))}},{path:"articles",name:"部落格列表",component:function(){return t.e("chunk-5ebef650").then(t.bind(null,"e627"))}},{path:"article/:articleId",name:"部落格頁",component:function(){return t.e("chunk-408a1ce1").then(t.bind(null,"b53e"))}},{path:"favorite",name:"我的最愛",component:function(){return t.e("chunk-181653ee").then(t.bind(null,"ca1c"))}}]},{path:"/login",name:"後台登入",component:function(){return t.e("chunk-882cd096").then(t.bind(null,"a55b"))}},{path:"/admin",component:function(){return t.e("chunk-2a66a18e").then(t.bind(null,"7171"))},children:[{path:"products",name:"產品管理頁",component:function(){return Promise.all([t.e("chunk-41ca1d16"),t.e("chunk-55149c50")]).then(t.bind(null,"8fa9"))}},{path:"orders",name:"訂單管理頁",component:function(){return Promise.all([t.e("chunk-41ca1d16"),t.e("chunk-4460c7cd")]).then(t.bind(null,"50e4"))}},{path:"coupons",name:"優惠券",component:function(){return Promise.all([t.e("chunk-41ca1d16"),t.e("chunk-41ecbf15")]).then(t.bind(null,"a15bd"))}},{path:"articles",name:"貼文",component:function(){return Promise.all([t.e("chunk-41ca1d16"),t.e("chunk-610d37c3")]).then(t.bind(null,"0bf2"))}}]},{path:"/:pathMatch(.*)*",name:"404頁",component:function(){return t.e("chunk-33b71de0").then(t.bind(null,"9703"))}}],C=Object(S["a"])({history:Object(S["b"])(),linkActiveClass:"active",routes:_,scrollBehavior:function(){return{top:0,behavior:"smooth"}}}),E=C;Object(s["e"])("required",p["d"]),Object(s["e"])("email",p["a"]),Object(s["e"])("min",p["c"]),Object(s["e"])("max",p["b"]),Object(s["d"])({generateMessage:Object(b["a"])({zh_TW:m}),validateOnInput:!0}),Object(b["b"])("zh_TW");var T=Object(c["createApp"])(P);T.config.globalProperties.$filters={date:y,currency:v,dateTime:O},T.config.globalProperties.$httpMessageState=g,T.use(o.a,r.a),T.use(h.a),T.use(E),T.use(f.a),T.component("Form",s["c"]),T.component("Field",s["b"]),T.component("ErrorMessage",s["a"]),T.component("Loading",d["a"]),T.mount("#app")},"76d0":function(e,n,t){},a5fb:function(e,n,t){"use strict";t("76d0")}});
//# sourceMappingURL=app.d496c087.js.map