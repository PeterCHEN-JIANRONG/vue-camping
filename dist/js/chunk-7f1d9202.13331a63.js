(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f1d9202"],{"1dde":function(e,t,r){var c=r("d039"),o=r("b622"),n=r("2d00"),a=o("species");e.exports=function(e){return n>=51||!c((function(){var t=[],r=t.constructor={};return r[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,r){var c=r("861d"),o=r("e8b5"),n=r("b622"),a=n("species");e.exports=function(e,t){var r;return o(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?c(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},"7cb4":function(e,t,r){"use strict";r.r(t);r("b0c0");var c=r("7a23"),o={class:"my-5 row justify-content-center"},n={key:0,class:"col-md-6"},a=Object(c["createVNode"])("p",{class:"text-center h1"},"查無訂單編號",-1),d={class:"table align-middle"},s=Object(c["createVNode"])("thead",null,[Object(c["createVNode"])("th",null,"品名"),Object(c["createVNode"])("th",null,"數量"),Object(c["createVNode"])("th",null,"單價")],-1),i={class:"text-end"},l=Object(c["createVNode"])("td",{colspan:"2",class:"text-end"},"總計",-1),u={class:"text-end"},b={class:"table"},p=Object(c["createVNode"])("th",{width:"100"},"Email",-1),O=Object(c["createVNode"])("th",null,"姓名",-1),j=Object(c["createVNode"])("th",null,"收件人電話",-1),f=Object(c["createVNode"])("th",null,"收件人地址",-1),h=Object(c["createVNode"])("th",null,"付款狀態",-1),g={key:0},y={key:1,class:"text-success"},N={key:0,class:"text-end"},V=Object(c["createVNode"])("button",{type:"submit",class:"btn btn-danger"},"確認付款去",-1);function m(e,t,r,m,v,k){var B=Object(c["resolveComponent"])("Loading");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])(B,{active:v.isLoading,"z-index":1060},null,8,["active"]),Object(c["createVNode"])("div",o,[v.hasOrder?(Object(c["openBlock"])(),Object(c["createBlock"])("form",{key:1,class:"col-md-6",onSubmit:t[1]||(t[1]=Object(c["withModifiers"])((function(){return k.payOrder&&k.payOrder.apply(k,arguments)}),["prevent"]))},[Object(c["createVNode"])("table",d,[s,Object(c["createVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(v.order.products,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("tr",{key:e.id},[Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.product.title),1),Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.qty)+"/"+Object(c["toDisplayString"])(e.product.unit),1),Object(c["createVNode"])("td",i,Object(c["toDisplayString"])(e.final_total),1)])})),128))]),Object(c["createVNode"])("tfoot",null,[Object(c["createVNode"])("tr",null,[l,Object(c["createVNode"])("td",u,Object(c["toDisplayString"])(v.order.total),1)])])]),Object(c["createVNode"])("table",b,[Object(c["createVNode"])("tbody",null,[Object(c["createVNode"])("tr",null,[p,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(v.order.user.email),1)]),Object(c["createVNode"])("tr",null,[O,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(v.order.user.name),1)]),Object(c["createVNode"])("tr",null,[j,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(v.order.user.tel),1)]),Object(c["createVNode"])("tr",null,[f,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(v.order.user.address),1)]),Object(c["createVNode"])("tr",null,[h,Object(c["createVNode"])("td",null,[v.order.is_paid?(Object(c["openBlock"])(),Object(c["createBlock"])("span",y,"付款完成")):(Object(c["openBlock"])(),Object(c["createBlock"])("span",g,"尚未付款"))])])])]),!1===v.order.is_paid?(Object(c["openBlock"])(),Object(c["createBlock"])("div",N,[V])):Object(c["createCommentVNode"])("",!0)],32)):(Object(c["openBlock"])(),Object(c["createBlock"])("div",n,[a]))])],64)}r("99af");var v={data:function(){return{order:{user:{}},orderId:"",isLoading:!1,hasOrder:!1}},methods:{getOrder:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peter1024","/order/").concat(this.orderId);this.$http.get(t).then((function(t){e.isLoading=!1,t.data.success?null===t.data.order?(e.hasOrder=!1,e.order={user:{}}):(e.hasOrder=!0,e.order=t.data.order):e.$httpMessageState(t,t.data.message)})).catch((function(t){console.log("error",t.response,t.request,t.message),e.isLoading=!1,e.emitter.emit("push-message",{title:"連線錯誤",style:"danger",content:t.message})}))},payOrder:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peter1024","/pay/").concat(this.orderId);this.$http.post(t).then((function(t){e.isLoading=!1,t.data.success?e.getOrder():e.$httpMessageState(t,t.data.message)})).catch((function(t){console.log("error",t.response,t.request,t.message),e.isLoading=!1,e.emitter.emit("push-message",{title:"連線錯誤",style:"danger",content:t.message})}))}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}};v.render=m;t["default"]=v},8418:function(e,t,r){"use strict";var c=r("c04e"),o=r("9bf2"),n=r("5c6c");e.exports=function(e,t,r){var a=c(t);a in e?o.f(e,a,n(0,r)):e[a]=r}},"99af":function(e,t,r){"use strict";var c=r("23e7"),o=r("d039"),n=r("e8b5"),a=r("861d"),d=r("7b0b"),s=r("50c4"),i=r("8418"),l=r("65f0"),u=r("1dde"),b=r("b622"),p=r("2d00"),O=b("isConcatSpreadable"),j=9007199254740991,f="Maximum allowed index exceeded",h=p>=51||!o((function(){var e=[];return e[O]=!1,e.concat()[0]!==e})),g=u("concat"),y=function(e){if(!a(e))return!1;var t=e[O];return void 0!==t?!!t:n(e)},N=!h||!g;c({target:"Array",proto:!0,forced:N},{concat:function(e){var t,r,c,o,n,a=d(this),u=l(a,0),b=0;for(t=-1,c=arguments.length;t<c;t++)if(n=-1===t?a:arguments[t],y(n)){if(o=s(n.length),b+o>j)throw TypeError(f);for(r=0;r<o;r++,b++)r in n&&i(u,b,n[r])}else{if(b>=j)throw TypeError(f);i(u,b++,n)}return u.length=b,u}})},b0c0:function(e,t,r){var c=r("83ab"),o=r("9bf2").f,n=Function.prototype,a=n.toString,d=/^\s*function ([^ (]*)/,s="name";c&&!(s in n)&&o(n,s,{configurable:!0,get:function(){try{return a.call(this).match(d)[1]}catch(e){return""}}})},e8b5:function(e,t,r){var c=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==c(e)}}}]);
//# sourceMappingURL=chunk-7f1d9202.13331a63.js.map