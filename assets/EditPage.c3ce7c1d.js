import{_ as m,o as a,c as d,a as o,r,n as E,b as g,d as v,t as b,w as f,v as x,e as $,u as p,F as D,f as M,g as k,h as C,i as V}from"./index.40e48e77.js";const q={},I={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16"},P=o("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"},null,-1),T=o("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"},null,-1),z=[P,T];function H(n,e){return a(),d("svg",I,z)}var B=m(q,[["render",H]]);const Q={name:"form-modal",components:{IconTrash:B},props:{item:{type:Object,required:!0},isEditing:{type:Boolean,default:!1}}},U=["data-bs-target"],L=["id"],O={class:"modal-dialog"},j={class:"modal-content"},F={class:"modal-header"},A={class:"modal-title",id:"deleteModalLabel"},S=o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),N={class:"modal-body"},G={class:"modal-footer justify-content-between"},J=o("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1);function K(n,e,t,h,u,s){const c=r("icon-trash");return a(),d("div",null,[t.isEditing?(a(),d("button",{key:0,type:"button",class:E(["btn btn-danger mx-2",{"float-end":t.item&&t.item.title!=="page"}]),"data-bs-toggle":"modal","data-bs-target":`#deleteModal${t.item.key}`},[g(c)],10,U)):v("",!0),t.isEditing?(a(),d("div",{key:1,class:"modal fade",id:`deleteModal${t.item.key}`,tabindex:"-1","aria-labelledby":"deleteModalLabel","aria-hidden":"true"},[o("div",O,[o("div",j,[o("div",F,[o("h5",A," Delete This "+b(t.item.title),1),S]),o("div",N," Are you sure you want to delete this "+b(t.item.title)+"? ",1),o("div",G,[J,o("button",{onClick:e[0]||(e[0]=l=>n.$emit("delete-modal-clicked")),type:"button",class:"btn btn-danger","data-bs-dismiss":"modal"}," Delete ")])])])],8,L)):v("",!0)])}var y=m(Q,[["render",K]]);const R={name:"text-box",components:{DeleteModal:y},props:{item:{type:Object,required:!0},isEditing:{type:Boolean,default:!1}}},W={key:0,class:"mb-3"},X={class:"form-label w-100"},Y=$(" Header "),Z={key:1,class:"display-6 py-4"};function ee(n,e,t,h,u,s){const c=r("delete-modal");return t.isEditing?(a(),d("div",W,[g(c,{item:t.item,isEditing:t.isEditing,onDeleteModalClicked:e[0]||(e[0]=l=>n.$emit("delete-item"))},null,8,["item","isEditing"]),o("label",X,[Y,f(o("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>t.item.text=l),onInput:e[2]||(e[2]=l=>n.$emit("updateText",t.item.text)),type:"text",class:"form-control form-control-lg"},null,544),[[x,t.item.text]])])])):(a(),d("h1",Z,b(t.item.text||"Default Header"),1))}var te=m(R,[["render",ee]]);const oe={name:"text-box",components:{DeleteModal:y},props:{item:{type:Object,required:!0},isEditing:{type:Boolean,default:!1}}},ne={key:0,class:"mb-3"},ae={class:"form-label w-100"},se=$(" Text Box "),ie={key:1,class:"lead"};function de(n,e,t,h,u,s){const c=r("delete-modal");return t.isEditing?(a(),d("div",ne,[g(c,{item:t.item,isEditing:t.isEditing,onDeleteModalClicked:e[0]||(e[0]=l=>n.$emit("delete-item"))},null,8,["item","isEditing"]),o("label",ae,[se,f(o("textarea",{"onUpdate:modelValue":e[1]||(e[1]=l=>t.item.text=l),onInput:e[2]||(e[2]=l=>n.$emit("updateText",t.item.text)),class:"form-control",rows:"3"},null,544),[[x,t.item.text]])])])):(a(),d("p",ie,b(t.item.text||"Default Text"),1))}var le=m(oe,[["render",de]]);const ce={name:"text-box",components:{DeleteModal:y},props:{item:{type:Object,required:!0},isEditing:{type:Boolean,default:!1}}},re={key:0},me={class:"form-label w-100 px-4"},ue=$(" Quote "),_e={class:"form-label w-100 p-4"},ge=$(" quotee "),be={key:1},he={class:"blockquote p-4"},pe={class:"blockquote-footer px-4 pb-4"};function ve(n,e,t,h,u,s){const c=r("delete-modal");return t.isEditing?(a(),d("figure",re,[g(c,{item:t.item,isEditing:t.isEditing,onDeleteModalClicked:e[0]||(e[0]=l=>n.$emit("delete-item"))},null,8,["item","isEditing"]),o("label",me,[ue,f(o("textarea",{"onUpdate:modelValue":e[1]||(e[1]=l=>t.item.quote=l),onInput:e[2]||(e[2]=l=>n.$emit("updateQuote",t.item.quote)),class:"form-control"},null,544),[[x,t.item.quote]])]),o("label",_e,[ge,f(o("textarea",{"onUpdate:modelValue":e[3]||(e[3]=l=>t.item.quotee=l),onInput:e[4]||(e[4]=l=>n.$emit("updateQuotee",t.item.quotee)),class:"form-control"},null,544),[[x,t.item.quotee]])])])):(a(),d("figure",be,[o("blockquote",he,[o("p",null,b(t.item.quote||"Default quote"),1)]),o("figcaption",pe,b(t.item.quotee||"Default quotee"),1)]))}var fe=m(ce,[["render",ve],["__scopeId","data-v-b6767dae"]]);const xe={name:"form-loader",components:{Header:te,TextBox:le,QuoteBox:fe},computed:{getPageData(){return p().currentpage},isEditing(){const{name:n}=this.$route;return n==="editpage"}},methods:{deletePageData(n){if(n){const{id:e}=this.$route.params;p().remove(e,n)}}}};function $e(n,e,t,h,u,s){const c=r("Header"),l=r("TextBox"),w=r("QuoteBox");return a(),d("div",null,[(a(!0),d(D,null,M(s.getPageData,i=>(a(),d("div",{key:i.key},[i.title==="Header"?(a(),k(c,{key:0,isEditing:s.isEditing,item:i,onUpdateText:_=>i.text=_,onDeleteItem:_=>s.deletePageData(i)},null,8,["isEditing","item","onUpdateText","onDeleteItem"])):v("",!0),i.title==="Text Box"?(a(),k(l,{key:1,isEditing:s.isEditing,item:i,onUpdateText:_=>i.text=_,onDeleteItem:_=>s.deletePageData(i)},null,8,["isEditing","item","onUpdateText","onDeleteItem"])):v("",!0),i.title==="Quote Box"?(a(),k(w,{key:2,isEditing:s.isEditing,item:i,onUpdateQuote:_=>i.quote=_,onUpdateQuotee:_=>i.quotee=_,onDeleteItem:_=>s.deletePageData(i)},null,8,["isEditing","item","onUpdateQuote","onUpdateQuotee","onDeleteItem"])):v("",!0)]))),128))])}var ye=m(xe,[["render",$e]]);const we={},ke={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-circle",viewBox:"0 0 16 16"},Ee=o("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"},null,-1),De=o("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"},null,-1),Me=[Ee,De];function Be(n,e){return a(),d("svg",ke,Me)}var Ce=m(we,[["render",Be]]);const Ve={},qe={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},Ie=o("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"},null,-1),Pe=[Ie];function Te(n,e){return a(),d("svg",qe,Pe)}var ze=m(Ve,[["render",Te]]);const He={},Qe={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-save",viewBox:"0 0 16 16"},Ue=o("path",{d:"M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"},null,-1),Le=[Ue];function Oe(n,e){return a(),d("svg",Qe,Le)}var je=m(He,[["render",Oe]]);const Fe={name:"form-modal",components:{IconCancel:Ce,IconPencil:ze,IconSave:je,IconTrash:B,DeleteModal:y},data(){return{selectedItem:"",sectionOptions:[{title:"Header",text:""},{title:"Text Box",text:""},{title:"Quote Box",quote:"",quotee:""}]}},computed:{sectionOptions(){return p().sectionOptions},isEditing(){const{name:n}=this.$route;return n==="editpage"}},methods:{savePage(){p().save()},viewPage(){const{id:n}=this.$route.params;this.$router.push(`/view/${n}`)},editPage(){const{id:n}=this.$route.params;this.$router.push(`/edit/${n}`)},deletePage(){const{id:n}=this.$route.params;p().deletePage(n),this.$router.push("/add")},addPageData(){if(this.selectedItem){const{id:n}=this.$route.params;p().add(n,this.selectedItem)}}}},Ae={key:0,type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#FormComponentModal"},Se={class:"modal fade",id:"FormComponentModal",tabindex:"-1","aria-labelledby":"FormComponentModal","aria-hidden":"true","data-bs-backdrop":"static","data-bs-keyboard":"false"},Ne={class:"modal-dialog"},Ge={class:"modal-content"},Je=o("div",{class:"modal-header"},[o("h5",{class:"modal-title",id:"FormComponentModal"},"New Section"),o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ke={class:"modal-body"},Re=o("option",{value:""},"Open this select menu",-1),We=["value"],Xe={class:"modal-footer justify-content-between"},Ye=o("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1),Ze=["disabled"];function et(n,e,t,h,u,s){const c=r("delete-modal"),l=r("icon-cancel"),w=r("icon-pencil");return a(),d("div",{class:E(["d-flex",s.isEditing?"justify-content-between":"justify-content-end"]),style:V([{"margin-top":"-30px"},s.isEditing?"margin-bottom: 100px":""])},[g(c,{item:{title:"page",key:"deletePage"},isEditing:s.isEditing,onDeleteModalClicked:e[0]||(e[0]=i=>s.deletePage())},null,8,["isEditing"]),s.isEditing?(a(),d("button",Ae," Add Section ")):v("",!0),s.isEditing?(a(),d("button",{key:1,onClick:e[1]||(e[1]=i=>{s.savePage(),s.viewPage()}),type:"button",class:"btn btn-secondary"},[g(l)])):(a(),d("button",{key:2,onClick:e[2]||(e[2]=i=>s.editPage()),type:"button",class:"btn btn-success"},[g(w)])),o("div",Se,[o("div",Ne,[o("div",Ge,[Je,o("div",Ke,[f(o("select",{"onUpdate:modelValue":e[3]||(e[3]=i=>u.selectedItem=i),class:"form-select","aria-label":"Default select example"},[Re,(a(!0),d(D,null,M(s.sectionOptions,i=>(a(),d("option",{key:i.key,value:i},b(i.title),9,We))),128))],512),[[C,u.selectedItem]])]),o("div",Xe,[Ye,o("button",{disabled:!u.selectedItem,onClick:e[4]||(e[4]=i=>s.addPageData()),class:E([u.selectedItem?"btn-primary":"btn-outline-secondary","btn"]),type:"button"}," Add Section ",10,Ze)])])])])],6)}var tt=m(Fe,[["render",et]]);const ot={name:"add-new-page",components:{FormLoader:ye,FormModal:tt}};function nt(n,e,t,h,u,s){const c=r("form-modal"),l=r("form-loader");return a(),d("div",null,[g(c),g(l)])}var st=m(ot,[["render",nt]]);export{st as default};
