"use strict";(self.webpackChunkreact_base=self.webpackChunkreact_base||[]).push([[9297],{7261:function(t,n,e){var r=e(1685);n.A=function(t){function n(t,e,s,c){let i=t[c++];if("__proto__"===i)return!0;const u=Number.isFinite(+i),o=c>=t.length;return i=!i&&r.A.isArray(s)?s.length:i,o?(r.A.hasOwnProp(s,i)?s[i]=[s[i],e]:s[i]=e,!u):(s[i]&&r.A.isObject(s[i])||(s[i]=[]),n(t,e,s[i],c)&&r.A.isArray(s[i])&&(s[i]=function(t){const n={},e=Object.keys(t);let r;const s=e.length;let c;for(r=0;r<s;r++)c=e[r],n[c]=t[c];return n}(s[i])),!u)}if(r.A.isFormData(t)&&r.A.isFunction(t.entries)){const e={};return r.A.forEachEntry(t,((t,s)=>{n(function(t){return r.A.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),s,e,0)})),e}return null}}}]);