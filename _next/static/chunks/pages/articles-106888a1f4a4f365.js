(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{4507:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles",function(){return a(9170)}])},4008:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n=a(5893),r=a(1664),s=a.n(r);function i(){return(0,n.jsx)("footer",{className:"bottom-0 mt-10 text-center w-full py-4 px-6 iAWriterQuattro",children:(0,n.jsxs)("small",{className:"text-gray-500",children:["Copyright \xa9 Shalva Gegia 2022. Made by"," ",(0,n.jsx)(s(),{href:"/",children:(0,n.jsx)("a",{className:"underline",children:"Shalva Gegia"})})," \u2022 ",(0,n.jsx)(s(),{href:"https://twitter.com/@ShalvaGegia",children:(0,n.jsx)("a",{target:"_blank",className:"underline",rel:"noopener",children:"Twitter"})})," \u2022 ",(0,n.jsx)(s(),{href:"https://github.com/shakogegia",children:(0,n.jsx)("a",{target:"_blank",className:"underline",rel:"noopener",children:"Github"})})]})})}function l(){return(0,n.jsx)("header",{className:"w-full",children:(0,n.jsxs)("nav",{className:"container mx-auto md:max-w-5xl flex items-center justify-between p-6",children:[(0,n.jsx)(s(),{href:"/",children:(0,n.jsx)("a",{className:"font-bold text-lg text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-indigo-600",children:"Shalva Gegia"})}),(0,n.jsxs)("ul",{className:"flex iAWriterQuattro space-x-3",children:[(0,n.jsx)(c,{href:"/about",children:"About"}),(0,n.jsx)(c,{href:"/notes",children:"Notes"}),(0,n.jsx)(c,{href:"/articles",children:"Articles"}),!1,(0,n.jsx)(c,{href:"/garden",children:"Garden \ud83c\udf31"})]})]})})}function c(e){var t=e.href,a=e.children;return(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:t,children:(0,n.jsx)("a",{className:"text-ml inline-block transition-colors py-2 px-4 text-gray-500 no-underline hover:text-indigo-500 ",children:a})})})}var o=a(9008),d=a(4298),h=a.n(d),x=a(2962),m=a(1182);function u(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,m.overrideTailwindClasses)(t.filter(Boolean).join(" "))}var g={nbsp:" ",cent:"\xa2",pound:"\xa3",yen:"\xa5",euro:"\u20ac",copy:"\xa9",reg:"\xae",lt:"<",gt:">",quot:'"',amp:"&",apos:"'"};var j="Shalva Gegia";function p(e){var t,a=e.children,r=e.cover,s=e.title,c=e.description,d=void 0===c?"I'm a software engineer based in Amsterdam, Netherlands. I'm passionate about building products that solve real-world problems.":c,m=e.className,p=s?"".concat(s," | ").concat(j):j,f=r?[{url:r.startsWith("http")?r:"https://www.gegia.dev".concat(r),alt:p}]:[];return(0,n.jsxs)("div",{children:[(0,n.jsx)(x.PB,{title:p,description:(t=d,t.replace(/\&([^;]+);/g,(function(e,t){var a;return t in g?g[t]:(a=t.match(/^#x([\da-fA-F]+)$/))?String.fromCharCode(parseInt(a[1],16)):(a=t.match(/^#(\d+)$/))?String.fromCharCode(~~a[1]):e})).replace(/<[^>]+>/g,"").replace(/\u00a0/g," ")),openGraph:{type:"website",locale:"en_IE",url:"https://www.gegia.dev/",site_name:"Shalva Gegia",images:f},twitter:{handle:"@ShalvaGegia",site:"@ShalvaGegia",cardType:"summary_large_image"}}),(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:p}),(0,n.jsx)("meta",{charSet:"UTF-8"}),(0,n.jsx)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,n.jsx)("meta",{name:"theme-color",content:"#6366f1"}),(0,n.jsx)("link",{rel:"shortcut icon",href:"/favicon.png"})]}),(0,n.jsx)(h(),{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-110098374-1"}),(0,n.jsx)(h(),{id:"gtm",dangerouslySetInnerHTML:{__html:"\n              \x3c!-- Global site tag (gtag.js) - Google Analytics --\x3e\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n\n              gtag('config', 'UA-110098374-1');\n            "}}),(0,n.jsx)(h(),{type:"module",src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"}),(0,n.jsx)(h(),{noModule:!0,src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"}),(0,n.jsx)(l,{}),(0,n.jsx)("main",{className:u("container mx-auto max-w-5xl px-6",m),children:a}),(0,n.jsx)(i,{})]})}},9170:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return d}});var n=a(5893),r=a(4008),s=a(381),i=a.n(s),l=a(1664),c=a.n(l);function o(e){var t=e.article;return(0,n.jsxs)("article",{children:[t.cover&&(0,n.jsx)("figure",{className:"mb-6",children:(0,n.jsx)("img",{src:t.cover,alt:t.title,className:"w-full rounded-md"})}),(0,n.jsx)(c(),{href:"/articles/".concat(t.slug),passHref:!0,children:(0,n.jsx)("h2",{className:"text-3xl font-normal leading-normal mt-0 mb-0 text-gray-800",children:t.title})}),(0,n.jsx)("small",{className:"text-gray-300",children:i()(t.date).format("MMMM YYYY")}),(0,n.jsx)("article",{className:"prose max-w-none pt-6 text-gray-500",dangerouslySetInnerHTML:{__html:t.excerpt}}),(0,n.jsx)("div",{className:"mt-3",children:(0,n.jsx)(c(),{href:"/articles/".concat(t.slug),children:(0,n.jsxs)("a",{className:"font-semibold text-lg group text-gray-600 hover:text-indigo-500 transition-colors",children:["read more",(0,n.jsx)("span",{className:"transition-all group-hover:ml-1",children:" \u2192"})]})})})]})}var d=!0;t.default=function(e){var t=e.articles;return(0,n.jsx)(r.Z,{children:(0,n.jsx)("section",{className:"mt-10",children:t.map((function(e,a){return(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{article:e}),a!==t.length-1&&(0,n.jsx)("div",{className:"py-20",children:(0,n.jsx)("div",{className:"w-full border-t border-gray-100"})})]},e.slug)}))})})}}},function(e){e.O(0,[885,716,774,888,179],(function(){return t=4507,e(e.s=t);var t}));var t=e.O();_N_E=t}]);