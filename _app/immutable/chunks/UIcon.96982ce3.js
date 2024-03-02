import{t as I,a as P,S as U,i as q}from"./index.28409b7f.js";import{u as H,s as L,f as B,g as K,h as Q,d as N,j as C,i as V,n as R}from"./scheduler.7a274a43.js";import{w as z,b as O}from"./paths.28b159c9.js";function ss(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function es(e,t){I(e,1,1,()=>{t.delete(e.key)})}function ts(e,t,a,n,c,i,r,S,m,h,g,v){let u=e.length,f=i.length,d=u;const b={};for(;d--;)b[e[d].key]=d;const w=[],k=new Map,A=new Map,T=[];for(d=f;d--;){const o=v(c,i,d),l=a(o);let p=r.get(l);p?n&&T.push(()=>p.p(o,t)):(p=h(l,o),p.c()),k.set(l,w[d]=p),l in b&&A.set(l,Math.abs(d-b[l]))}const _=new Set,M=new Set;function J(o){P(o,1),o.m(S,g),r.set(o.key,o),g=o.first,f--}for(;u&&f;){const o=w[f-1],l=e[u-1],p=o.key,y=l.key;o===l?(g=o.first,u--,f--):k.has(y)?!r.has(p)||_.has(p)?J(o):M.has(y)?u--:A.get(p)>A.get(y)?(M.add(p),J(o)):(_.add(y),u--):(m(l,r),u--)}for(;u--;){const o=e[u];k.has(o.key)||m(o,r)}for(;f;)J(w[f-1]);return H(T),w}const D="@riadh-adrani-theme",W=e=>{localStorage.setItem(D,JSON.stringify(e))},E=z(!1),j=e=>E.update(t=>{var n;const a=typeof e=="boolean"?e:!t;return W(a),(n=document.querySelector(":root"))==null||n.setAttribute("data-theme",a?"dark":"light"),a}),ns=()=>{const e=localStorage.getItem(D);e?j(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?j(!0):j(!1)},x=e=>`${O}/logos/${e}`,s=(e,t)=>t?{dark:x(t),light:x(e)}:x(e),as={HSTECH:s("hstech.jpg"),Triweb:s("triweb.jpg"),AWS:s("aws.svg"),Bootstrap:s("bootstrap.svg"),C:s("c.svg"),Cpp:s("cpp.svg"),Celery:s("celery.svg"),Django:s("django.svg"),FastApi:s("fastapi"),Flask:s("flask.svg"),Go:s("go.svg"),Kafka:s("kafka.svg"),Neo4j:s("neo4j.svg"),Nginx:s("nginx.svg"),Numpy:s("numpy.svg"),Pandas:s("pandas.svg"),RabbitMQ:s("rabbitmq.svg"),Rust:s("rust.png"),Scrapy:s("scrapy.png"),Selenium:s("selenium.svg"),Docker:s("docker.svg"),Kubernetes:s("kubernetes.svg"),Csharp:s("csharp.svg"),Xamarin:s("xamarin.svg"),TypeScript:s("ts.png"),VueJs:s("vue.png"),ReactJs:s("react.svg"),Dart:s("dart.png"),Kotlin:s("kotlin.png"),Python:s("python.png"),NodeJs:s("node.png"),Deno:s("deno.png"),Svelte:s("svelte.png"),ExpressJs:s("express.png"),JavaScript:s("js.png"),Fastify:s("fastify.png"),NestJs:s("nest.svg"),Quasar:s("quasar.svg"),SolidJs:s("solid.svg"),Electron:s("electron.png"),Flutter:s("flutter.svg"),Java:s("java.png"),AdonisJs:s("adonis.png"),Android:s("android.png"),Angular:s("angular.png"),PostgreSQL:s("postgres.png"),Firebase:s("firebase.png"),Sass:s("sass.png"),Unknown:s("no-img.svg"),MongoDB:s("mongodb.svg"),Redis:s("redis.svg"),Tailwind:s("tailwind.svg"),HTML:s("html.svg"),Premiere:s("premiere.svg"),Photoshop:s("photoshop.svg"),CSS:s("css.svg"),AfterEffects:s("after-effects.svg"),Illustrator:s("illustrator.svg"),Nuxt:s("nuxt.png"),Vite:s("vite.png"),Vitest:s("vitest.svg"),Jest:s("jest.png"),Unocss:s("unocss.svg"),Ruvy:s("ruvy.svg"),Postcss:s("postcss.svg"),Azur:s("azur.png"),BrainAcademy:s("brain-academy.jpg"),Remix:s("remix.svg"),Prisma:s("prisma.png"),Werewolves:s("loup-garou.png")};let F;E.subscribe(e=>F=e);const os=e=>typeof e=="string"?e:F?e.dark:e.light;globalThis&&globalThis.__awaiter;function G(e){let t,a;return{c(){t=B("i"),this.h()},l(n){t=K(n,"I",{class:!0}),Q(t).forEach(N),this.h()},h(){C(t,"class",a=`${e[0]} ${e[1]}`)},m(n,c){V(n,t,c)},p(n,[c]){c&3&&a!==(a=`${n[0]} ${n[1]}`)&&C(t,"class",a)},i:R,o:R,d(n){n&&N(t)}}}function X(e,t,a){let{icon:n=void 0}=t,{classes:c=""}=t;return e.$$set=i=>{"icon"in i&&a(0,n=i.icon),"classes"in i&&a(1,c=i.classes)},[n,c]}class is extends U{constructor(t){super(),q(this,t,X,G,L,{icon:0,classes:1})}}export{as as A,is as U,j as a,es as b,ss as e,os as g,ns as o,E as t,ts as u};
