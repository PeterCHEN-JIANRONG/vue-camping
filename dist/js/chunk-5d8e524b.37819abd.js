(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d8e524b"],{"06c5":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("fb6a"),r("d3b7"),r("b0c0"),r("a630"),r("3ca3");var c=r("6b75");function o(t,e){if(t){if("string"===typeof t)return Object(c["a"])(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(c["a"])(t,e):void 0}}},"202c":function(t,e,r){},2532:function(t,e,r){"use strict";var c=r("23e7"),o=r("5a34"),i=r("1d80"),n=r("ab13");c({target:"String",proto:!0,forced:!n("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,r){var c=r("861d"),o=r("c6b6"),i=r("b622"),n=i("match");t.exports=function(t){var e;return c(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==o(t))}},"466d":function(t,e,r){"use strict";var c=r("d784"),o=r("825a"),i=r("50c4"),n=r("1d80"),a=r("8aa5"),s=r("14c3");c("match",1,(function(t,e,r){return[function(e){var r=n(this),c=void 0==e?void 0:e[t];return void 0!==c?c.call(e,r):new RegExp(e)[t](String(r))},function(t){var c=r(e,t,this);if(c.done)return c.value;var n=o(t),l=String(this);if(!n.global)return s(n,l);var u=n.unicode;n.lastIndex=0;var d,f=[],p=0;while(null!==(d=s(n,l))){var b=String(d[0]);f[p]=b,""===b&&(n.lastIndex=a(l,i(n.lastIndex),u)),p++}return 0===p?null:f}]}))},"498a":function(t,e,r){"use strict";var c=r("23e7"),o=r("58a8").trim,i=r("c8d2");c({target:"String",proto:!0,forced:i("trim")},{trim:function(){return o(this)}})},"4df4":function(t,e,r){"use strict";var c=r("0366"),o=r("7b0b"),i=r("9bdd"),n=r("e95a"),a=r("50c4"),s=r("8418"),l=r("35a1");t.exports=function(t){var e,r,u,d,f,p,b=o(t),g="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,m=void 0!==v,y=l(b),O=0;if(m&&(v=c(v,h>2?arguments[2]:void 0,2)),void 0==y||g==Array&&n(y))for(e=a(b.length),r=new g(e);e>O;O++)p=m?v(b[O],O):b[O],s(r,O,p);else for(d=y.call(b),f=d.next,r=new g;!(u=f.call(d)).done;O++)p=m?i(d,v,[u.value,O],!0):u.value,s(r,O,p);return r.length=O,r}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var c=r("1d80"),o=r("5899"),i="["+o+"]",n=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),s=function(t){return function(e){var r=String(c(e));return 1&t&&(r=r.replace(n,"")),2&t&&(r=r.replace(a,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},"5a34":function(t,e,r){var c=r("44e7");t.exports=function(t){if(c(t))throw TypeError("The method doesn't accept regular expressions");return t}},"6b75":function(t,e,r){"use strict";function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,c=new Array(e);r<e;r++)c[r]=t[r];return c}r.d(e,"a",(function(){return c}))},"9bdd":function(t,e,r){var c=r("825a"),o=r("2a62");t.exports=function(t,e,r,i){try{return i?e(c(r)[0],r[1]):e(r)}catch(n){throw o(t),n}}},a434:function(t,e,r){"use strict";var c=r("23e7"),o=r("23cb"),i=r("a691"),n=r("50c4"),a=r("7b0b"),s=r("65f0"),l=r("8418"),u=r("1dde"),d=u("splice"),f=Math.max,p=Math.min,b=9007199254740991,g="Maximum allowed length exceeded";c({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var r,c,u,d,h,v,m=a(this),y=n(m.length),O=o(t,y),j=arguments.length;if(0===j?r=c=0:1===j?(r=0,c=y-O):(r=j-2,c=p(f(i(e),0),y-O)),y+r-c>b)throw TypeError(g);for(u=s(m,c),d=0;d<c;d++)h=O+d,h in m&&l(u,d,m[h]);if(u.length=c,r<c){for(d=O;d<y-c;d++)h=d+c,v=d+r,h in m?m[v]=m[h]:delete m[v];for(d=y;d>y-c+r;d--)delete m[d-1]}else if(r>c)for(d=y-c;d>O;d--)h=d+c-1,v=d+r-1,h in m?m[v]=m[h]:delete m[v];for(d=0;d<r;d++)m[d+O]=arguments[d+2];return m.length=y-c+r,u}})},a630:function(t,e,r){var c=r("23e7"),o=r("4df4"),i=r("1c7e"),n=!i((function(t){Array.from(t)}));c({target:"Array",stat:!0,forced:n},{from:o})},a818:function(t,e,r){"use strict";r("202c")},ab13:function(t,e,r){var c=r("b622"),o=c("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[o]=!1,"/./"[t](e)}catch(c){}}return!1}},b0c0:function(t,e,r){var c=r("83ab"),o=r("9bf2").f,i=Function.prototype,n=i.toString,a=/^\s*function ([^ (]*)/,s="name";c&&!(s in i)&&o(i,s,{configurable:!0,get:function(){try{return n.call(this).match(a)[1]}catch(t){return""}}})},c8d2:function(t,e,r){var c=r("d039"),o=r("5899"),i="​᠎";t.exports=function(t){return c((function(){return!!o[t]()||i[t]()!=i||o[t].name!==t}))}},caad:function(t,e,r){"use strict";var c=r("23e7"),o=r("4d64").includes,i=r("44d2");c({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d28b:function(t,e,r){var c=r("746f");c("iterator")},e6dc:function(t,e,r){"use strict";r.r(e);r("caad"),r("2532");var c=r("7a23"),o=Object(c["withScopeId"])("data-v-86de09c2");Object(c["pushScopeId"])("data-v-86de09c2");var i={class:"container"},n={class:"text-end my-3 me-4"},a=Object(c["createVNode"])("i",{class:"bi bi-search h4",title:"搜尋"},null,-1),s={class:"row mt-4"},l={class:"col-md-3 mb-4"},u={class:"list-group"},d={class:"col-md-9"},f={class:"row"},p={key:0,class:"bg-danger text-white d-inline-block px-2 py-1"},b={class:"card-body d-flex flex-column justify-content-center"},g={class:"card-title h5"},h={key:0,class:"h5 text-center py-1"},v={key:0,class:"h6 text-decoration-line-through"},m={key:1,class:"h4 text-danger fw-bold"},y={key:2,class:"h4 fw-bold"},O={class:"btn-group btn-group-sm"},j={key:0,class:"bi bi-heart-fill"},k={key:1,class:"bi bi-heart"};Object(c["popScopeId"])();var C=o((function(t,e,r,o,C,w){var x=Object(c["resolveComponent"])("Loading");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("div",i,[Object(c["createVNode"])("div",n,[Object(c["withDirectives"])(Object(c["createVNode"])("input",{title:"請輸入搜尋關鍵字",class:"me-2",type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return C.searchKey=t}),placeholder:"請輸入搜尋關鍵字"},null,512),[[c["vModelText"],C.searchKey]]),a]),Object(c["createVNode"])("div",s,[Object(c["createVNode"])("div",l,[Object(c["createVNode"])("div",u,[Object(c["createVNode"])("a",{href:"#",class:["list-group-item list-group-item-action list-group-item-secondary",{active:""===C.selectCategory}],onClick:e[2]||(e[2]=Object(c["withModifiers"])((function(t){return C.selectCategory=""}),["prevent"]))},"全部商品",2),Object(c["createVNode"])("a",{href:"#",class:["list-group-item list-group-item-action list-group-item-secondary",{active:"特價商品"===C.selectCategory}],onClick:e[3]||(e[3]=Object(c["withModifiers"])((function(t){return C.selectCategory="特價商品"}),["prevent"]))},"特價商品",2),Object(c["createVNode"])("a",{href:"#",class:["list-group-item list-group-item-action list-group-item-secondary",{active:"暢銷商品"===C.selectCategory}],onClick:e[4]||(e[4]=Object(c["withModifiers"])((function(t){return C.selectCategory="暢銷商品"}),["prevent"]))},"暢銷商品",2),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(C.categories,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("a",{href:"#",key:t,class:["list-group-item list-group-item-action list-group-item-secondary",{active:C.selectCategory===t}],onClick:Object(c["withModifiers"])((function(e){return C.selectCategory=t}),["prevent"])},Object(c["toDisplayString"])(t),11,["onClick"])})),128))])]),Object(c["createVNode"])("div",d,[Object(c["createVNode"])("div",f,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(w.filterProducts,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:"col-md-6 col-lg-4 mb-4",key:e.id},[Object(c["createVNode"])("div",{class:"card",onClick:function(t){return w.pushProductPage(e)}},[Object(c["createVNode"])("div",{class:"card__img position-relative",style:{backgroundImage:"url('".concat(e.imageUrl,"')")}},[e.options.sell_status?(Object(c["openBlock"])(),Object(c["createBlock"])("span",p,Object(c["toDisplayString"])(e.options.sell_status),1)):Object(c["createCommentVNode"])("",!0)],4),Object(c["createVNode"])("div",b,[Object(c["createVNode"])("h2",g,Object(c["toDisplayString"])(e.title),1),e.price?(Object(c["openBlock"])(),Object(c["createBlock"])("div",h,[e.price!=e.origin_price?(Object(c["openBlock"])(),Object(c["createBlock"])("span",v," $"+Object(c["toDisplayString"])(t.$filters.currency(e.origin_price)),1)):Object(c["createCommentVNode"])("",!0),e.price!=e.origin_price?(Object(c["openBlock"])(),Object(c["createBlock"])("span",m," $"+Object(c["toDisplayString"])(t.$filters.currency(e.price)),1)):Object(c["createCommentVNode"])("",!0),e.price==e.origin_price?(Object(c["openBlock"])(),Object(c["createBlock"])("span",y," $"+Object(c["toDisplayString"])(t.$filters.currency(e.price)),1)):Object(c["createCommentVNode"])("",!0)])):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])("div",O,[Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-danger btn__favorite",onClick:Object(c["withModifiers"])((function(t){return w.addMyFavorite(e)}),["stop"])},[C.myFavorite.includes(e.id)?(Object(c["openBlock"])(),Object(c["createBlock"])("i",j)):(Object(c["openBlock"])(),Object(c["createBlock"])("i",k))],8,["onClick"]),Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-primary",onClick:Object(c["withModifiers"])((function(t){return w.addCart(e.id)}),["stop"]),disabled:C.loadingStatus.loadingItem===e.id||!e.is_enabled}," 加到購物車 ",8,["onClick","disabled"])])])],8,["onClick"])])})),128))])])])]),Object(c["createVNode"])(x,{active:C.isLoading},null,8,["active"])],64)})),w=r("6b75");function x(t){if(Array.isArray(t))return Object(w["a"])(t)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function S(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var N=r("06c5");function V(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function B(t){return x(t)||S(t)||Object(N["a"])(t)||V()}r("99af"),r("6062"),r("159b"),r("a434"),r("4de4"),r("ac1f"),r("466d"),r("498a");var A=r("37ca"),I={save:function(t){var e=JSON.stringify(t);localStorage.setItem("campingFavorite",e)},get:function(){return JSON.parse(localStorage.getItem("campingFavorite"))}},L={data:function(){return{products:[],product:{},isLoading:!1,loadingStatus:{loadingItem:""},categories:[],selectCategory:"",searchKey:"",myFavorite:I.get()||[]}},methods:{getProducts:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peter1024","/products/all");this.$http.get(e).then((function(e){e.data.success?(t.products=e.data.products,t.getCategories()):t.errorAlert(e.data.message),t.isLoading=!1})).catch((function(t){console.dir(t)}))},getCategories:function(){var t=new Set;this.products.forEach((function(e){t.add(e.category)})),this.categories=B(t)},pushProductPage:function(t){this.$router.push("/product/".concat(t.id))},addCart:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0,this.loadingStatus.loadingItem=t;var c={product_id:t,qty:r},o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peter1024","/cart");this.$http.post(o,{data:c}).then((function(t){e.isLoading=!1,e.loadingStatus.loadingItem="",e.$httpMessageState(t,t.data.message),t.data.success&&A["a"].emit("update-cartNum")})).catch((function(t){console.dir(t)}))},addMyFavorite:function(t){this.myFavorite.includes(t.id)?this.myFavorite.splice(this.myFavorite.indexOf(t.id),1):this.myFavorite.push(t.id),I.save(this.myFavorite)}},computed:{filterProducts:function(){var t=this;return""===this.selectCategory?this.products.filter((function(e){return e.title.trim().toLowerCase().match(t.searchKey.trim().toLowerCase())})):"特價商品"===this.selectCategory?this.products.filter((function(e){return e.price!==e.origin_price&&e.title.trim().toLowerCase().match(t.searchKey.trim().toLowerCase())})):"暢銷商品"===this.selectCategory?this.products.filter((function(e){return""!==e.options.sell_status&&e.title.trim().toLowerCase().match(t.searchKey.trim().toLowerCase())})):this.products.filter((function(e){return e.category===t.selectCategory&&e.title.trim().toLowerCase().match(t.searchKey.trim().toLowerCase())}))}},created:function(){this.getProducts()}};r("a818");L.render=C,L.__scopeId="data-v-86de09c2";e["default"]=L},fb6a:function(t,e,r){"use strict";var c=r("23e7"),o=r("861d"),i=r("e8b5"),n=r("23cb"),a=r("50c4"),s=r("fc6a"),l=r("8418"),u=r("b622"),d=r("1dde"),f=d("slice"),p=u("species"),b=[].slice,g=Math.max;c({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var r,c,u,d=s(this),f=a(d.length),h=n(t,f),v=n(void 0===e?f:e,f);if(i(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?o(r)&&(r=r[p],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return b.call(d,h,v);for(c=new(void 0===r?Array:r)(g(v-h,0)),u=0;h<v;h++,u++)h in d&&l(c,u,d[h]);return c.length=u,c}})}}]);
//# sourceMappingURL=chunk-5d8e524b.37819abd.js.map