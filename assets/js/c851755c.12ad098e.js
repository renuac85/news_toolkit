"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[323],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6050:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:9,description:"Learn how to write and run tests in your application."},a="Testing",c={unversionedId:"project_configuration/testing",id:"project_configuration/testing",title:"Testing",description:"Learn how to write and run tests in your application.",source:"@site/docs/project_configuration/testing.md",sourceDirName:"project_configuration",slug:"/project_configuration/testing",permalink:"/news_toolkit/project_configuration/testing",draft:!1,editUrl:"https://github.com/flutter/news_toolkit/tree/main/docs/docs/project_configuration/testing.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,description:"Learn how to write and run tests in your application."},sidebar:"tutorialSidebar",previous:{title:"API Deployment Setup",permalink:"/news_toolkit/project_configuration/api_deployment"},next:{title:"Flutter Development",permalink:"/news_toolkit/category/flutter-development"}},s={},p=[],u={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testing"},"Testing"),(0,o.kt)("p",null,"Flutter News Toolkit applications come with 100% test coverage out-of-the-box. Tests are located in a parallel file structure relative to your source code, residing in a ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," directory which mirrors the source code ",(0,o.kt)("inlineCode",{parentName:"p"},"lib")," directory."),(0,o.kt)("p",null,"Changes you make to your source code such as ",(0,o.kt)("a",{parentName:"p",href:"#implementing-an-api-data-source"},"implementing an API data source"),", ",(0,o.kt)("a",{parentName:"p",href:"#removing-advertisements"},"removing advertisements"),", or ",(0,o.kt)("a",{parentName:"p",href:"#using-blocks"},"changing block behavior")," may reduce test coverage or cause existing tests to fail. We recommend maintaining 100% test coverage within your application in order to support stability and scalability, but your application functionality will not be compromised if you forgo 100% test coverage."),(0,o.kt)("p",null,"To support 100% test coverage in your application, make sure that your tests capture any changes you make to the app behavior. For example, if you implement a new data source ",(0,o.kt)("inlineCode",{parentName:"p"},"your_data_source.dart"),", create a corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"your_data_source_test.dart")," file which properly tests your new data source's behavior. The Flutter community offers ",(0,o.kt)("a",{parentName:"p",href:"https://verygood.ventures/blog/flutter-testing-resources"},"excellent testing resources")," to guide you in developing effective tests for your application."))}l.isMDXComponent=!0}}]);