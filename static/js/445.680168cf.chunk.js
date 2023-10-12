"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[445],{634:function(n,t,e){e.d(t,{$:function(){return u},W:function(){return c}});var r,a,i=e(168),o=e(444),c=o.ZP.div(r||(r=(0,i.Z)(["\n  max-width: 1100px;\n  padding: 0 16px;\n  margin: 0 auto;\n"]))),u=o.ZP.section(a||(a=(0,i.Z)(["\n  padding: 60px 0;\n  border-bottom: 1px solid #eee;\n  height: 100%;\n"])))},760:function(n,t,e){e(791);var r=e(184);t.Z=function(){return(0,r.jsx)("h1",{children:"Error"})}},2:function(n,t,e){var r=e(101),a=e(184);t.Z=function(){return(0,a.jsx)(r.g4,{height:"80",width:"80",radius:"11",color:"#1e349f",ariaLabel:"three-dots-loading",wrapperStyle:{position:"absolute",bottom:"47%",left:"47%"},wrapperClassName:"",visible:!0})}},445:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r,a,i,o=e(433),c=e(861),u=e(439),s=e(757),p=e.n(s),l=e(634),f=e(760),d=e(168),h=e(444),x=h.ZP.button(r||(r=(0,d.Z)(["\n  padding: 8px 16px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 2px;\n  background-color: #000;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: block;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  color: #fff;\n  border: 0;\n  cursor: pointer;\n  min-width: 180px;\n  height: 60px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: rgb(106, 90, 205);\n  }\n"]))),g=e(184),b=function(n){var t=n.onClick;return(0,g.jsx)(x,{type:"button",onClick:function(){return t()},children:"Load more"})},m=e(2),v=h.ZP.label(a||(a=(0,d.Z)(["\n  input {\n    display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  }&:placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n  Label {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n  }\n\n"]))),Z=function(n){var t=n.handleQuery,e=n.queryParam,r=n.setPage;return(0,g.jsx)(v,{children:(0,g.jsx)("input",{type:"text",placeholder:"Search",value:e,onChange:function(n){var e=n.target.value;t(""!==e?{query:e}:{}),r(1)}})})},w=e(791),y=e(689),k=e(87),j=h.ZP.ul(i||(i=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 18px;\n\n  li {\n    font-size: 22px;\n    transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover {\n      scale: 1.1;\n      color: #600000;\n    }\n  }\n  a {\n    display: block;\n    text-decoration: none;\n    color: inherit;\n  }\n  img {\n    border: 1px solid #eee;\n    width: 200px;\n    height: 300px;\n  }\n"]))),P=function(n){var t=n.movies,e=(0,y.TH)();return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(j,{children:t.map((function(n){var t=n.title,r=n.id,a=n.poster_path;return(0,g.jsx)("li",{children:(0,g.jsxs)(k.rU,{to:"".concat(r),state:{from:e},children:[(0,g.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w200").concat(a),alt:t}),t&&t.substring(0,18)]})},r)}))})})},S=e(697),_=function(){var n,t=(0,w.useState)([]),e=(0,u.Z)(t,2),r=e[0],a=e[1],i=(0,k.lr)(),s=(0,u.Z)(i,2),d=s[0],h=s[1],x=(0,w.useState)(1),v=(0,u.Z)(x,2),y=v[0],j=v[1],_=(0,w.useState)(!1),C=(0,u.Z)(_,2),q=C[0],z=C[1],E=(0,w.useState)(!1),L=(0,u.Z)(E,2),M=L[0],F=L[1],Q=(0,w.useState)(!1),T=(0,u.Z)(Q,2),V=T[0],W=T[1],H=null!==(n=d.get("query"))&&void 0!==n?n:"";(0,w.useEffect)((function(){if(!H)return a([]);var n=function(){var n=(0,c.Z)(p().mark((function n(t,e){var r,i,c,u;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return z(!0),n.prev=1,n.next=4,(0,S.V0)(t,e);case 4:r=n.sent,i=r.results,c=r.total_result,u=r.total_pages,1===e?a(i):(a((function(n){return[].concat((0,o.Z)(n),(0,o.Z)(i))})),W(u<Math.ceil(c/20))),W(!0),z(!1),n.next=18;break;case 13:n.prev=13,n.t0=n.catch(1),console.log(n.t0),F(!0),z(!0);case 18:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(t,e){return n.apply(this,arguments)}}();n(H,y)}),[y,H]),(0,w.useEffect)((function(){if(!H)return W(!1)}),[H]);return(0,g.jsx)("section",{children:(0,g.jsxs)(l.W,{children:[(0,g.jsx)(Z,{handleQuery:function(n){h(n)},queryParam:H,setPage:j}),q?(0,g.jsx)(m.Z,{}):(0,g.jsxs)(g.Fragment,{children:[0!==r.length&&(0,g.jsxs)("h2",{children:["Movies: '",H,"'"]}),(0,g.jsx)(P,{movies:r}),V&&(0,g.jsx)(b,{onClick:function(){j((function(n){return n+1}))}})]}),M&&(0,g.jsx)(f.Z,{})]})})}},697:function(n,t,e){e.d(t,{Eb:function(){return f},SM:function(){return h},V0:function(){return g},XT:function(){return u},t4:function(){return p}});var r=e(861),a=e(757),i=e.n(a),o=e(243),c="https://api.themoviedb.org/3";function u(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/trending/all/day"));case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/movie/").concat(t));case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/movie/").concat(t,"/credits"));case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/movie/").concat(t,"/reviews"));case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return b.apply(this,arguments)}function b(){return b=(0,r.Z)(i().mark((function n(t){var e,r=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>1&&void 0!==r[1]?r[1]:1,n.next=3,o.Z.get("".concat(c,"/search/movie?query=").concat(t,"&page=").concat(e));case 3:return n.abrupt("return",n.sent.data);case 4:case"end":return n.stop()}}),n)}))),b.apply(this,arguments)}o.Z.defaults.params={api_key:"22ba7957556991080b2d9f0336ac306f"}}}]);
//# sourceMappingURL=445.680168cf.chunk.js.map