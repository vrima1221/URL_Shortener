(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},42:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(29),s=n.n(a),o=n(9),i=(n(38),n(39),n(3)),l=n(1),u=function(){return Object(l.jsx)("h1",{children:"Page not found"})},j=n(8),h=n(4),b=n.n(h),d=n(6),f=n(5),O=(n(42),n(24)),p=n(33),m="https://localhost:7258/ShortUrl";function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r={method:t};return n&&(r.body=JSON.stringify(n),r.headers={"Content-Type":"application/json; charset=UTF-8"}),fetch(m+e,r).then((function(e){if(!e.ok)throw new Error;return e.json()})).catch((function(e){return console.log(e)}))}var v=function(e){return x(e)},g=function(e,t){return x(e,"POST",t)},U=function(e){return x(e,"DELETE")},L=function(e){return v("/Get?id=".concat(e))},R=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v("/GetAll"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=(n(47),n(48),function(e){var t=e.message,n=e.isError;return Object(l.jsx)("div",{className:"error-notification",hidden:!n,children:t})}),N=function(e){var t=e.isError,n=e.errorMessage,r=e.onChange,c=e.currentUrl,a=e.onSubmit;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"form",action:"",onSubmit:a,children:[Object(l.jsx)("input",{className:"form__input",type:"url",placeholder:"Input URL to shrink",value:c,onChange:function(e){return r(e.target.value)}}),Object(l.jsx)("button",{className:"form__button",type:"submit",children:"Shrink"})]}),Object(l.jsx)(_,{isError:t,message:n})]})},y=(n(49),n(50),function(e){var t=e.url,n=e.onRemove,r=t.fullUrl,c=t.shortUrl,a=t.id;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"fullUrl",children:Object(l.jsx)("a",{href:r,children:r})}),Object(l.jsx)("td",{children:Object(l.jsx)("a",{href:"https://localhost:7258/ShortUrl/GetShort?shortUrl=".concat(c),children:c})}),Object(l.jsx)("td",{children:Object(l.jsx)(o.b,{to:"/".concat(a),children:"More"})}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{type:"button",onClick:function(){return n(a)},children:"\u2716"})})]})}),S=function(e){var t=e.urls,n=e.onRemove;return Object(l.jsxs)("table",{className:"table",children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Full URL"}),Object(l.jsx)("th",{children:"Short URL"}),Object(l.jsx)("th",{children:"More"}),Object(l.jsx)("th",{children:"Remove"})]}),t.map((function(e){return Object(l.jsx)(y,{url:e,onRemove:n},e.id)}))]})},k=n.p+"static/media/UrlShortenerLogo.870f8c13.png",w=function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),s=Object(f.a)(a,2),o=s[0],i=s[1],u=Object(r.useState)(""),h=Object(f.a)(u,2),m=h[0],x=h[1],v=Object(r.useState)(""),L=Object(f.a)(v,2),_=L[0],y=L[1],w=function(e){i(!0),x(e),setTimeout((function(){return i(!1)}),3e3)},E=function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:(t=e.sent)&&c(t.value);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){try{E()}catch(e){w("Unable to load URLs!")}}),[]);var C=Object(r.useMemo)((function(){return n}),[n]),T=C.some((function(e){return e.fullUrl===_}));return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("img",{className:"shortener-logo",src:k,alt:"URL shortener logo"}),Object(l.jsx)(N,{isError:o,errorMessage:m,onChange:y,currentUrl:_,onSubmit:function(e){if(e.preventDefault(),T)return w("URL is already shortened!"),void y("");if(!_.trim())return w("Please input your URL!"),void y("");var t="https://localhost:7258/ShortUrl/GetShort?shortUrl=".concat(_.replace(/[^a-z]/g,"").slice(-6)),n={id:0,fullUrl:_,shortUrl:t};y(""),function(e){return g("/CreateEdit",Object(p.a)({},e))}(n).then((function(e){return c((function(t){return[].concat(Object(j.a)(t),[e.value])}))}))}}),0!==C.length?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(S,{urls:C,onRemove:function(e){var t;(t=e,U("/Delete?id=".concat(t))).then((function(){return c((function(t){return t.filter((function(t){return t.id!==e}))}))})).catch((function(){return w("Unable to delete URL!")}))}})}):Object(l.jsx)(O.a,{visible:!0,height:"150",width:"150",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})]})},E=(n(51),function(){var e=Object(r.useRef)(null),t=Object(r.useState)('A URL shortener is a tool that takes a long URL and generates a shorter, more manageable URL that redirects to the original URL when clicked. Here\'s a brief description of how a URL shortener typically works:\n\n\n1. User submits a long URL to the URL shortener service\n2. The URL shortener service generates a unique identifier for the long URL, typically a string of characters or numbers\n3. The service stores the mapping between the unique identifier and the long URL in a database\n4. The service generates a shortened URL by appending the unique identifier to a base URL, such as "https://example.com/"\n5. The service returns the shortened URL to the user\n6. When a user clicks on the shortened URL, the service looks up the corresponding long URL in the database and redirects the user to the original URL'),n=Object(f.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(!1),i=Object(f.a)(s,2),u=i[0],j=i[1];Object(r.useEffect)((function(){e.current&&e.current.focus()}),[u]);return Object(l.jsxs)("div",{className:"about",children:[Object(l.jsx)("h1",{className:"about__title",children:"Learn more about URL Shortener!"}),Object(l.jsx)("div",{className:"about__text-container",children:u?Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(l.jsx)("input",{type:"text",ref:e,className:"about__text-field",value:c,onChange:function(e){return a(e.target.value)},onKeyDown:function(e){"Escape"===e.key&&j(!1)},onBlur:function(){return j(!1)}})}):Object(l.jsx)("p",{className:"about__text",onDoubleClick:function(){return j(!0)},children:c})}),Object(l.jsx)(o.b,{to:"/",children:Object(l.jsx)("div",{className:"about__link",children:"Lets try it!"})})]})}),C=(n(52),function(){var e=Object(i.p)().id,t=Object(r.useState)(null),n=Object(f.a)(t,2),c=n[0],a=n[1],s=function(){var t=Object(d.a)(b.a.mark((function t(n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=5;break}return t.next=3,L(n);case 3:r=t.sent,a(r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){s(e)}),[]),console.log(c),Object(l.jsx)(l.Fragment,{children:c?Object(l.jsxs)("div",{className:"info",children:[Object(l.jsx)("h1",{className:"info__title",children:"URL Info page"}),Object(l.jsxs)("p",{className:"info__full",children:["Full URL: ",Object(l.jsx)("a",{href:c.value.fullUrl,children:c.value.fullUrl})]}),Object(l.jsxs)("p",{className:"info__short",children:["Short URL: ",Object(l.jsx)("a",{href:c.value.fullUrl,children:c.value.shortUrl})]})]}):Object(l.jsx)(O.a,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})})}),T=(n(53),Object(r.memo)((function(){return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)(o.b,{to:"/",className:"header__logo-link",children:Object(l.jsx)("img",{className:"header__logo",src:k,alt:"NiceGadgets logo"})}),Object(l.jsx)("nav",{className:"nav",children:Object(l.jsxs)("ul",{className:"nav__list",children:[Object(l.jsx)("li",{className:"nav__item",children:Object(l.jsx)(o.c,{to:"/",className:"nav__link",children:"home"})}),Object(l.jsx)("li",{className:"nav__item",children:Object(l.jsx)(o.c,{to:"/about",className:"nav__link",children:"About"})})]})})]})}))),F=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(T,{}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"/about",element:Object(l.jsx)(E,{})}),Object(l.jsx)(i.b,{path:"*",element:Object(l.jsx)(u,{})}),Object(l.jsx)(i.b,{path:"/home",element:Object(l.jsx)(i.a,{to:"/",replace:!0})}),Object(l.jsx)(i.b,{path:"/",element:Object(l.jsx)(w,{})}),Object(l.jsx)(i.b,{path:"/:id",element:Object(l.jsx)(C,{})})]})})]})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(F,{})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.3c2d2485.chunk.js.map