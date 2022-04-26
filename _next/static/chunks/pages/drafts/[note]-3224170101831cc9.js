(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[386],{2693:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/drafts/[note]",function(){return n(1281)}])},8056:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(5893),r=n(1664),i=n.n(r);function s(){return(0,a.jsx)("footer",{className:"bottom-0 mt-10 text-center w-full py-4 px-6 iAWriterQuattro",children:(0,a.jsxs)("small",{className:"text-gray-500",children:["Copyright \xa9 Shalva Gegia 2022. Made by"," ",(0,a.jsx)(i(),{href:"/",children:(0,a.jsx)("a",{className:"underline",children:"Shalva Gegia"})})," \u2022 ",(0,a.jsx)(i(),{href:"https://twitter.com/@ShalvaGegia",children:(0,a.jsx)("a",{target:"_blank",className:"underline",rel:"noopener",children:"Twitter"})})," \u2022 ",(0,a.jsx)(i(),{href:"https://github.com/shakogegia",children:(0,a.jsx)("a",{target:"_blank",className:"underline",rel:"noopener",children:"Github"})})]})})}function l(){return(0,a.jsx)("header",{className:"w-full",children:(0,a.jsxs)("nav",{className:"container mx-auto md:max-w-5xl flex items-center justify-between p-6",children:[(0,a.jsx)(i(),{href:"/",children:(0,a.jsx)("a",{className:"font-bold text-lg text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-indigo-600",children:"Shalva Gegia"})}),(0,a.jsxs)("ul",{className:"flex iAWriterQuattro space-x-3",children:[(0,a.jsx)(o,{href:"/about",children:"About"}),(0,a.jsx)(o,{href:"/notes",children:"Notes"}),(0,a.jsx)(o,{href:"/garden",children:"Garden \ud83c\udf31"})]})]})})}function o(e){var t=e.href,n=e.children;return(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:t,children:(0,a.jsx)("a",{className:"text-ml inline-block transition-colors py-2 px-4 text-gray-500 no-underline hover:text-indigo-500 ",children:n})})})}var c=n(9008),d=n(4298),u=n.n(d),h=n(2962),x="Shalva Gegia";function m(e){var t=e.children,n=e.cover,r=e.title,i=r?"".concat(r," | ").concat(x):x,o=n?[{url:n.startsWith("http")?n:"https://gegia.me".concat(n),alt:i}]:[];return(0,a.jsxs)("div",{children:[(0,a.jsx)(h.PB,{title:i,description:"I'm a software engineer based in Amsterdam, Netherlands. I'm passionate about building products that solve real-world problems.",openGraph:{type:"website",locale:"en_IE",url:"https://gegia.me/",site_name:"Shalva Gegia",images:o},twitter:{handle:"@ShalvaGegia",site:"@ShalvaGegia",cardType:"summary_large_image"}}),(0,a.jsxs)(c.default,{children:[(0,a.jsx)("title",{children:i}),(0,a.jsx)("meta",{charSet:"UTF-8"}),(0,a.jsx)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,a.jsx)("link",{rel:"shortcut icon",href:"/favicon.png"})]}),(0,a.jsx)(u(),{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-110098374-1"}),(0,a.jsx)(u(),{id:"gtm",dangerouslySetInnerHTML:{__html:"\n              \x3c!-- Global site tag (gtag.js) - Google Analytics --\x3e\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n\n              gtag('config', 'UA-110098374-1');\n            "}}),(0,a.jsx)(l,{}),(0,a.jsx)("main",{className:"container mx-auto max-w-5xl px-6",children:t}),(0,a.jsx)(s,{})]})}},1281:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return r}});var a=n(8919),r=!0;t.default=a.default},8919:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var a=n(5893),r=n(381),i=n.n(r),s=n(8056),l=n(4298),o=n.n(l);function c(){return(0,a.jsxs)("div",{className:"mb-4 space-x-4 flex justify-end",children:[(0,a.jsx)("a",{className:"font-mono font-semibold hover:underline cursor-pointer text-indigo-500",onClick:function(){navigator.clipboard.writeText(window.TurndownService().turndown(document.getElementById("content")))},children:"Copy as Markdown"}),(0,a.jsx)("a",{className:"font-mono font-semibold hover:underline cursor-pointer text-indigo-500",onClick:function(){var e;navigator.clipboard.writeText((null===(e=document.getElementById("content"))||void 0===e?void 0:e.innerHTML)||"")},children:"Copy as HTML"})]})}var d=!0;t.default=function(e){var t=e.note,n=e.draft;return(0,a.jsxs)(s.Z,{title:t.title,cover:t.cover,children:[n&&(0,a.jsx)(o(),{src:"https://unpkg.com/turndown/dist/turndown.js"}),(0,a.jsxs)("div",{className:"max-w-3xl m-auto mt-8",children:[n&&(0,a.jsx)(c,{}),(0,a.jsx)("h3",{className:"text-xl iAWriterDuospaceBold DejaVuSansMonoBold",contentEditable:n,children:t.title}),(0,a.jsx)("article",{className:"prose max-w-none mt-6 iAWriterDuospace DejaVuSansMono text-gray-500",id:"content",contentEditable:n,dangerouslySetInnerHTML:{__html:t.content}}),(0,a.jsx)("div",{className:"mt-14",children:(0,a.jsxs)("em",{className:"font-extralight iAWriterDuospaceItalic text-gray-400",children:["Published on ",i()(t.date).format("MMMM YYYY")]})}),(0,a.jsx)("div",{className:"py-20",children:(0,a.jsx)("div",{className:"w-full border-t border-gray-100"})})]})]})}}},function(e){e.O(0,[885,451,774,888,179],(function(){return t=2693,e(e.s=t);var t}));var t=e.O();_N_E=t}]);