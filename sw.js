if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let r={};const o=e=>i(e,l),u={module:{uri:l},exports:r,require:o};s[l]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(t(...e),r)))}}define(["./workbox-a953cab6"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AddNewPage.ed96b0f7.js",revision:null},{url:"assets/ContactView.a862e13b.js",revision:null},{url:"assets/EditPage.0bb817fe.js",revision:null},{url:"assets/EditPage.458a4960.css",revision:null},{url:"assets/HomeView.3a19fe1d.css",revision:null},{url:"assets/HomeView.c78d776e.js",revision:null},{url:"assets/index.3ec50f72.css",revision:null},{url:"assets/index.e20db2b8.js",revision:null},{url:"index.html",revision:"1c9c5fcef78eabf7d9e05c3c54441b65"},{url:"manifest.webmanifest",revision:"f4f5f30d8da44aa9ce2a527406850964"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
