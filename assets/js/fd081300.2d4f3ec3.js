"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[350],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),p=a,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9729:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(5321);function i(e){let{version:t,severity:r,hasConfig:i,hasFix:o,isDeprecated:l}=e;return n.createElement("div",{className:"single-rule-info"},n.createElement(a.Z,{version:t,severity:r,hasConfig:i,hasFix:o,isDeprecated:l}))}},5321:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294);function a(e){let{hasConfig:t,hasFix:r,isDeprecated:a}=e;return n.createElement("div",{className:"rule-options"},t&&n.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),r&&n.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&n.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function i(e){let{severity:t,version:r,hasConfig:i,hasFix:o,isDeprecated:l}=e;const c=null==t?void 0:t.toLowerCase();return n.createElement("div",{className:"rule-additional-info"},n.createElement("div",null,n.createElement("span",{className:"added-in-label"},"added in:")," ",r),n.createElement("div",{className:`rule-severity ${c}`},c),n.createElement(a,{hasConfig:i,hasFix:o,isDeprecated:l}))}},2974:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),i=r(9729);const o={},l=void 0,c={unversionedId:"rules/common/prefer-immediate-return",id:"rules/common/prefer-immediate-return",title:"prefer-immediate-return",description:"Declaring a local variable only to immediately return it might be considered a bad practice. The name of a function or a class method with its return type should give enough information about what should be returned.",source:"@site/docs/rules/common/prefer-immediate-return.mdx",sourceDirName:"rules/common",slug:"/rules/common/prefer-immediate-return",permalink:"/docs/rules/common/prefer-immediate-return",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/prefer-immediate-return.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"prefer-first",permalink:"/docs/rules/common/prefer-first"},next:{title:"prefer-iterable-of",permalink:"/docs/rules/common/prefer-iterable-of"}},s={},u=[{value:"Example",id:"example",level:3}],m={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{version:"4.13.0",severity:"style",hasFix:!0,mdxType:"RuleDetails"}),(0,a.kt)("p",null,"Declaring a local variable only to immediately return it might be considered a bad practice. The name of a function or a class method with its return type should give enough information about what should be returned."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"void calculateSum(int a, int b) {\n    final sum = a + b;\n    return sum; // LINT\n}\n\nvoid calculateArea(int width, int height) {\n    final result = width * height;\n    return result; // LINT\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"void calculateSum(int a, int b) {\n    return a + b;\n}\n\nvoid calculateArea(int width, int height) => width * height;\n")))}d.isMDXComponent=!0}}]);