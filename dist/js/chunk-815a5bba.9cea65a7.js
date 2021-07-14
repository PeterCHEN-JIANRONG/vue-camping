(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-815a5bba"],{1799:function(e,t,c){"use strict";var o=c("7a23"),a={"aria-label":"Page navigation example"},r={class:"pagination"},l=Object(o["createVNode"])("span",{"aria-hidden":"true"},"«",-1),n=Object(o["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function i(e,t,c,i,d,s){return Object(o["openBlock"])(),Object(o["createBlock"])("nav",a,[Object(o["createVNode"])("ul",r,[Object(o["createVNode"])("li",{class:["page-item",{disabled:!c.pages.has_pre}]},[Object(o["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(e){return s.emitPage(c.pages.current_page-1)}),["prevent"]))},[l])],2),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(c.pages.total_pages,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{class:["page-item",{active:c.pages.current_page===e}],key:e},[Object(o["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(o["withModifiers"])((function(t){return s.emitPage(e)}),["prevent"])},Object(o["toDisplayString"])(e),9,["onClick"])],2)})),128)),Object(o["createVNode"])("li",{class:["page-item",{disabled:!c.pages.has_next}]},[Object(o["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[2]||(t[2]=Object(o["withModifiers"])((function(e){return s.emitPage(c.pages.current_page+1)}),["prevent"]))},[n])],2)])])}var d={props:["pages"],methods:{emitPage:function(e){this.$emit("get-products",e)}}};d.render=i;t["a"]=d},"1fae":function(e,t,c){"use strict";c.r(t);var o=c("7a23"),a={class:"container"},r=Object(o["createVNode"])("h1",null,"產品管理列表",-1),l={class:"text-end mt-4"},n={class:"table mt-4"},i=Object(o["createVNode"])("thead",null,[Object(o["createVNode"])("tr",null,[Object(o["createVNode"])("th",{width:"120"},"分類"),Object(o["createVNode"])("th",null,"產品名稱"),Object(o["createVNode"])("th",{width:"120"},"原價"),Object(o["createVNode"])("th",{width:"120"},"售價"),Object(o["createVNode"])("th",{width:"120"},"是否啟用"),Object(o["createVNode"])("th",{width:"200"},"編輯")])],-1),d={class:"text-right"},s={class:"text-right"},u={class:"form-check form-switch"},p={key:0,class:"text-success"},b={key:1,class:"text-danger"},m={class:"btn-group"},O={class:"text-end"},h=Object(o["createTextVNode"])(" 目前有 "),j={id:"productCount"},f=Object(o["createTextVNode"])(" 項產品 "),g={class:"d-flex justify-content-center"};function v(e,t,c,v,V,N){var P=Object(o["resolveComponent"])("Pagination"),k=Object(o["resolveComponent"])("Loading"),y=Object(o["resolveComponent"])("ProductModal"),x=Object(o["resolveComponent"])("DelModal");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])("div",a,[r,Object(o["createVNode"])("div",l,[Object(o["createVNode"])("button",{class:"btn btn-primary",type:"button",onClick:t[1]||(t[1]=function(e){return N.openModal(!0)})}," 建立新的產品 ")]),Object(o["createVNode"])("table",n,[i,Object(o["createVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(V.products,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:t.id},[Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(t.category),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(t.title),1),Object(o["createVNode"])("td",d,Object(o["toDisplayString"])(e.$filters.currency(t.origin_price)),1),Object(o["createVNode"])("td",s,Object(o["toDisplayString"])(e.$filters.currency(t.price)),1),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("div",u,[Object(o["createVNode"])("input",{class:"form-check-input",type:"checkbox",id:t.id,checked:!!t.is_enabled,disabled:V.isLoading,onChange:function(e){return N.updateProductStatus(t)}},null,40,["id","checked","disabled","onChange"]),Object(o["createVNode"])("label",{class:"form-check-label",for:t.id},[t.is_enabled?(Object(o["openBlock"])(),Object(o["createBlock"])("span",p,"啟用")):(Object(o["openBlock"])(),Object(o["createBlock"])("span",b,"未啟用"))],8,["for"])])]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("div",m,[Object(o["createVNode"])("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:function(e){return N.openModal(!1,t)}}," 編輯 ",8,["onClick"]),Object(o["createVNode"])("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:function(e){return N.openDelModal(t)}}," 刪除 ",8,["onClick"])])])])})),128))])]),Object(o["createVNode"])("p",O,[h,Object(o["createVNode"])("span",j,Object(o["toDisplayString"])(V.products.length),1),f]),Object(o["createVNode"])("div",g,[Object(o["createVNode"])(P,{pages:V.pagination,onGetProducts:N.getProducts},null,8,["pages","onGetProducts"])])]),Object(o["createVNode"])(k,{active:V.isLoading,"z-index":1060},null,8,["active"]),Object(o["createVNode"])(y,{ref:"productModalA",onUpdateProduct:N.updateProduct,product:V.tempProduct,isNew:V.isNew,"sell-status-options":V.sellStatusOptions},null,8,["onUpdateProduct","product","isNew","sell-status-options"]),Object(o["createVNode"])(x,{ref:"delModal",item:V.tempProduct,onDelItem:N.delProduct},null,8,["item","onDelItem"])],64)}var V=c("5530"),N=(c("99af"),c("1799")),P=(c("a434"),c("a4d3"),c("e01a"),{class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),k={class:"modal-dialog modal-xl",role:"document"},y={class:"modal-content border-0"},x={class:"modal-header bg-dark text-white"},M={class:"modal-title",id:"exampleModalLabel"},w={key:0},B={key:1},U=Object(o["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),S={class:"modal-body"},C={class:"row"},D={class:"col-sm-4"},_={class:"mb-3"},$=Object(o["createVNode"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),L={class:"mb-3"},T={for:"customFile",class:"form-label"},F=Object(o["createTextVNode"])("或 上傳圖片 "),I={key:0,class:"spinner-border spinner-border-sm",role:"status"},A=Object(o["createVNode"])("span",{class:"visually-hidden"},"Loading...",-1),J={key:0,class:"mt-5"},G={key:0},z={class:"col-sm-8"},E={class:"mb-3"},q=Object(o["createVNode"])("label",{for:"title",class:"form-label"},"標題",-1),H={class:"row gx-2"},K={class:"mb-3 col-md-6"},Q=Object(o["createVNode"])("label",{for:"category",class:"form-label"},"分類",-1),R={class:"mb-3 col-md-6"},W=Object(o["createVNode"])("label",{for:"unit",class:"form-label"},"單位",-1),X={class:"row gx-2"},Y={class:"mb-3 col-md-6"},Z=Object(o["createVNode"])("label",{for:"origin_price",class:"form-label"},"原價",-1),ee={class:"mb-3 col-md-6"},te=Object(o["createVNode"])("label",{for:"price",class:"form-label"},"售價",-1),ce={class:"row gx-2"},oe={class:"mb-3 col-md-6"},ae=Object(o["createVNode"])("label",{for:"sell_status",class:"form-label"},"銷售狀態",-1),re=Object(o["createVNode"])("option",{value:"",selected:""},"無",-1),le={class:"mb-3 col-md-6"},ne=Object(o["createVNode"])("label",{for:"score",class:"form-label"},"評價",-1),ie=Object(o["createVNode"])("hr",null,null,-1),de={class:"mb-3"},se=Object(o["createVNode"])("label",{for:"description",class:"form-label"},"產品描述",-1),ue={class:"mb-3"},pe=Object(o["createVNode"])("label",{for:"content",class:"form-label"},"說明內容",-1),be={class:"mb-3"},me={class:"form-check"},Oe=Object(o["createVNode"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),he={class:"modal-footer"},je=Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function fe(e,t,c,a,r,l){return Object(o["openBlock"])(),Object(o["createBlock"])("div",P,[Object(o["createVNode"])("div",k,[Object(o["createVNode"])("div",y,[Object(o["createVNode"])("div",x,[Object(o["createVNode"])("h5",M,[c.isNew?(Object(o["openBlock"])(),Object(o["createBlock"])("span",w,"新增產品")):(Object(o["openBlock"])(),Object(o["createBlock"])("span",B,"編輯產品"))]),U]),Object(o["createVNode"])("div",S,[Object(o["createVNode"])("div",C,[Object(o["createVNode"])("div",D,[Object(o["createVNode"])("div",_,[$,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.tempProduct.imageUrl=e}),placeholder:"請輸入圖片連結"},null,512),[[o["vModelText"],r.tempProduct.imageUrl]])]),Object(o["createVNode"])("div",L,[Object(o["createVNode"])("label",T,[F,r.status.fileUploading?(Object(o["openBlock"])(),Object(o["createBlock"])("div",I,[A])):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:t[2]||(t[2]=function(){return l.uploadFile&&l.uploadFile.apply(l,arguments)})},null,544)]),Object(o["createVNode"])("img",{class:"img-fluid",src:r.tempProduct.imageUrl},null,8,["src"]),r.tempProduct.imagesUrl?(Object(o["openBlock"])(),Object(o["createBlock"])("div",J,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(r.tempProduct.imagesUrl,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:"mb-3",key:t},[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":function(e){return r.tempProduct.imagesUrl[t]=e},placeholder:"請輸入連結"},null,8,["onUpdate:modelValue"]),[[o["vModelText"],r.tempProduct.imagesUrl[t]]]),Object(o["createVNode"])("div",null,[Object(o["createVNode"])("img",{class:"img-fluid",src:e},null,8,["src"])]),Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(e){return r.tempProduct.imagesUrl.splice(t,1)}}," 移除 ",8,["onClick"])])})),128)),r.tempProduct.imagesUrl[r.tempProduct.imagesUrl.length-1]||!r.tempProduct.imagesUrl.length?(Object(o["openBlock"])(),Object(o["createBlock"])("div",G,[Object(o["createVNode"])("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[3]||(t[3]=function(e){return r.tempProduct.imagesUrl.push("")})}," 新增圖片 ")])):Object(o["createCommentVNode"])("",!0)])):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])("div",z,[Object(o["createVNode"])("div",E,[q,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[4]||(t[4]=function(e){return r.tempProduct.title=e}),placeholder:"請輸入標題"},null,512),[[o["vModelText"],r.tempProduct.title]])]),Object(o["createVNode"])("div",H,[Object(o["createVNode"])("div",K,[Q,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":t[5]||(t[5]=function(e){return r.tempProduct.category=e}),placeholder:"請輸入分類"},null,512),[[o["vModelText"],r.tempProduct.category]])]),Object(o["createVNode"])("div",R,[W,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":t[6]||(t[6]=function(e){return r.tempProduct.unit=e}),placeholder:"請輸入單位"},null,512),[[o["vModelText"],r.tempProduct.unit]])])]),Object(o["createVNode"])("div",X,[Object(o["createVNode"])("div",Y,[Z,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",class:"form-control",id:"origin_price",min:"0","onUpdate:modelValue":t[7]||(t[7]=function(e){return r.tempProduct.origin_price=e}),placeholder:"請輸入原價"},null,512),[[o["vModelText"],r.tempProduct.origin_price,void 0,{number:!0}]])]),Object(o["createVNode"])("div",ee,[te,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":t[8]||(t[8]=function(e){return r.tempProduct.price=e}),min:"0",placeholder:"請輸入售價"},null,512),[[o["vModelText"],r.tempProduct.price,void 0,{number:!0}]])])]),Object(o["createVNode"])("div",ce,[Object(o["createVNode"])("div",oe,[ae,Object(o["withDirectives"])(Object(o["createVNode"])("select",{id:"sell_status",class:"form-select","aria-label":"Default select option","onUpdate:modelValue":t[9]||(t[9]=function(e){return r.tempProduct.options.sell_status=e})},[re,(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(c.sellStatusOptions,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("option",{value:e,key:e},Object(o["toDisplayString"])(e),9,["value"])})),128))],512),[[o["vModelSelect"],r.tempProduct.options.sell_status]])]),Object(o["createVNode"])("div",le,[ne,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"score",type:"number",min:"0",class:"form-control",placeholder:"請輸入評價","onUpdate:modelValue":t[10]||(t[10]=function(e){return r.tempProduct.options.score=e})},null,512),[[o["vModelText"],r.tempProduct.options.score,void 0,{number:!0}]])])]),ie,Object(o["createVNode"])("div",de,[se,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":t[11]||(t[11]=function(e){return r.tempProduct.description=e}),placeholder:"請輸入產品描述"},null,512),[[o["vModelText"],r.tempProduct.description]])]),Object(o["createVNode"])("div",ue,[pe,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":t[12]||(t[12]=function(e){return r.tempProduct.content=e}),placeholder:"請輸入產品說明內容"},null,512),[[o["vModelText"],r.tempProduct.content]])]),Object(o["createVNode"])("div",be,[Object(o["createVNode"])("div",me,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[13]||(t[13]=function(e){return r.tempProduct.is_enabled=e}),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[o["vModelCheckbox"],r.tempProduct.is_enabled]]),Oe])])])])]),Object(o["createVNode"])("div",he,[je,Object(o["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[14]||(t[14]=function(t){return e.$emit("update-product",r.tempProduct)})}," 確認 ")])])])],512)}var ge=c("e0ae"),ve={props:{product:{type:Object,default:function(){return{}}},isNew:{type:Boolean,default:!1},sellStatusOptions:{type:Array,default:function(){return[]}}},data:function(){return{status:{},modal:"",tempProduct:{options:{}}}},emits:["update-product"],mixins:[ge["a"]],inject:["emitter"],watch:{product:function(){this.tempProduct=this.product,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.tempProduct.imageUrl||(this.tempProduct.imageUrl=""),this.tempProduct.options||(this.tempProduct.options={sell_status:""})}},methods:{uploadFile:function(){var e=this,t=this.$refs.fileInput.files[0],c=new FormData;c.append("file-to-upload",t);var o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peter1024","/admin/upload");this.status.fileUploading=!0,this.$http.post(o,c,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.status.fileUploading=!1,t.data.success?(e.tempProduct.imageUrl=t.data.imageUrl,e.$refs.fileInput.value="",e.emitter.emit("push-message",{style:"success",title:"圖片上傳結果",content:t.data.message})):(e.$refs.fileInput.value="",e.emitter.emit("push-message",{style:"danger",title:"圖片上傳結果",content:t.data.message}))}))}}};ve.render=fe;var Ve=ve,Ne=c("6ff1"),Pe={data:function(){return{products:[],tempProduct:{},pagination:{},currentPage:1,isNew:!1,isLoading:!1,productModal:null,sellStatusOptions:["店長推薦","本週暢銷商品","本週銷售冠軍","本月暢銷商品","本月銷售冠軍"]}},components:{Pagination:N["a"],ProductModal:Ve,DelModal:Ne["a"]},methods:{getProducts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peter1024","/admin/products?page=").concat(t);this.$http.get(c).then((function(t){e.isLoading=!1,t.data.success?(e.products=t.data.products,e.pagination=t.data.pagination):e.$httpMessageState(t,"載入產品")})).catch((function(e){console.dir(e)}))},updateProduct:function(e){var t=this;this.tempProduct=Object(V["a"])({},e);var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peter1024","/admin/product"),o="post",a="新增產品";this.isNew||(c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peter1024","/admin/product/").concat(this.tempProduct.id),o="put",a="更新產品"),this.$http[o](c,{data:this.tempProduct}).then((function(e){e.data.success?(t.$httpMessageState(e,a),t.productModal.hideModal(),t.getProducts(t.currentPage)):t.$httpMessageState(e,a)}))},updateProductStatus:function(e){var t=this;this.tempProduct=Object(V["a"])({},e),this.tempProduct.is_enabled=this.tempProduct.is_enabled?0:1;var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peter1024","/admin/product/").concat(this.tempProduct.id),o="更新產品";this.isLoading=!0,this.$http.put(c,{data:this.tempProduct}).then((function(e){e.data.success?(t.$httpMessageState(e,o),t.productModal.hideModal(),t.getProducts(t.currentPage)):t.$httpMessageState(e,o)}))},delProduct:function(e){var t=this,c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peter1024","/admin/product/").concat(e.id);this.isLoading=!0,this.$http.delete(c).then((function(e){t.$httpMessageState(e,"刪除產品");var c=t.$refs.delModal;c.hideModal(),t.getProducts()}))},openModal:function(e,t){e?(this.tempProduct={},this.isNew=!0,this.currentPage=1):(this.tempProduct=JSON.parse(JSON.stringify(t)),this.isNew=!1,this.currentPage=this.pagination.current_page),this.productModal.openModal()},openDelModal:function(e){this.tempProduct=Object(V["a"])({},e);var t=this.$refs.delModal;t.openModal()}},created:function(){this.getProducts()},mounted:function(){this.productModal=this.$refs.productModalA}};Pe.render=v;t["default"]=Pe},a434:function(e,t,c){"use strict";var o=c("23e7"),a=c("23cb"),r=c("a691"),l=c("50c4"),n=c("7b0b"),i=c("65f0"),d=c("8418"),s=c("1dde"),u=s("splice"),p=Math.max,b=Math.min,m=9007199254740991,O="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var c,o,s,u,h,j,f=n(this),g=l(f.length),v=a(e,g),V=arguments.length;if(0===V?c=o=0:1===V?(c=0,o=g-v):(c=V-2,o=b(p(r(t),0),g-v)),g+c-o>m)throw TypeError(O);for(s=i(f,o),u=0;u<o;u++)h=v+u,h in f&&d(s,u,f[h]);if(s.length=o,c<o){for(u=v;u<g-o;u++)h=u+o,j=u+c,h in f?f[j]=f[h]:delete f[j];for(u=g;u>g-o+c;u--)delete f[u-1]}else if(c>o)for(u=g-o;u>v;u--)h=u+o-1,j=u+c-1,h in f?f[j]=f[h]:delete f[j];for(u=0;u<c;u++)f[u+v]=arguments[u+2];return f.length=g-o+c,s}})},e01a:function(e,t,c){"use strict";var o=c("23e7"),a=c("83ab"),r=c("da84"),l=c("5135"),n=c("861d"),i=c("9bf2").f,d=c("e893"),s=r.Symbol;if(a&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var u={},p=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof p?new s(e):void 0===e?s():s(e);return""===e&&(u[t]=!0),t};d(p,s);var b=p.prototype=s.prototype;b.constructor=p;var m=b.toString,O="Symbol(test)"==String(s("test")),h=/^Symbol\((.*)\)[^)]+$/;i(b,"description",{configurable:!0,get:function(){var e=n(this)?this.valueOf():this,t=m.call(e);if(l(u,e))return"";var c=O?t.slice(7,-1):t.replace(h,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:p})}}}]);
//# sourceMappingURL=chunk-815a5bba.9cea65a7.js.map