(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{172:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return p})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return b}));var n=t(2),r=t(6),i=(t(0),t(211)),o={id:"class-keyboard",title:"class: Keyboard"},p={unversionedId:"api/class-keyboard",id:"api/class-keyboard",isDocsHomePage:!1,title:"class: Keyboard",description:"Keyboard provides an api for managing a virtual keyboard. The high level api is keyboard.type, which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page.",source:"@site/docs/api/class-keyboard.md",slug:"/api/class-keyboard",permalink:"/playwright/docs/next/api/class-keyboard",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/class-keyboard.md",version:"current",sidebar:"api",previous:{title:"class: FileChooser",permalink:"/playwright/docs/next/api/class-filechooser"},next:{title:"class: Mouse",permalink:"/playwright/docs/next/api/class-mouse"}},l=[{value:"keyboard.down(key)",id:"keyboarddownkey",children:[]},{value:"keyboard.insertText(text)",id:"keyboardinserttexttext",children:[]},{value:"keyboard.press(key, options)",id:"keyboardpresskey-options",children:[]},{value:"keyboard.type(text, options)",id:"keyboardtypetext-options",children:[]},{value:"keyboard.up(key)",id:"keyboardupkey",children:[]}],c={rightToc:l};function b(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Keyboard provides an api for managing a virtual keyboard. The high level api is ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#keyboardtypetext-options"}),Object(i.a)("inlineCode",{parentName:"a"},"keyboard.type")),", which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page."),Object(i.a)("p",null,"For finer control, you can use ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#keyboarddownkey"}),Object(i.a)("inlineCode",{parentName:"a"},"keyboard.down")),", ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#keyboardupkey"}),Object(i.a)("inlineCode",{parentName:"a"},"keyboard.up")),", and ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#keyboardinserttexttext"}),Object(i.a)("inlineCode",{parentName:"a"},"keyboard.insertText"))," to manually fire events as if they were generated from a real keyboard."),Object(i.a)("p",null,"An example of holding down ",Object(i.a)("inlineCode",{parentName:"p"},"Shift")," in order to select and delete some text:"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.keyboard.type('Hello World!');\nawait page.keyboard.press('ArrowLeft');\n\nawait page.keyboard.down('Shift');\nfor (let i = 0; i < ' World'.length; i++)\n  await page.keyboard.press('ArrowLeft');\nawait page.keyboard.up('Shift');\n\nawait page.keyboard.press('Backspace');\n// Result text will end up saying 'Hello!'\n")),Object(i.a)("p",null,"An example of pressing uppercase ",Object(i.a)("inlineCode",{parentName:"p"},"A")),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.keyboard.press('Shift+KeyA');\n// or\nawait page.keyboard.press('Shift+A');\n")),Object(i.a)("p",null,"An example to trigger select-all with the keyboard"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// on Windows and Linux\nawait page.keyboard.press('Control+A');\n// on macOS\nawait page.keyboard.press('Meta+A');\n")),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#keyboarddownkey"}),"keyboard.down(key)")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#keyboardinserttexttext"}),"keyboard.insertText(text)")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#keyboardpresskey-options"}),"keyboard.press(key[, options])")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#keyboardtypetext-options"}),"keyboard.type(text[, options])")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"#keyboardupkey"}),"keyboard.up(key)"))),Object(i.a)("h2",{id:"keyboarddownkey"},"keyboard.down(key)"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"key")," <","[string]","> Name of the key to press or a character to generate, such as ",Object(i.a)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",Object(i.a)("inlineCode",{parentName:"li"},"a"),"."),Object(i.a)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(i.a)("p",null,"Dispatches a ",Object(i.a)("inlineCode",{parentName:"p"},"keydown")," event."),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"key")," can specify the intended ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," value or a single character to generate the text for. A superset of the ",Object(i.a)("inlineCode",{parentName:"p"},"key")," values can be found ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"}),"here"),". Examples of the keys are:"),Object(i.a)("p",null,"  ",Object(i.a)("inlineCode",{parentName:"p"},"F1")," - ",Object(i.a)("inlineCode",{parentName:"p"},"F12"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Digit0"),"- ",Object(i.a)("inlineCode",{parentName:"p"},"Digit9"),", ",Object(i.a)("inlineCode",{parentName:"p"},"KeyA"),"- ",Object(i.a)("inlineCode",{parentName:"p"},"KeyZ"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Backquote"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Minus"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Equal"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Backslash"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Backspace"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Tab"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Delete"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Escape"),", ",Object(i.a)("inlineCode",{parentName:"p"},"ArrowDown"),", ",Object(i.a)("inlineCode",{parentName:"p"},"End"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Enter"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Home"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Insert"),", ",Object(i.a)("inlineCode",{parentName:"p"},"PageDown"),", ",Object(i.a)("inlineCode",{parentName:"p"},"PageUp"),", ",Object(i.a)("inlineCode",{parentName:"p"},"ArrowRight"),", ",Object(i.a)("inlineCode",{parentName:"p"},"ArrowUp"),", etc."),Object(i.a)("p",null,"Following modification shortcuts are also suported: ",Object(i.a)("inlineCode",{parentName:"p"},"Shift"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Control"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Alt"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Meta"),", ",Object(i.a)("inlineCode",{parentName:"p"},"ShiftLeft"),"."),Object(i.a)("p",null,"Holding down ",Object(i.a)("inlineCode",{parentName:"p"},"Shift")," will type the text that corresponds to the ",Object(i.a)("inlineCode",{parentName:"p"},"key")," in the upper case."),Object(i.a)("p",null,"If ",Object(i.a)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",Object(i.a)("inlineCode",{parentName:"p"},"a")," and ",Object(i.a)("inlineCode",{parentName:"p"},"A")," will generate different respective texts."),Object(i.a)("p",null,"If ",Object(i.a)("inlineCode",{parentName:"p"},"key")," is a modifier key, ",Object(i.a)("inlineCode",{parentName:"p"},"Shift"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Meta"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Control"),", or ",Object(i.a)("inlineCode",{parentName:"p"},"Alt"),", subsequent key presses will be sent with that modifier active. To release the modifier key, use ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#keyboardupkey"}),Object(i.a)("inlineCode",{parentName:"a"},"keyboard.up")),"."),Object(i.a)("p",null,"After the key is pressed once, subsequent calls to ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#keyboarddownkey"}),Object(i.a)("inlineCode",{parentName:"a"},"keyboard.down"))," will have ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat"}),"repeat")," set to true. To release the key, use ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#keyboardupkey"}),Object(i.a)("inlineCode",{parentName:"a"},"keyboard.up")),"."),Object(i.a)("blockquote",null,Object(i.a)("p",{parentName:"blockquote"},Object(i.a)("strong",{parentName:"p"},"NOTE")," Modifier keys DO influence ",Object(i.a)("inlineCode",{parentName:"p"},"keyboard.down"),". Holding down ",Object(i.a)("inlineCode",{parentName:"p"},"Shift")," will type the text in upper case.")),Object(i.a)("h2",{id:"keyboardinserttexttext"},"keyboard.insertText(text)"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"text")," <","[string]","> Sets input to the specified text value."),Object(i.a)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(i.a)("p",null,"Dispatches only ",Object(i.a)("inlineCode",{parentName:"p"},"input")," event, does not emit the ",Object(i.a)("inlineCode",{parentName:"p"},"keydown"),", ",Object(i.a)("inlineCode",{parentName:"p"},"keyup")," or ",Object(i.a)("inlineCode",{parentName:"p"},"keypress")," events."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"page.keyboard.insertText('\u55e8');\n")),Object(i.a)("blockquote",null,Object(i.a)("p",{parentName:"blockquote"},Object(i.a)("strong",{parentName:"p"},"NOTE")," Modifier keys DO NOT effect ",Object(i.a)("inlineCode",{parentName:"p"},"keyboard.insertText"),". Holding down ",Object(i.a)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case.")),Object(i.a)("h2",{id:"keyboardpresskey-options"},"keyboard.press(key","[, options]",")"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"key")," <","[string]","> Name of the key to press or a character to generate, such as ",Object(i.a)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",Object(i.a)("inlineCode",{parentName:"li"},"a"),"."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"delay")," <","[number]","> Time to wait between ",Object(i.a)("inlineCode",{parentName:"li"},"keydown")," and ",Object(i.a)("inlineCode",{parentName:"li"},"keyup")," in milliseconds. Defaults to 0."))),Object(i.a)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"key")," can specify the intended ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," value or a single character to generate the text for. A superset of the ",Object(i.a)("inlineCode",{parentName:"p"},"key")," values can be found ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"}),"here"),". Examples of the keys are:"),Object(i.a)("p",null,"  ",Object(i.a)("inlineCode",{parentName:"p"},"F1")," - ",Object(i.a)("inlineCode",{parentName:"p"},"F12"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Digit0"),"- ",Object(i.a)("inlineCode",{parentName:"p"},"Digit9"),", ",Object(i.a)("inlineCode",{parentName:"p"},"KeyA"),"- ",Object(i.a)("inlineCode",{parentName:"p"},"KeyZ"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Backquote"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Minus"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Equal"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Backslash"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Backspace"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Tab"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Delete"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Escape"),", ",Object(i.a)("inlineCode",{parentName:"p"},"ArrowDown"),", ",Object(i.a)("inlineCode",{parentName:"p"},"End"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Enter"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Home"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Insert"),", ",Object(i.a)("inlineCode",{parentName:"p"},"PageDown"),", ",Object(i.a)("inlineCode",{parentName:"p"},"PageUp"),", ",Object(i.a)("inlineCode",{parentName:"p"},"ArrowRight"),", ",Object(i.a)("inlineCode",{parentName:"p"},"ArrowUp"),", etc."),Object(i.a)("p",null,"Following modification shortcuts are also suported: ",Object(i.a)("inlineCode",{parentName:"p"},"Shift"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Control"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Alt"),", ",Object(i.a)("inlineCode",{parentName:"p"},"Meta"),", ",Object(i.a)("inlineCode",{parentName:"p"},"ShiftLeft"),"."),Object(i.a)("p",null,"Holding down ",Object(i.a)("inlineCode",{parentName:"p"},"Shift")," will type the text that corresponds to the ",Object(i.a)("inlineCode",{parentName:"p"},"key")," in the upper case."),Object(i.a)("p",null,"If ",Object(i.a)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",Object(i.a)("inlineCode",{parentName:"p"},"a")," and ",Object(i.a)("inlineCode",{parentName:"p"},"A")," will generate different respective texts."),Object(i.a)("p",null,"Shortcuts such as ",Object(i.a)("inlineCode",{parentName:"p"},'key: "Control+o"')," or ",Object(i.a)("inlineCode",{parentName:"p"},'key: "Control+Shift+T"')," are supported as well. When speficied with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const page = await browser.newPage();\nawait page.goto('https://keycode.info');\nawait page.keyboard.press('A');\nawait page.screenshot({ path: 'A.png' });\nawait page.keyboard.press('ArrowLeft');\nawait page.screenshot({ path: 'ArrowLeft.png' });\nawait page.keyboard.press('Shift+O');\nawait page.screenshot({ path: 'O.png' });\nawait browser.close();\n")),Object(i.a)("p",null,"Shortcut for ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#keyboarddownkey"}),Object(i.a)("inlineCode",{parentName:"a"},"keyboard.down"))," and ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#keyboardupkey"}),Object(i.a)("inlineCode",{parentName:"a"},"keyboard.up")),"."),Object(i.a)("h2",{id:"keyboardtypetext-options"},"keyboard.type(text","[, options]",")"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"text")," <","[string]","> A text to type into a focused element."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"delay")," <","[number]","> Time to wait between key presses in milliseconds. Defaults to 0."))),Object(i.a)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(i.a)("p",null,"Sends a ",Object(i.a)("inlineCode",{parentName:"p"},"keydown"),", ",Object(i.a)("inlineCode",{parentName:"p"},"keypress"),"/",Object(i.a)("inlineCode",{parentName:"p"},"input"),", and ",Object(i.a)("inlineCode",{parentName:"p"},"keyup")," event for each character in the text."),Object(i.a)("p",null,"To press a special key, like ",Object(i.a)("inlineCode",{parentName:"p"},"Control")," or ",Object(i.a)("inlineCode",{parentName:"p"},"ArrowDown"),", use ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"#keyboardpresskey-options"}),Object(i.a)("inlineCode",{parentName:"a"},"keyboard.press")),"."),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.keyboard.type('Hello'); // Types instantly\nawait page.keyboard.type('World', {delay: 100}); // Types slower, like a user\n")),Object(i.a)("blockquote",null,Object(i.a)("p",{parentName:"blockquote"},Object(i.a)("strong",{parentName:"p"},"NOTE")," Modifier keys DO NOT effect ",Object(i.a)("inlineCode",{parentName:"p"},"keyboard.type"),". Holding down ",Object(i.a)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case.")),Object(i.a)("h2",{id:"keyboardupkey"},"keyboard.up(key)"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"key")," <","[string]","> Name of the key to press or a character to generate, such as ",Object(i.a)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",Object(i.a)("inlineCode",{parentName:"li"},"a"),"."),Object(i.a)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(i.a)("p",null,"Dispatches a ",Object(i.a)("inlineCode",{parentName:"p"},"keyup")," event."))}b.isMDXComponent=!0},211:function(e,a,t){"use strict";t.d(a,"a",(function(){return O}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),b=function(e){var a=r.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},s=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=b(t),O=n,j=s["".concat(o,".").concat(O)]||s[O]||d[O]||i;return t?r.a.createElement(j,p(p({ref:a},c),{},{components:t})):r.a.createElement(j,p({ref:a},c))}));function O(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=s;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);