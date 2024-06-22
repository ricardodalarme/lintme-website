"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[8672],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(t),p=r,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||i;return t?a.createElement(f,l(l({ref:n},d),{},{components:t})):a.createElement(f,l({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9729:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),r=t(5321);function i(e){let{version:n,severity:t,hasConfig:i,hasFix:l,isDeprecated:o}=e;return a.createElement("div",{className:"single-rule-info"},a.createElement(r.Z,{version:n,severity:t,hasConfig:i,hasFix:l,isDeprecated:o}))}},5321:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294);function r(e){let{hasConfig:n,hasFix:t,isDeprecated:r}=e;return a.createElement("div",{className:"rule-options"},n&&a.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),t&&a.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),r&&a.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function i(e){let{severity:n,version:t,hasConfig:i,hasFix:l,isDeprecated:o}=e;const s=null==n?void 0:n.toLowerCase();return a.createElement("div",{className:"rule-additional-info"},a.createElement("div",null,a.createElement("span",{className:"added-in-label"},"added in:")," ",t),a.createElement("div",{className:`rule-severity ${s}`},s),a.createElement(r,{hasConfig:i,hasFix:l,isDeprecated:o}))}},5628:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=t(7462),r=(t(7294),t(3905)),i=t(9729);const l={},o=void 0,s={unversionedId:"rules/common/avoid-late-keyword",id:"rules/common/avoid-late-keyword",title:"avoid-late-keyword",description:"Warns when a field or variable is declared with a late keyword.",source:"@site/docs/rules/common/avoid-late-keyword.mdx",sourceDirName:"rules/common",slug:"/rules/common/avoid-late-keyword",permalink:"/docs/rules/common/avoid-late-keyword",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/avoid-late-keyword.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"avoid-ignoring-return-values",permalink:"/docs/rules/common/avoid-ignoring-return-values"},next:{title:"avoid-missing-enum-constant-in-map",permalink:"/docs/rules/common/avoid-missing-enum-constant-in-map"}},c={},d=[{value:"\u2699\ufe0f Config example",id:"config-example",level:3},{value:"Example",id:"example",level:3}],u={toc:d};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{version:"3.2.0",severity:"warning",hasConfig:!0,mdxType:"RuleDetails"}),(0,r.kt)("p",null,"Warns when a field or variable is declared with a ",(0,r.kt)("inlineCode",{parentName:"p"},"late")," keyword."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"late")," keyword enforces a variable's constraints at runtime instead of at compile time and since the variable is not definitely initialized, every time it is read, a runtime check is inserted to make sure it has been assigned a value. If it hasn\u2019t, an exception will be thrown."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Use this rule if you want to avoid unexpected runtime exceptions.")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"allow-initialized")," configuration (default is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"), if you want to allow initialized late variable declarations."),(0,r.kt)("h3",{id:"config-example"},"\u2699\ufe0f Config example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_metrics:\n  ...\n  rules:\n    ...\n    - avoid-late-keyword:\n        allow-initialized: true\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"class Test {\n  late final field = 'string'; // LINT\n\n  final String anotherField = '';\n\n  String? nullableField;\n\n  late String uninitializedField; // LINT\n\n  void method() {\n    late final variable = 'string'; // LINT\n\n    final anotherVariable = '';\n\n    String? nullableVariable;\n\n    late String uninitializedVariable; // LINT\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"class Test {\n  final field = 'string';\n\n  final String anotherField = '';\n\n  String? nullableField;\n\n  String uninitializedField;\n\n  void method() {\n    final variable = 'string';\n\n    final anotherVariable = '';\n\n    String? nullableVariable;\n\n    String uninitializedVariable;\n  }\n}\n")))}m.isMDXComponent=!0}}]);