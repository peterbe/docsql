(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9110)}])},9110:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return ye}});var n=t(5893),o=t(4051),i=t.n(o),s=t(8100),a=t(5604),l=t(2114),c=t(7294),u=t(1163),d=t(2174),h=t.n(d),f=t(1522),p=t(9199),y=t(1181),x=t(6867);function v(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function m(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i=[],s=!0,a=!1;try{for(t=t.call(e);!(s=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);s=!0);}catch(l){a=!0,o=l}finally{try{s||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return v(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e){var r=e.pages,t=[];return Object.entries(r[0]).filter((function(e){return!m(e,1)[0].startsWith("_")})).forEach((function(e){var r=m(e,2),n=r[0],o=r[1],i="unknown";"number"===typeof o?i="number":"string"===typeof o?i="string":Array.isArray(o)?i="array":"object"===typeof o?i="json":console.log(n,o),t.push({name:n,type:i})})),(0,n.jsxs)("div",{children:[(0,n.jsx)(x.W,{style:{margin:40},children:(0,n.jsxs)(p.X,{padding:"md",shadow:"sm",withBorder:!0,children:[(0,n.jsx)(y.D,{order:4,children:"Possible keys"}),(0,n.jsx)("ul",{children:t.map((function(e){var r=e.name,t=e.type;return(0,n.jsxs)("li",{children:[(0,n.jsx)("code",{children:r})," ",(0,n.jsxs)("small",{children:["(",t,")"]})]},r)}))})]})}),(0,n.jsx)(x.W,{style:{margin:40},children:(0,n.jsxs)(p.X,{padding:"md",shadow:"sm",withBorder:!0,children:[(0,n.jsx)(y.D,{order:4,children:"SQL is case-insensitive, but keys aren't"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("code",{children:"SELECT title FROM ? ORDER BY textLength LIMIT 10"}),(0,n.jsx)("br",{}),(0,n.jsx)("b",{style:{paddingLeft:170},children:"=="}),(0,n.jsx)("br",{}),(0,n.jsx)("code",{children:"Select title from ? order bY textLength limiT 10"})]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"But..."}),(0,n.jsx)("br",{}),(0,n.jsx)("code",{children:"SELECT title FROM ? ORDER BY textLength LIMIT 10"}),(0,n.jsx)("br",{}),(0,n.jsx)("b",{style:{paddingLeft:170,color:"red"},children:"!="}),(0,n.jsx)("br",{}),(0,n.jsx)("code",{children:"SELECT TiTLe FROM ? ORDER BY TextlengTH LIMIT 10"})]})]})}),(0,n.jsx)(x.W,{style:{margin:40},children:(0,n.jsxs)(p.X,{padding:"md",shadow:"sm",withBorder:!0,children:[(0,n.jsx)(y.D,{order:4,children:"Read the docs"}),(0,n.jsxs)("p",{children:["The most important documentation is"," ",(0,n.jsx)("a",{href:"https://github.com/agershun/alasql/wiki",target:"_blank",rel:"noreferrer",children:"AlaSQL"})," ","which is what the SQL engine is based on."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Tip!"})," Since AlaSQL is based on JavaScript you can substitute the ",(0,n.jsx)("code",{children:"."}),"for ",(0,n.jsx)("code",{children:"->"}),". For example, in JavaScript you would do:"," ",(0,n.jsx)("code",{children:"myString.length.toLocaleString()"}),", and in AlaSQL that becomes ",(0,n.jsx)("code",{children:"SELECT mystring->length->toLocaleString()"}),"."]})]})})]})}var j=t(3131),b=t(8852),S=t(5477),w=t(8612),E=t.n(w),_=t(1114),L=t.n(_);t(2427);function C(e){var r=e.code;return(0,n.jsx)(E(),{language:"sql",value:r})}E().registerLanguage(L());var O=t(3178),T=t.n(O);function R(e){var r=e.savedQueries,t=e.loadQuery,o=e.deleteSavedQuery,i=e.starQuery;return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"Saved queries"}),r.map((function(e){var r=Boolean(e.star);return(0,n.jsxs)("div",{className:T().saved_query,children:[(0,n.jsxs)("p",{children:["Found ",(0,n.jsxs)("b",{children:[e.count.toLocaleString()," records"]})," ",new Date(e.ts).toLocaleTimeString()]}),(0,n.jsx)(C,{code:e.query}),(0,n.jsxs)(j.Z,{children:[(0,n.jsx)(b.z,{type:"button",color:"green",onClick:function(){t(e.query)},children:"Load"}),(0,n.jsx)(b.z,{title:"Don't let it drop off",onClick:function(){i(e.query)},children:(0,n.jsx)(S.Ux,{filled:r,primaryColor:r?"yellow":"white"})}),(0,n.jsx)(b.z,{type:"button",color:"red",title:"Delete saved query",onClick:function(){o(e.query)},children:"Delete"})]})]},e.query+e.count+e.ts)}))]})}var q=t(5528),Q=t(5550),M=t(2790),k=t(3008),A=t.n(k),N=[{sql:"SELECT title FROM ?",description:"Select just 'title'"},{sql:"SELECT title FROM ? LIMIT 10 OFFSET 10",description:"Select first rows 10 to 20 "},{sql:"SELECT title, length(title) FROM ? ORDER BY 2 DESC LIMIT 5",description:"Top 5 longest titles"},{sql:"SELECT title, title->length as length FROM ? ORDER BY 2 ASC LIMIT 5",description:"Top 5 shortest titles"},{sql:'SELECT topics, topics->length AS count FROM ? WHERE "Accounts" IN topics',description:"Filter by presence inside an array and count entries in array"},{sql:'SELECT title FROM ? WHERE title ILIKE "%github%"',description:"Case insensitive filter by wildcard operator on string"},{sql:"SELECT changelog, changelog->label FROM ? WHERE changelog AND changelog->label",description:"Select from JSON object and filter by those that have a truthy value on that key"},{sql:"SELECT topics, topics->length FROM ? WHERE topics->label",description:"Select arrays and filter out those that are null"},{sql:"SELECT children->(0) FROM ? WHERE children->length",description:"Select first element in array where the array is something"},{sql:"SELECT changelog FROM ? WHERE NOT changelog->label",description:"Select from JSON objects those that do not have a certain key"},{sql:"SELECT title FROM ? ORDER BY RANDOM() LIMIT 10",description:"10 random titles"},{sql:"SELECT _id, wordCount, size, round(size / wordCount, 2) FROM ? where wordCount > 10ORDER BY 4 DESC LIMIT 25",description:"Order average longest words rounded to 2 significant figures"}];function I(e){var r=e.loadQuery,t=(0,c.useState)(""),o=t[0],i=t[1],s=N.filter((function(e){var r=e.sql,t=e.description;return!o.trim()||(r.toLowerCase().includes(o.toLowerCase())||t.toLowerCase().includes(o.toLowerCase()))}));return(0,n.jsxs)("div",{children:[(0,n.jsxs)(q.r,{children:[(0,n.jsx)(q.r.Col,{span:6,children:(0,n.jsx)("form",{children:(0,n.jsx)(Q.o,{type:"search",value:o,onChange:function(e){return i(e.target.value)},placeholder:"Search..."})})}),(0,n.jsx)(q.r.Col,{span:6,children:(0,n.jsx)("p",{children:(0,n.jsxs)("small",{children:["These are static examples they might not work with ",(0,n.jsx)("i",{children:"your"})," ","data."]})})})]}),s.map((function(e,t){var i=e.sql,s=e.description;return(0,n.jsxs)("div",{className:A().example,children:[(0,n.jsx)(M.y,{highlight:o.split(/\s+/),children:s}),(0,n.jsx)(C,{code:i})," ",(0,n.jsx)(b.z,{size:"xs",color:"success",type:"button",onClick:function(){r(i)},children:"Load SQL"})]},t)})),0===s.length&&(0,n.jsx)("p",{children:(0,n.jsx)("i",{children:"No examples found"})})]})}function F(e){var r=e.currentMenu,t=e.toggleMenu,o=e.pages,i=e.savedQueries,s=e.loadQuery,a=e.deleteSavedQuery,l=e.starQuery;return(0,n.jsxs)(f.x,{children:["help"===r&&(0,n.jsx)(g,{pages:o}),"saved"===r&&(0,n.jsx)(R,{savedQueries:i,loadQuery:function(e){s(e),t("")},deleteSavedQuery:function(e){a(e)},starQuery:l}),"examples"===r&&(0,n.jsx)(I,{loadQuery:function(e){s(e),t("")}})]})}var D=t(1433),B=t.n(D);function P(e){var r=e.records;return(0,n.jsxs)(j.Z,{style:{marginTop:50},children:[(0,n.jsx)(b.z,{type:"button",variant:"outline",title:"Click to start downloading as a .json file",onClick:function(){!function(){var e=new Blob([JSON.stringify(r,void 0,2)],{type:"application/json"}),t=document.createElement("a");document.body.appendChild(t),t.setAttribute("href",window.URL.createObjectURL(e)),t.setAttribute("download","results.json"),t.style.display="none",t.click(),document.body.removeChild(t)}()},children:"Download as JSON"}),(0,n.jsx)(b.z,{type:"button",variant:"outline",title:"Click to start downloading as a .csv file",onClick:function(){!function(){var e="",t=null;r.forEach((function(r,n){n||(t=Object.keys(r),e+=t.map((function(e){return z(e)})),e+="\n"),e+=null===t||void 0===t?void 0:t.map((function(e){return z(r[e])})),e+="\n"}));var n=new Blob([e],{type:"text/csv"}),o=document.createElement("a");document.body.appendChild(o),o.setAttribute("href",window.URL.createObjectURL(n)),o.setAttribute("download","results.csv"),o.style.display="none",o.click(),document.body.removeChild(o)}()},children:"Download as CSV"})]})}function z(e){return(e=(e=null===e?"null":void 0===e?"":Array.isArray(e)||"object"===typeof e?JSON.stringify(e):e.toString()).replace(/"/g,'""')).search(/("|,|\n)/g)>=0?'"'.concat(e,'"'):e}function U(e,r,t,n,o,i,s){try{var a=e[i](s),l=a.value}catch(c){return void t(c)}a.done?r(l):Promise.resolve(l).then(n,o)}function J(e){var r=e.records,t=(0,c.useState)(null),o=t[0],a=t[1];(0,c.useEffect)((function(){var e=o?setTimeout((function(){a(null)}),3e3):null;return function(){e&&clearTimeout(e)}}),[o]);var l=o?"/api/open?"+new URLSearchParams({filePath:o}):null,u=(0,s.ZP)(l,function(){var e,r=(e=i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r);case 2:if(404!==(t=e.sent).status&&400!==t.status){e.next=10;break}return e.next=6,t.json();case 6:throw n=e.sent.error,new Error(n);case 10:if(200!==t.status){e.next=14;break}return e.next=13,t.json();case 13:return e.abrupt("return",e.sent);case 14:throw new Error("".concat(t.status," on ").concat(r));case 15:case"end":return e.stop()}}),e)})),function(){var r=this,t=arguments;return new Promise((function(n,o){var i=e.apply(r,t);function s(e){U(i,n,o,s,a,"next",e)}function a(e){U(i,n,o,s,a,"throw",e)}s(void 0)}))});return function(e){return r.apply(this,arguments)}}(),{revalidateOnFocus:!1,revalidateOnReconnect:!1}),d=u.data,h=u.error;if(0===r.length)return(0,n.jsx)("p",{children:"Absolutely diddly squat found. Sorry not sorry \ud83d\ude43"});var f=Object.keys(r[0]),p=f.join(""),y=1e3;return(0,n.jsxs)("div",{children:[o&&(0,n.jsxs)("p",{className:B().opening,children:["opening ",(0,n.jsx)("code",{children:o})]}),d&&(0,n.jsxs)("p",{className:B().opened,children:["tried to open ",(0,n.jsx)("code",{children:d.filePath}),"using ",(0,n.jsx)("code",{children:d.binary}),d.isTerminalEditor&&"(is terminal editor)"]}),h&&(0,n.jsxs)("p",{className:B().opened,children:["an error occurred trying to open the file:"," ",(0,n.jsx)("code",{children:h.toString()})]}),(0,n.jsxs)("p",{children:["Found ",r.length.toLocaleString()," ",r.length>y?"(only showing first ".concat(y.toLocaleString(),")"):null]}),(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"\xa0"}),f.map((function(e){return(0,n.jsx)("th",{children:e},e)}))]})}),(0,n.jsx)("tbody",{children:r.slice(0,y).map((function(e,r){return(0,n.jsxs)("tr",{id:"l".concat(r+1),className:B().row,children:[(0,n.jsx)("td",{className:B().row_number,children:(0,n.jsx)("a",{href:"#l".concat(r+1),children:r+1})}),f.map((function(r){var t=e[r];return(0,n.jsx)("td",{children:"_file"===r?(0,n.jsx)("a",{href:"#".concat(t),onClick:function(e){e.preventDefault(),a(t)},children:(0,n.jsx)(W,{value:t})}):Y(t)},r)}))]},"".concat(p).concat(r))}))})]}),r.length>0&&(0,n.jsx)(P,{records:r}),r.length>y&&(0,n.jsx)("p",{children:(0,n.jsxs)("small",{children:["Capped to the first ",(0,n.jsxs)("b",{children:[y.toLocaleString()," rows"]})]})})]})}function W(e){var r=e.value,t=e.maxLength,o=void 0===t?100:t;if(r.length>o){for(var i=Math.floor(r.length/2),s=r.slice(0,i),a=r.slice(i),l=1;s.length+a.length>o;)s=r.slice(0,i-l),a=r.slice(i+l),l++;return(0,n.jsxs)("abbr",{title:r,children:[s,"[\u2026]",a]})}return(0,n.jsx)("span",{children:r})}function Y(e){return"string"===typeof e?e:0===e?"0":"number"===typeof e&&e>1e3?e.toLocaleString():null===e?"null":Array.isArray(e)||"object"===typeof e?JSON.stringify(e):void 0===e?(0,n.jsx)("span",{className:B().undefined_value,children:"undefined"}):e.toString()}var H=t(5247),X=t.n(H);function Z(e){var r=e.meta,t=(0,c.useState)(!1),o=t[0],i=t[1];return(0,n.jsx)("footer",{className:X().footer,children:0===r.rows?(0,n.jsx)(a.b,{color:"red",title:"Loading problem",children:"No rows loaded! Something is wrong with the sources or the crawler."}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["It took ",K(r.took)," to load"," ",r.rows.toLocaleString()," records."," ",(0,n.jsxs)("a",{href:"#more",className:X().more_meta,onClick:function(e){e.preventDefault(),i((function(e){return!e}))},children:["[",o?"less":"more","]"]})]}),o&&(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)("b",{children:"Sources"})}),(0,n.jsx)("ul",{children:r.sources.map((function(e){return(0,n.jsxs)("li",{children:[e.files.toLocaleString()," files from"," ",(0,n.jsx)("i",{children:e.source})]},e.source)}))})]})]})})}function K(e){return e>1e3?"".concat((e/1e3).toFixed(2),"s"):"".concat(e.toFixed(0),"ms")}var G=t(112),$=t(6525),V=t(1945),ee=t.n(V);function re(e){var r=e.current,t=e.toggle,o=e.savedQueries;return(0,n.jsxs)(j.Z,{children:[(0,n.jsx)(b.z,{type:"button",onClick:function(){return t("help")},variant:"help"===r?"filled":"outline",children:"help"===r?"Close help":"Open help"}),(0,n.jsx)(b.z,{type:"button",onClick:function(){return t("saved")},variant:"saved"===r?"filled":"outline",children:"saved"===r?"Close saved queries":"Open saved queries (".concat(o.length,")")}),(0,n.jsx)(b.z,{type:"button",onClick:function(){return t("examples")},variant:"examples"===r?"filled":"outline",children:"examples"===r?"Close example queries":"Open example queries"})]})}function te(e){var r=e.onChange,t=e.query,o=e.prettyQuery,i=e.typedQuery,s=e.setTypedQuery,a=e.hasError,l=e.savedQueries,u=e.currentMenu,d=e.toggleMenu,h=(0,c.useCallback)((function(){r(i.trim())}),[i]),f=(0,c.useRef)(null),p=f.current;return(0,c.useEffect)((function(){var e=function(e){"Enter"===e.key&&e.metaKey&&h()};return p&&p.addEventListener("keydown",e),function(){p&&p.removeEventListener("keydown",e)}}),[p,h]),(0,n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h()},children:[(0,n.jsxs)(G.x,{size:"sm",align:"right",children:[(0,n.jsx)("b",{children:"Tip!"})," Use ",(0,n.jsx)($.T,{children:"\u2318"}),"-",(0,n.jsx)($.T,{children:"Enter"})," to run the query when focus is inside textarea"]}),(0,n.jsx)("textarea",{className:ee().textarea,spellCheck:"false",autoFocus:!0,rows:Math.min(100,Math.max(4,i.split("\n").length)),ref:f,value:i,onChange:function(e){s(e.target.value)},children:t}),(0,n.jsxs)(q.r,{children:[(0,n.jsxs)(q.r.Col,{span:6,children:[(0,n.jsx)(b.z,{type:"submit",disabled:i.trim()===t,color:i.trim()!==t?"green":a?"red":void 0,children:"Run"})," ",(0,n.jsx)(b.z,{type:"button",variant:"outline",disabled:!o||o===i,onClick:function(){s(o),r(o)},children:"Pretty format"})]}),(0,n.jsx)(q.r.Col,{span:6,children:(0,n.jsx)(re,{toggle:d,current:u,savedQueries:l})})]})]})}function ne(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function oe(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i=[],s=!0,a=!1;try{for(t=t.call(e);!(s=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);s=!0);}catch(l){a=!0,o=l}finally{try{s||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,r)||se(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e){return function(e){if(Array.isArray(e))return ne(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||se(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function se(e,r){if(e){if("string"===typeof e)return ne(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ne(e,r):void 0}}function ae(e){var r,t=e.data,o=(0,u.useRouter)(),i=(r=o.query.query||"SELECT title, length(title) AS length FROM ? ORDER BY 2 DESC LIMIT 10",Array.isArray(r)?r[0]:r),s=(0,c.useState)(null),l=s[0],d=s[1],f=(0,c.useState)(null),p=f[0],y=f[1],x=(0,c.useState)(i),v=x[0],m=x[1],g=t.pages,j=function(){var e=(0,u.useRouter)(),r=(0,c.useRef)(e);return r.current=e,(0,c.useState)({replace:function(e){return r.current.replace(e)}})[0].replace}();(0,c.useEffect)((function(){if(v)try{d(h()(v,[g])),y(null)}catch(t){if(e=t,!(null!=(r=Error)&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](e):e instanceof r))throw t;y(t)}var e,r}),[v,g]);var b=(0,c.useState)(""),S=b[0],w=b[1];(0,c.useEffect)((function(){if(v)try{var e=h().parse(v).toString().replace("FROM $0 AS default","FROM ?");e!==v&&w(e)}catch(r){w("")}}),[v]),(0,c.useEffect)((function(){var e=oe(o.asPath.split("?"),2),r=e[0],t=e[1],n=new URLSearchParams(void 0===t?"":t);v?n.set("query",v):n.delete("query");var i=r;n.toString()&&(i+="?".concat(n.toString())),j(i)}),[v,o.asPath,j]);var E=(0,c.useState)([]),_=E[0],L=E[1];(0,c.useEffect)((function(){var e=localStorage;try{var r=JSON.parse(e.getItem("saved_queries")||"[]");Array.isArray(r)||(r=[]),L(r)}catch(t){console.warn("Unable to save to local storage",t)}}),[]),(0,c.useEffect)((function(){var e=localStorage;try{e.setItem("saved_queries",JSON.stringify(_.sort((function(e,r){return Number(Boolean(r.star))-Number(Boolean(e.star))}))))}catch(r){console.warn("Unable to save to local storage",r)}}),[_]),(0,c.useEffect)((function(){l&&!p&&L((function(e){if(e.length>0&&e[0].query===v&&e[0].count===l.length)return e;var r=[];return e.forEach((function(e,t){e.query!==v&&(t>50&&!e.star||r.push(e))})),[{query:v,count:l.length,ts:(new Date).getTime()}].concat(ie(r))}))}),[v,l,p]);var C=(0,c.useState)(""),O=C[0],T=C[1];return(0,n.jsxs)("div",{children:[p&&(0,n.jsx)(a.b,{title:"Query error",color:"red",radius:"md",children:(0,n.jsx)("code",{children:p.toString()})}),(0,n.jsx)(le,{query:v,setQuery:m,prettyQuery:S,queryError:p,pages:t.pages,savedQueries:_,deleteSavedQuery:function(e){L((function(r){return ie(r.filter((function(r){return r.query!==e})))}))},starQuery:function(e){L((function(r){return ie(r.map((function(r){return r.query===e?Object.assign({},r,{star:!Boolean(r.star)}):Object.assign({},r)})))}))},currentMenu:O,toggleMenu:function(e){T((function(r){return r===e?"":e}))}}),null!==l&&""===O&&(0,n.jsx)(J,{records:l}),(0,n.jsx)(Z,{meta:t.meta})]})}function le(e){var r=e.query,t=e.setQuery,o=e.prettyQuery,i=e.queryError,s=e.pages,a=e.savedQueries,l=e.deleteSavedQuery,u=e.starQuery,d=e.currentMenu,h=e.toggleMenu,f=(0,c.useState)(r),p=f[0],y=f[1];return(0,n.jsxs)("div",{children:[(0,n.jsx)(te,{query:r,typedQuery:p,prettyQuery:o,setTypedQuery:y,onChange:function(e){t(e.trim()),h("")},hasError:Boolean(i),savedQueries:a,currentMenu:d,toggleMenu:h}),(0,n.jsx)(F,{currentMenu:d,toggleMenu:h,pages:s,savedQueries:a,loadQuery:function(e){y(e),t(e.trim())},deleteSavedQuery:function(e){l(e),p===e&&y("")},starQuery:u})]})}var ce=t(6972);t(6403);function ue(){var e=(0,ce.X)();e.colorScheme,e.toggleColorScheme;return null}var de=t(6811),he=t.n(de);function fe(e,r,t,n,o,i,s){try{var a=e[i](s),l=a.value}catch(c){return void t(c)}a.done?r(l):Promise.resolve(l).then(n,o)}var pe=function(){var e=(0,s.ZP)("/docs.json",function(){var e,r=(e=i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r);case 2:if(!(t=e.sent).ok){e.next=7;break}return e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 7:return n="".concat(t.status," on ").concat(r),e.prev=8,e.next=11,t.json();case 11:n=e.sent.error,e.next=16;break;case 14:e.prev=14,e.t0=e.catch(8);case 16:throw new Error(n);case 17:case"end":return e.stop()}}),e,null,[[8,14]])})),function(){var r=this,t=arguments;return new Promise((function(n,o){var i=e.apply(r,t);function s(e){fe(i,n,o,s,a,"next",e)}function a(e){fe(i,n,o,s,a,"throw",e)}s(void 0)}))});return function(e){return r.apply(this,arguments)}}(),{revalidateOnFocus:!1}),r=e.data,t=e.error;return(0,n.jsxs)("div",{className:he().container,children:[(0,n.jsx)("h1",{className:he().heading,children:"docsQL"}),(0,n.jsxs)("main",{className:he().main,children:[t&&(0,n.jsx)(a.b,{color:"red",title:"Loading error",children:(0,n.jsxs)("div",{className:r?he().reloading_error:he().loading_error,children:[(0,n.jsx)("code",{children:t.toString()}),r&&(0,n.jsx)("p",{children:'Showing "old" data.'})]})}),(0,n.jsx)(l.f,{visible:!t&&!r,transitionDuration:500}),r&&(0,n.jsx)(ae,{data:r})]}),(0,n.jsx)("footer",{className:he().footer,children:(0,n.jsx)(ue,{})})]})},ye=function(){return(0,n.jsx)(pe,{})}},5247:function(e){e.exports={footer:"about-metadata_footer__yf04u",more_meta:"about-metadata_more_meta__tJLZu"}},1945:function(e){e.exports={textarea:"code-input_textarea__IpE6U"}},3008:function(e){e.exports={example:"example-queries_example__fsbGt"}},1433:function(e){e.exports={row:"found-records_row__KYyBT",row_number:"found-records_row_number__nd4q0",undefined_value:"found-records_undefined_value__BQGz3",opening:"found-records_opening__nhkDC",opened:"found-records_opened__QbiNq"}},6811:function(e){e.exports={container:"home_container__GJ1Uu",main:"home_main__6Pj0X",footer:"home_footer__L9Olw",loading_error:"home_loading_error__MeQiF",reloading_error:"home_reloading_error__4v2Kk",heading:"home_heading__FV4U6"}},3178:function(e){e.exports={saved_query:"saved-queries_saved_query__Me2bK"}}},function(e){e.O(0,[111,616,125,774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);