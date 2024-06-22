"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[9704],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9729:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(5321);function o(e){let{version:t,severity:r,hasConfig:o,hasFix:i,isDeprecated:l}=e;return a.createElement("div",{className:"single-rule-info"},a.createElement(n.Z,{version:t,severity:r,hasConfig:o,hasFix:i,isDeprecated:l}))}},5321:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294);function n(e){let{hasConfig:t,hasFix:r,isDeprecated:n}=e;return a.createElement("div",{className:"rule-options"},t&&a.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),r&&a.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),n&&a.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function o(e){let{severity:t,version:r,hasConfig:o,hasFix:i,isDeprecated:l}=e;const s=null==t?void 0:t.toLowerCase();return a.createElement("div",{className:"rule-additional-info"},a.createElement("div",null,a.createElement("span",{className:"added-in-label"},"added in:")," ",r),a.createElement("div",{className:`rule-severity ${s}`},s),a.createElement(n,{hasConfig:o,hasFix:i,isDeprecated:l}))}},1650:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905)),o=r(9729);const i={},l=void 0,s={unversionedId:"rules/common/avoid-double-slash-imports",id:"rules/common/avoid-double-slash-imports",title:"avoid-double-slash-imports",description:"Warns when an import/export directive contains a double slash.",source:"@site/docs/rules/common/avoid-double-slash-imports.mdx",sourceDirName:"rules/common",slug:"/rules/common/avoid-double-slash-imports",permalink:"/docs/rules/common/avoid-double-slash-imports",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/avoid-double-slash-imports.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"avoid-collection-methods-with-unrelated-types",permalink:"/docs/rules/common/avoid-collection-methods-with-unrelated-types"},next:{title:"avoid-duplicate-exports",permalink:"/docs/rules/common/avoid-duplicate-exports"}},c={},p=[{value:"Example",id:"example",level:3}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{version:"5.2.0",severity:"warning",hasFix:!0,mdxType:"RuleDetails"}),(0,n.kt)("p",null,"Warns when an import/export directive contains a double slash."),(0,n.kt)("p",null,"Double slash in the URI is considered valid, but under some circumstances the programm won't run."),(0,n.kt)("p",null,"See:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/dart-lang/sdk/issues/36337"},"https://github.com/dart-lang/sdk/issues/36337"))),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:test//material.dart'; // LINT\nimport 'package:mocktail/good_file.dart';\nimport '../../..//rule_utils_test.dart'; // LINT\n\nexport 'package:mocktail//good_file.dart'; // LINT\n\npart '..//empty.dart'; // LINT\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:test/material.dart';\nimport 'package:mocktail/good_file.dart';\nimport '../../../rule_utils_test.dart';\n\nexport 'package:mocktail/good_file.dart';\n\npart '../empty.dart';\n")))}m.isMDXComponent=!0}}]);