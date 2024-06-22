"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[1088],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9729:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(5321);function o(e){let{version:t,severity:r,hasConfig:o,hasFix:i,isDeprecated:l}=e;return n.createElement("div",{className:"single-rule-info"},n.createElement(a.Z,{version:t,severity:r,hasConfig:o,hasFix:i,isDeprecated:l}))}},5321:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);function a(e){let{hasConfig:t,hasFix:r,isDeprecated:a}=e;return n.createElement("div",{className:"rule-options"},t&&n.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),r&&n.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&n.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function o(e){let{severity:t,version:r,hasConfig:o,hasFix:i,isDeprecated:l}=e;const s=null==t?void 0:t.toLowerCase();return n.createElement("div",{className:"rule-additional-info"},n.createElement("div",null,n.createElement("span",{className:"added-in-label"},"added in:")," ",r),n.createElement("div",{className:`rule-severity ${s}`},s),n.createElement(a,{hasConfig:o,hasFix:i,isDeprecated:l}))}},782:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),o=r(9729);const i={},l=void 0,s={unversionedId:"rules/common/avoid-banned-imports",id:"rules/common/avoid-banned-imports",title:"avoid-banned-imports",description:"Configure some imports that you want to ban.",source:"@site/docs/rules/common/avoid-banned-imports.mdx",sourceDirName:"rules/common",slug:"/rules/common/avoid-banned-imports",permalink:"/docs/rules/common/avoid-banned-imports",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/avoid-banned-imports.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"arguments-ordering",permalink:"/docs/rules/common/arguments-ordering"},next:{title:"avoid-cascade-after-if-null",permalink:"/docs/rules/common/avoid-cascade-after-if-null"}},c={},d=[{value:"Example",id:"example",level:3},{value:"\u2699\ufe0f Config example",id:"config-example",level:3}],p={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{version:"4.16.0",severity:"warning",hasConfig:!0,mdxType:"RuleDetails"}),(0,a.kt)("p",null,"Configure some imports that you want to ban."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"With the configuration in the example below, here are some bad/good examples."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'import "package:flutter/material.dart";\nimport "package:flutter_bloc/flutter_bloc.dart";\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// No restricted imports in listed folders.\n")),(0,a.kt)("h3",{id:"config-example"},"\u2699\ufe0f Config example"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"paths")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"deny")," both support regular expressions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'dart_code_metrics:\n  ...\n  rules:\n    ...\n    - avoid-banned-imports:\n        entries:\n        - paths: ["some/folder/.*\\.dart", "another/folder/.*\\.dart"]\n          deny: ["package:flutter/material.dart"]\n          message: "Do not import Flutter Material Design library, we should not depend on it!"\n        - paths: ["core/.*\\.dart"]\n          deny: ["package:flutter_bloc/flutter_bloc.dart"]\n          message: \'State management should be not used inside "core" folder.\'\n')))}m.isMDXComponent=!0}}]);