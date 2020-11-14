(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{211:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return a?n.a.createElement(b,l(l({ref:t},c),{},{components:a})):n.a.createElement(b,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},63:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return u}));var r=a(2),n=a(6),i=(a(0),a(211)),s={id:"class-request",title:"class: Request"},l={unversionedId:"api/class-request",id:"version-1.6.1/api/class-request",isDocsHomePage:!1,title:"class: Request",description:"Whenever the page sends a request for a network resource the following sequence of events are emitted by [Page]:",source:"@site/versioned_docs/version-1.6.1/api/class-request.md",slug:"/api/class-request",permalink:"/playwright/docs/api/class-request",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.6.1/api/class-request.md",version:"1.6.1",sidebar:"version-1.6.1/api",previous:{title:"class: Touchscreen",permalink:"/playwright/docs/api/class-touchscreen"},next:{title:"class: Response",permalink:"/playwright/docs/api/class-response"}},o=[{value:"request.failure()",id:"requestfailure",children:[]},{value:"request.frame()",id:"requestframe",children:[]},{value:"request.headers()",id:"requestheaders",children:[]},{value:"request.isNavigationRequest()",id:"requestisnavigationrequest",children:[]},{value:"request.method()",id:"requestmethod",children:[]},{value:"request.postData()",id:"requestpostdata",children:[]},{value:"request.postDataBuffer()",id:"requestpostdatabuffer",children:[]},{value:"request.postDataJSON()",id:"requestpostdatajson",children:[]},{value:"request.redirectedFrom()",id:"requestredirectedfrom",children:[]},{value:"request.redirectedTo()",id:"requestredirectedto",children:[]},{value:"request.resourceType()",id:"requestresourcetype",children:[]},{value:"request.response()",id:"requestresponse",children:[]},{value:"request.timing()",id:"requesttiming",children:[]},{value:"request.url()",id:"requesturl",children:[]}],c={rightToc:o};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Whenever the page sends a request for a network resource the following sequence of events are emitted by ","[Page]",":"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#event-request"}),Object(i.a)("inlineCode",{parentName:"a"},"'request'"))," emitted when the request is issued by the page."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#event-response"}),Object(i.a)("inlineCode",{parentName:"a"},"'response'"))," emitted when/if the response status and headers are received for the request."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#event-requestfinished"}),Object(i.a)("inlineCode",{parentName:"a"},"'requestfinished'"))," emitted when the response body is downloaded and the request is complete.")),Object(i.a)("p",null,"If request fails at some point, then instead of ",Object(i.a)("inlineCode",{parentName:"p"},"'requestfinished'")," event (and possibly instead of 'response' event), the  ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"#event-requestfailed"}),Object(i.a)("inlineCode",{parentName:"a"},"'requestfailed'"))," event is emitted."),Object(i.a)("blockquote",null,Object(i.a)("p",{parentName:"blockquote"},Object(i.a)("strong",{parentName:"p"},"NOTE")," HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",Object(i.a)("inlineCode",{parentName:"p"},"'requestfinished'")," event.")),Object(i.a)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the 'requestfinished' event, and a new request is  issued to a redirected url."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#requestfailure"}),"request.failure()")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#requestframe"}),"request.frame()")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#requestheaders"}),"request.headers()")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#requestisnavigationrequest"}),"request.isNavigationRequest()")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#requestmethod"}),"request.method()")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#requestpostdata"}),"request.postData()")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#requestpostdatabuffer"}),"request.postDataBuffer()")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#requestpostdatajson"}),"request.postDataJSON()")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#requestredirectedfrom"}),"request.redirectedFrom()")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#requestredirectedto"}),"request.redirectedTo()")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#requestresourcetype"}),"request.resourceType()")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#requestresponse"}),"request.response()")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#requesttiming"}),"request.timing()")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#requesturl"}),"request.url()"))),Object(i.a)("h2",{id:"requestfailure"},"request.failure()"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[null]","|","[Object]","> Object describing request failure, if any",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"errorText")," <","[string]","> Human-readable error message, e.g. ",Object(i.a)("inlineCode",{parentName:"li"},"'net::ERR_FAILED'"),".")))),Object(i.a)("p",null,"The method returns ",Object(i.a)("inlineCode",{parentName:"p"},"null")," unless this request has failed, as reported by\n",Object(i.a)("inlineCode",{parentName:"p"},"requestfailed")," event."),Object(i.a)("p",null,"Example of logging of all the failed requests:"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"page.on('requestfailed', request => {\n  console.log(request.url() + ' ' + request.failure().errorText);\n});\n")),Object(i.a)("h2",{id:"requestframe"},"request.frame()"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[Frame]","> A ","[Frame]"," that initiated this request.")),Object(i.a)("h2",{id:"requestheaders"},"request.headers()"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[Object]","<","[string]",", ","[string]",">> An object with HTTP headers associated with the request. All header names are lower-case.")),Object(i.a)("h2",{id:"requestisnavigationrequest"},"request.isNavigationRequest()"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[boolean]",">")),Object(i.a)("p",null,"Whether this request is driving frame's navigation."),Object(i.a)("h2",{id:"requestmethod"},"request.method()"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[string]","> Request's method (GET, POST, etc.)")),Object(i.a)("h2",{id:"requestpostdata"},"request.postData()"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[null]","|","[string]","> Request's post body, if any.")),Object(i.a)("h2",{id:"requestpostdatabuffer"},"request.postDataBuffer()"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[null]","|","[Buffer]","> Request's post body in a binary form, if any.")),Object(i.a)("h2",{id:"requestpostdatajson"},"request.postDataJSON()"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[null]","|","[Object]","> Parsed request's body for ",Object(i.a)("inlineCode",{parentName:"li"},"form-urlencoded")," and JSON as a fallback if any.")),Object(i.a)("p",null,"When the response is ",Object(i.a)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," then a key/value object of the values will be returned. Otherwise it will be parsed as JSON."),Object(i.a)("h2",{id:"requestredirectedfrom"},"request.redirectedFrom()"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[null]","|","[Request]","> Request that was redirected by the server to this one, if any.")),Object(i.a)("p",null,"When the server responds with a redirect, Playwright creates a new ","[Request]"," object. The two requests are connected by ",Object(i.a)("inlineCode",{parentName:"p"},"redirectedFrom()")," and ",Object(i.a)("inlineCode",{parentName:"p"},"redirectedTo()")," methods. When multiple server redirects has happened, it is possible to construct the whole redirect chain by repeatedly calling ",Object(i.a)("inlineCode",{parentName:"p"},"redirectedFrom()"),"."),Object(i.a)("p",null,"For example, if the website ",Object(i.a)("inlineCode",{parentName:"p"},"http://example.com")," redirects to ",Object(i.a)("inlineCode",{parentName:"p"},"https://example.com"),":"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const response = await page.goto('http://example.com');\nconsole.log(response.request().redirectedFrom().url()); // 'http://example.com'\n")),Object(i.a)("p",null,"If the website ",Object(i.a)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects:"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const response = await page.goto('https://google.com');\nconsole.log(response.request().redirectedFrom()); // null\n")),Object(i.a)("h2",{id:"requestredirectedto"},"request.redirectedTo()"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[null]","|","[Request]","> New request issued by the browser if the server responded with redirect.")),Object(i.a)("p",null,"This method is the opposite of ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"#requestredirectedfrom"}),"request.redirectedFrom()"),":"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"console.log(request.redirectedFrom().redirectedTo() === request); // true\n")),Object(i.a)("h2",{id:"requestresourcetype"},"request.resourceType()"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[string]",">")),Object(i.a)("p",null,"Contains the request's resource type as it was perceived by the rendering engine.\nResourceType will be one of the following: ",Object(i.a)("inlineCode",{parentName:"p"},"document"),", ",Object(i.a)("inlineCode",{parentName:"p"},"stylesheet"),", ",Object(i.a)("inlineCode",{parentName:"p"},"image"),", ",Object(i.a)("inlineCode",{parentName:"p"},"media"),", ",Object(i.a)("inlineCode",{parentName:"p"},"font"),", ",Object(i.a)("inlineCode",{parentName:"p"},"script"),", ",Object(i.a)("inlineCode",{parentName:"p"},"texttrack"),", ",Object(i.a)("inlineCode",{parentName:"p"},"xhr"),", ",Object(i.a)("inlineCode",{parentName:"p"},"fetch"),", ",Object(i.a)("inlineCode",{parentName:"p"},"eventsource"),", ",Object(i.a)("inlineCode",{parentName:"p"},"websocket"),", ",Object(i.a)("inlineCode",{parentName:"p"},"manifest"),", ",Object(i.a)("inlineCode",{parentName:"p"},"other"),"."),Object(i.a)("h2",{id:"requestresponse"},"request.response()"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[Promise]","<","[null]","|","[Response]",">> A matching ","[Response]"," object, or ",Object(i.a)("inlineCode",{parentName:"li"},"null")," if the response was not received due to error.")),Object(i.a)("h2",{id:"requesttiming"},"request.timing()"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[Object]",">",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"startTime")," <","[number]","> Request start time in milliseconds elapsed since January 1, 1970 00:00:00 UTC"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"domainLookupStart")," <","[number]","> Time immediately before the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",Object(i.a)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"domainLookupEnd")," <","[number]","> Time immediately after the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",Object(i.a)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"connectStart")," <","[number]","> Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",Object(i.a)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"secureConnectionStart")," <","[number]","> Time immediately before the browser starts the handshake process to secure the current connection. The value is given in milliseconds relative to ",Object(i.a)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"connectEnd")," <","[number]","> Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",Object(i.a)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"requestStart")," <","[number]","> Time immediately before the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",Object(i.a)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"responseStart")," <","[number]","> Time immediately after the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",Object(i.a)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"responseEnd")," <","[number]","> Time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first. The value is given in milliseconds relative to ",Object(i.a)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available.\n};")))),Object(i.a)("p",null,"Returns resource timing information for given request. Most of the timing values become available upon the response, ",Object(i.a)("inlineCode",{parentName:"p"},"responseEnd")," becomes available when request finishes. Find more information at ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming"}),"Resource Timing API"),"."),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const [request] = await Promise.all([\n  page.waitForEvent('requestfinished'),\n  page.goto(httpsServer.EMPTY_PAGE)\n]);\nconsole.log(request.timing());\n")),Object(i.a)("h2",{id:"requesturl"},"request.url()"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"returns: <","[string]","> URL of the request.")))}u.isMDXComponent=!0}}]);