"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41380],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),u=l(a),g=o,d=u["".concat(c,".").concat(g)]||u[g]||p[g]||r;return a?n.createElement(d,i(i({ref:t},s),{},{components:a})):n.createElement(d,i({ref:t},s))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m.mdxType="string"==typeof e?e:o,i[1]=m;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7769:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>m,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));a(68017),a(39786),a(81669),a(99088);const r={title:"React memo guide with examples",description:"Improve the app performance with React.memo()",slug:"react-memo-guide",authors:"abdullah_numan",tags:["react","memoization","react-memo","performance"],image:"/img/blog/2022-09-13-react-memo/social.png",hide_table_of_contents:!1},i=void 0,m={permalink:"/blog/react-memo-guide",source:"@site/blog/2022-09-13-react-memo.md",title:"React memo guide with examples",description:"Improve the app performance with React.memo()",date:"2022-09-13T00:00:00.000Z",formattedDate:"September 13, 2022",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"memoization",permalink:"/blog/tags/memoization"},{label:"react-memo",permalink:"/blog/tags/react-memo"},{label:"performance",permalink:"/blog/tags/performance"}],readingTime:10.815,hasTruncateMarker:!0,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"React memo guide with examples",description:"Improve the app performance with React.memo()",slug:"react-memo-guide",authors:"abdullah_numan",tags:["react","memoization","react-memo","performance"],image:"/img/blog/2022-09-13-react-memo/social.png",hide_table_of_contents:!1},nextItem:{title:"A Guide for Next.js with TypeScript",permalink:"/blog/next-js-with-typescript"},relatedPosts:[{title:"10 High-Quality Free Resources That Will Make Every Web Developer's Life Easier",permalink:"/blog/10-high-quality-free-resources",formattedDate:"May 2, 2022",authors:[{name:"Ayd\u0131n Akyol",title:"Software Developer",url:"https://github.com/biskuvit",imageURL:"https://github.com/biskuvit.png",key:"aydin"}],readingTime:4.225,date:"2022-05-02T00:00:00.000Z"},{title:"Material UI button in React",permalink:"/blog/mui-button-in-react",formattedDate:"September 5, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.96,date:"2022-09-05T00:00:00.000Z"},{title:"Mocking API calls in React Tests with Nock",permalink:"/blog/mocking-api-calls-in-react",formattedDate:"August 4, 2022",authors:[{name:"Necati \xd6zmen",title:"Software Developer",url:"https://github.com/necatiozmen",description:"Feeling irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:7.465,date:"2022-08-04T00:00:00.000Z"}],authorPosts:[{title:"Javascript Currying - Variadic Currying",permalink:"/blog/javascript-variadic-currying",formattedDate:"August 28, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.82,date:"2022-08-28T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},l=[{value:"Introduction",id:"introduction",level:2}],s={toc:l};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This is the first part of a series on the use of memoization in React. In this series, we'll cover memoizing a React component with ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()")," as well as caching functions and values with React's memoization hooks."),(0,o.kt)("p",null,"We will begin with a progressive example that involves memoizing a functional component, which will be gradually extended to include use cases for the hooks: ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo()"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback()")," is leveraged for memoizing a callback function, whereas ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo()")," is used to cache a computed value from an expensive function, for example, a sorting function that processes large amount of data."),(0,o.kt)("p",null,"In this post, we'll demonstrate the use of ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo()"),", which is a Higher Order Function, or HOC that adds caching logic to the passed in component. In the upcoming articles, we'll discuss about how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo()"),"."))}p.isMDXComponent=!0},68017:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/memo1-1e1c9f845d25a6bb806a09f470c4aac4.png"},39786:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/memo2-dd4d0322e4d1fbf11b423a5df7b93265.png"},81669:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/memo3-123bed76aff20ef1c8aed5a8824ce85c.png"},99088:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/memo4-8fd5258bacebb013c7d3b384c5a15454.png"}}]);