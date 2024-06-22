"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[8329],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9729:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(5321);function i(e){let{version:t,severity:r,hasConfig:i,hasFix:o,isDeprecated:l}=e;return n.createElement("div",{className:"single-rule-info"},n.createElement(a.Z,{version:t,severity:r,hasConfig:i,hasFix:o,isDeprecated:l}))}},5321:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294);function a(e){let{hasConfig:t,hasFix:r,isDeprecated:a}=e;return n.createElement("div",{className:"rule-options"},t&&n.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),r&&n.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&n.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function i(e){let{severity:t,version:r,hasConfig:i,hasFix:o,isDeprecated:l}=e;const s=null==t?void 0:t.toLowerCase();return n.createElement("div",{className:"rule-additional-info"},n.createElement("div",null,n.createElement("span",{className:"added-in-label"},"added in:")," ",r),n.createElement("div",{className:`rule-severity ${s}`},s),n.createElement(a,{hasConfig:i,hasFix:o,isDeprecated:l}))}},9918:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),i=r(9729);const o={},l=void 0,s={unversionedId:"rules/flutter/check-for-equals-in-render-object-setters",id:"rules/flutter/check-for-equals-in-render-object-setters",title:"check-for-equals-in-render-object-setters",description:"Warns when a RenderObject setter doesn't have an equality check for the new value.",source:"@site/docs/rules/flutter/check-for-equals-in-render-object-setters.mdx",sourceDirName:"rules/flutter",slug:"/rules/flutter/check-for-equals-in-render-object-setters",permalink:"/docs/rules/flutter/check-for-equals-in-render-object-setters",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/flutter/check-for-equals-in-render-object-setters.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"avoid-wrapping-in-padding",permalink:"/docs/rules/flutter/avoid-wrapping-in-padding"},next:{title:"consistent-update-render-object",permalink:"/docs/rules/flutter/consistent-update-render-object"}},c={},d=[{value:"Example",id:"example",level:3}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{version:"4.19.0",severity:"warning",mdxType:"RuleDetails"}),(0,a.kt)("p",null,"Warns when a ",(0,a.kt)("inlineCode",{parentName:"p"},"RenderObject")," setter doesn't have an equality check for the new value."),(0,a.kt)("p",null,"The early return with the equality check is very helpful, because set a is always called within ",(0,a.kt)("inlineCode",{parentName:"p"},"updateRenderObject"),".\nIf it does not early return, then the ",(0,a.kt)("inlineCode",{parentName:"p"},"markNeedsPaint")," (or for other fields, maybe ",(0,a.kt)("inlineCode",{parentName:"p"},"markNeedsLayout"),", some heavy work, etc), will be ",(0,a.kt)("strong",{parentName:"p"},"unconditionally")," executed every time the render object is updated, even if that is totally unnecessary."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class SomeRenderBox extends RenderBox {\n  double _dividerWidth;\n  double get dividerWidth => _dividerWidth;\n  // LINT\n  set dividerWidth(double value) {\n    _dividerWidth = value;\n    markNeedsLayout();\n  }\n\n  double get spacing => _spacing;\n  double _spacing;\n  // LINT\n  set spacing(double value) {\n    _spacing = value;\n\n    if (_spacing == value) {\n      return;\n    }\n    markNeedsLayout();\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class SomeRenderBox extends RenderBox {\n  double get overflowSpacing => _overflowSpacing;\n  double _overflowSpacing;\n  set overflowSpacing(double value) {\n    assert(value != null);\n    if (_overflowSpacing == value) return;\n\n    _overflowSpacing = value;\n    markNeedsLayout();\n  }\n}\n")))}p.isMDXComponent=!0}}]);