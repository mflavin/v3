import{_ as d,u as p,o as l,c as r,a,w as c,v as u,n as g}from"./index.fdf1fb2e.js";const m={name:"add-new-page",data(){return{pagename:""}},methods:{addPageData(){if(this.pagename){const t=p();for(let e=0;e<t.sectionOptions.length;e++){const n=t.sectionOptions[e];t.add(this.pagename,n)}this.$router.push(`/view/${this.pagename}`)}}}},_=a("h1",{class:"display-6 py-4"},"Add New Page",-1),b={class:"input-group mt-3"},h={class:"input-group-append"},f=["disabled"];function v(t,e,n,P,s,i){return l(),r("div",null,[_,a("div",b,[c(a("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.pagename=o),type:"text",class:"form-control",placeholder:"Page Name","aria-label":"Page Name","aria-describedby":"basic-addon2"},null,512),[[u,s.pagename]]),a("div",h,[a("button",{onClick:e[1]||(e[1]=o=>i.addPageData()),disabled:!s.pagename,class:g([s.pagename?"btn-success":"btn-outline-secondary","btn"]),type:"button"}," Button ",10,f)])])])}var y=d(m,[["render",v]]);export{y as default};
