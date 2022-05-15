import{_ as m,o as s,c as d,a as t,r as c,b,w as f,v as x,t as v,d as y,u as p,F as E,e as C,f as q,g,h as V,n as D,i as I}from"./index.29b9fff8.js";const B={},P={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},M=t("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"},null,-1),T=[M];function z(o,e){return s(),d("svg",P,T)}var $=m(B,[["render",z]]);const H={},U={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16"},Q=t("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"},null,-1),L=t("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"},null,-1),S=[Q,L];function F(o,e){return s(),d("svg",U,S)}var w=m(H,[["render",F]]);const A={name:"text-box",components:{IconPencil:$,IconTrash:w},props:{title:{type:String,default:"Default Header"},isEditing:{type:Boolean,default:!1}}},N={key:0,class:"mb-3"},j={class:"form-label w-100"},O=y(" Header "),G={key:1,class:"display-6 py-4"};function J(o,e,n,h,u,l){const r=c("icon-trash");return n.isEditing?(s(),d("div",N,[t("button",{onClick:e[0]||(e[0]=i=>o.$emit("delete-item")),type:"button",class:"btn btn-danger btn-sm float-end",style:{"margin-bottom":"-16px"}},[b(r)]),t("label",j,[O,f(t("input",{"onUpdate:modelValue":e[1]||(e[1]=i=>n.title=i),onInput:e[2]||(e[2]=i=>o.$emit("updateTitle",n.title)),type:"text",class:"form-control form-control-lg"},null,544),[[x,n.title]])])])):(s(),d("h1",G,v(n.title||"Default Header"),1))}var K=m(A,[["render",J]]);const R={name:"text-box",components:{IconPencil:$,IconTrash:w},props:{text:{type:String,default:"Default Text"},isEditing:{type:Boolean,default:!1}}},W={key:0,class:"mb-3"},X={class:"form-label w-100"},Y=y(" Text Box "),Z={key:1,class:"lead"};function ee(o,e,n,h,u,l){const r=c("icon-trash");return n.isEditing?(s(),d("div",W,[t("button",{onClick:e[0]||(e[0]=i=>o.$emit("delete-item")),type:"button",class:"btn btn-danger btn-sm float-end",style:{"margin-bottom":"-16px"}},[b(r)]),t("label",X,[Y,f(t("textarea",{"onUpdate:modelValue":e[1]||(e[1]=i=>n.text=i),onInput:e[2]||(e[2]=i=>o.$emit("updateText",n.text)),class:"form-control",rows:"3"},null,544),[[x,n.text]])])])):(s(),d("p",Z,v(n.text||"Default Text"),1))}var te=m(R,[["render",ee]]);const oe={name:"text-box",components:{IconPencil:$,IconTrash:w},props:{quote:{type:String,default:"Default quote"},quotee:{type:String,default:"Default quotee"},isEditing:{type:Boolean,default:!1}}},ne={key:0},ae={class:"form-label w-100 px-4"},se=y(" Quote "),le={class:"form-label w-100 p-4"},de=y(" quotee "),ie={key:1},re={class:"blockquote p-4"},ce={class:"blockquote-footer px-4 pb-4"};function ue(o,e,n,h,u,l){const r=c("icon-trash");return n.isEditing?(s(),d("figure",ne,[t("button",{onClick:e[0]||(e[0]=i=>o.$emit("delete-item")),type:"button",class:"btn btn-danger btn-sm float-end mb-1"},[b(r)]),t("label",ae,[se,f(t("textarea",{"onUpdate:modelValue":e[1]||(e[1]=i=>n.quote=i),onInput:e[2]||(e[2]=i=>o.$emit("updateQuote",n.quote)),class:"form-control"},null,544),[[x,n.quote]])]),t("label",le,[de,f(t("textarea",{"onUpdate:modelValue":e[3]||(e[3]=i=>n.quotee=i),onInput:e[4]||(e[4]=i=>o.$emit("updateQuotee",n.quotee)),class:"form-control"},null,544),[[x,n.quotee]])])])):(s(),d("figure",ie,[t("blockquote",re,[t("p",null,v(n.quote||"Default quote"),1)]),t("figcaption",ce,v(n.quotee||"Default quotee"),1)]))}var _e=m(oe,[["render",ue],["__scopeId","data-v-2027d8d8"]]);const me={name:"form-loader",components:{Header:K,TextBox:te,QuoteBox:_e},computed:{getPageData(){return p().currentpage},isEditing(){const{name:o}=this.$route;return o==="editpage"}},methods:{deletePageData(o){if(o){const{id:e}=this.$route.params;p().remove(e,o)}}}};function be(o,e,n,h,u,l){const r=c("Header"),i=c("TextBox"),k=c("QuoteBox");return s(),d("div",null,[(s(!0),d(E,null,C(l.getPageData,a=>(s(),d("div",{key:a},[a.key==="header"?(s(),q(r,{key:0,isEditing:l.isEditing,title:a.title,onUpdateTitle:_=>a.title=_,onDeleteItem:_=>l.deletePageData(a)},null,8,["isEditing","title","onUpdateTitle","onDeleteItem"])):g("",!0),a.key==="text"?(s(),q(i,{key:1,isEditing:l.isEditing,text:a.text,onUpdateText:_=>a.text=_,onDeleteItem:_=>l.deletePageData(a)},null,8,["isEditing","text","onUpdateText","onDeleteItem"])):g("",!0),a.key==="quote"?(s(),q(k,{key:2,isEditing:l.isEditing,quote:a.quote,quotee:a.quotee,onUpdateQuote:_=>a.quote=_,onUpdateQuotee:_=>a.quotee=_,onDeleteItem:_=>l.deletePageData(a)},null,8,["isEditing","quote","quotee","onUpdateQuote","onUpdateQuotee","onDeleteItem"])):g("",!0)]))),128))])}var ge=m(me,[["render",be]]);const he={},pe={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-circle",viewBox:"0 0 16 16"},fe=t("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"},null,-1),ve=t("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"},null,-1),xe=[fe,ve];function ye(o,e){return s(),d("svg",pe,xe)}var $e=m(he,[["render",ye]]);const we={},ke={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-save",viewBox:"0 0 16 16"},qe=t("path",{d:"M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"},null,-1),De=[qe];function Ee(o,e){return s(),d("svg",ke,De)}var Ce=m(we,[["render",Ee]]);const Ve={name:"form-modal",components:{IconCancel:$e,IconPencil:$,IconSave:Ce,IconTrash:w},data(){return{selectedItem:"",sectionOptions:[{title:"Header",text:"",key:"header"},{title:"Text Box",text:"",key:"text"},{title:"Quote Box",quote:"",quotee:"",key:"quote"}]}},computed:{isEditing(){const{name:o}=this.$route;return o==="editpage"}},methods:{savePage(){p().save()},viewPage(){const{id:o}=this.$route.params;this.$router.push(`/view/${o}`)},editPage(){const{id:o}=this.$route.params;this.$router.push(`/edit/${o}`)},deletePage(){const{id:o}=this.$route.params;p().deletePage(o),this.$router.push("/add")},addPageData(){if(this.selectedItem){const{id:o}=this.$route.params;p().add(o,this.selectedItem)}}}},Ie={key:0,type:"button",class:"btn btn-danger mx-2","data-bs-toggle":"modal","data-bs-target":"#deleteModal"},Be={key:1,class:"modal fade",id:"deleteModal",tabindex:"-1","aria-labelledby":"deleteModalLabel","aria-hidden":"true"},Pe={class:"modal-dialog"},Me={class:"modal-content"},Te=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"deleteModalLabel"},"Delete This Page"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ze=t("div",{class:"modal-body"}," Are you sure you want to delete this page? ",-1),He={class:"modal-footer justify-content-between"},Ue=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1),Qe={key:2,type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#FormComponentModal"},Le={class:"modal fade",id:"FormComponentModal",tabindex:"-1","aria-labelledby":"FormComponentModal","aria-hidden":"true","data-bs-backdrop":"static","data-bs-keyboard":"false"},Se={class:"modal-dialog"},Fe={class:"modal-content"},Ae=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"FormComponentModal"},"New Section"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ne={class:"modal-body"},je=t("option",{value:""},"Open this select menu",-1),Oe=["value"],Ge={class:"modal-footer justify-content-between"},Je=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1),Ke=["disabled"];function Re(o,e,n,h,u,l){const r=c("icon-trash"),i=c("icon-cancel"),k=c("icon-pencil");return s(),d("div",{class:D(["d-flex",l.isEditing?"justify-content-between":"justify-content-end"]),style:I([{"margin-top":"-30px"},l.isEditing?"margin-bottom: 100px":""])},[l.isEditing?(s(),d("button",Ie,[b(r)])):g("",!0),l.isEditing?(s(),d("div",Be,[t("div",Pe,[t("div",Me,[Te,ze,t("div",He,[Ue,t("button",{onClick:e[0]||(e[0]=a=>l.deletePage()),type:"button",class:"btn btn-danger"}," Delete ")])])])])):g("",!0),l.isEditing?(s(),d("button",Qe," Add Section ")):g("",!0),l.isEditing?(s(),d("button",{key:3,onClick:e[1]||(e[1]=a=>{l.savePage(),l.viewPage()}),type:"button",class:"btn btn-secondary"},[b(i)])):(s(),d("button",{key:4,onClick:e[2]||(e[2]=a=>l.editPage()),type:"button",class:"btn btn-success"},[b(k)])),t("div",Le,[t("div",Se,[t("div",Fe,[Ae,t("div",Ne,[f(t("select",{"onUpdate:modelValue":e[3]||(e[3]=a=>u.selectedItem=a),class:"form-select","aria-label":"Default select example"},[je,(s(!0),d(E,null,C(u.sectionOptions,a=>(s(),d("option",{key:a.key,value:a},v(a.title),9,Oe))),128))],512),[[V,u.selectedItem]])]),t("div",Ge,[Je,t("button",{disabled:!u.selectedItem,onClick:e[4]||(e[4]=a=>l.addPageData()),class:D([u.selectedItem?"btn-primary":"btn-outline-secondary","btn"]),type:"button"}," Add Section ",10,Ke)])])])])],6)}var We=m(Ve,[["render",Re]]);const Xe={name:"add-new-page",components:{FormLoader:ge,FormModal:We}};function Ye(o,e,n,h,u,l){const r=c("form-modal"),i=c("form-loader");return s(),d("div",null,[b(r),b(i)])}var et=m(Xe,[["render",Ye]]);export{et as default};
