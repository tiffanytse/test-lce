(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{338:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(0),i=a.n(r),s=a(357),o=(a(193),a(195),a(380),a(13)),c=a.n(o),u=a(360),d=a.n(u),l=a(461),p=a.n(l),m=a(345),f=a(349),g=(a(467),function(e,t){var a=e.firstChild,n="example__code-"+t;a.className+=" "+n;var r=document.createElement("button");r.setAttribute("class","click-to-copy-button"),r.setAttribute("data-clipboard-target","."+n),r.innerHTML="Copy",e.insertBefore(r,a)}),b=function(e){function t(){return e.apply(this,arguments)||this}c()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.addClipboardButtons()},a.componentDidUpdate=function(){this.addClipboardButtons()},a.addClipboardButtons=function(){if(void 0===document)return null;Array.from(this.ref.querySelectorAll("pre")).forEach(g),new p.a("[data-clipboard-target]")},a.render=function(){var e=this,t=this.props,a=t.title,r=t.html,i=t.desc,s=t.category,o=t.date,c=new Date(o).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return Object(n.jsx)("section",{className:"section section--padding-bottom-only section--tight",ref:function(t){return e.ref=t}},Object(n.jsx)("div",{className:"example--page"},Object(n.jsx)("div",{className:"grid gutter-bottom--half"},Object(n.jsx)("div",{className:"grid__item gutter-bottom--reset"},Object(n.jsx)(m.Link,{to:"/",className:"example__return-link"},"< Browse library"))),Object(n.jsx)("div",{className:"grid"},Object(n.jsx)("div",{className:"grid__item"},Object(n.jsx)("h1",{className:"heading--3 heading--inline"},a),Object(n.jsx)("p",{className:"example__date"},"Last updated: ",c),Object(n.jsx)("p",{className:"gutter-bottom"},Object(n.jsx)(m.Link,{to:"/?category="+s,className:"category--link",key:s},Object(f.a)(s))))),Object(n.jsx)("div",{className:"grid"},Object(n.jsx)("div",{className:"grid__item grid__item--tablet-up-three-quarters"},Object(n.jsx)("div",{className:"example__desc"},Object(n.jsx)(d.a,{source:i})),Object(n.jsx)("div",{className:"example__markdown gutter-bottom",dangerouslySetInnerHTML:{__html:r}}),Object(n.jsx)("p",{className:"example__disclaimer"},Object(n.jsx)("strong",null,"Please note: "),"We have intentionally limited CSS and JavaScript, and removed translation strings in order to keep these examples compatible with any theme. Any CSS we have included is for accessibility or rendering purposes.")))))},t}(i.a.Component);function j(e){var t=e.data,a=t.markdownRemark,r=a.frontmatter,o=a.html;return Object(n.jsx)(i.a.Fragment,null,Object(n.jsx)(s.a,{isFrontPage:!1,pageTitle:r.title+" | "+t.site.siteMetadata.title,description:r.description,slogan:t.site.siteMetadata.slogan,siteTitle:t.site.siteMetadata.title},Object(n.jsx)(b,{title:r.title,html:o,desc:r.desc,tags:r.tags,category:r.category,date:r.date})))}a.d(t,"default",function(){return j}),a.d(t,"pageQuery",function(){return h});var h="1053511687"},345:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(15),r=a(0),i=a.n(r),s=a(8),o=a.n(s),c=a(341),u=a.n(c);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var d=a(346),l=a.n(d);a.d(t,"PageRenderer",function(){return l.a});var p=a(80);a.d(t,"parsePath",function(){return p.a});var m=i.a.createContext({}),f=function(e){return Object(n.jsx)(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(n.jsx)("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},346:function(e,t,a){var n;e.exports=(n=a(356))&&n.default||n},349:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});a(369),a(79);function n(e){return e.charAt(0).toUpperCase()+e.slice(1)}function r(e,t){return t?e.replace(new RegExp(t.trim(),"gi"),function(e){return"~~"+e+"~~"}):e}},356:function(e,t,a){"use strict";a.r(t);a(122);var n=a(0),r=a.n(n),i=a(8),s=a.n(i),o=a(129),c=a(5),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=u},467:function(e,t,a){}}]);
//# sourceMappingURL=component---src-components-post-layout-js-c25cc16334ac1fdd0bae.js.map