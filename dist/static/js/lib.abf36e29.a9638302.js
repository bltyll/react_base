"use strict";(self.webpackChunkreact_base=self.webpackChunkreact_base||[]).push([[9094],{8391:function(e,t,n){var o=n(1685),s=n(7671),r=n(7629),a=n(3557),i=n(1235),u=n(535),d=n(4685),l=n(4844),c=n(1464),p=n(7889),f=n(6008),A=n(8388),m=n(7135);function T(e,t){let n=0;const o=(0,m.A)(50,250);return s=>{const r=s.loaded,a=s.lengthComputable?s.total:void 0,i=r-n,u=o(i);n=r;const d={loaded:r,total:a,progress:a?r/a:void 0,bytes:i,rate:u||void 0,estimated:u&&a&&r<=a?(a-r)/u:void 0,event:s};d[t?"download":"upload"]=!0,e(d)}}const E="undefined"!=typeof XMLHttpRequest;t.A=E&&function(e){return new Promise((function(t,n){let m=e.data;const E=A.A.from(e.headers).normalize();let w,g,{responseType:h,withXSRFToken:R}=e;function b(){e.cancelToken&&e.cancelToken.unsubscribe(w),e.signal&&e.signal.removeEventListener("abort",w)}if(o.A.isFormData(m))if(f.A.hasStandardBrowserEnv||f.A.hasStandardBrowserWebWorkerEnv)E.setContentType(!1);else if(!1!==(g=E.getContentType())){const[e,...t]=g?g.split(";").map((e=>e.trim())).filter(Boolean):[];E.setContentType([e||"multipart/form-data",...t].join("; "))}let C=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";E.set("Authorization","Basic "+btoa(t+":"+n))}const v=(0,i.A)(e.baseURL,e.url);function y(){if(!C)return;const o=A.A.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),r={data:h&&"text"!==h&&"json"!==h?C.response:C.responseText,status:C.status,statusText:C.statusText,headers:o,config:e,request:C};(0,s.A)((function(e){t(e),b()}),(function(e){n(e),b()}),r),C=null}if(C.open(e.method.toUpperCase(),(0,a.A)(v,e.params,e.paramsSerializer),!0),C.timeout=e.timeout,"onloadend"in C?C.onloadend=y:C.onreadystatechange=function(){C&&4===C.readyState&&(0!==C.status||C.responseURL&&0===C.responseURL.indexOf("file:"))&&setTimeout(y)},C.onabort=function(){C&&(n(new l.A("Request aborted",l.A.ECONNABORTED,e,C)),C=null)},C.onerror=function(){n(new l.A("Network Error",l.A.ERR_NETWORK,e,C)),C=null},C.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const o=e.transitional||d.A;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new l.A(t,o.clarifyTimeoutError?l.A.ETIMEDOUT:l.A.ECONNABORTED,e,C)),C=null},f.A.hasStandardBrowserEnv&&(R&&o.A.isFunction(R)&&(R=R(e)),R||!1!==R&&(0,u.A)(v))){const t=e.xsrfHeaderName&&e.xsrfCookieName&&r.A.read(e.xsrfCookieName);t&&E.set(e.xsrfHeaderName,t)}void 0===m&&E.setContentType(null),"setRequestHeader"in C&&o.A.forEach(E.toJSON(),(function(e,t){C.setRequestHeader(t,e)})),o.A.isUndefined(e.withCredentials)||(C.withCredentials=!!e.withCredentials),h&&"json"!==h&&(C.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&C.addEventListener("progress",T(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&C.upload&&C.upload.addEventListener("progress",T(e.onUploadProgress)),(e.cancelToken||e.signal)&&(w=t=>{C&&(n(!t||t.type?new c.A(null,e,C):t),C.abort(),C=null)},e.cancelToken&&e.cancelToken.subscribe(w),e.signal&&(e.signal.aborted?w():e.signal.addEventListener("abort",w)));const k=(0,p.A)(v);k&&-1===f.A.protocols.indexOf(k)?n(new l.A("Unsupported protocol "+k+":",l.A.ERR_BAD_REQUEST,e)):C.send(m||null)}))}}}]);