"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[396],{634:function(n,t,e){e.d(t,{$:function(){return u},W:function(){return c}});var r,a,o=e(168),i=e(444),c=i.ZP.div(r||(r=(0,o.Z)(["\n  max-width: 1100px;\n  padding: 0 16px;\n  margin: 0 auto;\n"]))),u=i.ZP.section(a||(a=(0,o.Z)(["\n  padding: 60px 0;\n  border-bottom: 1px solid #eee;\n  height: 100%;\n"])))},760:function(n,t,e){e(791);var r=e(184);t.Z=function(){return(0,r.jsx)("h1",{children:"Error"})}},2:function(n,t,e){var r=e(101),a=e(184);t.Z=function(){return(0,a.jsx)(r.g4,{height:"80",width:"80",radius:"11",color:"#1e349f",ariaLabel:"three-dots-loading",wrapperStyle:{position:"absolute",bottom:"47%",left:"47%"},wrapperClassName:"",visible:!0})}},396:function(n,t,e){e.r(t),e.d(t,{default:function(){return L}});var r,a=e(433),o=e(861),i=e(439),c=e(757),u=e.n(c),s=e(634),p=e(760),l=e(168),d=e(444),f=d.ZP.button(r||(r=(0,l.Z)(["\n  padding: 8px 16px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 2px;\n  background-color: #000;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: block;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  color: #fff;\n  border: 0;\n  cursor: pointer;\n  min-width: 180px;\n  height: 60px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: rgb(106, 90, 205);\n  }\n"]))),h=e(184),x=function(n){var t=n.onClick;return(0,h.jsx)(f,{type:"button",onClick:function(){return t()},children:"Load more"})},g=e(2),b=e(791);var m,v,Z,w,y,k=e.p+"static/media/search.750f6c864369accb88be783ad960a83b.svg",j=d.ZP.form(m||(m=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 400px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-top: 5px;\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid;\n"]))),S=d.ZP.button(v||(v=(0,l.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url(",");\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  background-color: rgb(106, 90, 205);\n\n  &:hover {\n    opacity: 1;\n  }\n"])),k),P=d.ZP.input(Z||(Z=(0,l.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &:placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),C=d.ZP.span(w||(w=(0,l.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n  \n"]))),_=function(n){var t=n.setSearchParams,e=(0,b.useState)(""),r=(0,i.Z)(e,2),a=r[0],o=r[1];return(0,h.jsxs)(j,{onSubmit:function(n){n.preventDefault(),t({query:a})},children:[(0,h.jsx)(S,{type:"submit",children:(0,h.jsx)(C,{children:"Search"})}),(0,h.jsx)(P,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films",value:a,onChange:function(n){o(n.target.value.trim())}})]})},z=e(689),q=e(87),E=d.ZP.ul(y||(y=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 18px;\n\n  li {\n    font-size: 22px;\n    transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover {\n      scale: 1.1;\n      color: #600000;\n    }\n  }\n  a {\n    display: block;\n    text-decoration: none;\n    color: inherit;\n  }\n  img {\n    border: 1px solid #eee;\n    width: 200px;\n    height: 300px;\n  }\n"]))),F=function(n){var t=n.movies,e=(0,z.TH)();return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(E,{children:t.map((function(n){var t=n.title,r=n.id,a=n.poster_path;return(0,h.jsx)("li",{children:(0,h.jsxs)(q.rU,{to:"".concat(r),state:{from:e},children:[(0,h.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w200").concat(a),alt:t}),t&&t.substring(0,18)]})},r)}))})})},M=e(697),L=function(){var n,t=(0,b.useState)([]),e=(0,i.Z)(t,2),r=e[0],c=e[1],l=(0,q.lr)(),d=(0,i.Z)(l,2),f=d[0],m=d[1],v=(0,b.useState)(1),Z=(0,i.Z)(v,2),w=Z[0],y=Z[1],k=(0,b.useState)(!1),j=(0,i.Z)(k,2),S=j[0],P=j[1],C=(0,b.useState)(!1),z=(0,i.Z)(C,2),E=z[0],L=z[1],T=(0,b.useState)(!1),V=(0,i.Z)(T,2),W=V[0],D=V[1],H=null!==(n=f.get("query"))&&void 0!==n?n:"";(0,b.useEffect)((function(){if(!H)return c([]);var n=function(){var n=(0,o.Z)(u().mark((function n(t,e){var r,o,i,s;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return P(!0),n.prev=1,n.next=4,(0,M.V0)(t,e);case 4:r=n.sent,o=r.results,i=r.total_result,s=r.total_pages,1===e?c(o):(c((function(n){return[].concat((0,a.Z)(n),(0,a.Z)(o))})),D(s<Math.ceil(i/20))),D(!0),P(!1),n.next=18;break;case 13:n.prev=13,n.t0=n.catch(1),console.log(n.t0),L(!0),P(!0);case 18:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(t,e){return n.apply(this,arguments)}}();n(H,w)}),[w,H]);return(0,h.jsx)("section",{children:(0,h.jsxs)(s.W,{children:[(0,h.jsx)(_,{setSearchParams:m}),S?(0,h.jsx)(g.Z,{}):(0,h.jsxs)(h.Fragment,{children:[0!==r.length&&(0,h.jsxs)("h2",{children:["Movies: '",H,"'"]}),(0,h.jsx)(F,{movies:r}),W&&(0,h.jsx)(x,{onClick:function(){y((function(n){return n+1}))}})]}),E&&(0,h.jsx)(p.Z,{})]})})}},697:function(n,t,e){e.d(t,{Eb:function(){return d},SM:function(){return h},V0:function(){return g},XT:function(){return u},t4:function(){return p}});var r=e(861),a=e(757),o=e.n(a),i=e(243),c="https://api.themoviedb.org/3";function u(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/trending/all/day"));case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/movie/").concat(t));case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/movie/").concat(t,"/credits"));case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/movie/").concat(t,"/reviews"));case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return b.apply(this,arguments)}function b(){return b=(0,r.Z)(o().mark((function n(t){var e,r=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>1&&void 0!==r[1]?r[1]:1,n.next=3,i.Z.get("".concat(c,"/search/movie?query=").concat(t,"&page=").concat(e));case 3:return n.abrupt("return",n.sent.data);case 4:case"end":return n.stop()}}),n)}))),b.apply(this,arguments)}i.Z.defaults.params={api_key:"22ba7957556991080b2d9f0336ac306f"}}}]);
//# sourceMappingURL=396.9dd147be.chunk.js.map