(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[867],{1223:function(e,t,n){var r=n(5112),a=n(30),o=n(3070).f,l=r("unscopables"),c=Array.prototype;null==c[l]&&o(c,l,{configurable:!0,value:a(null)}),e.exports=function(e){c[l][e]=!0}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},30:function(e,t,n){var r,a=n(9670),o=n(6048),l=n(748),c=n(3501),i=n(490),s=n(317),u=n(6200),f=u("IE_PROTO"),m=function(){},d=function(e){return"<script>"+e+"</"+"script>"},p=function(e){e.write(d("")),e.close();var t=e.parentWindow.Object;return e=null,t},v=function(){try{r=new ActiveXObject("htmlfile")}catch(a){}var e,t;v="undefined"!=typeof document?document.domain&&r?p(r):((t=s("iframe")).style.display="none",i.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(d("document.F=Object")),e.close(),e.F):p(r);for(var n=l.length;n--;)delete v.prototype[l[n]];return v()};c[f]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m.prototype=a(e),n=new m,m.prototype=null,n[f]=e):n=v(),void 0===t?n:o.f(n,t)}},6048:function(e,t,n){var r=n(9781),a=n(3353),o=n(3070),l=n(9670),c=n(5656),i=n(1956);t.f=r&&!a?Object.defineProperties:function(e,t){l(e);for(var n,r=c(t),a=i(t),s=a.length,u=0;s>u;)o.f(e,n=a[u++],r[n]);return e}},1956:function(e,t,n){var r=n(6324),a=n(748);e.exports=Object.keys||function(e){return r(e,a)}},3792:function(e,t,n){n(1223)("flat")},6499:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});n(3792);var r=n(5785),a=n(1883),o=n(381),l=n.n(o),c=n(7294),i=n(6377),s=n(8065),u=n(4001),f=n(155),m=n(4385);function d(e){const[t,n]=c.useState(null),o=c.useMemo((()=>{const t=e.data.allMdx.edges.map((e=>{var t;let{node:n}=e;return null===(t=n.frontmatter)||void 0===t?void 0:t.categories}));return(0,r.Z)(new Set(t.flat())).sort()}),[]);return c.createElement(s.Z,null,c.createElement(u.Z,{title:"Garden"}),c.createElement(m.Z,{title:"Digital Garden",color:"text-indigo-500",icon:c.createElement("span",null,"🌱")},"A collection of notes, articles and ideas I'm interested into."),c.createElement("div",{className:"my-10"},c.createElement(p,{topics:o,activeTopic:t,setActiveTopic:n})),c.createElement("div",null,c.createElement("div",{className:"columns-1 sm:columns-2 md:columns-3"},e.data.allMdx.edges.map((e=>{let{node:n}=e;const{frontmatter:r,fields:o}=n;if(!r||!o)return null;const{categories:i=[]}=r;return t&&!i.includes(t)?null:c.createElement("div",{className:"mb-6 break-inside-avoid",key:o.id},c.createElement(a.Link,{className:"group",to:"/"+o.slug},c.createElement("h3",{className:"text-lg font-mono group-hover:underline transition-colors dark:text-gray-200"},o.title),c.createElement("div",{className:"text-sm text-gray-400 flex items-center"},c.createElement(f.uA_,{className:"mr-1"}),c.createElement("span",null,"Note "," • "," ",l()(r.date).fromNow()))))})))))}function p(e){let{topics:t,activeTopic:n,setActiveTopic:r}=e;return c.createElement("div",{className:"flex justify-center space-x-2 sm:space-x-4 mx-auto"},c.createElement("div",null,c.createElement("div",{className:(0,i.Z)("relative mr-6","font-duospace-bold text-gray-400","after:content-[' '] after:h-[70%] after:w-0.5 after:absolute after:top-[15%] after:-right-3 after:bg-gray-300"),onClick:()=>r(null)},"Topics")),c.createElement("div",{className:"flex flex-wrap justify-start mx-auto"},t.map((e=>c.createElement("span",{key:e,className:(0,i.Z)("relative cursor-pointer capitalize mr-6 mb-2","after:opacity-0 transition-opacity after:h-0.5 after:w-full after:absolute after:-bottom-1 after:left-0 after:bg-gradient-to-r after:from-pink-400 after:to-indigo-600","hover:after:opacity-100","font-duospace text-gray-500",e===n&&"after:opacity-100"),onClick:()=>r(n!==e?e:null)},e)))))}}}]);
//# sourceMappingURL=component---src-pages-garden-tsx-60c24e59bbdc9a0b1a4f.js.map