import{S as re,i as ae,s as ne,k as q,w as O,a as P,l as z,m as D,x as j,h as E,c as T,n as b,b as L,C as _,y as F,M as A,f as M,t as S,z as G,D as oe,N as ce,o as ue,q as N,r as B,O as W,F as X,u as he,P as R,Q as fe,R as me,d as de,B as _e,g as ge}from"../../chunks/index-de56b907.js";import{I as Y,P as Z,H as ve}from"../../chunks/params-bde9ff49.js";import{I as U}from"../../chunks/Icon-5dff1783.js";import{u as x,a as pe}from"../../chunks/helpers-390da873.js";function ee(l,e,t){const s=l.slice();return s[16]=e[t],s}function te(l){let e,t,s,o,r,a,i=l[16].name+"",g,y;return{c(){e=q("div"),t=q("img"),r=P(),a=q("span"),g=N(i),y=P(),this.h()},l(m){e=z(m,"DIV",{class:!0});var p=D(e);t=z(p,"IMG",{class:!0,src:!0,alt:!0}),r=T(p),a=z(p,"SPAN",{class:!0});var $=D(a);g=B($,i),$.forEach(E),y=T(p),p.forEach(E),this.h()},h(){b(t,"class","carrousel-item-img svelte-dcghvl"),W(t.src,s=l[16].logo)||b(t,"src",s),b(t,"alt",o=l[16].name),X(t,"carrousel-item-img-inverted",l[16].inverted),b(a,"class","carrousel-item-label svelte-dcghvl"),b(e,"class","carrousel-item svelte-dcghvl")},m(m,p){L(m,e,p),_(e,t),_(e,r),_(e,a),_(a,g),_(e,y)},p(m,p){p&1&&!W(t.src,s=m[16].logo)&&b(t,"src",s),p&1&&o!==(o=m[16].name)&&b(t,"alt",o),p&1&&X(t,"carrousel-item-img-inverted",m[16].inverted),p&1&&i!==(i=m[16].name+"")&&he(g,i)},d(m){m&&E(e)}}}function ke(l){let e,t,s,o,r,a,i,g,y,m,p;s=new U({props:{icon:Y.LeftArrow,size:"20px"}});let $=l[0],v=[];for(let c=0;c<$.length;c+=1)v[c]=te(ee(l,$,c));return g=new U({props:{icon:Y.RightArrow,size:"20px"}}),{c(){e=q("div"),t=q("div"),O(s.$$.fragment),o=P(),r=q("div");for(let c=0;c<v.length;c+=1)v[c].c();a=P(),i=q("div"),O(g.$$.fragment),this.h()},l(c){e=z(c,"DIV",{class:!0});var k=D(e);t=z(k,"DIV",{class:!0});var h=D(t);j(s.$$.fragment,h),h.forEach(E),o=T(k),r=z(k,"DIV",{class:!0});var I=D(r);for(let n=0;n<v.length;n+=1)v[n].l(I);I.forEach(E),a=T(k),i=z(k,"DIV",{class:!0});var V=D(i);j(g.$$.fragment,V),V.forEach(E),k.forEach(E),this.h()},h(){b(t,"class","carrousel-btn svelte-dcghvl"),b(r,"class","carrousel-content svelte-dcghvl"),b(i,"class","carrousel-btn svelte-dcghvl"),b(e,"class","carrousel svelte-dcghvl")},m(c,k){L(c,e,k),_(e,t),F(s,t,null),_(e,o),_(e,r);for(let h=0;h<v.length;h+=1)v[h].m(r,null);l[11](r),_(e,a),_(e,i),F(g,i,null),y=!0,m||(p=[A(t,"click",l[2]),A(t,"keyup",l[8]),A(t,"keydown",l[9]),A(t,"keypress",l[10]),A(i,"click",l[3]),A(i,"keyup",l[5]),A(i,"keydown",l[6]),A(i,"keypress",l[7])],m=!0)},p(c,[k]){if(k&1){$=c[0];let h;for(h=0;h<$.length;h+=1){const I=ee(c,$,h);v[h]?v[h].p(I,k):(v[h]=te(I),v[h].c(),v[h].m(r,null))}for(;h<v.length;h+=1)v[h].d(1);v.length=$.length}},i(c){y||(M(s.$$.fragment,c),M(g.$$.fragment,c),y=!0)},o(c){S(s.$$.fragment,c),S(g.$$.fragment,c),y=!1},d(c){c&&E(e),G(s),oe(v,c),l[11](null),G(g),m=!1,ce(p)}}}const be=2e3;function ye(l,e,t){let{items:s=[]}=e,o,r,a=0,i=!0;const g=n=>{n?a<s.length-1?t(4,a=a+1):(t(4,a=a-1),i=!1):a>0?t(4,a=a-1):(t(4,a=a+1),i=!0)},y=n=>{clearTimeout(r),r=setTimeout(()=>{g(n),y(i)},be)},m=()=>{clearTimeout(r),i=!1,g(!1),y(i)},p=()=>{clearTimeout(r),i=!0,g(!0),y(i)};ue(()=>{y(!0)});function $(n){R.call(this,l,n)}function v(n){R.call(this,l,n)}function c(n){R.call(this,l,n)}function k(n){R.call(this,l,n)}function h(n){R.call(this,l,n)}function I(n){R.call(this,l,n)}function V(n){fe[n?"unshift":"push"](()=>{o=n,t(1,o)})}return l.$$set=n=>{"items"in n&&t(0,s=n.items)},l.$$.update=()=>{l.$$.dirty&18&&o&&o.scroll({left:a*150,behavior:"smooth"})},[s,o,m,p,a,$,v,c,k,h,I,V]}class $e extends re{constructor(e){super(),ae(this,e,ye,ke,ne,{items:0})}}function le(l,e,t){const s=l.slice();return s[7]=e[t],s}function se(l){let e,t,s,o;return t=new U({props:{icon:l[7].icon}}),{c(){e=q("a"),O(t.$$.fragment),s=P(),this.h()},l(r){e=z(r,"A",{class:!0,href:!0,target:!0,rel:!0});var a=D(e);j(t.$$.fragment,a),s=T(a),a.forEach(E),this.h()},h(){b(e,"class","home-social-item svelte-86zq0l"),b(e,"href",l[7].to),b(e,"target","_blank"),b(e,"rel","noreferrer")},m(r,a){L(r,e,a),F(t,e,null),_(e,s),o=!0},p:_e,i(r){o||(M(t.$$.fragment,r),o=!0)},o(r){S(t.$$.fragment,r),o=!1},d(r){r&&E(e),G(t)}}}function Ee(l){let e,t,s,o,r,a,i,g=l[1].toUpperCase()+"",y,m,p,$,v,c,k,h,I,V;document.title=e=x(l[4],Z);let n=l[5],d=[];for(let u=0;u<n.length;u+=1)d[u]=se(le(l,n,u));const ie=u=>S(d[u],1,1,()=>{d[u]=null});return I=new $e({props:{items:l[3]}}),{c(){t=P(),s=q("div"),o=q("div"),r=q("h1"),a=N(l[2]),i=P(),y=N(g),m=N(","),p=P(),$=q("p"),v=N(l[0]),c=P(),k=q("div");for(let u=0;u<d.length;u+=1)d[u].c();h=P(),O(I.$$.fragment),this.h()},l(u){me("svelte-s4huv4",document.head).forEach(E),t=T(u),s=z(u,"DIV",{class:!0});var f=D(s);o=z(f,"DIV",{class:!0});var C=D(o);r=z(C,"H1",{class:!0});var H=D(r);a=B(H,l[2]),i=T(H),y=B(H,g),m=B(H,","),H.forEach(E),p=T(C),$=z(C,"P",{class:!0});var J=D($);v=B(J,l[0]),J.forEach(E),c=T(C),k=z(C,"DIV",{class:!0});var K=D(k);for(let Q=0;Q<d.length;Q+=1)d[Q].l(K);K.forEach(E),C.forEach(E),h=T(f),j(I.$$.fragment,f),f.forEach(E),this.h()},h(){b(r,"class","home-title svelte-86zq0l"),b($,"class","home-subtitle svelte-86zq0l"),b(k,"class","home-social svelte-86zq0l"),b(o,"class","home-section svelte-86zq0l"),b(s,"class","home svelte-86zq0l")},m(u,w){L(u,t,w),L(u,s,w),_(s,o),_(o,r),_(r,a),_(r,i),_(r,y),_(r,m),_(o,p),_(o,$),_($,v),_(o,c),_(o,k);for(let f=0;f<d.length;f+=1)d[f].m(k,null);_(s,h),F(I,s,null),V=!0},p(u,[w]){if((!V||w&16)&&e!==(e=x(u[4],Z))&&(document.title=e),w&32){n=u[5];let f;for(f=0;f<n.length;f+=1){const C=le(u,n,f);d[f]?(d[f].p(C,w),M(d[f],1)):(d[f]=se(C),d[f].c(),M(d[f],1),d[f].m(k,null))}for(ge(),f=n.length;f<d.length;f+=1)ie(f);de()}},i(u){if(!V){for(let w=0;w<n.length;w+=1)M(d[w]);M(I.$$.fragment,u),V=!0}},o(u){d=d.filter(Boolean);for(let w=0;w<d.length;w+=1)S(d[w]);S(I.$$.fragment,u),V=!1},d(u){u&&E(t),u&&E(s),oe(d,u),G(I)}}}function Ie(l){const{description:e,lastName:t,links:s,name:o,skills:r,title:a}=ve,i=Object.keys(s).map(g=>{const y=s[g],m=pe(g);return{to:y,title:m.title,icon:m.icon}});return[e,t,o,r,a,i]}class Ve extends re{constructor(e){super(),ae(this,e,Ie,Ee,ne,{})}}export{Ve as default};
