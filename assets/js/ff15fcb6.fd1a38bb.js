"use strict";(self.webpackChunkhousing_repairs_online=self.webpackChunkhousing_repairs_online||[]).push([[983],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7539:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},s="Extracting data from Cosmos DB",l={unversionedId:"repairs-api/extracting-data",id:"repairs-api/extracting-data",title:"Extracting data from Cosmos DB",description:"Analytics data can be extracted from Cosmos DB into Power BI by following",source:"@site/docs/repairs-api/extracting-data.md",sourceDirName:"repairs-api",slug:"/repairs-api/extracting-data",permalink:"/housing-repairs-online/docs/repairs-api/extracting-data",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/repairs-api/extracting-data.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Look and feel",permalink:"/housing-repairs-online/docs/front-end/look-and-feel"},next:{title:"Create a Page",permalink:"/housing-repairs-online/docs/tutorial-basics/create-a-page"}},p={},u=[],d={toc:u};function m(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"extracting-data-from-cosmos-db"},"Extracting data from Cosmos DB"),(0,o.kt)("p",null,"Analytics data can be extracted from Cosmos DB into Power BI by following\nthese steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open Power BI and search for an Azure Cosmos DB connection:")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Find connection",src:n(2794).Z,width:"1064",height:"1162"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Fill in the connection details")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Connection details",src:n(4450).Z,width:"1204",height:"548"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When prompted add your access key")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose to edit query \u2013 then click this icon, which will create a new data set."))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Query",src:n(3752).Z,width:"980",height:"408"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Add the following columns to this new data set \u2013 then close and apply.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#datetime(1970, 1, 1, 0, 0, 0) + #duration(0, 0, 0, [Document._ts])\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Time.Hour(DateTime.Time([LoggedDT]))\n")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Query",src:n(21).Z,width:"1178",height:"670"})),(0,o.kt)("hr",null),(0,o.kt)("p",null,"More information can be found here: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/cosmos-db/sql/powerbi-visualize"},"https://docs.microsoft.com/en-us/azure/cosmos-db/sql/powerbi-visualize")))}m.isMDXComponent=!0},21:function(e,t,n){t.Z=n.p+"assets/images/columns-2dd217006480791c469f22c7b06960b7.png"},2794:function(e,t,n){t.Z=n.p+"assets/images/connection-cd3707332cc6727f1ee0a9d5017c8ee9.png"},4450:function(e,t,n){t.Z=n.p+"assets/images/cosmos-254cade534cb3ba648a267ce74ae052e.png"},3752:function(e,t,n){t.Z=n.p+"assets/images/query-b8875d088fa97cbddc3c200229687e38.png"}}]);