(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[186],{1046:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function s(e){return e&&e.map((function(e,t){return n.createElement(e.tag,l({key:t},e.attr),s(e.child))}))}function i(e){return function(t){return n.createElement(u,l({attr:l({},e.attr)},t),s(e.child))}}function u(e){var t=function(t){var r,o=e.attr,a=e.size,s=e.title,i=c(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,i,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},2102:function(e,t,r){var n=r(2632);e.exports={MDXRenderer:n}},2632:function(e,t,r){var n=r(3515),o=r(861),a=r(8416),l=r(7071),c=["scope","children"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(7294),p=r(4983).mdx,f=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=l(e,c),s=f(t),m=u.useMemo((function(){if(!r)return null;var e=i({React:u,mdx:p},s),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return u.createElement(m,i({},a))}},1978:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(2102),o=r(7294),a=r(1597),l=r(6199);function c(e){var t,r,n=(0,a.useStaticQuery)(s).site;return o.createElement("div",{className:"flex justify-center mx-auto max-w-sm"},o.createElement("div",{className:"flex flex-col items-center text-center space-y-3 group"},o.createElement("div",null,o.createElement(l.QFM,{className:"text-3xl text-gray-600 block group-hover:hidden"}),o.createElement(l.Eu0,{className:"text-3xl text-gray-600 hidden group-hover:block"})),o.createElement("a",{className:"text-xl text-gray-600 iAWriterDuospace",href:"https://twitter.com/intent/tweet?url="+(null==n||null===(t=n.siteMetadata)||void 0===t?void 0:t.siteUrl)+encodeURIComponent(e.url)+"&text="+encodeURIComponent(e.text)+"&via="+(null==n||null===(r=n.siteMetadata)||void 0===r?void 0:r.twitterUsername.replace("@",""))},o.createElement("span",{className:"underline"},"Click here")," to share this article with your followers on Twitter if you liked it."),o.createElement("span",{className:"font-mono text-sm text-gray-500"},"Help this note with watering to grow.")))}var s="2667245986",i=r(9032),u=r(3149);function p(e){var t,r,a=e.data,l=(a.site,a.mdx),s=e.pageContext;s.next,s.prev;return o.createElement(i.Z,null,o.createElement(u.Z,{title:l.frontmatter.title,description:l.excerpt,image:null===(t=l.frontmatter.banner)||void 0===t||null===(r=t.childImageSharp)||void 0===r?void 0:r.fluid.src,pathname:"/"+l.frontmatter.slug,article:!0}),o.createElement("div",{className:"max-w-3xl m-auto mt-8"},o.createElement("h3",{className:"text-2xl iAWriterDuospaceBold transition-colors dark:text-gray-200"},l.frontmatter.title),o.createElement("div",{className:"prose max-w-none mt-6 prose-lg iAWriterDuospace break-words  text-gray-500 transition-colors dark:text-gray-300 dark:prose-a:text-gray-200 dark:prose-strong:text-gray-200 dark:prose-blockquote:text-gray-200"},o.createElement(n.MDXRenderer,null,l.body)),o.createElement("div",{className:"mt-14"},o.createElement("em",{className:"font-extralight iAWriterDuospaceItalic text-gray-400"},"Published on ",l.frontmatter.date)),o.createElement("div",{className:"py-20"},o.createElement("div",{className:"w-full border-t border-gray-100 transition-colors dark:border-gray-600"}))),o.createElement("div",{className:"mb-20"},o.createElement(c,{url:"/"+l.frontmatter.slug,text:l.frontmatter.title})))}},3405:function(e,t,r){var n=r(3897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,r){var n=r(6015),o=r(9617);function a(t,r,l){return o()?(e.exports=a=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var n=r(3405),o=r(9498),a=r(6116),l=r(2281);e.exports=function(e){return n(e)||o(e)||a(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-post-tsx-422e0102e29cc9cd2153.js.map