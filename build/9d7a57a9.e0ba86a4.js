(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(6),o=(a(0),a(211)),c={id:"pom",title:"Page Object Models"},i={unversionedId:"pom",id:"version-1.6.1/pom",isDocsHomePage:!1,title:"Page Object Models",description:"Large test suites can be structured to optimize ease of authoring and maintenance.",source:"@site/versioned_docs/version-1.6.1/pom.md",slug:"/pom",permalink:"/playwright/docs/pom",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.6.1/pom.md",version:"1.6.1",sidebar:"version-1.6.1/docs",previous:{title:"Authentication",permalink:"/playwright/docs/auth"},next:{title:"Test Runners",permalink:"/playwright/docs/test-runners"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Implementation",id:"implementation",children:[{value:"API reference",id:"api-reference",children:[]}]}],s={rightToc:p};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Large test suites can be structured to optimize ease of authoring and maintenance.\nPage object models are one such approach to structure your test suite."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#introduction"}),"Introduction")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"#implementation"}),"Implementation"))),Object(o.a)("h2",{id:"introduction"},"Introduction"),Object(o.a)("p",null,"A page object represents a part of your web application. An e-commerce web\napplication might have a home page, a listings page and a checkout page. Each of\nthem can be represented by page object models."),Object(o.a)("p",null,"Page objects ",Object(o.a)("strong",{parentName:"p"},"simplify authoring"),". They create a higher-level API which suits\nyour application."),Object(o.a)("p",null,"Page objects ",Object(o.a)("strong",{parentName:"p"},"simplify maintenance"),". They capture element selectors in one place\nand create reusable code to avoid repetition."),Object(o.a)("h2",{id:"implementation"},"Implementation"),Object(o.a)("p",null,"Page object models wrap over a Playwright ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"/playwright/docs/api#class-page"}),Object(o.a)("inlineCode",{parentName:"a"},"page")),"."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// models/Search.js\nclass SearchPage {\n  constructor(page) {\n    this.page = page;\n  }\n  async navigate() {\n    await this.page.goto('https://bing.com');\n  }\n  async search(text) {\n    await this.page.fill('[aria-label=\"Enter your search term\"]', text);\n    await this.page.keyboard.press('Enter');\n  }\n}\nmodule.exports = { SearchPage };\n")),Object(o.a)("p",null,"Page objects can then be used inside a test."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// search.spec.js\nconst { SearchPage } = require('./models/Search');\n\n// In the test\nconst page = await browser.newPage();\nconst searchPage = new SearchPage(page);\nawait searchPage.navigate();\nawait searchPage.search('search query');\n")),Object(o.a)("h3",{id:"api-reference"},"API reference"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",Object(n.a)({parentName:"li"},{href:"/playwright/docs/api#class-page"}),"class ",Object(o.a)("inlineCode",{parentName:"a"},"Page")))))}l.isMDXComponent=!0},211:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(a),b=n,d=m["".concat(c,".").concat(b)]||m[b]||u[b]||o;return a?r.a.createElement(d,i(i({ref:t},s),{},{components:a})):r.a.createElement(d,i({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);