(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),o=(a(0),a(211)),i={id:"multi-pages",title:"Multi-page scenarios"},p={unversionedId:"multi-pages",id:"multi-pages",isDocsHomePage:!1,title:"Multi-page scenarios",description:"Playwright can automate scenarios that span multiple browser contexts or multiple",source:"@site/docs/multi-pages.md",slug:"/multi-pages",permalink:"/playwright/docs/next/multi-pages",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/multi-pages.md",version:"current",sidebar:"docs",previous:{title:"Navigations",permalink:"/playwright/docs/next/navigations"},next:{title:"Authentication",permalink:"/playwright/docs/next/auth"}},c=[{value:"Multiple contexts",id:"multiple-contexts",children:[]},{value:"Multiple pages",id:"multiple-pages",children:[]},{value:"Handling new pages",id:"handling-new-pages",children:[]},{value:"Handling popups",id:"handling-popups",children:[]}],l={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Playwright can automate scenarios that span multiple browser contexts or multiple\ntabs in a browser window."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#multiple-contexts"}),"Multiple contexts")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#multiple-pages"}),"Multiple pages")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#handling-new-pages"}),"Handling new pages")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#handling-popups"}),"Handling popups"))),Object(o.a)("h2",{id:"multiple-contexts"},"Multiple contexts"),Object(o.a)("p",null,Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/next/core-concepts#browser-contexts"}),"Browser contexts")," are isolated environments\non a single browser instance. Playwright can create multiple browser contexts\nwithin a single scenario. This is useful when you want to test for\nmulti-user functionality, like chat."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');\n\n// Create a Chromium browser instance\nconst browser = await chromium.launch();\n\n// Create two isolated browser contexts\nconst userContext = await browser.newContext();\nconst adminContext = await browser.newContext();\n\n// Load user and admin cookies\nawait userContext.addCookies(userCookies);\nawait adminContext.addCookies(adminCookies);\n")),Object(o.a)("h4",{id:"api-reference"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/next/api#class-browsercontext"}),"class ",Object(o.a)("inlineCode",{parentName:"a"},"BrowserContext"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/next/api#browsernewcontextoptions"}),Object(o.a)("inlineCode",{parentName:"a"},"browser.newContext([options])"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/next/api#browsercontextaddcookiescookies"}),Object(o.a)("inlineCode",{parentName:"a"},"browserContext.addCookies(cookies)")))),Object(o.a)("h2",{id:"multiple-pages"},"Multiple pages"),Object(o.a)("p",null,"Each browser context can host multiple pages (tabs)."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Each page behaves like a focused, active page. Bringing the page to front\nis not required."),Object(o.a)("li",{parentName:"ul"},"Pages inside a context respect context-level emulation, like viewport sizes,\ncustom network routes or browser locale.")),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Create two pages\nconst pageOne = await context.newPage();\nconst pageTwo = await context.newPage();\n\n// Get pages of a brower context\nconst allPages = context.pages();\n")),Object(o.a)("h4",{id:"api-reference-1"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/next/api#class-page"}),"class ",Object(o.a)("inlineCode",{parentName:"a"},"Page"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/next/api#browsercontextnewpage"}),Object(o.a)("inlineCode",{parentName:"a"},"browserContext.newPage()"))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/next/api#browsercontextpages"}),Object(o.a)("inlineCode",{parentName:"a"},"browserContext.pages()")))),Object(o.a)("h2",{id:"handling-new-pages"},"Handling new pages"),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"page")," event on browser contexts can be used to get new pages that are\ncreated in the context. This can be used to handle new pages opened by\n",Object(o.a)("inlineCode",{parentName:"p"},'target="_blank"')," links."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Get page after a specific action (e.g. clicking a link)\nconst [newPage] = await Promise.all([\n  context.waitForEvent('page'),\n  page.click('a[target=\"_blank\"]') // Opens a new tab\n])\nawait newPage.waitForLoadState();\nconsole.log(await newPage.title());\n")),Object(o.a)("p",null,"If the action that triggers the new page is unknown, the following pattern can be used."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Get all new pages (including popups) in the context\ncontext.on('page', async page => {\n  await page.waitForLoadState();\n  await page.title();\n})\n")),Object(o.a)("h4",{id:"api-reference-2"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/next/api#event-page"}),"event: 'page'"))),Object(o.a)("h2",{id:"handling-popups"},"Handling popups"),Object(o.a)("p",null,"If the page opens a pop-up, you can get a reference to it by listening to the\n",Object(o.a)("inlineCode",{parentName:"p"},"popup")," event on the page."),Object(o.a)("p",null,"This event is emitted in addition to the ",Object(o.a)("inlineCode",{parentName:"p"},"browserContext.on('page')")," event, but\nonly for popups relevant to this page."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Get popup after a specific action (e.g., click)\nconst [popup] = await Promise.all([\n  page.waitForEvent('popup'),\n  page.click('#open')\n]);\nawait popup.waitForLoadState();\nawait popup.title();\n")),Object(o.a)("p",null,"If the action that triggers the popup is unknown, the following pattern can be used."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Get all popups when they open\npage.on('popup', async popup => {\n  await popup.waitForLoadState();\n  await popup.title();\n})\n")),Object(o.a)("h4",{id:"api-reference-3"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/next/api#event-popup"}),"event: 'popup'"))))}s.isMDXComponent=!0},211:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(a),g=n,d=b["".concat(i,".").concat(g)]||b[g]||u[g]||o;return a?r.a.createElement(d,p(p({ref:t},l),{},{components:a})):r.a.createElement(d,p({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);