"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8885],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(r),d=i,b=s["".concat(u,".").concat(d)]||s[d]||f[d]||n;return r?a.createElement(b,o(o({ref:t},l),{},{components:r})):a.createElement(b,o({ref:t},l))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:i,o[1]=c;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7873:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var a=r(7462),i=(r(7294),r(3905));const n={sidebar_position:1},o="Strapi Populate Basic",c={unversionedId:"strapi/populate-basic",id:"strapi/populate-basic",title:"Strapi Populate Basic",description:"AboutUs",source:"@site/docs/strapi/populate-basic.md",sourceDirName:"strapi",slug:"/strapi/populate-basic",permalink:"/docs/strapi/populate-basic",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Strapi",permalink:"/docs/category/strapi"},next:{title:"Fetch Data from Strapi",permalink:"/docs/strapi/fetch-from-strapi"}},u={},p=[{value:"AboutUs",id:"aboutus",level:2},{value:"Structure",id:"structure",level:3},{value:"Fetch",id:"fetch",level:3},{value:"OurActivities",id:"ouractivities",level:2},{value:"Structure",id:"structure-1",level:3},{value:"Fetch",id:"fetch-1",level:3},{value:"TfCounter",id:"tfcounter",level:2},{value:"Structure",id:"structure-2",level:3},{value:"Fetch",id:"fetch-2",level:3}],l={toc:p},s="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"strapi-populate-basic"},"Strapi Populate Basic"),(0,i.kt)("h2",{id:"aboutus"},"AboutUs"),(0,i.kt)("h3",{id:"structure"},"Structure"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"about us",src:r(7572).Z,width:"1188",height:"767"})),(0,i.kt)("h3",{id:"fetch"},"Fetch"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'fetch("localhost:1337/api/home-page?" + "populate[AboutUs][populate]=*" )\n')),(0,i.kt)("h2",{id:"ouractivities"},"OurActivities"),(0,i.kt)("h3",{id:"structure-1"},"Structure"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"our activities",src:r(1208).Z,width:"1247",height:"842"})),(0,i.kt)("h3",{id:"fetch-1"},"Fetch"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'fetch("localhost:1337/api/home-page?" + "&populate[OurActivities][populate][0]=Cards.image" )\n')),(0,i.kt)("h2",{id:"tfcounter"},"TfCounter"),(0,i.kt)("h3",{id:"structure-2"},"Structure"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tf counter",src:r(8959).Z,width:"1199",height:"655"})),(0,i.kt)("h3",{id:"fetch-2"},"Fetch"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'fetch("localhost:1337/api/home-page?" + "&populate[TfCounter][populate]=bg1" + "&populate[TfCounter][populate]=bg2" + "&populate[TfCounter][populate][0]=Counters.image" )\n')))}f.isMDXComponent=!0},7572:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/about_us-b85c162f99fe03fdad0f1b4ab63bc5c6.png"},1208:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/our_activities-4bfbdc5a2f3fdd5a1bf315eaa2f35c7f.png"},8959:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/tf_counter-95be452dccee34720e860628e8b61905.png"}}]);