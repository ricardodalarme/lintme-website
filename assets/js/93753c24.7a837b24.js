"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[7994],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9729:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(5321);function i(e){let{version:t,severity:r,hasConfig:i,hasFix:o,isDeprecated:l}=e;return n.createElement("div",{className:"single-rule-info"},n.createElement(a.Z,{version:t,severity:r,hasConfig:i,hasFix:o,isDeprecated:l}))}},5321:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294);function a(e){let{hasConfig:t,hasFix:r,isDeprecated:a}=e;return n.createElement("div",{className:"rule-options"},t&&n.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),r&&n.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&n.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function i(e){let{severity:t,version:r,hasConfig:i,hasFix:o,isDeprecated:l}=e;const c=null==t?void 0:t.toLowerCase();return n.createElement("div",{className:"rule-additional-info"},n.createElement("div",null,n.createElement("span",{className:"added-in-label"},"added in:")," ",r),n.createElement("div",{className:`rule-severity ${c}`},c),n.createElement(a,{hasConfig:i,hasFix:o,isDeprecated:l}))}},7894:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),i=r(9729);const o={},l=void 0,c={unversionedId:"rules/common/prefer-correct-test-file-name",id:"rules/common/prefer-correct-test-file-name",title:"prefer-correct-test-file-name",description:"Warns if the file within /test contains a main, but the file name doesn't end with _test.dart.",source:"@site/docs/rules/common/prefer-correct-test-file-name.mdx",sourceDirName:"rules/common",slug:"/rules/common/prefer-correct-test-file-name",permalink:"/docs/rules/common/prefer-correct-test-file-name",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/prefer-correct-test-file-name.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"prefer-correct-identifier-length",permalink:"/docs/rules/common/prefer-correct-identifier-length"},next:{title:"prefer-correct-type-name",permalink:"/docs/rules/common/prefer-correct-type-name"}},s={},p=[{value:"Example",id:"example",level:3}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{version:"4.19.0",severity:"warning",mdxType:"RuleDetails"}),(0,a.kt)("p",null,"Warns if the file within ",(0,a.kt)("inlineCode",{parentName:"p"},"/test")," contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"main"),", but the file name doesn't end with ",(0,a.kt)("inlineCode",{parentName:"p"},"_test.dart"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you want to set ",(0,a.kt)("inlineCode",{parentName:"p"},"exclude")," config for this rule, the default ",(0,a.kt)("inlineCode",{parentName:"p"},"['lib/**', 'bin/**']")," will be overriden.")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("p",null,"File name: ",(0,a.kt)("strong",{parentName:"p"},"some_file.dart")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"void main() {\n  ...\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("p",null,"File name: ",(0,a.kt)("strong",{parentName:"p"},"some_file_test.dart")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"void main() {\n  ...\n}\n")),(0,a.kt)("p",null,"File name: ",(0,a.kt)("strong",{parentName:"p"},"some_other_file.dart")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"void helperFunction() {\n  ...\n}\n")))}d.isMDXComponent=!0}}]);