"use strict";(self.webpackChunkreact_base=self.webpackChunkreact_base||[]).push([[5639],{2165:function(e,r,n){n.d(r,{A:function(){return u}});var a=n(9794),t=n(4909),s=n(5831),o=n(1464),c=n(8388),d=n(6137);function p(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new o.A(null,e)}function u(e){return p(e),e.headers=c.A.from(e.headers),e.data=a.A.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),d.A.getAdapter(e.adapter||s.A.adapter)(e).then((function(r){return p(e),r.data=a.A.call(e,e.transformResponse,r),r.headers=c.A.from(r.headers),r}),(function(r){return(0,t.A)(r)||(p(e),r&&r.response&&(r.response.data=a.A.call(e,e.transformResponse,r.response),r.response.headers=c.A.from(r.response.headers))),Promise.reject(r)}))}}}]);