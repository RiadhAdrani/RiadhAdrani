import{s as he,f as g,a as A,l as W,g as b,h as x,c as V,m as X,d as v,j as d,i as ee,I as m,J as ge,K as be,L as Y,n as xe,M as ye,N as oe,O as ke,P as Ee,Q as we,o as Ne}from"../chunks/scheduler.bdaa4df1.js";import{S as de,i as pe,b as O,d as P,m as T,a as y,g as ce,c as ie,t as w,e as U}from"../chunks/index.49b0a900.js";import{U as L,e as ue}from"../chunks/UIcon.62d4f51d.js";import{p as je}from"../chunks/stores.c36fbbf9.js";import{t as ve,H as fe,N as J,a as Ie,o as Ae}from"../chunks/params.f1669b54.js";import{b as Z}from"../chunks/paths.2d702163.js";function me(l,e,n){const t=l.slice();return t[5]=e[n],t}function _e(l){let e,n,t,a,_=l[5].title+"",o,$,i;return n=new L({props:{icon:l[5].icon,classes:"text-1.3em"}}),{c(){e=g("a"),O(n.$$.fragment),t=A(),a=g("span"),o=W(_),$=A(),this.h()},l(r){e=b(r,"A",{href:!0,class:!0});var u=x(e);P(n.$$.fragment,u),t=V(u),a=b(u,"SPAN",{class:!0});var N=x(a);o=X(N,_),N.forEach(v),$=V(u),u.forEach(v),this.h()},h(){d(a,"class","nav-menu-item-label svelte-z8k68j"),d(e,"href",`${Z}${l[5].to}`),d(e,"class","nav-menu-item !text-[var(--secondary-text)] svelte-z8k68j")},m(r,u){ee(r,e,u),T(n,e,null),m(e,t),m(e,a),m(a,o),m(e,$),i=!0},p:xe,i(r){i||(y(n.$$.fragment,r),i=!0)},o(r){w(n.$$.fragment,r),i=!1},d(r){r&&v(e),U(n)}}}function Ve(l){let e,n;return e=new L({props:{icon:"i-carbon-sun"}}),{c(){O(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,a){T(e,t,a),n=!0},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){U(e,t)}}}function De(l){let e,n;return e=new L({props:{icon:"i-carbon-moon"}}),{c(){O(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,a){T(e,t,a),n=!0},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){U(e,t)}}}function Me(l){let e,n,t,a,_,o,$=fe.name+"",i,r,u=fe.lastName+"",N,K,D,Q,j,M,S,F,I,k,E,q,G,te;a=new L({props:{icon:"i-carbon-code",classes:"text-2em"}});let z=ue(l[1]),c=[];for(let s=0;s<z.length;s+=1)c[s]=_e(me(l,z,s));const $e=s=>w(c[s],1,1,()=>{c[s]=null});S=new L({props:{icon:"i-carbon-search"}});const ne=[De,Ve],B=[];function re(s,h){return s[0]?0:1}return k=re(l),E=B[k]=ne[k](l),{c(){e=g("div"),n=g("nav"),t=g("a"),O(a.$$.fragment),_=A(),o=g("span"),i=W($),r=A(),N=W(u),K=A(),D=g("div");for(let s=0;s<c.length;s+=1)c[s].c();Q=A(),j=g("div"),M=g("a"),O(S.$$.fragment),F=A(),I=g("button"),E.c(),this.h()},l(s){e=b(s,"DIV",{class:!0});var h=x(e);n=b(h,"NAV",{class:!0});var p=x(n);t=b(p,"A",{href:!0,class:!0});var f=x(t);P(a.$$.fragment,f),_=V(f),o=b(f,"SPAN",{class:!0});var H=x(o);i=X(H,$),r=V(H),N=X(H,u),H.forEach(v),f.forEach(v),K=V(p),D=b(p,"DIV",{class:!0});var se=x(D);for(let R=0;R<c.length;R+=1)c[R].l(se);se.forEach(v),Q=V(p),j=b(p,"DIV",{class:!0});var C=x(j);M=b(C,"A",{href:!0,class:!0});var ae=x(M);P(S.$$.fragment,ae),ae.forEach(v),F=V(C),I=b(C,"BUTTON",{class:!0});var le=x(I);E.l(le),le.forEach(v),C.forEach(v),p.forEach(v),h.forEach(v),this.h()},h(){d(o,"class","ml-2 text-md font-bold hidden md:inline"),d(t,"href",`${Z}/`),d(t,"class","nav-menu-left decoration-none flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]"),d(D,"class","flex flex-row flex-1 self-center justify-center"),d(M,"href",`${Z}/search`),d(M,"class","text-inherit col-center self-stretch px-2 hover:bg-[color:var(--main-hover)]"),d(I,"class","bg-transparent text-1em border-none cursor-pointer hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2"),d(j,"class","flex flex-row self-stretch items-stretch gap-1 text-1.15em"),d(n,"class","container !justify-between flex flex-row items-center text-sm"),d(e,"class","nav-menu svelte-z8k68j")},m(s,h){ee(s,e,h),m(e,n),m(n,t),T(a,t,null),m(t,_),m(t,o),m(o,i),m(o,r),m(o,N),m(n,K),m(n,D);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(D,null);m(n,Q),m(n,j),m(j,M),T(S,M,null),m(j,F),m(j,I),B[k].m(I,null),q=!0,G||(te=ge(I,"click",l[3]),G=!0)},p(s,[h]){if(h&2){z=ue(s[1]);let f;for(f=0;f<z.length;f+=1){const H=me(s,z,f);c[f]?(c[f].p(H,h),y(c[f],1)):(c[f]=_e(H),c[f].c(),y(c[f],1),c[f].m(D,null))}for(ce(),f=z.length;f<c.length;f+=1)$e(f);ie()}let p=k;k=re(s),k!==p&&(ce(),w(B[p],1,1,()=>{B[p]=null}),ie(),E=B[k],E||(E=B[k]=ne[k](s),E.c()),y(E,1),E.m(I,null))},i(s){if(!q){y(a.$$.fragment,s);for(let h=0;h<z.length;h+=1)y(c[h]);y(S.$$.fragment,s),y(E),q=!0}},o(s){w(a.$$.fragment,s),c=c.filter(Boolean);for(let h=0;h<c.length;h+=1)w(c[h]);w(S.$$.fragment,s),w(E),q=!1},d(s){s&&v(e),U(a),be(c,s),U(S),B[k].d(),G=!1,te()}}}function Se(l,e,n){let t,a;Y(l,je,$=>n(2,t=$)),Y(l,ve,$=>n(0,a=$));const _=[{title:J.skills,to:"/skills",icon:"i-carbon-software-resource-cluster"},{title:J.personal,to:"/projects",icon:"i-carbon-cube"},{title:J.career,to:"/experience",icon:"i-carbon-development"},{title:J.resume,to:"/resume",icon:"i-carbon-result"}],o=()=>Ie();return l.$$.update=()=>{l.$$.dirty&4&&t&&t.url.pathname},[a,_,t,o]}class ze extends de{constructor(e){super(),pe(this,e,Se,Me,he,{})}}function Be(l){let e,n,t,a,_,o;n=new ze({});const $=l[2].default,i=ye($,l,l[1],null);return{c(){e=g("div"),O(n.$$.fragment),t=A(),a=g("div"),i&&i.c(),this.h()},l(r){e=b(r,"DIV",{class:!0});var u=x(e);P(n.$$.fragment,u),t=V(u),a=b(u,"DIV",{class:!0});var N=x(a);i&&i.l(N),N.forEach(v),u.forEach(v),this.h()},h(){d(a,"class","content container svelte-mb6t29"),d(e,"class",_=oe(`body contents ${l[0]?"theme-dark":"theme-light"}`)+" svelte-mb6t29")},m(r,u){ee(r,e,u),T(n,e,null),m(e,t),m(e,a),i&&i.m(a,null),o=!0},p(r,[u]){i&&i.p&&(!o||u&2)&&ke(i,$,r,r[1],o?we($,r[1],u,null):Ee(r[1]),null),(!o||u&1&&_!==(_=oe(`body contents ${r[0]?"theme-dark":"theme-light"}`)+" svelte-mb6t29"))&&d(e,"class",_)},i(r){o||(y(n.$$.fragment,r),y(i,r),o=!0)},o(r){w(n.$$.fragment,r),w(i,r),o=!1},d(r){r&&v(e),U(n),i&&i.d(r)}}}function He(l,e,n){let t;Y(l,ve,o=>n(0,t=o));let{$$slots:a={},$$scope:_}=e;return Ne(()=>Ae()),l.$$set=o=>{"$$scope"in o&&n(1,_=o.$$scope)},[t,_,a]}class Ce extends de{constructor(e){super(),pe(this,e,He,Be,he,{})}}export{Ce as component};