if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let r={};const o=e=>i(e,l),u={module:{uri:l},exports:r,require:o};s[l]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(t(...e),r)))}}define(["./workbox-a953cab6"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AddNewPage.2f61fe40.js",revision:null},{url:"assets/ContactView.520a76ca.js",revision:null},{url:"assets/EditPage.5ba753eb.js",revision:null},{url:"assets/EditPage.f0f6f370.css",revision:null},{url:"assets/HomeView.6f93db8e.js",revision:null},{url:"assets/HomeView.96276c3d.css",revision:null},{url:"assets/index.9827f9c8.css",revision:null},{url:"assets/index.b4bd25e3.js",revision:null},{url:"index.html",revision:"a2d45c6713a4aded08ca537ecb515b09"},{url:"manifest.webmanifest",revision:"f4f5f30d8da44aa9ce2a527406850964"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
