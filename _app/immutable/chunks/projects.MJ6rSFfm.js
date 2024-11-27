import{A as e}from"./assets.DBNe3bxH.js";import{a as n}from"./skills.6TljGdyG.js";const t=`# Annotator

Annotator is a basic text annotation tool written with \`Rust\` and \`Typescript\`.

<br/>

## Technologies

The backend uses rust's [\`Actix Web\`](https://actix.rs/) as a server, The front is created with [\`React\`](https://react.dev/) as the rendering library, [\`Mantine\`](https://mantine.dev/) as a UI library and Routing is achieved with [\`React Router DOM\`](https://reactrouter.com/en/main).

<br/>

> This is a learning project, and a work in progress, it is not meant for production, use at your own risk.
`,o=""+new URL("../assets/annotating-in-progress.BFhYPzdv.png",import.meta.url).href,s=""+new URL("../assets/annotating.itiyW9Fs.png",import.meta.url).href,a=""+new URL("../assets/dashboard.DEk8G_18.png",import.meta.url).href,i=""+new URL("../assets/label-creation.Dc-0jLq_.png",import.meta.url).href,r=""+new URL("../assets/sign-in.eE-8n05D.png",import.meta.url).href,l=""+new URL("../assets/sign-up.Bx-0kkT6.png",import.meta.url).href,c=""+new URL("../assets/welcome.VMZcCuP7.png",import.meta.url).href,d=`# Docuniser

📦 simple document management.<br/>
⏳ work in progress...

<br/>

## 🛫 Quick Setup

\`\`\`sh
# clone the project
git clone https://github.com/RiadhAdrani/docuniser

# enter the project directory
cd docuniser

# install dependency
pnpm install

# develop
pnpm run dev
\`\`\`
`,p=""+new URL("../assets/about.CepeELFf.png",import.meta.url).href,u=""+new URL("../assets/create-doc.tZH5flAZ.png",import.meta.url).href,m=""+new URL("../assets/dark-mode.BLEy0aY1.png",import.meta.url).href,h=""+new URL("../assets/doc-checklist.BiGmvzLl.png",import.meta.url).href,g=""+new URL("../assets/doc-sub-doc.DfPU1gQc.png",import.meta.url).href,b=""+new URL("../assets/doc.D4coTSgk.png",import.meta.url).href,f=""+new URL("../assets/docs-detailed-grid.DOnSbgYZ.png",import.meta.url).href,w=""+new URL("../assets/docs-min-grid.C72_15mP.png",import.meta.url).href,v=""+new URL("../assets/docs-list.DkPAfx35.png",import.meta.url).href,k=""+new URL("../assets/docs-sort-options.BuoIoVNS.png",import.meta.url).href,y=""+new URL("../assets/home.BRE5MBUZ.png",import.meta.url).href,R="# domer [![CI/CD](https://github.com/RiadhAdrani/domer/actions/workflows/checks.yml/badge.svg)](https://github.com/RiadhAdrani/domer/actions/workflows/checks.yml) [![npm](https://badgen.net/npm/v/@riadh-adrani/domer)](https://www.npmjs.com/package/@riadh-adrani/domer)\n\nA library to build DOM faster.\n\n### Install\n\nAdd to your project using :\n\n```bash\nnpm i @riadh-adrani/domer\n```\n\n## Methods\n\n### `setConfig`\n\nUsed to set libraries configuration.\n\n```ts\nfunction setConfig(config: LibraryConfig): void;\n```\n\nYou can reset by calling `setConfig()` without an object.\n\n### `element`\n\nCreate a DOM element.\n\n```ts\nfunction element<T = Element>(tag: string, props: CreateElementProps, children: Array<unknown>): T;\n```\n\n- `tag` : element tag.\n- `props` : object containing attributes and events to be added.\n- `children` : an array of elements which will be appended as children.\n\n> to change `namespace`, use `ns` with the desired value as prop. default to `HTML`.\n\n> accepts any children: if it is a `Node`, it will be appended directly, otherwise, a `Text` node will be created.\n\n> applies `class` transformation by default.\n\n> applies `event` transformation by default.\n\n### `text()`\n\ncreate a `Text` node by transforming data to a `string`.\n\n```ts\nfunction text(data?: unknown): Text;\n```\n\n### `setEventListener`\n\nadd an event listener to an element.\n\n```ts\nfunction setEventListener(\n	key: string,\n	event: string,\n	value: unknown,\n	element: Element,\n	modifiers?: Array<EventModifier>\n): void;\n```\n\n- `key` : a unique identifier of the event.\n- `event` : event name like `click`, `input` ...etc\n- `value` : usually an event callback. In case of other value, an empty callback will be added instead.\n- `element` : target element.\n- `modifiers` : an array of all modifiers to be applied. modifiers will be applied in order.\n\n> stores the event's callback inside the element itself in field called `__events__` using `key`, so it can be later used by `removeEventListener`.\n\n> use `key` to register multiple event listener for the same `event`, like `click1` and `click2`.\n\n### `removeEventListener`\n\nremove event listener by its `key` and `event` name.\n\n```ts\nfunction setEventListener(key: string, event: string, element: Element): void;\n```\n\n- `key` : a unique identifier of the event.\n- `event` : event name like `click`, `input` ...etc\n- `element` : target element.\n\n### `setAttribute`\n\nadd an attribute to an element.\n\n```ts\nfunction setAttribute(attr: string, value: unknown, el: Element): void;\n```\n\n> `style` attribute accept both an `object` and `string`.\n\n> `toggle` attributes will be forced depending on the result of `Boolean(value)`.\n\n### `removeAttribute`\n\nremoves an attribute from an element.\n\n```ts\nfunction setAttribute(attr: string, el: Element): void;\n```\n\n### `insertNode`\n\ninsert node within a parent in a given position.\n\n```ts\nfunction insertNode(node: Node, parent: Node, position?: number): void;\n```\n\n> appends node at the end if position is invalid\n\n### `insertNode`\n\nchange node position within its parent.\n\n```ts\nfunction changeNodePosition(node: Node, position: number): void;\n```\n\n> appends node at the end if position is invalid\n\n### `removeNode`\n\nremove node from the DOM.\n\n```ts\nfunction removeNode(node: Node): void;\n```\n\n### `setText`\n\nupdate `Text` content.\n\n```ts\nfunction setText(data: unknown, node: Text): void;\n```\n\n## Helpers\n\n### `attrToProp`\n\nconvert an attribute to a DOM property, or camelcase it otherwise.\n\n```ts\nfunction attrToProp(attr: string): string;\n```\n\n### `extractEventDetails`\n\nextract event details from a `prop` name.\n\n```ts\nfunction extractEventDetails(\n	prop: string\n): { event: string; modifiers: Array<EventModifier> } | false;\n```\n\n> update config to control which event prop should be accepted.\n\n#### Examples\n\n```ts\n// invalid\nextractEventDetails('click') == false;\n\n// react style\nextractEventDetails('onClick') == { event: 'click', modifiers: [] };\n\n// svelte style\nextractEventDetails('on:click') == { event: 'click', modifiers: [] };\n\n// vue style\nextractEventDetails('@click') == { event: 'click', modifiers: [] };\n\n// with modifiers\nextractEventDetails('@click-stop-prevent') == { event: 'click', modifiers: ['stop', 'prevent'] };\n```\n\n### `isClassProp`\n\ncheck if the given prop is a `class` related prop.\n\n```ts\nfunction isClassProp(prop: string): boolean;\n```\n\n> update config to control which class prop should be accepted.\n\n#### Examples\n\n```ts\n// invalid\nisClassProp('click') == false;\n\n// class\nisClassProp('class') == true;\n\n// className\nisClassProp('className') == true;\n\n// class directive\nisClassProp('class:test') == true;\n```\n\n### `resolveClassProps`\n\nresolve class props and return the final class `string`.\n\n```ts\nfunction resolveClassProps(props: Array<{ value: unknown; key: string }>): string;\n```\n\naccepts an array of objects containg the following keys:\n\n- `value` : the value of the property. could be a `string`, an `Array<string>` or a `boolean` with class directive.\n- `key` : the property/attribute key, like `class`, `className` or `class:*`.\n\n> the props will be sorted in the order : `class` > `className` > `class:*`.\n\n## Types\n\n### `Namespace`\n\n```ts\nenum Namespace {\n	SVG = 'http://www.w3.org/2000/svg',\n	HTML = 'http://www.w3.org/1999/xhtml',\n	MATH = 'http://www.w3.org/1998/Math/MathML'\n}\n```\n\n### `EventModifiers`\n\n```ts\nconst EventModifiers = ['stop', 'prevent', 'self', 'capture', 'once', 'passive'] as const;\n```\n\n### `CreateElementProps`\n\n```ts\ninterface CreateElementProps extends Record<string, unknown> {\n	ns?: string;\n}\n```\n\n### `EventModifier`\n\n```ts\ntype EventModifier = (typeof EventModifiers)[number];\n```\n\n### `EventHandler`\n\n```ts\ntype EventHandler = (e: Event) => void;\n```\n\n### `LibraryConfig`\n\n```ts\ninterface LibraryConfig {\n	events?: {\n		wrapper?: (event: Event, callback: EventHandler) => void;\n		syntax?: {\n			vue?: boolean;\n			svelte?: boolean;\n			react?: boolean;\n		};\n	};\n	attributes?: {\n		class?: {\n			directive?: boolean;\n			className?: boolean;\n		};\n	};\n}\n```\n\n- `events`\n\n  - `wrapper` : add a wrapper for all inserted event callbacks.\n  - `syntax`\n    - `vue` : allow vue-style event like `@click` when creating an element. `true` by default.\n    - `svelte` : allow svelte-style event like `on:click` when creating an element. `true` by default.\n    - `react` : allow react-style event like `onClick` when creating an element. `true` by default.\n\n- `attributes`\n  - `class`\n    - `directive` : allow class directive. a prop with `class:test` with a value of `true` will be evaluated to `class` of value `test`. `true` by default.\n    - `className` : allow `className` value to be appended to the `class` attribute. `true` by default.\n\n### `ElementWithEvents`\n\n```ts\ninterface ElementWithEvents extends Element {\n	__events__: Record<string, EventHandler>;\n}\n```\n",D=`# dom-router [![CI/CD](https://github.com/RiadhAdrani/dom-router/actions/workflows/checks.yml/badge.svg)](https://github.com/RiadhAdrani/dom-router/actions/workflows/checks.yml) [![npm](https://badgen.net/npm/v/@riadh-adrani/dom-router)](https://www.npmjs.com/package/@riadh-adrani/dom-router)

A web-based \`router\` that is framework \`agnostic\`.

---

## Install

add to your project using :

\`\`\`bash
npm i @riadh-adrani/dom-router
\`\`\`

## Router class

create a router object that manages and react to location/history changes.

### constructor

\`\`\`ts
new Router<T>(RouterConfig<T>);
\`\`\`

> will throw if \`base\` is invalid; does not start with \`/\`.

### unload

unload router and perform need actions.

### processPath

process current path and return a \`boolean\` that indicates if an update should happen or not.

### navigate

navigate to the given destination and perform necessary updates if needed.

### getElementByDepth

get element at a given depth or \`undefined\` otherwise.

### getPath

get current path, stripped out of base.

### getParams

get closest route params.

### getSearchParams

get current route search query params.

### toHref

transform a destination route to a valid href string or \`undefined\` otherwise.

## Helpers

### isUrlNavigatable

check if \`url\` is valid as a relative path

\`\`\`ts
function isUrlNavigatable(url: string): boolean;
\`\`\`

## Types

### RouterType

\`\`\`ts
enum RouterType {
	Browser = 'browser',
	Hash = 'hash'
}
\`\`\`

### RouterConfig

\`\`\`ts
interface RouterConfig<T = unknown> {
	/** array of routes that will be considered by the router */
	routes: Array<RawRoute<T>>;
	/** handler that will run each time the url changes */
	onChanged: () => void;
	/** router type, \`\`Browser\`\` by default */
	type?: RouterType;
	/** router base, should start with \`/\` */
	base?: string;
	/** define if the router should scroll the document body to the top */
	correctScrolling?: boolean;
	/** function that will transform a title, useful for setting title prefix and suffixes */
	transformTitle?: (title?: string) => string;
}
\`\`\`

### IndexRawRoute

\`\`\`ts
interface IndexRawRoute<T = unknown> {
	path: '';
	name?: string;
	element?: T;
	title?: string;
}
\`\`\`

### CatchRawRoute

\`\`\`ts
interface CatchRawRoute<T = unknown> {
	path: '*';
	title?: string;
	element?: T;
}
\`\`\`

### PathRawRoute

\`\`\`ts
interface PathRawRoute<T = unknown> {
	path: string;
	name?: string;
	element?: T;
	title?: string;
	children?: Array<RawRoute<T>>;
}
\`\`\`

### LayoutRawRoute

\`\`\`ts
interface LayoutRawRoute<T = unknown> {
	element: T;
	children?: Array<RawRoute<T>>;
}
\`\`\`

### RawRoute

\`\`\`ts
type RawRoute<T = unknown> =
	| LayoutRawRoute<T>
	| IndexRawRoute<T>
	| CatchRawRoute<T>
	| PathRawRoute<T>;
\`\`\`

### DestinationOptions

\`\`\`ts
interface DestinationOptions {
	replace?: boolean;
}
\`\`\`

### PathDestinationRequest

\`\`\`ts
type PathDestinationRequest = string;
\`\`\`

### RelativeDestinationRequest

\`\`\`ts
type RelativeDestinationRequest = number;
\`\`\`

### NamedDestinationRequest

\`\`\`ts
interface NamedDestinationRequest {
	name: string;
	query?: Record<string, string | number>;
	params?: Record<string, string>;
	hash?: string;
}
\`\`\`

### DestinationRequest

\`\`\`ts
type DestinationRequest =
	| NamedDestinationRequest
	| PathDestinationRequest
	| RelativeDestinationRequest;
\`\`\`
`,A=[{slug:"dom-router",color:"green",description:D,shortDescription:"Router for the dom",links:[{to:"https://github.com/RiadhAdrani/dom-router",label:"GitHub"}],logo:e.NodeJs,name:"Dom Router",period:{from:new Date(2023,11,3),to:new Date(2024,1,4)},skills:n("ts","node","vitest","vite"),type:"Library"},{slug:"domer",color:"green",description:R,shortDescription:"A library to build DOM faster",links:[{to:"https://github.com/RiadhAdrani/domer",label:"GitHub"}],logo:e.NodeJs,name:"Domer",period:{from:new Date(2023,11,14),to:new Date(2024,0,28)},skills:n("ts","node","vitest","vite"),type:"Library"},{slug:"annotator",color:"#c82829",description:t,shortDescription:"A basic annotation tools for documents",links:[{to:"https://github.com/RiadhAdrani/annotator",label:"GitHub"}],logo:e.Unknown,name:"Annotator",period:{from:new Date(2023,10,3),to:new Date(2024,0,1)},skills:n("ts","reactjs","node","rust","mongodb","redis","vite","unocss","docker"),type:"Desktop App",screenshots:[{label:"Welcome",src:c},{label:"Sign Up",src:l},{label:"Sign In",src:r},{label:"Dashboard",src:a},{label:"Annotating",src:s},{label:"Annotation in progress",src:o},{label:"Label creation",src:i}]},{slug:"docuniser",color:"#747bff",description:d,shortDescription:"A simple desktop application that allow user to create and manage documents locally.",links:[{to:"https://github.com/RiadhAdrani/docuniser",label:"GitHub"}],logo:e.Unknown,name:"Docuniser",period:{from:new Date(2023,8,23),to:new Date(2023,10,0)},skills:n("ts","reactjs","node","vite","electron","unocss","docker"),type:"Desktop App",screenshots:[{label:"Home page",src:y},{label:"About modal",src:p},{label:"Docs grid display",src:f},{label:"Docs compact grid display",src:w},{label:"Docs list display",src:v},{label:"Docs sorting options",src:k},{label:"Document creation",src:u},{label:"Document page",src:b},{label:"Document check list",src:h},{label:"Document sub docs",src:g},{label:"Dark Mode",src:m}]},{slug:"govid",color:"#007d9c",description:"A youtube clone with Golang as backend.",shortDescription:"A youtube clone with Golang as backend.",links:[{to:"https://github.com/RiadhAdrani/govid",label:"GitHub"}],logo:e.Go,name:"GoVid",period:{from:new Date(2023,5,24),to:new Date(2023,8,14)},skills:n("ts","node","vite","go","docker","redis","unocss"),type:"Web App"},{slug:"postcss-ignore-file-plugin",color:"#c82829",description:"PostCSS plugin that ignore a file with a comment.",shortDescription:"PostCSS plugin that ignore a file with a comment.",links:[{to:"https://github.com/RiadhAdrani/postcss-plugin-ignore-file",label:"GitHub"}],logo:e.Postcss,name:"Ignore file plugin",period:{from:new Date(2023,7,16),to:new Date(2023,7,16)},skills:n("js","postcss","node","jest"),type:"Plugin"},{slug:"ruvy",color:"#ffffff",description:"React from scratch, but better",shortDescription:"React from scratch, but better",links:[{to:"https://github.com/RiadhAdrani/ruvy",label:"GitHub"},{to:"https://riadhadrani.github.io/ruvy/",label:"Documentation"},{to:"https://github.com/RiadhAdrani/create-ruvy",label:"CLI"},{to:"https://www.npmjs.com/package/@riadh-adrani/ruvy",label:"NPM"},{to:"https://stackblitz.com/edit/ruvy?file=package.json,src%2Fmain.tsx",label:"Stackblitz"}],logo:e.Ruvy,name:"Ruvy",period:{from:new Date(2023,2,1)},skills:n("ts","node","vite","vitest","unocss"),type:"Web Framework"},{slug:"dom-utils",color:"#5cad47",name:"Dom Utils",logo:e.NodeJs,description:"Create and manipulate DOM elements.",shortDescription:"Create and manipulate DOM elements.",period:{from:new Date(2022,9,28)},links:[{label:"GitHub",to:"https://github.com/RiadhAdrani/dom-control-js"},{label:"NPM",to:"https://www.npmjs.com/package/@riadh-adrani/dom-control-js"},{label:"Docs",to:"https://riadhadrani.github.io/dom-control-js/"}],skills:n("ts","node","vite","vitest"),type:"JavaScript library"},{slug:"werewolves-dart",color:"#fbb03b",name:"Werewolves",logo:e.Werewolves,description:"An app to manage your game of Loup garous de thiercelieu also known as The Werewolves of Millers Hollow.",shortDescription:"An app to manage your game of Loup garous de thiercelieu also known as The Werewolves of Millers Hollow.",period:{from:new Date(2022,6,23)},links:[{label:"GitHub",to:"https://github.com/RiadhAdrani/werewolves"}],skills:n("dart","flutter"),type:"Mobile App"},{slug:"portfolio",color:"#ff3e00",name:"Portfolio",logo:e.Svelte,description:"My personal website portfolio.",shortDescription:"My personal website portfolio.",period:{from:new Date(2021,3,1)},links:[{label:"GitHub",to:"https://github.com/RiadhAdrani/RiadhAdrani"}],skills:n("ts","svelte","sass","vite","unocss"),type:"Website"},{slug:"recursive",color:"#cf2026",name:"Recursive",logo:e.Unknown,description:"Recursive is an ongoing project that allow developers to build a functional, component-based, Javascript only, beautiful and interactive Web applications.",shortDescription:"Recursive is an ongoing project that allow developers to build a functional, component-based, Javascript only, beautiful and interactive Web applications.",period:{from:new Date(2021,8,1),to:new Date(2022,11,26)},links:[{label:"GitHub",to:"https://github.com/RiadhAdrani/recursive"},{label:"NPM",to:"https://www.npmjs.com/package/@riadh-adrani/recursive"}],skills:n("js","node","jest"),type:"UI Framework"},{slug:"utils",color:"#5cad47",name:"Utils",logo:e.NodeJs,description:"My JavaScript utility functions and types.",shortDescription:"My JavaScript utility functions and types.",period:{from:new Date(2022,8,1)},links:[{label:"GitHub",to:"https://github.com/RiadhAdrani/utility-js"},{label:"NPM",to:"https://www.npmjs.com/package/@riadh-adrani/utility-js"}],skills:n("ts","node","vite","vitest"),type:"JavaScript library"},{slug:"solid-github",color:"#518ac8",name:"Solid GitHub",logo:e.SolidJs,description:"Web app that retrieves repositories from GitHub and displaying them with the ability to be saved and persisted in the local storage.",shortDescription:"Web app that retrieves repositories from GitHub and displaying them with the ability to be saved and persisted in the local storage.",period:{from:new Date(2022,10,1),to:new Date(2022,10,10)},links:[{label:"GitHub",to:"https://github.com/RiadhAdrani/solid-github"}],skills:n("solid","ts","node"),type:"Web App"},{slug:"gradio",name:"Gradio",type:"Web App",logo:e.Unknown,color:"#52bffa",period:{from:new Date(2022,9,1),to:new Date(2022,9,10)},links:[{label:"GitHub",to:"https://github.com/RiadhAdrani/gradio"}],description:"A web application used to create and generate gradient background for css usage.",shortDescription:"A web application used to create and generate gradient background for css usage.",skills:n("quasar","node","js")},{slug:"random-name-picker",name:"Random Name Picker",type:"Android App",logo:e.Unknown,color:"#64c6c5",period:{from:new Date(2022,7,1),to:new Date(2022,7,10)},links:[{label:"GitHub",to:"https://github.com/RiadhAdrani/random-name-picker"}],description:"An android application used to create lists for random name picking. Lists and user preferences are saved",shortDescription:"An android application used to create lists for random name picking. Lists and user preferences are saved",skills:n("kotlin")},{slug:"question-submission",name:"Question Submission",type:"Web App",logo:e.Unknown,color:"#ffde16",period:{from:new Date(2021,6,1),to:new Date(2021,7,10)},links:[{label:"GitHub",to:"https://github.com/RiadhAdrani/guess-app-questions-submission"}],description:"A website that allow users to submit their questions and answers for a possible game app.",shortDescription:"A website that allow users to submit their questions and answers for a possible game app.",skills:n("node","vue","js","firebase")},{slug:"azur-app",name:"Azur City",type:"Android App",logo:e.Azur,color:"#01acc8",period:{from:new Date(2021,1,1),to:new Date(2021,4,10)},links:[{label:"GitHub",to:"https://github.com/RiadhAdrani/azur_app"}],description:"A prototype of a commercial app made for Azur City. The App was presented as an End of studies projects.",shortDescription:"A prototype of a commercial app made for Azur City. The App was presented as an End of studies projects.",skills:n("kotlin")},{slug:"werewolves-kt",name:"Werewolves",type:"Android App",logo:e.Werewolves,color:"#fbb03b",period:{from:new Date(2021,0,1),to:new Date(2021,5,10)},links:[{label:"GitHub",to:"https://github.com/RiadhAdrani/werewolves_of_the_millers_hollow"}],description:'Creating a guide for the game "Werewolves of The Millers Hollow" originally "Les loups garous de Thierclieux".',shortDescription:'Creating a guide for the game "Werewolves of The Millers Hollow" originally "Les loups garous de Thierclieux".',skills:n("kotlin")},{slug:"color-noter",name:"Color Noter",type:"Cross platform App",logo:e.Unknown,color:"#8cacb9",period:{from:new Date(2020,8,1),to:new Date(2020,9,10)},links:[{label:"GitHub (Android)",to:"https://github.com/RiadhAdrani/color_note_plus"},{label:"GitHub (Desktop)",to:"https://github.com/RiadhAdrani/color_noter-desktop"},{label:"GitHub (Web)",to:"https://github.com/RiadhAdrani/color_noter-web"}],description:"Color Noter is a color based note taking app that offer the user the ability to write and save his ideas and todos in an easy to use environment.",shortDescription:"Color Noter is a color based note taking app that offer the user the ability to write and save his ideas and todos in an easy to use environment.",skills:n("java","electron","reactjs","firebase")}],_="Projects",E={title:_,items:A};export{E as P};
