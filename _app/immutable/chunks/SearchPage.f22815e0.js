import{s as y,f as g,g as w,j as p,i as _,Z as S,J as U,n as P,d as f,_ as k,o as M,q as R,M as T,a as V,h as $,c as j,$ as J,O as N,P as O,Q}from"./scheduler.b3c879a1.js";import{S as I,i as q,b as C,d as D,m as E,a as v,t as b,e as L,f as Z}from"./index.50170cf9.js";import{C as z}from"./CommonPage.0f7d0812.js";function A(o){let e,t,s;return{c(){e=g("input"),this.h()},l(n){e=w(n,"INPUT",{placeholder:!0,class:!0}),this.h()},h(){e.autofocus=!0,p(e,"placeholder",o[1]),p(e,"class","text-[inherit] bg-transparent border-[1px] border-solid border-[var(--border)] px-[20px] py-[10px] rounded-[15px] flex-1 text-[1.15em]  svelte-c0g44u")},m(n,i){_(n,e,i),S(e,o[0]),e.focus(),t||(s=U(e,"input",o[2]),t=!0)},p(n,[i]){i&2&&p(e,"placeholder",n[1]),i&1&&e.value!==n[0]&&S(e,n[0])},i:P,o:P,d(n){n&&f(e),t=!1,s()}}}function B(o,e,t){let{value:s=""}=e,{placeholder:n=""}=e;function i(){s=this.value,t(0,s)}return o.$$set=r=>{"value"in r&&t(0,s=r.value),"placeholder"in r&&t(1,n=r.placeholder)},[s,n,i]}class F extends I{constructor(e){super(),q(this,e,B,A,y,{value:0,placeholder:1})}}function G(o){let e,t,s,n,i,r;function m(l){o[4](l)}let u={placeholder:"Search..."};o[0]!==void 0&&(u.value=o[0]),t=new F({props:u}),R.push(()=>Z(t,"value",m));const h=o[3].default,a=T(h,o,o[5],null);return{c(){e=g("div"),C(t.$$.fragment),n=V(),i=g("div"),a&&a.c(),this.h()},l(l){e=w(l,"DIV",{class:!0});var c=$(e);D(t.$$.fragment,c),c.forEach(f),n=j(l),i=w(l,"DIV",{class:!0});var d=$(i);a&&a.l(d),d.forEach(f),this.h()},h(){p(e,"class","w-100% row"),p(i,"class","w-100% col flex-1")},m(l,c){_(l,e,c),E(t,e,null),_(l,n,c),_(l,i,c),a&&a.m(i,null),r=!0},p(l,c){const d={};!s&&c&1&&(s=!0,d.value=l[0],J(()=>s=!1)),t.$set(d),a&&a.p&&(!r||c&32)&&N(a,h,l,l[5],r?Q(h,l[5],c,null):O(l[5]),null)},i(l){r||(v(t.$$.fragment,l),v(a,l),r=!0)},o(l){b(t.$$.fragment,l),b(a,l),r=!1},d(l){l&&(f(e),f(n),f(i)),L(t),a&&a.d(l)}}}function H(o){let e,t;return e=new z({props:{title:o[1],$$slots:{default:[G]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,n){E(e,s,n),t=!0},p(s,[n]){const i={};n&2&&(i.title=s[1]),n&33&&(i.$$scope={dirty:n,ctx:s}),e.$set(i)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){b(e.$$.fragment,s),t=!1},d(s){L(e,s)}}}function K(o,e,t){let{$$slots:s={},$$scope:n}=e,{title:i="Title"}=e,{search:r=""}=e;const m=k();let u=!1;M(()=>{let a=new URLSearchParams(window.location.search);t(0,r=a.get("q")??""),t(2,u=!0)});function h(a){r=a,t(0,r)}return o.$$set=a=>{"title"in a&&t(1,i=a.title),"search"in a&&t(0,r=a.search),"$$scope"in a&&t(5,n=a.$$scope)},o.$$.update=()=>{if(o.$$.dirty&1&&m("search",{search:r.trim().toLowerCase()}),o.$$.dirty&5&&u){let a=new URLSearchParams(window.location.search);a.set("q",r);const l=`${window.location.protocol}//${window.location.host}${window.location.pathname}?${a.toString()}`,c=window.history.state;window.history.replaceState(c,"",l)}},[r,i,u,s,h,n]}class x extends I{constructor(e){super(),q(this,e,K,H,y,{title:1,search:0})}}export{x as S};
