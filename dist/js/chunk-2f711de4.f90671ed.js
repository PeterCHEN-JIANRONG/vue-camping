(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f711de4"],{1376:function(e,t,c){},"1dde":function(e,t,c){var r=c("d039"),o=c("b622"),a=c("2d00"),n=o("species");e.exports=function(e){return a>=51||!r((function(){var t=[],c=t.constructor={};return c[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,c){var r=c("861d"),o=c("e8b5"),a=c("b622"),n=a("species");e.exports=function(e,t){var c;return o(e)&&(c=e.constructor,"function"!=typeof c||c!==Array&&!o(c.prototype)?r(c)&&(c=c[n],null===c&&(c=void 0)):c=void 0),new(void 0===c?Array:c)(0===t?0:t)}},"7b16":function(e,t,c){"use strict";c("1376")},"7cb4":function(e,t,c){"use strict";c.r(t);c("b0c0");var r=c("7a23"),o=Object(r["withScopeId"])("data-v-43cef86d");Object(r["pushScopeId"])("data-v-43cef86d");var a=Object(r["createVNode"])("div",{class:"banner"},null,-1),n={class:"container"},s={key:0,class:"text-center h1"},d={key:1,class:"order py-5"},l=Object(r["createVNode"])("h1",{class:"text-center mb-4"},"訂單付款",-1),i={class:"row justify-content-center"},u={class:"col-md-6"},b=Object(r["createVNode"])("p",{class:"h5"},"感謝您的訂購，以下是您本次購物交易詳細。",-1),p=Object(r["createVNode"])("p",null,[Object(r["createVNode"])("button",{class:"btn btn-secondary",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"}," 商品明細 ")],-1),O={class:"collapse",id:"collapseExample"},j={class:"table align-middle border border-1"},f=Object(r["createVNode"])("thead",null,[Object(r["createVNode"])("th",null,"品名"),Object(r["createVNode"])("th",null,"數量"),Object(r["createVNode"])("th",null,"金額")],-1),h={class:"text-end"},N=Object(r["createVNode"])("td",{colspan:"2",class:"text-end"},"總計",-1),V={class:"text-end"},g=Object(r["createVNode"])("h2",{class:"text-center bg-primary text-white py-2"},"客戶資訊",-1),m={class:"table"},y=Object(r["createVNode"])("th",null,"Email",-1),v=Object(r["createVNode"])("th",null,"姓名",-1),k=Object(r["createVNode"])("th",null,"收件人電話",-1),x=Object(r["createVNode"])("th",null,"收件人地址",-1),w=Object(r["createVNode"])("th",null,"訂單時間",-1),S=Object(r["createVNode"])("th",null,"付款狀態",-1),B={key:0},$={key:1,class:"text-success"},I=Object(r["createVNode"])("p",{class:"text-muted"},"提醒您訂單需於24小時內完成付款，謝謝您的支持。",-1),A={class:"row"},D={class:"col mb-2"},L=Object(r["createVNode"])("i",{class:"bi bi-arrow-left me-2"},null,-1),E=Object(r["createTextVNode"])("返回首頁 "),_=Object(r["createVNode"])("div",{class:"col"},[Object(r["createVNode"])("button",{type:"submit",class:"btn btn-primary btn-block"},[Object(r["createVNode"])("span",{class:"me-2"},"確認付款"),Object(r["createVNode"])("i",{class:"bi bi-arrow-right"})])],-1);Object(r["popScopeId"])();var C=o((function(e,t,c,o,C,M){var T=Object(r["resolveComponent"])("Loading");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])(T,{active:C.isLoading,"z-index":1060},null,8,["active"]),a,Object(r["createVNode"])("div",n,[C.hasOrder?(Object(r["openBlock"])(),Object(r["createBlock"])("div",d,[l,Object(r["createVNode"])("div",i,[Object(r["createVNode"])("div",u,[b,p,Object(r["createVNode"])("div",O,[Object(r["createVNode"])("table",j,[f,Object(r["createVNode"])("tbody",null,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(C.order.products,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("tr",{key:e.id},[Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(e.product.title),1),Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(e.qty)+" "+Object(r["toDisplayString"])(e.product.unit),1),Object(r["createVNode"])("td",h,Object(r["toDisplayString"])(e.final_total),1)])})),128))]),Object(r["createVNode"])("tfoot",null,[Object(r["createVNode"])("tr",null,[N,Object(r["createVNode"])("td",V,Object(r["toDisplayString"])(C.order.total),1)])])])]),g,Object(r["createVNode"])("form",{onSubmit:t[2]||(t[2]=Object(r["withModifiers"])((function(){return M.payOrder&&M.payOrder.apply(M,arguments)}),["prevent"]))},[Object(r["createVNode"])("table",m,[Object(r["createVNode"])("tbody",null,[Object(r["createVNode"])("tr",null,[y,Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(C.order.user.email),1)]),Object(r["createVNode"])("tr",null,[v,Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(C.order.user.name),1)]),Object(r["createVNode"])("tr",null,[k,Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(C.order.user.tel),1)]),Object(r["createVNode"])("tr",null,[x,Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(C.order.user.address),1)]),Object(r["createVNode"])("tr",null,[w,Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(e.$filters.dateTime(C.order.create_at)),1)]),Object(r["createVNode"])("tr",null,[S,Object(r["createVNode"])("td",null,[C.order.is_paid?(Object(r["openBlock"])(),Object(r["createBlock"])("span",$,"付款完成")):(Object(r["openBlock"])(),Object(r["createBlock"])("span",B,"尚未付款"))])])])]),I,Object(r["createVNode"])("div",A,[Object(r["createVNode"])("div",D,[Object(r["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary btn-block",onClick:t[1]||(t[1]=function(t){return e.$router.push("/")})},[L,E])]),_])],32)])])])):(Object(r["openBlock"])(),Object(r["createBlock"])("p",s,"查無訂單編號"))])],64)})),M=(c("99af"),{data:function(){return{order:{user:{}},orderId:"",isLoading:!1,hasOrder:!1}},methods:{getOrder:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peter1024","/order/").concat(this.orderId);this.$http.get(t).then((function(t){e.isLoading=!1,t.data.success?null===t.data.order?(e.errorAlert("查無訂單"),e.$router.push("/"),e.hasOrder=!1,e.order={user:{}}):(e.hasOrder=!0,t.data.order.is_paid&&e.$router.push("/completed/".concat(e.orderId)),e.order=t.data.order):e.$httpMessageState(t,t.data.message)})).catch((function(t){console.log("error",t.response,t.request,t.message),e.isLoading=!1,e.emitter.emit("push-message",{title:"連線錯誤",style:"danger",content:t.message})}))},payOrder:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peter1024","/pay/").concat(this.orderId);this.$http.post(t).then((function(t){e.isLoading=!1,t.data.success?(e.successAlert(t.data.message),e.$router.push("/completed/".concat(e.orderId))):e.$httpMessageState(t,t.data.message)})).catch((function(t){console.log("error",t.response,t.request,t.message),e.isLoading=!1,e.emitter.emit("push-message",{title:"連線錯誤",style:"danger",content:t.message})}))},successAlert:function(e){this.$swal.fire({icon:"success",title:e,showConfirmButton:!1,timer:1500})},errorAlert:function(e){this.$swal.fire({icon:"error",title:e,showConfirmButton:!1,timer:1500})}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}});c("7b16");M.render=C,M.__scopeId="data-v-43cef86d";t["default"]=M},8418:function(e,t,c){"use strict";var r=c("c04e"),o=c("9bf2"),a=c("5c6c");e.exports=function(e,t,c){var n=r(t);n in e?o.f(e,n,a(0,c)):e[n]=c}},"99af":function(e,t,c){"use strict";var r=c("23e7"),o=c("d039"),a=c("e8b5"),n=c("861d"),s=c("7b0b"),d=c("50c4"),l=c("8418"),i=c("65f0"),u=c("1dde"),b=c("b622"),p=c("2d00"),O=b("isConcatSpreadable"),j=9007199254740991,f="Maximum allowed index exceeded",h=p>=51||!o((function(){var e=[];return e[O]=!1,e.concat()[0]!==e})),N=u("concat"),V=function(e){if(!n(e))return!1;var t=e[O];return void 0!==t?!!t:a(e)},g=!h||!N;r({target:"Array",proto:!0,forced:g},{concat:function(e){var t,c,r,o,a,n=s(this),u=i(n,0),b=0;for(t=-1,r=arguments.length;t<r;t++)if(a=-1===t?n:arguments[t],V(a)){if(o=d(a.length),b+o>j)throw TypeError(f);for(c=0;c<o;c++,b++)c in a&&l(u,b,a[c])}else{if(b>=j)throw TypeError(f);l(u,b++,a)}return u.length=b,u}})},b0c0:function(e,t,c){var r=c("83ab"),o=c("9bf2").f,a=Function.prototype,n=a.toString,s=/^\s*function ([^ (]*)/,d="name";r&&!(d in a)&&o(a,d,{configurable:!0,get:function(){try{return n.call(this).match(s)[1]}catch(e){return""}}})},e8b5:function(e,t,c){var r=c("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}}}]);
//# sourceMappingURL=chunk-2f711de4.f90671ed.js.map