(this["webpackJsonphierarchy-manager"]=this["webpackJsonphierarchy-manager"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(13),n(14),n(5)),s=n(4),l=n(1),u=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({}),o=Object(l.a)(c,2),u=o[0],m=o[1],f=Object(a.useState)([]),h=Object(l.a)(f,2),d=h[0],b=h[1],p=Object(a.useState)(""),j=Object(l.a)(p,2),O=j[0],v=j[1];return Object(a.useEffect)((function(){var e=0;fetch("./assets/response.json").then((function(e){return e.json()})).then((function(t){return t.forEach((function(t){var a=t.id,c=t.parent,o=t.level_number,l=t.hierarchy_name;-1===d.indexOf(l)&&b([].concat(Object(s.a)(d),[l])),O||v(l),o>e?(e=o,r([a])):o===e&&r([].concat(Object(s.a)(n),[a])),u[a]?u[a]=Object(i.a)({},u[a],{},t):u[a]=Object(i.a)({},t,{children:[]}),c&&!u[c]?u[c]={children:[a]}:c&&(u[c]=Object(i.a)({},u[c],{children:[].concat(Object(s.a)(u[c].children),[a])})),m(u)}))}))}),[]),{root:n,map:u,trees:d,setTree:v}},m=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],o=n[1],i=e.map,s=e.id,u=i[s],m=u.is_leaf,h=u.cc_code,d=u.children;return r.a.createElement("li",{"data-key":s,className:m?"leaf":null,onClick:function(e){e.target.getAttribute("data-key")===s&&o(!c)}},h,d&&c&&r.a.createElement(f,{nodes:d,map:i}))},f=function(e){var t=e.nodes,n=e.map;return r.a.createElement("ul",null,t.map((function(e){return n[e]?r.a.createElement(m,{key:e,id:e,map:n}):null})))},h=function(e){return r.a.createElement("select",null,e.trees&&e.trees.map((function(e,t){return r.a.createElement("option",{value:e,key:"tree-".concat(t)},e)})))};var d=function(){var e=u(),t=e.root,n=e.map,a=e.trees,c=e.setTree;return r.a.createElement("div",{className:"App"},r.a.createElement(h,{trees:a,setTree:c}),r.a.createElement(f,{nodes:t,map:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.9f68b66a.chunk.js.map