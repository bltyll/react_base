"use strict";(self.webpackChunkreact_base=self.webpackChunkreact_base||[]).push([[9509],{6137:function(e,t,a){var n=a(1685),r=a(4449),i=a(8391),s=a(4844);const o={http:r.A,xhr:i.A};n.A.forEach(o,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const c=e=>`- ${e}`,p=e=>n.A.isFunction(e)||null===e||!1===e;t.A={getAdapter:e=>{e=n.A.isArray(e)?e:[e];const{length:t}=e;let a,r;const i={};for(let n=0;n<t;n++){let t;if(a=e[n],r=a,!p(a)&&(r=o[(t=String(a)).toLowerCase()],void 0===r))throw new s.A(`Unknown adapter '${t}'`);if(r)break;i[t||"#"+n]=r}if(!r){const e=Object.entries(i).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let a=t?e.length>1?"since :\n"+e.map(c).join("\n"):" "+c(e[0]):"as no adapter specified";throw new s.A("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:o}}}]);