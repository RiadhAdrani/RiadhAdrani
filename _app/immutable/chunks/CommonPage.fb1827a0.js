import{s as P,q as V,P as j,a as v,f as T,c as y,g as C,h as S,d as p,j as k,i as g,K as q,$ as K,Q,R,S as z,l as A,m as B,p as F}from"./scheduler.7a274a43.js";import{S as G,i as H,f as J,b as w,d as D,m as E,a as d,t as $,e as I}from"./index.28409b7f.js";import{M as L}from"./MainTitle.990b7978.js";import{T as N}from"./TabTitle.17437e3c.js";function O(l){let e;return{c(){e=A(l[0])},l(s){e=B(s,l[0])},m(s,r){g(s,e,r)},p(s,r){r&1&&F(e,s[0])},d(s){s&&p(e)}}}function U(l){let e,s,r,f,i,_,n,m;function M(t){l[2](t)}let b={};l[0]!==void 0&&(b.title=l[0]),e=new N({props:b}),V.push(()=>J(e,"title",M)),i=new L({props:{$$slots:{default:[O]},$$scope:{ctx:l}}});const u=l[1].default,o=j(u,l,l[3],null);return{c(){w(e.$$.fragment),r=v(),f=T("div"),w(i.$$.fragment),_=v(),n=T("div"),o&&o.c(),this.h()},l(t){D(e.$$.fragment,t),r=y(t),f=C(t,"DIV",{class:!0});var a=S(f);D(i.$$.fragment,a),_=y(a),n=C(a,"DIV",{class:!0});var c=S(n);o&&o.l(c),c.forEach(p),a.forEach(p),this.h()},h(){k(n,"class","col gap-5 flex-1"),k(f,"class","flex-1 col gap-5 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12")},m(t,a){E(e,t,a),g(t,r,a),g(t,f,a),E(i,f,null),q(f,_),q(f,n),o&&o.m(n,null),m=!0},p(t,[a]){const c={};!s&&a&1&&(s=!0,c.title=t[0],K(()=>s=!1)),e.$set(c);const h={};a&9&&(h.$$scope={dirty:a,ctx:t}),i.$set(h),o&&o.p&&(!m||a&8)&&Q(o,u,t,t[3],m?z(u,t[3],a,null):R(t[3]),null)},i(t){m||(d(e.$$.fragment,t),d(i.$$.fragment,t),d(o,t),m=!0)},o(t){$(e.$$.fragment,t),$(i.$$.fragment,t),$(o,t),m=!1},d(t){t&&(p(r),p(f)),I(e,t),I(i),o&&o.d(t)}}}function W(l,e,s){let{$$slots:r={},$$scope:f}=e,{title:i="Title"}=e;function _(n){i=n,s(0,i)}return l.$$set=n=>{"title"in n&&s(0,i=n.title),"$$scope"in n&&s(3,f=n.$$scope)},[i,r,_,f]}class tt extends G{constructor(e){super(),H(this,e,W,U,P,{title:0})}}export{tt as C};
