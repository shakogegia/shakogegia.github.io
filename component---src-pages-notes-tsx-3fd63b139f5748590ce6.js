"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[776],{4385:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(6377);function r(e){let{title:t,icon:a,color:r,className:c,children:i}=e;return n.createElement("div",{className:(0,l.Z)("flex flex-col align-center text-center mt-4",c)},n.createElement("div",{className:"flex flex-col align-center text-center font-duospace"},a&&n.createElement("span",{className:(0,l.Z)("text-9xl flex justify-center mb-6",r)},a),n.createElement("h2",{className:"text-3xl transition-colors dark:text-gray-200"},t),n.createElement("h6",{className:"mt-6 text-md max-w-md mx-auto text-gray-500"},i)))}},1516:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(8978),l=a(7294),r=a(1883),c=a(8065),i=a(4001),s=a(4385);function o(e){let{data:{allMdx:t}}=e;const a=t.edges.map((e=>e.node)).filter((e=>void 0!==e));return l.createElement(c.Z,null,l.createElement(i.Z,{title:"Notes"}),l.createElement(s.Z,{title:"Digital Notes",color:"text-indigo-500",icon:l.createElement("span",null,"📜")},"notes on things"),l.createElement("div",{className:"max-w-3xl m-auto"},l.createElement(n.E.div,{className:"mt-12 flex flex-col space-y-8",initial:"hidden",animate:"show",whileInView:"show",viewport:{once:!0},variants:{hidden:{},show:{transition:{staggerChildren:.15}}}},a.map((e=>l.createElement(n.E.div,{key:e.id,variants:{hidden:{opacity:0,y:-10},show:{opacity:1,y:0,transition:{type:"spring"}}}},l.createElement(r.Link,{to:"/"+e.frontmatter.slug,className:"space-y-2 group font-duospace"},l.createElement("h3",{className:"text-xl font-semibold group-hover:underline transition-colors dark:text-gray-300"},e.frontmatter.title),l.createElement("article",{className:"max-w-none text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-400"},e.excerpt))))))))}}}]);
//# sourceMappingURL=component---src-pages-notes-tsx-3fd63b139f5748590ce6.js.map