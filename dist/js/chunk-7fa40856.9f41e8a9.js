(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fa40856"],{"1dde":function(e,t,c){var o=c("d039"),n=c("b622"),a=c("2d00"),s=n("species");e.exports=function(e){return a>=51||!o((function(){var t=[],c=t.constructor={};return c[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,c){var o=c("861d"),n=c("e8b5"),a=c("b622"),s=a("species");e.exports=function(e,t){var c;return n(e)&&(c=e.constructor,"function"!=typeof c||c!==Array&&!n(c.prototype)?o(c)&&(c=c[s],null===c&&(c=void 0)):c=void 0),new(void 0===c?Array:c)(0===t?0:t)}},7277:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),n={class:"navbar navbar-expand-lg navbar-dark bg-dark"},a={class:"container-fluid"},s=Object(o["createTextVNode"])("CAMPING"),r={class:"collapse navbar-collapse",id:"navbarNav"},i={class:"navbar-nav"},l={class:"nav-item"},u=Object(o["createTextVNode"])("產品管理"),d={class:"nav-item"},b=Object(o["createTextVNode"])("訂單管理"),f={class:"nav-item"},h=Object(o["createTextVNode"])("優惠券"),p={class:"nav-item"},v=Object(o["createTextVNode"])("貼文"),j={class:"navbar-nav ms-auto"},O={class:"nav-item"},m=Object(o["createTextVNode"])("前台"),k={class:"nav-item"};function g(e,t,c,g,N,V){var x=Object(o["resolveComponent"])("router-link"),w=Object(o["resolveComponent"])("ToastMessages"),y=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])("nav",n,[Object(o["createVNode"])("div",a,[Object(o["createVNode"])(x,{class:"navbar-brand",to:"/admin/products"},{default:Object(o["withCtx"])((function(){return[s]})),_:1}),Object(o["createVNode"])("div",r,[Object(o["createVNode"])("ul",i,[Object(o["createVNode"])("li",l,[Object(o["createVNode"])(x,{class:"nav-link",to:"/admin/products"},{default:Object(o["withCtx"])((function(){return[u]})),_:1})]),Object(o["createVNode"])("li",d,[Object(o["createVNode"])(x,{class:"nav-link",to:"/admin/orders"},{default:Object(o["withCtx"])((function(){return[b]})),_:1})]),Object(o["createVNode"])("li",f,[Object(o["createVNode"])(x,{class:"nav-link",to:"/admin/coupons"},{default:Object(o["withCtx"])((function(){return[h]})),_:1})]),Object(o["createVNode"])("li",p,[Object(o["createVNode"])(x,{class:"nav-link",to:"/admin/articles"},{default:Object(o["withCtx"])((function(){return[v]})),_:1})])]),Object(o["createVNode"])("ul",j,[Object(o["createVNode"])("li",O,[Object(o["createVNode"])(x,{class:"nav-link",to:"/"},{default:Object(o["withCtx"])((function(){return[m]})),_:1})]),Object(o["createVNode"])("li",k,[Object(o["createVNode"])("a",{href:"#",class:"nav-link",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(){return V.logout&&V.logout.apply(V,arguments)}),["prevent"]))},"登出")])])])])]),Object(o["createVNode"])(w),N.checkSuccess?(Object(o["openBlock"])(),Object(o["createBlock"])(y,{key:0})):Object(o["createCommentVNode"])("",!0)],64)}c("ac1f"),c("5319");var N=c("37ca"),V=c("f367"),x={name:"Dashboard",components:{ToastMessages:V["a"]},data:function(){return{checkSuccess:!1}},provide:function(){return{emitter:N["a"]}},methods:{checkLogin:function(){var e=this,t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");if(t){this.$http.defaults.headers.common.Authorization=t;var c="".concat("https://vue3-course-api.hexschool.io","/api/user/check");this.$http.post(c,{api_token:t}).then((function(t){t.data.success?(e.checkSuccess=!0,e.$httpMessageState(t,"登入")):(e.checkSuccess=!1,e.$router.push("/login"))}))}else this.successAlert("尚未登入"),this.$router.push("/login")},logout:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/logout");this.$http.post(t).then((function(t){e.successAlert(t.data.message),t.data.success&&(document.cookie="hexToken=;expires=;",e.$router.push("/login"))}))},successAlert:function(e){this.$swal.fire({icon:"success",title:e,showConfirmButton:!1,timer:1500})}},created:function(){this.checkLogin()}};x.render=g;t["default"]=x},8418:function(e,t,c){"use strict";var o=c("c04e"),n=c("9bf2"),a=c("5c6c");e.exports=function(e,t,c){var s=o(t);s in e?n.f(e,s,a(0,c)):e[s]=c}},a434:function(e,t,c){"use strict";var o=c("23e7"),n=c("23cb"),a=c("a691"),s=c("50c4"),r=c("7b0b"),i=c("65f0"),l=c("8418"),u=c("1dde"),d=u("splice"),b=Math.max,f=Math.min,h=9007199254740991,p="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var c,o,u,d,v,j,O=r(this),m=s(O.length),k=n(e,m),g=arguments.length;if(0===g?c=o=0:1===g?(c=0,o=m-k):(c=g-2,o=f(b(a(t),0),m-k)),m+c-o>h)throw TypeError(p);for(u=i(O,o),d=0;d<o;d++)v=k+d,v in O&&l(u,d,O[v]);if(u.length=o,c<o){for(d=k;d<m-o;d++)v=d+o,j=d+c,v in O?O[j]=O[v]:delete O[j];for(d=m;d>m-o+c;d--)delete O[d-1]}else if(c>o)for(d=m-o;d>k;d--)v=d+o-1,j=d+c-1,v in O?O[j]=O[v]:delete O[j];for(d=0;d<c;d++)O[d+k]=arguments[d+2];return O.length=m-o+c,u}})},e8b5:function(e,t,c){var o=c("c6b6");e.exports=Array.isArray||function(e){return"Array"==o(e)}},f367:function(e,t,c){"use strict";var o=c("7a23"),n={class:"toast-container position-fixed pe-3 end-0",style:{"z-index":"1500"}},a={class:"toast-header"},s={class:"me-auto"},r={key:0,class:"toast-body"};function i(e,t,c,i,l,u){return Object(o["openBlock"])(),Object(o["createBlock"])("div",n,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(l.messages,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:t,class:["toast show","toast".concat(t)],role:"alert"},[Object(o["createVNode"])("div",a,[Object(o["createVNode"])("span",{class:["bg-".concat(e.style),"p-2 rounded me-2 d-inline-block"]},null,2),Object(o["createVNode"])("strong",s,Object(o["toDisplayString"])(e.title),1),Object(o["createVNode"])("button",{type:"button",class:"btn-close",onClick:function(e){return u.clearToast(t)},"aria-label":"Close"},null,8,["onClick"])]),e.content?(Object(o["openBlock"])(),Object(o["createBlock"])("div",r,Object(o["toDisplayString"])(e.content),1)):Object(o["createCommentVNode"])("",!0)],2)})),128))])}c("a434");var l={data:function(){return{messages:[]}},inject:["emitter"],methods:{toastShow:function(){var e=this;setTimeout((function(){e.messages.shift()}),6e3)},clearToast:function(e){this.messages.splice(e,1)}},mounted:function(){var e=this;this.emitter.on("push-message",(function(t){var c=t.style,o=void 0===c?"success":c,n=t.title,a=t.content;e.messages.push({style:o,title:n,content:a}),e.toastShow()}))}};l.render=i;t["a"]=l}}]);
//# sourceMappingURL=chunk-7fa40856.9f41e8a9.js.map