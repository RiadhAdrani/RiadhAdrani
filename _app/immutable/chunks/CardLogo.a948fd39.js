import{s as m,f as g,g as _,j as i,T as f,i as o,n as h,d}from"./scheduler.bae0eb40.js";import{S as z,i as w}from"./index.cce7df92.js";function C(r){let e,t,u,n;return{c(){e=g("img"),this.h()},l(s){e=_(s,"IMG",{class:!0,src:!0,alt:!0,height:!0,width:!0,style:!0}),this.h()},h(){i(e,"class",t=`card-logo ${r[4]}`),f(e.src,u=r[0])||i(e,"src",u),i(e,"alt",r[1]),i(e,"height",r[2]),i(e,"width",r[2]),i(e,"style",n=`border-radius:${r[3]};`)},m(s,a){o(s,e,a)},p(s,[a]){a&16&&t!==(t=`card-logo ${s[4]}`)&&i(e,"class",t),a&1&&!f(e.src,u=s[0])&&i(e,"src",u),a&2&&i(e,"alt",s[1]),a&4&&i(e,"height",s[2]),a&4&&i(e,"width",s[2]),a&8&&n!==(n=`border-radius:${s[3]};`)&&i(e,"style",n)},i:h,o:h,d(s){s&&d(e)}}}function b(r,e,t){let{src:u}=e,{alt:n}=e,{size:s=50}=e,{radius:a="15px"}=e,{classes:c=""}=e;return r.$$set=l=>{"src"in l&&t(0,u=l.src),"alt"in l&&t(1,n=l.alt),"size"in l&&t(2,s=l.size),"radius"in l&&t(3,a=l.radius),"classes"in l&&t(4,c=l.classes)},[u,n,s,a,c]}class j extends z{constructor(e){super(),w(this,e,b,C,m,{src:0,alt:1,size:2,radius:3,classes:4})}}export{j as C};