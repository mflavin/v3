if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let r={};const o=e=>i(e,l),d={module:{uri:l},exports:r,require:o};s[l]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(t(...e),r)))}}define(["./workbox-a953cab6"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AddNewPage.4ebd4d5d.js",revision:null},{url:"assets/ContactView.03d16429.js",revision:null},{url:"assets/EditPage.49adca2c.css",revision:null},{url:"assets/EditPage.c3ce7c1d.js",revision:null},{url:"assets/HomeView.3a19fe1d.css",revision:null},{url:"assets/HomeView.5e2a41db.js",revision:null},{url:"assets/index.3ec50f72.css",revision:null},{url:"assets/index.40e48e77.js",revision:null},{url:"index.html",revision:"8aa283e2a38d23f35d7f8538f70e37de"},{url:"manifest.webmanifest",revision:"f4f5f30d8da44aa9ce2a527406850964"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
