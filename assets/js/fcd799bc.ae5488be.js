"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[6307],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9729:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(7294),a=t(5321);function o(e){let{version:r,severity:t,hasConfig:o,hasFix:i,isDeprecated:s}=e;return n.createElement("div",{className:"single-rule-info"},n.createElement(a.Z,{version:r,severity:t,hasConfig:o,hasFix:i,isDeprecated:s}))}},5321:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(7294);function a(e){let{hasConfig:r,hasFix:t,isDeprecated:a}=e;return n.createElement("div",{className:"rule-options"},r&&n.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),t&&n.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&n.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function o(e){let{severity:r,version:t,hasConfig:o,hasFix:i,isDeprecated:s}=e;const l=null==r?void 0:r.toLowerCase();return n.createElement("div",{className:"rule-additional-info"},n.createElement("div",null,n.createElement("span",{className:"added-in-label"},"added in:")," ",t),n.createElement("div",{className:`rule-severity ${l}`},l),n.createElement(a,{hasConfig:o,hasFix:i,isDeprecated:s}))}},9618:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(7462),a=(t(7294),t(3905)),o=t(9729);const i={},s=void 0,l={unversionedId:"rules/common/binary-expression-operand-order",id:"rules/common/binary-expression-operand-order",title:"binary-expression-operand-order",description:"Warns when a literal value is on the left hand side in a binary expressions.",source:"@site/docs/rules/common/binary-expression-operand-order.mdx",sourceDirName:"rules/common",slug:"/rules/common/binary-expression-operand-order",permalink:"/docs/rules/common/binary-expression-operand-order",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/binary-expression-operand-order.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"ban-name",permalink:"/docs/rules/common/ban-name"},next:{title:"double-literal-format",permalink:"/docs/rules/common/double-literal-format"}},c={},p=[],d={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{version:"1.7.0",severity:"style",hasFix:!0,mdxType:"RuleDetails"}),(0,a.kt)("p",null,"Warns when a literal value is on the left hand side in a binary expressions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"final a = 1 + b;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"final a = b + 1;\n")),(0,a.kt)("p",null,"Inspired by ",(0,a.kt)("a",{parentName:"p",href:"https://palantir.github.io/tslint/rules/binary-expression-operand-order/"},"TSLint rule")))}u.isMDXComponent=!0}}]);