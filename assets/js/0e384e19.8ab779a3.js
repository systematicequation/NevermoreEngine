"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(r),u=o,v=c["".concat(l,".").concat(u)]||c[u]||d[u]||a;return r?n.createElement(v,i(i({ref:t},m),{},{components:r})):n.createElement(v,i({ref:t},m))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},59881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:1},i="What is Nevermore?",s={unversionedId:"intro",id:"intro",title:"What is Nevermore?",description:"Nevermore is a ModuleScript loader for Roblox, and loads modules by name. Nevermore is designed to make code more portable. Nevermore comes with a variety of utility libraries. These libraries are used on both the client and server and are useful for a variety of things. These libraries are separated into packages that can be consumed individually using npm.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/NevermoreEngine/docs/intro",draft:!1,editUrl:"https://github.com/Quenty/NevermoreEngine/edit/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar"},l={},p=[{value:"Installing Nevermore",id:"installing-nevermore",level:2},{value:"Install using npm",id:"install-using-npm",level:2},{value:"Custom version of rojo. Why?",id:"custom-version-of-rojo-why",level:2},{value:"Sample project",id:"sample-project",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-nevermore"},"What is Nevermore?"),(0,o.kt)("p",null,"Nevermore is a ModuleScript loader for Roblox, and loads modules by name. Nevermore is designed to make code more portable. Nevermore comes with a variety of utility libraries. These libraries are used on both the client and server and are useful for a variety of things. These libraries are separated into packages that can be consumed individually using npm."),(0,o.kt)("p",null,"Nevermore follows both functional and OOP programming paradigms. However, many modules return classes, and may require more advance Lua knowledge to use."),(0,o.kt)("h1",{id:"getting-started-with-nevermore"},"Getting Started with Nevermore"),(0,o.kt)("p",null,"Getting started with Nevermore is not easy. "),(0,o.kt)("h2",{id:"installing-nevermore"},"Installing Nevermore"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install foreman"),(0,o.kt)("li",{parentName:"ol"},"Install npm")),(0,o.kt)("h2",{id:"install-using-npm"},"Install using npm"),(0,o.kt)("p",null,"Nevermore is designed to use ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," to manage packages. You can install a package like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install @quenty/maid\n")),(0,o.kt)("p",null,"Each package is designed to be synced into Roblox using ",(0,o.kt)("a",{parentName:"p",href:"https://rojo.space/"},"rojo"),"."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Right now you need a special version of Rojo to sync in the npm dependencies properly!"))),(0,o.kt)("h2",{id:"custom-version-of-rojo-why"},"Custom version of rojo. Why?"),(0,o.kt)("p",null,"We have a custom version of rojo to support syncing in symlinks for development, mesh parts, and optional node_modules for dependencies."),(0,o.kt)("h2",{id:"sample-project"},"Sample project"),(0,o.kt)("p",null,"See ",(0,o.kt)("inlineCode",{parentName:"p"},"games/integration")," for a sample setup project."))}d.isMDXComponent=!0}}]);