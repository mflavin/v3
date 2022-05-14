import{_,o as a,c as d,a as e,r as u,b as g,w as f,v as h,t as p,d as v,u as b,F as q,e as I,f as x,g as y,n as D,h as B}from"./index.984f2e21.js";const E={},C={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},P=e("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"},null,-1),T=[P];function M(o,t){return a(),d("svg",C,T)}var $=_(E,[["render",M]]);const z={},H={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16"},S=e("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"},null,-1),F=e("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"},null,-1),Q=[S,F];function N(o,t){return a(),d("svg",H,Q)}var k=_(z,[["render",N]]);const U={name:"text-box",components:{IconPencil:$,IconTrash:k},props:{title:{type:String,default:"Default Header"},isEditing:{type:Boolean,default:!1}}},A={key:0,class:"mb-3"},L={class:"form-label w-100"},O=v(" Header "),j={key:1,class:"display-6 pt-4"};function G(o,t,n,m,c,l){const s=u("IconTrash");return n.isEditing?(a(),d("div",A,[e("button",{onClick:t[0]||(t[0]=i=>o.$emit("delete-item")),type:"button",class:"btn btn-danger btn-sm float-end",style:{"margin-bottom":"-16px"}},[g(s)]),e("label",L,[O,f(e("input",{"onUpdate:modelValue":t[1]||(t[1]=i=>n.title=i),type:"text",class:"form-control form-control-lg"},null,512),[[h,n.title]])])])):(a(),d("h1",j,p(n.title),1))}var J=_(U,[["render",G]]);const K={name:"text-box",components:{IconPencil:$,IconTrash:k},props:{text:{type:String,default:"Default Text"},isEditing:{type:Boolean,default:!1}}},R={key:0,class:"mb-3"},W={class:"form-label w-100"},X=v(" Text Box "),Y={key:1,class:"lead"};function Z(o,t,n,m,c,l){const s=u("IconTrash");return n.isEditing?(a(),d("div",R,[e("button",{onClick:t[0]||(t[0]=i=>o.$emit("delete-item")),type:"button",class:"btn btn-danger btn-sm float-end",style:{"margin-bottom":"-16px"}},[g(s)]),e("label",W,[X,f(e("textarea",{"onUpdate:modelValue":t[1]||(t[1]=i=>n.text=i),class:"form-control",rows:"3"},null,512),[[h,n.text]])])])):(a(),d("p",Y,p(n.text),1))}var ee=_(K,[["render",Z]]);const te={name:"text-box",components:{IconPencil:$,IconTrash:k},props:{quote:{type:String,default:"Default quote"},quotee:{type:String,default:"Default quotee"},isEditing:{type:Boolean,default:!1}}},oe={key:0},ne={class:"form-label w-100 px-4"},se=v(" Quote "),ae={class:"form-label w-100 p-4"},le=v(" quotee "),de={key:1},ie={class:"blockquote p-4"},re={class:"blockquote-footer px-4 pb-4"};function ce(o,t,n,m,c,l){const s=u("IconTrash");return n.isEditing?(a(),d("figure",oe,[e("button",{onClick:t[0]||(t[0]=i=>o.$emit("delete-item")),type:"button",class:"btn btn-danger btn-sm float-end mb-1"},[g(s)]),e("label",ne,[se,f(e("textarea",{"onUpdate:modelValue":t[1]||(t[1]=i=>n.quote=i),class:"form-control"},null,512),[[h,n.quote]])]),e("label",ae,[le,f(e("textarea",{"onUpdate:modelValue":t[2]||(t[2]=i=>n.quotee=i),class:"form-control"},null,512),[[h,n.quotee]])])])):(a(),d("figure",de,[e("blockquote",ie,[e("p",null,p(n.quote),1)]),e("figcaption",re,p(n.quotee),1)]))}var ue=_(te,[["render",ce],["__scopeId","data-v-b0cf5d18"]]);const _e={name:"form-loader",components:{Header:J,TextBox:ee,QuoteBox:ue},computed:{getPageData(){return b().currentpage},isEditing(){const{name:o}=this.$route;return o==="editpage"}},methods:{deletePageData(o){if(o){const{id:t}=this.$route.params;b().remove(t,o)}}}};function me(o,t,n,m,c,l){const s=u("Header"),i=u("TextBox"),V=u("QuoteBox");return a(),d("div",null,[(a(!0),d(q,null,I(l.getPageData,r=>(a(),d("div",{key:r},[r.key==="header"?(a(),x(s,{key:0,isEditing:l.isEditing,title:r.title,onDeleteItem:w=>l.deletePageData(r)},null,8,["isEditing","title","onDeleteItem"])):y("",!0),r.key==="text"?(a(),x(i,{key:1,isEditing:l.isEditing,text:r.text,onDeleteItem:w=>l.deletePageData(r)},null,8,["isEditing","text","onDeleteItem"])):y("",!0),r.key==="quote"?(a(),x(V,{key:2,isEditing:l.isEditing,quote:r.quote,quotee:r.quotee,onDeleteItem:w=>l.deletePageData(r)},null,8,["isEditing","quote","quotee","onDeleteItem"])):y("",!0)]))),128))])}var be=_(_e,[["render",me]]);const ge={name:"form-modal",data(){return{selectedItem:"",sectionOptions:[{title:"Header",key:"header"},{title:"Text Box",key:"text"},{title:"Quote Box",key:"quote"}]}},methods:{save(){b().save()},deletePage(){const{id:o}=this.$route.params;b().deletePage(o),this.$router.push("/add")},addPageData(){if(this.selectedItem){const{id:o}=this.$route.params;b().add(o,this.selectedItem)}}}},fe={class:"row text-center m-4"},pe={class:"col"},he=["disabled"],ve={class:"col"},xe={class:"modal fade",id:"FormComponentModal",tabindex:"-1","aria-labelledby":"FormComponentModal","aria-hidden":"true","data-bs-backdrop":"static","data-bs-keyboard":"false"},ye={class:"modal-dialog"},$e={class:"modal-content"},ke=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"FormComponentModal"},"New Section"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),we={class:"modal-body"},De=e("option",{value:""},"Open this select menu",-1),qe=["value"],Ie={class:"modal-footer justify-content-between"},Ve=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1),Be=["disabled"];function Ee(o,t,n,m,c,l){return a(),d("div",null,[e("div",fe,[e("div",pe,[e("button",{disabled:!o.$route.params.id,class:D([o.$route.params.id?"btn-primary":"btn-outline-secondary","btn"]),type:"button","data-bs-toggle":"modal","data-bs-target":"#FormComponentModal"}," Add Section ",10,he)]),e("div",ve,[e("button",{onClick:t[0]||(t[0]=s=>l.save()),type:"button",class:"btn btn-success mx-4"}," Save Page "),e("button",{onClick:t[1]||(t[1]=s=>l.deletePage()),type:"button",class:"btn btn-danger mx-4"}," Delete This Page ")])]),e("div",xe,[e("div",ye,[e("div",$e,[ke,e("div",we,[f(e("select",{"onUpdate:modelValue":t[2]||(t[2]=s=>c.selectedItem=s),class:"form-select","aria-label":"Default select example"},[De,(a(!0),d(q,null,I(c.sectionOptions,s=>(a(),d("option",{key:s.key,value:s},p(s.title),9,qe))),128))],512),[[B,c.selectedItem]])]),e("div",Ie,[Ve,e("button",{disabled:!c.selectedItem,onClick:t[3]||(t[3]=s=>l.addPageData()),class:D([c.selectedItem?"btn-primary":"btn-outline-secondary","btn"]),type:"button","data-bs-toggle":"modal"}," Add Section ",10,Be)])])])])])}var Ce=_(ge,[["render",Ee]]);const Pe={name:"add-new-page",components:{FormLoader:be,FormModal:Ce}};function Te(o,t,n,m,c,l){const s=u("form-modal"),i=u("form-loader");return a(),d("div",null,[g(s),g(i)])}var ze=_(Pe,[["render",Te]]);export{ze as default};