(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9110)}])},9110:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return xe}});var t=n(5893),o=n(4051),i=n.n(o),s=n(8100),a=n(5604),l=n(2114),c=n(7294),u=n(1163),d=n(2174),h=n.n(d),f=n(1522),p=n(9199),x=n(1181),y=n(6867);function m(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function g(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,i=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(t=n.next()).done)&&(i.push(t.value),!r||i.length!==r);s=!0);}catch(l){a=!0,o=l}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return m(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e){var r=e.pages,n=[];return Object.entries(r[0]).filter((function(e){return!g(e,1)[0].startsWith("_")})).forEach((function(e){var r=g(e,2),t=r[0],o=r[1],i="unknown";"number"===typeof o?i="number":"string"===typeof o?i="string":Array.isArray(o)?i="array":"object"===typeof o?i="json":console.log(t,o),n.push({name:t,type:i})})),(0,t.jsxs)("div",{children:[(0,t.jsx)(y.W,{style:{margin:40},children:(0,t.jsxs)(p.X,{padding:"md",shadow:"sm",withBorder:!0,children:[(0,t.jsx)(x.D,{order:4,children:"Possible keys"}),(0,t.jsx)("ul",{children:n.map((function(e){var r=e.name,n=e.type;return(0,t.jsxs)("li",{children:[(0,t.jsx)("code",{children:r})," ",(0,t.jsxs)("small",{children:["(",n,")"]})]},r)}))})]})}),(0,t.jsx)(y.W,{style:{margin:40},children:(0,t.jsxs)(p.X,{padding:"md",shadow:"sm",withBorder:!0,children:[(0,t.jsx)(x.D,{order:4,children:"SQL is case-insensitive, but keys aren't"}),(0,t.jsxs)("p",{children:[(0,t.jsx)("code",{children:"SELECT title FROM ? ORDER BY textLength LIMIT 10"}),(0,t.jsx)("br",{}),(0,t.jsx)("b",{style:{paddingLeft:170},children:"=="}),(0,t.jsx)("br",{}),(0,t.jsx)("code",{children:"Select title from ? order bY textLength limiT 10"})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("b",{children:"But..."}),(0,t.jsx)("br",{}),(0,t.jsx)("code",{children:"SELECT title FROM ? ORDER BY textLength LIMIT 10"}),(0,t.jsx)("br",{}),(0,t.jsx)("b",{style:{paddingLeft:170,color:"red"},children:"!="}),(0,t.jsx)("br",{}),(0,t.jsx)("code",{children:"SELECT TiTLe FROM ? ORDER BY TextlengTH LIMIT 10"})]})]})}),(0,t.jsx)(y.W,{style:{margin:40},children:(0,t.jsxs)(p.X,{padding:"md",shadow:"sm",withBorder:!0,children:[(0,t.jsx)(x.D,{order:4,children:"Read the docs"}),(0,t.jsxs)("p",{children:["The most important documentation is"," ",(0,t.jsx)("a",{href:"https://github.com/agershun/alasql/wiki",target:"_blank",rel:"noreferrer",children:"AlaSQL"})," ","which is what the SQL engine is based on."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("b",{children:"Tip!"})," Since AlaSQL is based on JavaScript you can substitute the ",(0,t.jsx)("code",{children:"."}),"for ",(0,t.jsx)("code",{children:"->"}),". For example, in JavaScript you would do:"," ",(0,t.jsx)("code",{children:"myString.length.toLocaleString()"}),", and in AlaSQL that becomes ",(0,t.jsx)("code",{children:"SELECT mystring->length->toLocaleString()"}),"."]})]})})]})}var j=n(3131),b=n(8852),S=n(5477),w=n(8612),E=n.n(w),_=n(1114),L=n.n(_);n(2427);function C(e){var r=e.code;return(0,t.jsx)(E(),{language:"sql",value:r})}E().registerLanguage(L());var O=n(3178),T=n.n(O);function q(e){var r=e.savedQueries,n=e.loadQuery,o=e.deleteSavedQuery,i=e.starQuery;return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Saved queries"}),r.map((function(e){var r=Boolean(e.star);return(0,t.jsxs)("div",{className:T().saved_query,children:[(0,t.jsxs)("p",{children:["Found ",(0,t.jsxs)("b",{children:[e.count.toLocaleString()," records"]})," ",new Date(e.ts).toLocaleTimeString()]}),(0,t.jsx)(C,{code:e.query}),(0,t.jsxs)(j.Z,{children:[(0,t.jsx)(b.z,{type:"button",color:"green",onClick:function(){n(e.query)},children:"Load"}),(0,t.jsx)(b.z,{title:"Don't let it drop off",onClick:function(){i(e.query)},children:(0,t.jsx)(S.Ux,{filled:r,primaryColor:r?"yellow":"white"})}),(0,t.jsx)(b.z,{type:"button",color:"red",title:"Delete saved query",onClick:function(){o(e.query)},children:"Delete"})]})]},e.query+e.count+e.ts)}))]})}var R=n(5528),k=n(5550),M=n(2790),Q=n(3008),A=n.n(Q),N=[{sql:"SELECT title FROM ?",description:"Select just 'title'"},{sql:"SELECT title FROM ? LIMIT 10 OFFSET 10",description:"Select first rows 10 to 20 "},{sql:"SELECT title, length(title) FROM ? ORDER BY 2 DESC LIMIT 5",description:"Top 5 longest titles"},{sql:"SELECT title, title->length as length FROM ? ORDER BY 2 ASC LIMIT 5",description:"Top 5 shortest titles"},{sql:'SELECT topics, topics->length AS count FROM ? WHERE "Accounts" IN topics',description:"Filter by presence inside an array and count entries in array"},{sql:'SELECT title FROM ? WHERE title ILIKE "%github%"',description:"Case insensitive filter by wildcard operator on string"},{sql:"SELECT changelog, changelog->label FROM ? WHERE changelog AND changelog->label",description:"Select from JSON object and filter by those that have a truthy value on that key"},{sql:"SELECT topics, topics->length FROM ? WHERE topics->label",description:"Select arrays and filter out those that are null"},{sql:"SELECT children->(0) FROM ? WHERE children->length",description:"Select first element in array where the array is something"},{sql:"SELECT changelog FROM ? WHERE NOT changelog->label",description:"Select from JSON objects those that do not have a certain key"},{sql:"SELECT title FROM ? ORDER BY RANDOM() LIMIT 10",description:"10 random titles"},{sql:"SELECT _id, wordCount, size, round(size / wordCount, 2) FROM ? where wordCount > 10ORDER BY 4 DESC LIMIT 25",description:"Order average longest words rounded to 2 significant figures"}];function I(e){var r=e.loadQuery,n=(0,c.useState)(""),o=n[0],i=n[1],s=N.filter((function(e){var r=e.sql,n=e.description;return!o.trim()||(r.toLowerCase().includes(o.toLowerCase())||n.toLowerCase().includes(o.toLowerCase()))}));return(0,t.jsxs)("div",{children:[(0,t.jsxs)(R.r,{children:[(0,t.jsx)(R.r.Col,{span:6,children:(0,t.jsx)("form",{children:(0,t.jsx)(k.o,{type:"search",value:o,onChange:function(e){return i(e.target.value)},placeholder:"Search..."})})}),(0,t.jsx)(R.r.Col,{span:6,children:(0,t.jsx)("p",{children:(0,t.jsxs)("small",{children:["These are static examples they might not work with ",(0,t.jsx)("i",{children:"your"})," ","data."]})})})]}),s.map((function(e,n){var i=e.sql,s=e.description;return(0,t.jsxs)("div",{className:A().example,children:[(0,t.jsx)(M.y,{highlight:o.split(/\s+/),children:s}),(0,t.jsx)(C,{code:i})," ",(0,t.jsx)(b.z,{size:"xs",color:"success",type:"button",onClick:function(){r(i)},children:"Load SQL"})]},n)})),0===s.length&&(0,t.jsx)("p",{children:(0,t.jsx)("i",{children:"No examples found"})})]})}function F(e){var r=e.currentMenu,n=e.toggleMenu,o=e.pages,i=e.savedQueries,s=e.loadQuery,a=e.deleteSavedQuery,l=e.starQuery;return(0,t.jsxs)(f.x,{children:["help"===r&&(0,t.jsx)(v,{pages:o}),"saved"===r&&(0,t.jsx)(q,{savedQueries:i,loadQuery:function(e){s(e),n("")},deleteSavedQuery:function(e){a(e)},starQuery:l}),"examples"===r&&(0,t.jsx)(I,{loadQuery:function(e){s(e),n("")}})]})}var D=n(1433),B=n.n(D);function P(e){var r=e.records;return(0,t.jsxs)(j.Z,{style:{marginTop:50},children:[(0,t.jsx)(b.z,{type:"button",className:"button button-inline-small",title:"Click to start downloading as a .json file",onClick:function(){!function(){var e=new Blob([JSON.stringify(r,void 0,2)],{type:"application/json"}),n=document.createElement("a");document.body.appendChild(n),n.setAttribute("href",window.URL.createObjectURL(e)),n.setAttribute("download","results.json"),n.style.display="none",n.click(),document.body.removeChild(n)}()},children:"Download as JSON"}),(0,t.jsx)(b.z,{type:"button",title:"Click to start downloading as a .csv file",onClick:function(){!function(){var e="",n=null;r.forEach((function(r,t){t||(n=Object.keys(r),e+=n.map((function(e){return z(e)})),e+="\n"),e+=null===n||void 0===n?void 0:n.map((function(e){return z(r[e])})),e+="\n"}));var t=new Blob([e],{type:"text/csv"}),o=document.createElement("a");document.body.appendChild(o),o.setAttribute("href",window.URL.createObjectURL(t)),o.setAttribute("download","results.csv"),o.style.display="none",o.click(),document.body.removeChild(o)}()},children:"Download as CSV"})]})}function z(e){return(e=(e=null===e?"null":void 0===e?"":Array.isArray(e)||"object"===typeof e?JSON.stringify(e):e.toString()).replace(/"/g,'""')).search(/("|,|\n)/g)>=0?'"'.concat(e,'"'):e}function U(e,r,n,t,o,i,s){try{var a=e[i](s),l=a.value}catch(c){return void n(c)}a.done?r(l):Promise.resolve(l).then(t,o)}function J(e){var r=e.records,n=(0,c.useState)(null),o=n[0],a=n[1];(0,c.useEffect)((function(){var e=o?setTimeout((function(){a(null)}),3e3):null;return function(){e&&clearTimeout(e)}}),[o]);var l=o?"/api/open?"+new URLSearchParams({filePath:o}):null,u=(0,s.ZP)(l,function(){var e,r=(e=i().mark((function e(r){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r);case 2:if(404!==(n=e.sent).status&&400!==n.status){e.next=10;break}return e.next=6,n.json();case 6:throw t=e.sent.error,new Error(t);case 10:if(200!==n.status){e.next=14;break}return e.next=13,n.json();case 13:return e.abrupt("return",e.sent);case 14:throw new Error("".concat(n.status," on ").concat(r));case 15:case"end":return e.stop()}}),e)})),function(){var r=this,n=arguments;return new Promise((function(t,o){var i=e.apply(r,n);function s(e){U(i,t,o,s,a,"next",e)}function a(e){U(i,t,o,s,a,"throw",e)}s(void 0)}))});return function(e){return r.apply(this,arguments)}}(),{revalidateOnFocus:!1,revalidateOnReconnect:!1}),d=u.data,h=u.error;if(0===r.length)return(0,t.jsx)("p",{children:"Absolutely diddly squat found. Sorry not sorry \ud83d\ude43"});var f=Object.keys(r[0]),p=f.join(""),x=1e3;return(0,t.jsxs)("div",{children:[o&&(0,t.jsxs)("p",{className:B().opening,children:["opening ",(0,t.jsx)("code",{children:o})]}),d&&(0,t.jsxs)("p",{className:B().opened,children:["tried to open ",(0,t.jsx)("code",{children:d.filePath}),"using ",(0,t.jsx)("code",{children:d.binary}),d.isTerminalEditor&&"(is terminal editor)"]}),h&&(0,t.jsxs)("p",{className:B().opened,children:["an error occurred trying to open the file:"," ",(0,t.jsx)("code",{children:h.toString()})]}),(0,t.jsxs)("p",{children:["Found ",r.length.toLocaleString()," ",r.length>x?"(only showing first ".concat(x.toLocaleString(),")"):null]}),(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"\xa0"}),f.map((function(e){return(0,t.jsx)("th",{children:e},e)}))]})}),(0,t.jsx)("tbody",{children:r.slice(0,x).map((function(e,r){return(0,t.jsxs)("tr",{id:"l".concat(r+1),className:B().row,children:[(0,t.jsx)("td",{className:B().row_number,children:(0,t.jsx)("a",{href:"#l".concat(r+1),children:r+1})}),f.map((function(r){var n=e[r];return(0,t.jsx)("td",{children:"_file"===r?(0,t.jsx)("a",{href:"#".concat(n),onClick:function(e){e.preventDefault(),a(n)},children:(0,t.jsx)(W,{value:n})}):Y(n)},r)}))]},"".concat(p).concat(r))}))})]}),r.length>0&&(0,t.jsx)(P,{records:r}),r.length>x&&(0,t.jsx)("p",{children:(0,t.jsxs)("small",{children:["Capped to the first ",(0,t.jsxs)("b",{children:[x.toLocaleString()," rows"]})]})})]})}function W(e){var r=e.value,n=e.maxLength,o=void 0===n?100:n;if(r.length>o){for(var i=Math.floor(r.length/2),s=r.slice(0,i),a=r.slice(i),l=1;s.length+a.length>o;)s=r.slice(0,i-l),a=r.slice(i+l),l++;return(0,t.jsxs)("abbr",{title:r,children:[s,"[\u2026]",a]})}return(0,t.jsx)("span",{children:r})}function Y(e){return"string"===typeof e?e:0===e?"0":"number"===typeof e&&e>1e3?e.toLocaleString():null===e?"null":Array.isArray(e)||"object"===typeof e?JSON.stringify(e):void 0===e?(0,t.jsx)("span",{className:B().undefined_value,children:"undefined"}):e.toString()}var H=n(5247),X=n.n(H);function Z(e){var r=e.meta,n=(0,c.useState)(!1),o=n[0],i=n[1];return(0,t.jsx)("footer",{className:X().footer,children:0===r.rows?(0,t.jsx)(a.b,{color:"red",title:"Loading problem",children:"No rows loaded! Something is wrong with the sources or the crawler."}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["It took ",K(r.took)," to load"," ",r.rows.toLocaleString()," records."," ",(0,t.jsxs)("a",{href:"#more",className:X().more_meta,onClick:function(e){e.preventDefault(),i((function(e){return!e}))},children:["[",o?"less":"more","]"]})]}),o&&(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)("b",{children:"Sources"})}),(0,t.jsx)("ul",{children:r.sources.map((function(e){return(0,t.jsxs)("li",{children:[e.files.toLocaleString()," files from"," ",(0,t.jsx)("i",{children:e.source})]},e.source)}))})]})]})})}function K(e){return e>1e3?"".concat((e/1e3).toFixed(2),"s"):"".concat(e.toFixed(0),"ms")}var G=n(112),V=n(6525),$=n(1945),ee=n.n($);function re(e){var r=e.current,n=e.toggle,o=e.savedQueries;return(0,t.jsxs)(j.Z,{children:[(0,t.jsx)(b.z,{type:"button",onClick:function(){return n("help")},variant:"help"===r?"filled":"outline",children:"help"===r?"Close help":"Open help"}),(0,t.jsx)(b.z,{type:"button",onClick:function(){return n("saved")},variant:"saved"===r?"filled":"outline",children:"saved"===r?"Close saved queries":"Open saved queries (".concat(o.length,")")}),(0,t.jsx)(b.z,{type:"button",onClick:function(){return n("examples")},variant:"examples"===r?"filled":"outline",children:"examples"===r?"Close example queries":"Open example queries"})]})}function ne(e){var r=e.onChange,n=e.query,o=e.typedQuery,i=e.setTypedQuery,s=e.hasError,a=e.savedQueries,l=e.currentMenu,u=e.toggleMenu,d=(0,c.useCallback)((function(){r(o.trim())}),[o]),h=(0,c.useRef)(null),f=h.current;return(0,c.useEffect)((function(){var e=function(e){"Enter"===e.key&&e.metaKey&&d()};return f&&f.addEventListener("keydown",e),function(){f&&f.removeEventListener("keydown",e)}}),[f,d]),(0,t.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d()},children:[(0,t.jsxs)(G.x,{size:"sm",align:"right",children:[(0,t.jsx)("b",{children:"Tip!"})," Use ",(0,t.jsx)(V.T,{children:"\u2318"}),"-",(0,t.jsx)(V.T,{children:"Enter"})," to run the query when focus is inside textarea"]}),(0,t.jsx)("textarea",{className:ee().textarea,spellCheck:"false",autoFocus:!0,rows:Math.min(100,Math.max(4,o.split("\n").length)),ref:h,value:o,onChange:function(e){i(e.target.value)},children:n}),(0,t.jsxs)(R.r,{children:[(0,t.jsx)(R.r.Col,{span:6,children:(0,t.jsx)(b.z,{type:"submit",disabled:o.trim()===n,color:o.trim()!==n?"green":s?"red":void 0,children:"Run"})}),(0,t.jsx)(R.r.Col,{span:6,children:(0,t.jsx)(re,{toggle:u,current:l,savedQueries:a})})]})]})}function te(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function oe(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,i=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(t=n.next()).done)&&(i.push(t.value),!r||i.length!==r);s=!0);}catch(l){a=!0,o=l}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,r)||se(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e){return function(e){if(Array.isArray(e))return te(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||se(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function se(e,r){if(e){if("string"===typeof e)return te(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,r):void 0}}function ae(e){var r,n=e.data,o=(0,u.useRouter)(),i=(r=o.query.query||"SELECT title, length(title) AS length FROM ? ORDER BY 2 DESC LIMIT 10",Array.isArray(r)?r[0]:r),s=(0,c.useState)(null),l=s[0],d=s[1],f=(0,c.useState)(null),p=f[0],x=f[1],y=(0,c.useState)(i),m=y[0],g=y[1],v=n.pages,j=function(){var e=(0,u.useRouter)(),r=(0,c.useRef)(e);return r.current=e,(0,c.useState)({replace:function(e){return r.current.replace(e)}})[0].replace}();(0,c.useEffect)((function(){if(m)try{d(h()(m,[v])),x(null)}catch(n){if(e=n,!(null!=(r=Error)&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](e):e instanceof r))throw n;x(n)}var e,r}),[m,v]),(0,c.useEffect)((function(){var e=oe(o.asPath.split("?"),2),r=e[0],n=e[1],t=new URLSearchParams(void 0===n?"":n);m?t.set("query",m):t.delete("query");var i=r;t.toString()&&(i+="?".concat(t.toString())),j(i)}),[m,o.asPath,j]);var b=(0,c.useState)([]),S=b[0],w=b[1];(0,c.useEffect)((function(){var e=localStorage;try{var r=JSON.parse(e.getItem("saved_queries")||"[]");Array.isArray(r)||(r=[]),w(r)}catch(n){console.warn("Unable to save to local storage",n)}}),[]),(0,c.useEffect)((function(){var e=localStorage;try{e.setItem("saved_queries",JSON.stringify(S.sort((function(e,r){return Number(Boolean(r.star))-Number(Boolean(e.star))}))))}catch(r){console.warn("Unable to save to local storage",r)}}),[S]),(0,c.useEffect)((function(){l&&!p&&w((function(e){if(e.length>0&&e[0].query===m&&e[0].count===l.length)return e;var r=[];return e.forEach((function(e,n){e.query!==m&&(n>50&&!e.star||r.push(e))})),[{query:m,count:l.length,ts:(new Date).getTime()}].concat(ie(r))}))}),[m,l,p]);var E=(0,c.useState)(""),_=E[0],L=E[1];return(0,t.jsxs)("div",{children:[p&&(0,t.jsx)(a.b,{title:"Query error",color:"red",radius:"md",children:(0,t.jsx)("code",{children:p.toString()})}),(0,t.jsx)(le,{query:m,setQuery:g,queryError:p,pages:n.pages,savedQueries:S,deleteSavedQuery:function(e){w((function(r){return ie(r.filter((function(r){return r.query!==e})))}))},starQuery:function(e){w((function(r){return ie(r.map((function(r){return r.query===e?Object.assign({},r,{star:!Boolean(r.star)}):Object.assign({},r)})))}))},currentMenu:_,toggleMenu:function(e){L((function(r){return r===e?"":e}))}}),null!==l&&""===_&&(0,t.jsx)(J,{records:l}),(0,t.jsx)(Z,{meta:n.meta})]})}function le(e){var r=e.query,n=e.setQuery,o=e.queryError,i=e.pages,s=e.savedQueries,a=e.deleteSavedQuery,l=e.starQuery,u=e.currentMenu,d=e.toggleMenu,h=(0,c.useState)(r),f=h[0],p=h[1];return(0,t.jsxs)("div",{children:[(0,t.jsx)(ne,{query:r,typedQuery:f,setTypedQuery:p,onChange:function(e){n(e.trim()),d("")},hasError:Boolean(o),savedQueries:s,currentMenu:u,toggleMenu:d}),(0,t.jsx)(F,{currentMenu:u,toggleMenu:d,pages:i,savedQueries:s,loadQuery:function(e){p(e),n(e.trim())},deleteSavedQuery:function(e){a(e),f===e&&p("")},starQuery:l})]})}var ce=n(6972);n(6403);function ue(){var e=(0,ce.X)();e.colorScheme,e.toggleColorScheme;return null}var de=n(6811),he=n.n(de);function fe(e,r,n,t,o,i,s){try{var a=e[i](s),l=a.value}catch(c){return void n(c)}a.done?r(l):Promise.resolve(l).then(t,o)}var pe=function(){var e=(0,s.ZP)("/docs.json",function(){var e,r=(e=i().mark((function e(r){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r);case 2:if(!(n=e.sent).ok){e.next=7;break}return e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:return t="".concat(n.status," on ").concat(r),e.prev=8,e.next=11,n.json();case 11:t=e.sent.error,e.next=16;break;case 14:e.prev=14,e.t0=e.catch(8);case 16:throw new Error(t);case 17:case"end":return e.stop()}}),e,null,[[8,14]])})),function(){var r=this,n=arguments;return new Promise((function(t,o){var i=e.apply(r,n);function s(e){fe(i,t,o,s,a,"next",e)}function a(e){fe(i,t,o,s,a,"throw",e)}s(void 0)}))});return function(e){return r.apply(this,arguments)}}(),{revalidateOnFocus:!1}),r=e.data,n=e.error;return(0,t.jsxs)("div",{className:he().container,children:[(0,t.jsx)("h1",{className:he().heading,children:"docsQL"}),(0,t.jsxs)("main",{className:he().main,children:[n&&(0,t.jsx)(a.b,{color:"red",title:"Loading error",children:(0,t.jsxs)("div",{className:r?he().reloading_error:he().loading_error,children:[(0,t.jsx)("code",{children:n.toString()}),r&&(0,t.jsx)("p",{children:'Showing "old" data.'})]})}),(0,t.jsx)(l.f,{visible:!n&&!r,transitionDuration:500}),r&&(0,t.jsx)(ae,{data:r})]}),(0,t.jsx)("footer",{className:he().footer,children:(0,t.jsx)(ue,{})})]})},xe=function(){return(0,t.jsx)(pe,{})}},5247:function(e){e.exports={footer:"about-metadata_footer__yf04u",more_meta:"about-metadata_more_meta__tJLZu"}},1945:function(e){e.exports={textarea:"code-input_textarea__IpE6U"}},3008:function(e){e.exports={example:"example-queries_example__fsbGt"}},1433:function(e){e.exports={row:"found-records_row__KYyBT",row_number:"found-records_row_number__nd4q0",undefined_value:"found-records_undefined_value__BQGz3",opening:"found-records_opening__nhkDC",opened:"found-records_opened__QbiNq"}},6811:function(e){e.exports={container:"home_container__GJ1Uu",main:"home_main__6Pj0X",footer:"home_footer__L9Olw",loading_error:"home_loading_error__MeQiF",reloading_error:"home_reloading_error__4v2Kk",heading:"home_heading__FV4U6"}},3178:function(e){e.exports={saved_query:"saved-queries_saved_query__Me2bK"}}},function(e){e.O(0,[111,616,125,774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);