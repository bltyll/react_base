"use strict";(self.webpackChunkreact_base=self.webpackChunkreact_base||[]).push([[9179],{8199:function(n,e,t){var i=t(1685),r=t(4844),o=t(4449);function s(n){return i.A.isPlainObject(n)||i.A.isArray(n)}function u(n){return i.A.endsWith(n,"[]")?n.slice(0,-2):n}function f(n,e,t){return n?n.concat(e).map((function(n,e){return n=u(n),!t&&e?"["+n+"]":n})).join(t?".":""):e}const c=i.A.toFlatObject(i.A,{},null,(function(n){return/^is[A-Z]/.test(n)}));e.A=function(n,e,t){if(!i.A.isObject(n))throw new TypeError("target must be an object");e=e||new(o.A||FormData);const a=(t=i.A.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(n,e){return!i.A.isUndefined(e[n])}))).metaTokens,A=t.visitor||h,l=t.dots,d=t.indexes,b=(t.Blob||"undefined"!=typeof Blob&&Blob)&&i.A.isSpecCompliantForm(e);if(!i.A.isFunction(A))throw new TypeError("visitor must be a function");function p(n){if(null===n)return"";if(i.A.isDate(n))return n.toISOString();if(!b&&i.A.isBlob(n))throw new r.A("Blob is not supported. Use a Buffer instead.");return i.A.isArrayBuffer(n)||i.A.isTypedArray(n)?b&&"function"==typeof Blob?new Blob([n]):Buffer.from(n):n}function h(n,t,r){let o=n;if(n&&!r&&"object"==typeof n)if(i.A.endsWith(t,"{}"))t=a?t:t.slice(0,-2),n=JSON.stringify(n);else if(i.A.isArray(n)&&function(n){return i.A.isArray(n)&&!n.some(s)}(n)||(i.A.isFileList(n)||i.A.endsWith(t,"[]"))&&(o=i.A.toArray(n)))return t=u(t),o.forEach((function(n,r){!i.A.isUndefined(n)&&null!==n&&e.append(!0===d?f([t],r,l):null===d?t:t+"[]",p(n))})),!1;return!!s(n)||(e.append(f(r,t,l),p(n)),!1)}const y=[],w=Object.assign(c,{defaultVisitor:h,convertValue:p,isVisitable:s});if(!i.A.isObject(n))throw new TypeError("data must be an object");return function n(t,r){if(!i.A.isUndefined(t)){if(-1!==y.indexOf(t))throw Error("Circular reference detected in "+r.join("."));y.push(t),i.A.forEach(t,(function(t,o){!0===(!(i.A.isUndefined(t)||null===t)&&A.call(e,t,i.A.isString(o)?o.trim():o,r,w))&&n(t,r?r.concat(o):[o])})),y.pop()}}(n),e}}}]);