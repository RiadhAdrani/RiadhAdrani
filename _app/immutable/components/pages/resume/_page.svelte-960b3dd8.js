import{S,i as V,s as x,a as y,w as v,k as R,R as A,h as i,c as P,x as b,l as T,m as q,n as d,b as _,y as g,f as p,t as $,z as k,q as B,r as I,B as w}from"../../../chunks/index-de56b907.js";import{C as z}from"../../../chunks/Chip-8fea7f59.js";import{M as O}from"../../../chunks/MainTitle-0b268c8d.js";import{P as C,R as Y}from"../../../chunks/params-bde9ff49.js";import{u as E}from"../../../chunks/helpers-390da873.js";function j(r){let e;return{c(){e=B(r[1])},l(t){e=I(t,r[1])},m(t,s){_(t,e,s)},p:w,d(t){t&&i(e)}}}function F(r){let e,t;return e=new z({props:{label:"Ooops! no CV at the moment. You should input your cv link in $lib/Params.ts"}}),{c(){v(e.$$.fragment)},l(s){b(e.$$.fragment,s)},m(s,n){g(e,s,n),t=!0},p:w,i(s){t||(p(e.$$.fragment,s),t=!0)},o(s){$(e.$$.fragment,s),t=!1},d(s){k(e,s)}}}function G(r){let e,t,s;return t=new z({props:{label:"Download",size:"1.25em"}}),{c(){e=R("a"),v(t.$$.fragment),this.h()},l(n){e=T(n,"A",{href:!0,class:!0});var l=q(e);b(t.$$.fragment,l),l.forEach(i),this.h()},h(){d(e,"href",r[0]),d(e,"class","svelte-wl30ce")},m(n,l){_(n,e,l),g(t,e,null),s=!0},p:w,i(n){s||(p(t.$$.fragment,n),s=!0)},o(n){$(t.$$.fragment,n),s=!1},d(n){n&&i(e),k(t)}}}function H(r){let e,t,s,n,l,f,c,m;document.title=e=E(r[1],C),s=new O({props:{$$slots:{default:[j]},$$scope:{ctx:r}}});const D=[G,F],h=[];function M(a,o){return a[0]?0:1}return f=M(r),c=h[f]=D[f](r),{c(){t=y(),v(s.$$.fragment),n=y(),l=R("div"),c.c(),this.h()},l(a){A("svelte-s4huv4",document.head).forEach(i),t=P(a),b(s.$$.fragment,a),n=P(a),l=T(a,"DIV",{class:!0});var u=q(l);c.l(u),u.forEach(i),this.h()},h(){d(l,"class","resume svelte-wl30ce")},m(a,o){_(a,t,o),g(s,a,o),_(a,n,o),_(a,l,o),h[f].m(l,null),m=!0},p(a,[o]){(!m||o&2)&&e!==(e=E(a[1],C))&&(document.title=e);const u={};o&4&&(u.$$scope={dirty:o,ctx:a}),s.$set(u),c.p(a,o)},i(a){m||(p(s.$$.fragment,a),p(c),m=!0)},o(a){$(s.$$.fragment,a),$(c),m=!1},d(a){a&&i(t),k(s,a),a&&i(n),a&&i(l),h[f].d()}}}function J(r){const{cv:e,title:t}=Y;return[e,t]}class W extends S{constructor(e){super(),V(this,e,J,H,x,{})}}export{W as default};
