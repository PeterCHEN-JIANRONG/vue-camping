(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29a36bdf"],{"06c5":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("fb6a"),r("d3b7"),r("b0c0"),r("a630"),r("3ca3");var c=r("6b75");function o(e,t){if(e){if("string"===typeof e)return Object(c["a"])(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(c["a"])(e,t):void 0}}},2532:function(e,t,r){"use strict";var c=r("23e7"),o=r("5a34"),a=r("1d80"),i=r("ab13");c({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~String(a(this)).indexOf(o(e),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,r){var c=r("861d"),o=r("c6b6"),a=r("b622"),i=a("match");e.exports=function(e){var t;return c(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==o(e))}},"466d":function(e,t,r){"use strict";var c=r("d784"),o=r("825a"),a=r("50c4"),i=r("1d80"),n=r("8aa5"),s=r("14c3");c("match",1,(function(e,t,r){return[function(t){var r=i(this),c=void 0==t?void 0:t[e];return void 0!==c?c.call(t,r):new RegExp(t)[e](String(r))},function(e){var c=r(t,e,this);if(c.done)return c.value;var i=o(e),l=String(this);if(!i.global)return s(i,l);var d=i.unicode;i.lastIndex=0;var u,b=[],f=0;while(null!==(u=s(i,l))){var p=String(u[0]);b[f]=p,""===p&&(i.lastIndex=n(l,a(i.lastIndex),d)),f++}return 0===f?null:b}]}))},"498a":function(e,t,r){"use strict";var c=r("23e7"),o=r("58a8").trim,a=r("c8d2");c({target:"String",proto:!0,forced:a("trim")},{trim:function(){return o(this)}})},"4df4":function(e,t,r){"use strict";var c=r("0366"),o=r("7b0b"),a=r("9bdd"),i=r("e95a"),n=r("50c4"),s=r("8418"),l=r("35a1");e.exports=function(e){var t,r,d,u,b,f,p=o(e),g="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,v=void 0!==m,y=l(p),O=0;if(v&&(m=c(m,h>2?arguments[2]:void 0,2)),void 0==y||g==Array&&i(y))for(t=n(p.length),r=new g(t);t>O;O++)f=v?m(p[O],O):p[O],s(r,O,f);else for(u=y.call(p),b=u.next,r=new g;!(d=b.call(u)).done;O++)f=v?a(u,m,[d.value,O],!0):d.value,s(r,O,f);return r.length=O,r}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var c=r("1d80"),o=r("5899"),a="["+o+"]",i=RegExp("^"+a+a+"*"),n=RegExp(a+a+"*$"),s=function(e){return function(t){var r=String(c(t));return 1&e&&(r=r.replace(i,"")),2&e&&(r=r.replace(n,"")),r}};e.exports={start:s(1),end:s(2),trim:s(3)}},"5a34":function(e,t,r){var c=r("44e7");e.exports=function(e){if(c(e))throw TypeError("The method doesn't accept regular expressions");return e}},"6b75":function(e,t,r){"use strict";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,c=new Array(t);r<t;r++)c[r]=e[r];return c}r.d(t,"a",(function(){return c}))},"6dab":function(e,t,r){},"9bdd":function(e,t,r){var c=r("825a"),o=r("2a62");e.exports=function(e,t,r,a){try{return a?t(c(r)[0],r[1]):t(r)}catch(i){throw o(e),i}}},a434:function(e,t,r){"use strict";var c=r("23e7"),o=r("23cb"),a=r("a691"),i=r("50c4"),n=r("7b0b"),s=r("65f0"),l=r("8418"),d=r("1dde"),u=d("splice"),b=Math.max,f=Math.min,p=9007199254740991,g="Maximum allowed length exceeded";c({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var r,c,d,u,h,m,v=n(this),y=i(v.length),O=o(e,y),j=arguments.length;if(0===j?r=c=0:1===j?(r=0,c=y-O):(r=j-2,c=f(b(a(t),0),y-O)),y+r-c>p)throw TypeError(g);for(d=s(v,c),u=0;u<c;u++)h=O+u,h in v&&l(d,u,v[h]);if(d.length=c,r<c){for(u=O;u<y-c;u++)h=u+c,m=u+r,h in v?v[m]=v[h]:delete v[m];for(u=y;u>y-c+r;u--)delete v[u-1]}else if(r>c)for(u=y-c;u>O;u--)h=u+c-1,m=u+r-1,h in v?v[m]=v[h]:delete v[m];for(u=0;u<r;u++)v[u+O]=arguments[u+2];return v.length=y-c+r,d}})},a4da:function(e,t,r){"use strict";r("6dab")},a630:function(e,t,r){var c=r("23e7"),o=r("4df4"),a=r("1c7e"),i=!a((function(e){Array.from(e)}));c({target:"Array",stat:!0,forced:i},{from:o})},ab13:function(e,t,r){var c=r("b622"),o=c("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[o]=!1,"/./"[e](t)}catch(c){}}return!1}},b0c0:function(e,t,r){var c=r("83ab"),o=r("9bf2").f,a=Function.prototype,i=a.toString,n=/^\s*function ([^ (]*)/,s="name";c&&!(s in a)&&o(a,s,{configurable:!0,get:function(){try{return i.call(this).match(n)[1]}catch(e){return""}}})},c8d2:function(e,t,r){var c=r("d039"),o=r("5899"),a="​᠎";e.exports=function(e){return c((function(){return!!o[e]()||a[e]()!=a||o[e].name!==e}))}},caad:function(e,t,r){"use strict";var c=r("23e7"),o=r("4d64").includes,a=r("44d2");c({target:"Array",proto:!0},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d28b:function(e,t,r){var c=r("746f");c("iterator")},e6dc:function(e,t,r){"use strict";r.r(t);r("caad"),r("2532");var c=r("7a23"),o=Object(c["withScopeId"])("data-v-2be56898");Object(c["pushScopeId"])("data-v-2be56898");var a=Object(c["createVNode"])("div",{class:"banner"},null,-1),i={class:"container"},n={class:"d-flex justify-content-between align-items-center my-3 h6"},s={"aria-label":"breadcrumb",style:{"--bs-breadcrumb-divider":"'>'"}},l={class:"breadcrumb mb-0"},d={class:"breadcrumb-item"},u=Object(c["createTextVNode"])("首頁"),b={class:"breadcrumb-item"},f=Object(c["createTextVNode"])("產品"),p={class:"breadcrumb-item active","aria-current":"page"},g={class:"search"},h=Object(c["createVNode"])("i",{class:"bi bi-search h4",title:"搜尋"},null,-1),m=Object(c["createVNode"])("hr",{class:"my-3"},null,-1),v={class:"row"},y={class:"col-md-3 mb-4"},O={class:"list-group",id:"main"},j={class:"col-md-9"},k={class:"row"},C={key:0,class:"bg-danger text-white d-inline-block px-2 py-1"},w={class:"card-body d-flex flex-column justify-content-center"},N={class:"card-title h5"},x={key:0,class:"h5 text-center py-1"},V={key:0,class:"h6 text-decoration-line-through"},S={key:1,class:"h4 text-danger fw-bold"},B={key:2,class:"h4 fw-bold"},A=Object(c["createTextVNode"])(" 元 "),_={class:"btn-group btn-group-sm"},I={key:0,class:"bi bi-heart-fill"},L={key:1,class:"bi bi-heart"};Object(c["popScopeId"])();var F=o((function(e,t,r,F,M,$){var D=Object(c["resolveComponent"])("router-link"),E=Object(c["resolveComponent"])("Loading");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[a,Object(c["createVNode"])("div",i,[Object(c["createVNode"])("div",n,[Object(c["createVNode"])("nav",s,[Object(c["createVNode"])("ol",l,[Object(c["createVNode"])("li",d,[Object(c["createVNode"])(D,{to:"/"},{default:o((function(){return[u]})),_:1})]),Object(c["createVNode"])("li",b,[Object(c["createVNode"])(D,{to:"/products"},{default:o((function(){return[f]})),_:1})]),Object(c["createVNode"])("li",p,Object(c["toDisplayString"])(M.selectCategory?M.selectCategory:"全部商品"),1)])]),Object(c["createVNode"])("div",g,[Object(c["withDirectives"])(Object(c["createVNode"])("input",{title:"請輸入搜尋關鍵字",class:"me-2",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return M.searchKey=e}),placeholder:"請輸入搜尋關鍵字"},null,512),[[c["vModelText"],M.searchKey]]),h])]),m,Object(c["createVNode"])("div",v,[Object(c["createVNode"])("div",y,[Object(c["createVNode"])("div",O,[Object(c["createVNode"])("a",{href:"#",class:["list-group-item list-group-item-action list-group-item-secondary",{active:""===M.selectCategory}],onClick:t[2]||(t[2]=Object(c["withModifiers"])((function(e){return M.selectCategory=""}),["prevent"]))},"全部商品",2),Object(c["createVNode"])("a",{href:"#",class:["list-group-item list-group-item-action list-group-item-secondary",{active:"特價商品"===M.selectCategory}],onClick:t[3]||(t[3]=Object(c["withModifiers"])((function(e){return M.selectCategory="特價商品"}),["prevent"]))},"特價商品",2),Object(c["createVNode"])("a",{href:"#",class:["list-group-item list-group-item-action list-group-item-secondary",{active:"暢銷商品"===M.selectCategory}],onClick:t[4]||(t[4]=Object(c["withModifiers"])((function(e){return M.selectCategory="暢銷商品"}),["prevent"]))},"暢銷商品",2),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(M.categories,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("a",{href:"#",key:e,class:["list-group-item list-group-item-action list-group-item-secondary",{active:M.selectCategory===e}],onClick:Object(c["withModifiers"])((function(t){return M.selectCategory=e}),["prevent"])},Object(c["toDisplayString"])(e),11,["onClick"])})),128))])]),Object(c["createVNode"])("div",j,[Object(c["createVNode"])("div",k,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])($.filterProducts,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:"col-md-6 col-lg-4 mb-4",key:t.id},[Object(c["createVNode"])("div",{class:"card",onClick:function(e){return $.pushProductPage(t)}},[Object(c["createVNode"])("div",{class:"card__img position-relative",style:{backgroundImage:"url('".concat(t.imageUrl,"')")}},[t.options.sell_status?(Object(c["openBlock"])(),Object(c["createBlock"])("span",C,Object(c["toDisplayString"])(t.options.sell_status),1)):Object(c["createCommentVNode"])("",!0)],4),Object(c["createVNode"])("div",w,[Object(c["createVNode"])("h2",N,Object(c["toDisplayString"])(t.title),1),t.price?(Object(c["openBlock"])(),Object(c["createBlock"])("div",x,[t.price!=t.origin_price?(Object(c["openBlock"])(),Object(c["createBlock"])("span",V," $"+Object(c["toDisplayString"])(e.$filters.currency(t.origin_price)),1)):Object(c["createCommentVNode"])("",!0),t.price!=t.origin_price?(Object(c["openBlock"])(),Object(c["createBlock"])("span",S," $"+Object(c["toDisplayString"])(e.$filters.currency(t.price)),1)):Object(c["createCommentVNode"])("",!0),t.price==t.origin_price?(Object(c["openBlock"])(),Object(c["createBlock"])("span",B," $"+Object(c["toDisplayString"])(e.$filters.currency(t.price)),1)):Object(c["createCommentVNode"])("",!0),A])):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])("div",_,[Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-danger btn__favorite",onClick:Object(c["withModifiers"])((function(r){return e.addMyFavorite(t)}),["stop"])},[M.myFavorite.includes(t.id)?(Object(c["openBlock"])(),Object(c["createBlock"])("i",I)):(Object(c["openBlock"])(),Object(c["createBlock"])("i",L))],8,["onClick"]),Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-primary",onClick:Object(c["withModifiers"])((function(e){return $.addCart(t.id)}),["stop"]),disabled:M.loadingStatus.loadingItem===t.id||!t.is_enabled}," 加到購物車 ",8,["onClick","disabled"])])])],8,["onClick"])])})),128))])])])]),Object(c["createVNode"])(E,{active:M.isLoading},null,8,["active"])],64)})),M=r("6b75");function $(e){if(Array.isArray(e))return Object(M["a"])(e)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function D(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var E=r("06c5");function P(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function T(e){return $(e)||D(e)||Object(E["a"])(e)||P()}r("99af"),r("6062"),r("159b"),r("4de4"),r("ac1f"),r("466d"),r("498a"),r("a434");var K=r("37ca");function J(e){var t=JSON.stringify(e);localStorage.setItem("campingFavorite",t)}function R(){return JSON.parse(localStorage.getItem("campingFavorite"))}var U={methods:{addMyFavorite:function(e){this.myFavorite.includes(e.id)?(this.myFavorite.splice(this.myFavorite.indexOf(e.id),1),K["a"].emit("push-message",{style:"danger",title:"移除最愛成功"})):(K["a"].emit("push-message",{style:"success",title:"加入最愛成功"}),this.myFavorite.push(e.id)),J(this.myFavorite)}},mounted:function(){this.myFavorite=R()||[]}},q={data:function(){return{products:[],product:{},isLoading:!1,loadingStatus:{loadingItem:""},categories:[],selectCategory:"",searchKey:"",myFavorite:[]}},mixins:[U],methods:{getProducts:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peter1024","/products/all");this.$http.get(t).then((function(t){t.data.success?(e.products=t.data.products,e.getCategories()):e.errorAlert(t.data.message),e.isLoading=!1})).catch((function(e){console.dir(e)}))},getCategories:function(){var e=new Set;this.products.forEach((function(t){e.add(t.category)})),this.categories=T(e)},pushProductPage:function(e){this.$router.push("/product/".concat(e.id))},addCart:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0,this.loadingStatus.loadingItem=e;var c={product_id:e,qty:r},o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peter1024","/cart");this.$http.post(o,{data:c}).then((function(e){t.isLoading=!1,t.loadingStatus.loadingItem="",t.$httpMessageState(e,e.data.message),e.data.success&&K["a"].emit("update-cartNum")})).catch((function(e){console.dir(e)}))}},computed:{filterProducts:function(){var e=this;return""===this.selectCategory?this.products.filter((function(t){return t.title.trim().toLowerCase().match(e.searchKey.trim().toLowerCase())})):"特價商品"===this.selectCategory?this.products.filter((function(t){return t.price!==t.origin_price&&t.title.trim().toLowerCase().match(e.searchKey.trim().toLowerCase())})):"暢銷商品"===this.selectCategory?this.products.filter((function(t){return""!==t.options.sell_status&&t.title.trim().toLowerCase().match(e.searchKey.trim().toLowerCase())})):this.products.filter((function(t){return t.category===e.selectCategory&&t.title.trim().toLowerCase().match(e.searchKey.trim().toLowerCase())}))}},created:function(){this.getProducts(),"all"===this.$route.params.selectCategory?this.selectCategory="":this.selectCategory=this.$route.params.selectCategory}};r("a4da");q.render=F,q.__scopeId="data-v-2be56898";t["default"]=q},fb6a:function(e,t,r){"use strict";var c=r("23e7"),o=r("861d"),a=r("e8b5"),i=r("23cb"),n=r("50c4"),s=r("fc6a"),l=r("8418"),d=r("b622"),u=r("1dde"),b=u("slice"),f=d("species"),p=[].slice,g=Math.max;c({target:"Array",proto:!0,forced:!b},{slice:function(e,t){var r,c,d,u=s(this),b=n(u.length),h=i(e,b),m=i(void 0===t?b:t,b);if(a(u)&&(r=u.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?o(r)&&(r=r[f],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(u,h,m);for(c=new(void 0===r?Array:r)(g(m-h,0)),d=0;h<m;h++,d++)h in u&&l(c,d,u[h]);return c.length=d,c}})}}]);
//# sourceMappingURL=chunk-29a36bdf.636b7fb0.js.map