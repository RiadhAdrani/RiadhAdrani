import{s as pe,f as V,g as M,h as F,d as $,j as S,i as w,a as B,l as Z,c as U,m as x,I as R,p as ee,K as ce,o as qe,e as ve,W as Be,n as Ue}from"../chunks/scheduler.bdaa4df1.js";import{S as he,i as _e,b as P,d as D,m as L,a as h,t as _,e as y,g as te,c as le}from"../chunks/index.49b0a900.js";import{U as ye,e as N}from"../chunks/UIcon.62d4f51d.js";import{C as ge}from"../chunks/Chip.05e88547.js";import{c as Fe,g as be}from"../chunks/MainTitle.35b6599d.js";import{C as Re}from"../chunks/Card.3d4ccf37.js";import{C as Ye,a as ze}from"../chunks/ChipIcon.a0f7e6ad.js";import{C as ke}from"../chunks/CardDivider.17768ba4.js";import{C as Ae}from"../chunks/CardLogo.4aa36c7b.js";import{g as ue,M as Ke,P as Ne}from"../chunks/params.b75c0179.js";import{b as me}from"../chunks/paths.d9244134.js";import{S as Te}from"../chunks/SearchPage.857ef7a9.js";function Je(o){let t,r,e;return r=new ye({props:{icon:"i-carbon-link",classes:"text-[var(--secondary-text)]"}}),{c(){t=V("a"),P(r.$$.fragment),this.h()},l(l){t=M(l,"A",{class:!0,href:!0,title:!0,target:!0,rel:!0,"data-help":!0});var a=F(t);D(r.$$.fragment,a),a.forEach($),this.h()},h(){S(t,"class","card-link row-center relative m-x-2.5px border-1px border-solid border-[var(--border)] p-5px rounded-10px text-inherit svelte-18qy750"),S(t,"href",o[1]),S(t,"title",o[0]),S(t,"target","_blank"),S(t,"rel","noreferrer"),S(t,"data-help",o[0])},m(l,a){w(l,t,a),L(r,t,null),e=!0},p(l,[a]){(!e||a&2)&&S(t,"href",l[1]),(!e||a&1)&&S(t,"title",l[0]),(!e||a&1)&&S(t,"data-help",l[0])},i(l){e||(h(r.$$.fragment,l),e=!0)},o(l){_(r.$$.fragment,l),e=!1},d(l){l&&$(t),y(r)}}}function Oe(o,t,r){let{label:e}=t,{to:l}=t;return o.$$set=a=>{"label"in a&&r(0,e=a.label),"to"in a&&r(1,l=a.to)},[e,l]}class We extends he{constructor(t){super(),_e(this,t,Oe,Je,pe,{label:0,to:1})}}function we(o,t,r){const e=o.slice();return e[5]=t[r],e}function Ce(o,t,r){const e=o.slice();return e[8]=t[r],e}function Se(o){let t,r;return t=new We({props:{label:o[8].label??"",to:o[8].to}}),{c(){P(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,l){L(t,e,l),r=!0},p(e,l){const a={};l&1&&(a.label=e[8].label??""),l&1&&(a.to=e[8].to),t.$set(a)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function Ge(o){let t;return{c(){t=Z(o[2])},l(r){t=x(r,o[2])},m(r,e){w(r,t,e)},p(r,e){e&4&&ee(t,r[2])},d(r){r&&$(t)}}}function je(o){let t,r;return t=new ge({props:{$$slots:{default:[He]},$$scope:{ctx:o}}}),{c(){P(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,l){L(t,e,l),r=!0},p(e,l){const a={};l&2050&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function He(o){let t;return{c(){t=Z(o[1])},l(r){t=x(r,o[1])},m(r,e){w(r,t,e)},p(r,e){e&2&&ee(t,r[1])},d(r){r&&$(t)}}}function Ee(o){let t,r;return t=new ze({props:{logo:ue(o[5].logo),name:o[5].name,href:`${me}/skills/${o[5].slug}`}}),{c(){P(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,l){L(t,e,l),r=!0},p(e,l){const a={};l&1&&(a.logo=ue(e[5].logo)),l&1&&(a.name=e[5].name),l&1&&(a.href=`${me}/skills/${e[5].slug}`),t.$set(a)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function Qe(o){let t,r,e,l,a,i,c,s,q,I,j,v=o[0].type+"",f,p,k,b,T,J,re=o[0].shortDescription+"",oe,se,Y,z,$e,ae,O,ie,A,W;t=new Ae({props:{alt:o[0].name,src:ue(o[0].logo),size:40,radius:"0"}}),l=new Ye({props:{title:o[0].name}});let G=N(o[0].links),g=[];for(let n=0;n<G.length;n+=1)g[n]=Se(Ce(o,G,n));const Ve=n=>_(g[n],1,1,()=>{g[n]=null});s=new ke({}),z=new ge({props:{$$slots:{default:[Ge]},$$scope:{ctx:o}}});let C=o[2]!==o[1]&&je(o);O=new ke({});let H=N(o[0].skills),d=[];for(let n=0;n<H.length;n+=1)d[n]=Ee(we(o,H,n));const Me=n=>_(d[n],1,1,()=>{d[n]=null});return{c(){P(t.$$.fragment),r=B(),e=V("div"),P(l.$$.fragment),a=B(),i=V("div");for(let n=0;n<g.length;n+=1)g[n].c();c=B(),P(s.$$.fragment),q=B(),I=V("div"),j=V("p"),f=Z(v),p=B(),k=V("p"),b=Z(o[3]),T=B(),J=V("p"),oe=Z(re),se=B(),Y=V("div"),P(z.$$.fragment),$e=B(),C&&C.c(),ae=B(),P(O.$$.fragment),ie=B(),A=V("div");for(let n=0;n<d.length;n+=1)d[n].c();this.h()},l(n){D(t.$$.fragment,n),r=U(n),e=M(n,"DIV",{class:!0});var u=F(e);D(l.$$.fragment,u),a=U(u),i=M(u,"DIV",{class:!0});var E=F(i);for(let X=0;X<g.length;X+=1)g[X].l(E);E.forEach($),u.forEach($),c=U(n),D(s.$$.fragment,n),q=U(n),I=M(n,"DIV",{class:!0});var Q=F(I);j=M(Q,"P",{});var ne=F(j);f=x(ne,v),ne.forEach($),p=U(Q),k=M(Q,"P",{});var m=F(k);b=x(m,o[3]),m.forEach($),Q.forEach($),T=U(n),J=M(n,"P",{class:!0});var K=F(J);oe=x(K,re),K.forEach($),se=U(n),Y=M(n,"DIV",{class:!0});var fe=F(Y);D(z.$$.fragment,fe),$e=U(fe),C&&C.l(fe),fe.forEach($),ae=U(n),D(O.$$.fragment,n),ie=U(n),A=M(n,"DIV",{class:!0});var de=F(A);for(let X=0;X<d.length;X+=1)d[X].l(de);de.forEach($),this.h()},h(){S(i,"class","row"),S(e,"class","m-t-20px row justify-between items-center"),S(I,"class","row m-b-15px justify-between text-[var(--secondary-text)] text-0.9em font-italic font-300"),S(J,"class","text-[0.95em] text-[var(--secondary-text)] font-300 m-t-20px m-b-40px flex-1"),S(Y,"class","row justify-between text-0.8em font-400"),S(A,"class","row")},m(n,u){L(t,n,u),w(n,r,u),w(n,e,u),L(l,e,null),R(e,a),R(e,i);for(let E=0;E<g.length;E+=1)g[E]&&g[E].m(i,null);w(n,c,u),L(s,n,u),w(n,q,u),w(n,I,u),R(I,j),R(j,f),R(I,p),R(I,k),R(k,b),w(n,T,u),w(n,J,u),R(J,oe),w(n,se,u),w(n,Y,u),L(z,Y,null),R(Y,$e),C&&C.m(Y,null),w(n,ae,u),L(O,n,u),w(n,ie,u),w(n,A,u);for(let E=0;E<d.length;E+=1)d[E]&&d[E].m(A,null);W=!0},p(n,u){const E={};u&1&&(E.alt=n[0].name),u&1&&(E.src=ue(n[0].logo)),t.$set(E);const Q={};if(u&1&&(Q.title=n[0].name),l.$set(Q),u&1){G=N(n[0].links);let m;for(m=0;m<G.length;m+=1){const K=Ce(n,G,m);g[m]?(g[m].p(K,u),h(g[m],1)):(g[m]=Se(K),g[m].c(),h(g[m],1),g[m].m(i,null))}for(te(),m=G.length;m<g.length;m+=1)Ve(m);le()}(!W||u&1)&&v!==(v=n[0].type+"")&&ee(f,v),(!W||u&8)&&ee(b,n[3]),(!W||u&1)&&re!==(re=n[0].shortDescription+"")&&ee(oe,re);const ne={};if(u&2052&&(ne.$$scope={dirty:u,ctx:n}),z.$set(ne),n[2]!==n[1]?C?(C.p(n,u),u&6&&h(C,1)):(C=je(n),C.c(),h(C,1),C.m(Y,null)):C&&(te(),_(C,1,1,()=>{C=null}),le()),u&1){H=N(n[0].skills);let m;for(m=0;m<H.length;m+=1){const K=we(n,H,m);d[m]?(d[m].p(K,u),h(d[m],1)):(d[m]=Ee(K),d[m].c(),h(d[m],1),d[m].m(A,null))}for(te(),m=H.length;m<d.length;m+=1)Me(m);le()}},i(n){if(!W){h(t.$$.fragment,n),h(l.$$.fragment,n);for(let u=0;u<G.length;u+=1)h(g[u]);h(s.$$.fragment,n),h(z.$$.fragment,n),h(C),h(O.$$.fragment,n);for(let u=0;u<H.length;u+=1)h(d[u]);W=!0}},o(n){_(t.$$.fragment,n),_(l.$$.fragment,n),g=g.filter(Boolean);for(let u=0;u<g.length;u+=1)_(g[u]);_(s.$$.fragment,n),_(z.$$.fragment,n),_(C),_(O.$$.fragment,n),d=d.filter(Boolean);for(let u=0;u<d.length;u+=1)_(d[u]);W=!1},d(n){n&&($(r),$(e),$(c),$(q),$(I),$(T),$(J),$(se),$(Y),$(ae),$(ie),$(A)),y(t,n),y(l),ce(g,n),y(s,n),y(z),C&&C.d(),y(O,n),ce(d,n)}}}function Xe(o){let t,r;return t=new Re({props:{color:o[0].color,href:`${me}/projects/${o[0].slug}`,$$slots:{default:[Qe]},$$scope:{ctx:o}}}),{c(){P(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,l){L(t,e,l),r=!0},p(e,[l]){const a={};l&1&&(a.color=e[0].color),l&1&&(a.href=`${me}/projects/${e[0].slug}`),l&2063&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function Ze(o,t,r){let e,l,a,i,{project:c}=t;return o.$$set=s=>{"project"in s&&r(0,c=s.project)},o.$$.update=()=>{o.$$.dirty&1&&r(4,e=Fe(c.period.from,c.period.to)),o.$$.dirty&16&&r(3,l=`${e} month${e>1?"s":""}`),o.$$.dirty&1&&r(2,a=`${be(c.period.from.getMonth())} ${c.period.from.getFullYear()}`),o.$$.dirty&1&&r(1,i=c.period.to?`${be(c.period.to.getMonth())} ${c.period.to.getFullYear()}`:"now")},[c,i,a,l,e]}class xe extends he{constructor(t){super(),_e(this,t,Ze,Xe,pe,{project:0})}}function Ie(o,t,r){const e=o.slice();return e[9]=t[r],e}function Pe(o,t,r){const e=o.slice();return e[12]=t[r],e}function et(o){let t=o[12].name+"",r;return{c(){r=Z(t)},l(e){r=x(e,t)},m(e,l){w(e,r,l)},p(e,l){l&1&&t!==(t=e[12].name+"")&&ee(r,t)},d(e){e&&$(r)}}}function De(o){let t,r;function e(){return o[6](o[12])}return t=new ge({props:{active:o[12].isSelected,classes:"text-0.8em",$$slots:{default:[et]},$$scope:{ctx:o}}}),t.$on("click",e),{c(){P(t.$$.fragment)},l(l){D(t.$$.fragment,l)},m(l,a){L(t,l,a),r=!0},p(l,a){o=l;const i={};a&1&&(i.active=o[12].isSelected),a&32769&&(i.$$scope={dirty:a,ctx:o}),t.$set(i)},i(l){r||(h(t.$$.fragment,l),r=!0)},o(l){_(t.$$.fragment,l),r=!1},d(l){y(t,l)}}}function tt(o){let t,r,e=N(o[1]),l=[];for(let i=0;i<e.length;i+=1)l[i]=Le(Ie(o,e,i));const a=i=>_(l[i],1,1,()=>{l[i]=null});return{c(){t=V("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){t=M(i,"DIV",{class:!0});var c=F(t);for(let s=0;s<l.length;s+=1)l[s].l(c);c.forEach($),this.h()},h(){S(t,"class","projects-list mt-5 svelte-f4z73x")},m(i,c){w(i,t,c);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(t,null);r=!0},p(i,c){if(c&2){e=N(i[1]);let s;for(s=0;s<e.length;s+=1){const q=Ie(i,e,s);l[s]?(l[s].p(q,c),h(l[s],1)):(l[s]=Le(q),l[s].c(),h(l[s],1),l[s].m(t,null))}for(te(),s=e.length;s<l.length;s+=1)a(s);le()}},i(i){if(!r){for(let c=0;c<e.length;c+=1)h(l[c]);r=!0}},o(i){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)_(l[c]);r=!1},d(i){i&&$(t),ce(l,i)}}}function lt(o){let t,r,e,l,a="Could not find anything...",i;return r=new ye({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){t=V("div"),P(r.$$.fragment),e=B(),l=V("p"),l.textContent=a,this.h()},l(c){t=M(c,"DIV",{class:!0});var s=F(t);D(r.$$.fragment,s),e=U(s),l=M(s,"P",{class:!0,["data-svelte-h"]:!0}),Be(l)!=="svelte-1jyyf6v"&&(l.textContent=a),s.forEach($),this.h()},h(){S(l,"class","font-300"),S(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(c,s){w(c,t,s),L(r,t,null),R(t,e),R(t,l),i=!0},p:Ue,i(c){i||(h(r.$$.fragment,c),i=!0)},o(c){_(r.$$.fragment,c),i=!1},d(c){c&&$(t),y(r)}}}function Le(o){let t,r;return t=new xe({props:{project:o[9]}}),{c(){P(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,l){L(t,e,l),r=!0},p(e,l){const a={};l&2&&(a.project=e[9]),t.$set(a)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function rt(o){let t,r,e,l,a,i,c=N(o[0]),s=[];for(let f=0;f<c.length;f+=1)s[f]=De(Pe(o,c,f));const q=f=>_(s[f],1,1,()=>{s[f]=null}),I=[lt,tt],j=[];function v(f,p){return f[1].length===0?0:1}return e=v(o),l=j[e]=I[e](o),{c(){t=V("div");for(let f=0;f<s.length;f+=1)s[f].c();r=B(),l.c(),a=ve(),this.h()},l(f){t=M(f,"DIV",{class:!0});var p=F(t);for(let k=0;k<s.length;k+=1)s[k].l(p);p.forEach($),r=U(f),l.l(f),a=ve(),this.h()},h(){S(t,"class","projects-filters")},m(f,p){w(f,t,p);for(let k=0;k<s.length;k+=1)s[k]&&s[k].m(t,null);w(f,r,p),j[e].m(f,p),w(f,a,p),i=!0},p(f,p){if(p&9){c=N(f[0]);let b;for(b=0;b<c.length;b+=1){const T=Pe(f,c,b);s[b]?(s[b].p(T,p),h(s[b],1)):(s[b]=De(T),s[b].c(),h(s[b],1),s[b].m(t,null))}for(te(),b=c.length;b<s.length;b+=1)q(b);le()}let k=e;e=v(f),e===k?j[e].p(f,p):(te(),_(j[k],1,1,()=>{j[k]=null}),le(),l=j[e],l?l.p(f,p):(l=j[e]=I[e](f),l.c()),h(l,1),l.m(a.parentNode,a))},i(f){if(!i){for(let p=0;p<c.length;p+=1)h(s[p]);h(l),i=!0}},o(f){s=s.filter(Boolean);for(let p=0;p<s.length;p+=1)_(s[p]);_(l),i=!1},d(f){f&&($(t),$(r),$(a)),ce(s,f),j[e].d(f)}}}function nt(o){let t,r;return t=new Te({props:{title:o[2],$$slots:{default:[rt]},$$scope:{ctx:o}}}),t.$on("search",o[4]),{c(){P(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,l){L(t,e,l),r=!0},p(e,[l]){const a={};l&32771&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function ot(o,t,r){const{items:e,title:l}=Ne;let a=Ke.filter(v=>e.some(f=>f.skills.some(p=>p.slug===v.slug))),i="",c=[];const s=v=>a.some(f=>f.slug===v&&f.isSelected),q=v=>{r(0,a=a.map(f=>(f.slug===v&&(f.isSelected=!s(v)),f)))},I=v=>{r(5,i=v.detail.search)};qe(()=>{if(location.search){const p=new URLSearchParams(location.search).get("item");p&&r(5,i=p)}});const j=v=>q(v.slug);return o.$$.update=()=>{o.$$.dirty&33&&r(1,c=e.filter(v=>{const f=a.every(k=>!k.isSelected)||v.skills.some(k=>a.some(b=>b.isSelected&&b.slug===k.slug)),p=i.trim().length===0||v.name.trim().toLowerCase().includes(i.trim().toLowerCase());return f&&p}))},[a,c,l,q,I,i,j]}class dt extends he{constructor(t){super(),_e(this,t,ot,nt,pe,{})}}export{dt as component};
