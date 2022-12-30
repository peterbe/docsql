(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3278)}])},3278:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Se}});var n=t(5893),o=t(7568),s=t(414),i=t(9734),a=t(409),l=t(4557),c=t(2670),u=t(828),d=t(9815),h=t(7294),f=t(1163),x=t(2174),p=t.n(x),y=t(7414),j=t(2445),v=t(2623),g=t(9236),m=t(5078),b=t(4685),S=t(2222);function E(e){return e.every((function(e){return"number"===typeof e}))?"array(numbers)":e.every((function(e){return"string"===typeof e}))?"array(strings)":"array"}var w=(0,h.createContext)(new Map);function _(){var e=(0,h.useContext)(w),r=[],t=!0,o=!1,s=void 0;try{for(var i,a=Array.from(e)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var l=(0,u.Z)(i.value,2),c=l[0],d=l[1];r.push({name:c,type:d})}}catch(f){o=!0,s=f}finally{try{t||null==a.return||a.return()}finally{if(o)throw s}}return r.sort((function(e,r){return e.name.localeCompare(r.name)})),(0,n.jsxs)("div",{children:[(0,n.jsx)(j.W,{style:{margin:40},children:(0,n.jsxs)(v.X,{p:"md",shadow:"sm",withBorder:!0,children:[(0,n.jsx)(g.D,{order:4,children:"Possible keys"}),(0,n.jsxs)(m.i,{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Type"})]})}),(0,n.jsx)("tbody",{children:r.map((function(e){var r=e.name,t=e.type;return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:r})}),(0,n.jsx)("td",{children:t})]},r)}))})]})]})}),(0,n.jsx)(j.W,{style:{margin:40},children:(0,n.jsxs)(v.X,{p:"md",shadow:"sm",withBorder:!0,children:[(0,n.jsx)(g.D,{order:4,children:"SQL is case-insensitive, but keys aren't"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("code",{children:"SELECT title FROM ? ORDER BY textLength LIMIT 10"}),(0,n.jsx)("br",{}),(0,n.jsx)("b",{style:{paddingLeft:170},children:"=="}),(0,n.jsx)("br",{}),(0,n.jsx)("code",{children:"Select title from ? order bY textLength limiT 10"})]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"But..."}),(0,n.jsx)("br",{}),(0,n.jsx)("code",{children:"SELECT title FROM ? ORDER BY textLength LIMIT 10"}),(0,n.jsx)("br",{}),(0,n.jsx)("b",{style:{paddingLeft:170,color:"red"},children:"!="}),(0,n.jsx)("br",{}),(0,n.jsx)("code",{children:"SELECT TiTLe FROM ? ORDER BY TextlengTH LIMIT 10"})]})]})}),(0,n.jsx)(j.W,{style:{margin:40},children:(0,n.jsxs)(v.X,{p:"md",shadow:"sm",withBorder:!0,children:[(0,n.jsx)(g.D,{order:4,children:"Read the docs"}),(0,n.jsxs)("p",{children:["The most important documentation is"," ",(0,n.jsx)(b.e,{href:"https://github.com/agershun/alasql/wiki",target:"_blank",rel:"noreferrer",children:"AlaSQL"})," ","which is what the SQL engine is based on."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Tip!"})," Since AlaSQL is based on JavaScript you can substitute the ",(0,n.jsx)("code",{children:"."}),"for ",(0,n.jsx)("code",{children:"->"}),". For example, in JavaScript you would do:"," ",(0,n.jsx)("code",{children:"myString.length.toLocaleString()"}),", and in AlaSQL that becomes ",(0,n.jsx)("code",{children:"SELECT mystring->length->toLocaleString()"}),"."]})]})})]})}var L=t(7470),C=t(5117),q=t(6137),k=t(7841),R=t(3991),T=t(8612),O=t.n(T),Q=t(1114),M=t.n(Q);t(2427);function N(e){var r=e.code;return(0,n.jsx)(O(),{language:"sql",value:r})}O().registerLanguage(M());var F=t(3178),A=t.n(F);function D(e){var r=e.savedQueries,t=e.loadQuery,o=e.deleteSavedQuery,s=e.starQuery,i=e.deleteAllSavedQueries,a=(0,h.useState)(""),l=a[0],c=a[1],u=r.filter((function(e){return!l.trim()||e.query.toLowerCase().includes(l.toLowerCase().trim())}));return(0,n.jsxs)("div",{style:{marginTop:50},children:[(0,n.jsx)(g.D,{order:4,children:"Saved queries"}),r.length>1&&(0,n.jsxs)("form",{children:[(0,n.jsx)(L.o,{type:"search",placeholder:"Search filter...",value:l,onChange:function(e){return c(e.target.value)},icon:(0,n.jsx)(R.jVj,{size:14})}),l.trim()&&(0,n.jsx)("div",{children:(0,n.jsxs)(C.x,{fz:"sm",children:["Found ",u.length,". Filtered out"," ",u.length>0?r.length-u.length:"everything"]})})]}),u.map((function(e){var r=Boolean(e.star);return(0,n.jsxs)("div",{className:A().saved_query,children:[(0,n.jsxs)("p",{children:["Found ",(0,n.jsxs)("b",{children:[e.count.toLocaleString()," records"]})," ",new Date(e.ts).toLocaleTimeString()]}),(0,n.jsx)(N,{code:e.query}),(0,n.jsxs)(q.Z,{children:[(0,n.jsx)(k.z,{type:"button",color:"green",onClick:function(){t(e.query)},children:"Load"}),(0,n.jsx)(k.z,{title:"Don't let it drop off",onClick:function(){s(e.query)},children:(0,n.jsx)(R.GK,{fill:r?"yellow":"transparent",color:r?"yellow":"white"})}),(0,n.jsx)(k.z,{type:"button",color:"red",title:"Delete saved query",onClick:function(){o(e.query)},children:"Delete"})]})]},e.query+e.count+e.ts)})),r.length>1&&(0,n.jsxs)(q.Z,{style:{marginTop:50},children:[(0,n.jsx)(k.z,{type:"button",variant:"outline",color:"red",title:"Click to delete all saved queries except those starred",onClick:function(){i()},children:"Delete un-starred saved queries"}),(0,n.jsx)(k.z,{type:"button",variant:"outline",color:"red",title:"Click to delete ALL saved queries",onClick:function(){i(!0)},children:"Delete ALL saved queries"})]})]})}var I=t(5033),z=t(3008),B=t.n(z),Z=[{sql:"SELECT title FROM ?",description:"Select just 'title'"},{sql:"SELECT title FROM ? LIMIT 10 OFFSET 10",description:"Select first rows 10 to 20 "},{sql:"SELECT title, length(title) FROM ? ORDER BY 2 DESC LIMIT 5",description:"Top 5 longest titles"},{sql:"SELECT title, title->length as length FROM ? ORDER BY 2 ASC LIMIT 5",description:"Top 5 shortest titles"},{sql:'SELECT topics, topics->length AS length FROM ? WHERE "Accounts" IN topics',description:"Filter by presence inside an array and count entries in array"},{sql:'SELECT title FROM ? WHERE title ILIKE "%github%"',description:"Case insensitive filter by wildcard operator on string"},{sql:'SELECT title FROM ? WHERE REGEXP_LIKE(title, "\\bactions?\\b", "i")',description:"Match whole word 'action' or 'actions' but not 'transaction' or 'actionable'"},{sql:"SELECT changelog, changelog->label FROM ? WHERE changelog AND changelog->label",description:"Select from JSON object and filter by those that have a truthy value on that key"},{sql:"SELECT topics, topics->length FROM ? WHERE topics->label",description:"Select arrays and filter out those that are null"},{sql:"SELECT children->(0) FROM ? WHERE children->length",description:"Select first element in array where the array is something"},{sql:"SELECT changelog FROM ? WHERE NOT changelog->label",description:"Select from JSON objects those that do not have a certain key"},{sql:"SELECT title FROM ? ORDER BY RANDOM() LIMIT 10",description:"10 random titles"},{sql:"SELECT _id, wordCount, textLength, ROUND(textLength / wordCount, 2) FROM ? WHERE wordCount > 10 ORDER BY 4 DESC LIMIT 25",description:"Order average longest words rounded to 2 significant figures"}];function U(e){var r=e.loadQuery,t=(0,h.useState)(""),o=t[0],s=t[1],i=Z.filter((function(e){var r=e.sql,t=e.description;return!o.trim()||(r.toLowerCase().includes(o.toLowerCase())||t.toLowerCase().includes(o.toLowerCase()))}));return(0,n.jsxs)("div",{style:{marginTop:50},children:[(0,n.jsx)(g.D,{order:4,children:"Saved queries"}),(0,n.jsx)("form",{children:(0,n.jsx)(L.o,{type:"search",value:o,onChange:function(e){return s(e.target.value)},placeholder:"Search filter...",icon:(0,n.jsx)(R.jVj,{size:14})})}),i.map((function(e,t){var s=e.sql,i=e.description;return(0,n.jsxs)("div",{className:B().example,children:[(0,n.jsx)(I.y,{highlight:o.split(/\s+/),children:i}),(0,n.jsx)(N,{code:s})," ",(0,n.jsx)(k.z,{size:"xs",color:"success",type:"button",onClick:function(){r(s)},children:"Load SQL"})]},t)})),0===i.length&&(0,n.jsx)("p",{children:(0,n.jsx)("i",{children:"No examples found"})}),(0,n.jsxs)(C.x,{fz:"sm",children:["These are static examples they might not work with ",(0,n.jsx)("i",{children:"your"})," data."]})]})}function W(e){var r=e.currentMenu,t=e.toggleMenu,o=e.savedQueries,s=e.loadQuery,i=e.deleteSavedQuery,a=e.starQuery,l=e.deleteAllSavedQueries;return(0,n.jsxs)(y.x,{children:["help"===r&&(0,n.jsx)(_,{}),"saved"===r&&(0,n.jsx)(D,{savedQueries:o,loadQuery:function(e){s(e),t("")},deleteSavedQuery:function(e){i(e)},starQuery:a,deleteAllSavedQueries:l}),"examples"===r&&(0,n.jsx)(U,{loadQuery:function(e){s(e),t("")}})]})}var P=t(1433),J=t.n(P);function H(e){var r=e.records;return(0,n.jsxs)(q.Z,{style:{marginTop:50},children:[(0,n.jsx)(k.z,{type:"button",variant:"outline",title:"Click to start downloading as a .json file",onClick:function(){!function(){var e=new Blob([JSON.stringify(r,void 0,2)],{type:"application/json"}),t=document.createElement("a");document.body.appendChild(t),t.setAttribute("href",window.URL.createObjectURL(e)),t.setAttribute("download","results.json"),t.style.display="none",t.click(),document.body.removeChild(t)}()},children:"Download as JSON"}),(0,n.jsx)(k.z,{type:"button",variant:"outline",title:"Click to start downloading as a .csv file",onClick:function(){!function(){var e="",t=null;r.forEach((function(r,n){n||(t=Object.keys(r),e+=t.map((function(e){return Y(e)})),e+="\n"),e+=null===t||void 0===t?void 0:t.map((function(e){return Y(r[e])})),e+="\n"}));var n=new Blob([e],{type:"text/csv"}),o=document.createElement("a");document.body.appendChild(o),o.setAttribute("href",window.URL.createObjectURL(n)),o.setAttribute("download","results.csv"),o.style.display="none",o.click(),document.body.removeChild(o)}()},children:"Download as CSV"})]})}function Y(e){return(e=(e=null===e?"null":void 0===e?"":Array.isArray(e)||"object"===typeof e?JSON.stringify(e):e.toString()).replace(/"/g,'""')).search(/("|,|\n)/g)>=0?'"'.concat(e,'"'):e}function G(e){var r=e.records,t=(0,h.useState)(!1),a=t[0],l=t[1];(0,h.useEffect)((function(){var e=document.location.hostname;"localhost"!==e&&"127.0.0.1"!==e&&"0.0.0.0"!==e||l(!0)}),[]);var c=(0,h.useState)(null),u=c[0],d=c[1];(0,h.useEffect)((function(){var e=u?setTimeout((function(){d(null)}),3e3):null;return function(){e&&clearTimeout(e)}}),[u]);var f=u?"/api/open?"+new URLSearchParams({filePath:u}):null,x=(0,i.ZP)(f,function(){var e=(0,o.Z)((function(e){var r,t;return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return[4,fetch(e)];case 1:return 404!==(r=n.sent()).status&&400!==r.status?[3,3]:[4,r.json()];case 2:throw t=n.sent().error,new Error(t);case 3:return 200!==r.status?[3,5]:[4,r.json()];case 4:return[2,n.sent()];case 5:throw new Error("".concat(r.status," on ").concat(e))}}))}));return function(r){return e.apply(this,arguments)}}(),{revalidateOnFocus:!1,revalidateOnReconnect:!1}),p=x.data,y=x.error;if(0===r.length)return(0,n.jsx)("p",{children:"Absolutely diddly squat found. Sorry not sorry \ud83d\ude43"});var j=Object.keys(r[0]),v=j.join(""),g=1e3;return(0,n.jsxs)("div",{children:[u&&(0,n.jsxs)("p",{className:J().opening,children:["opening ",(0,n.jsx)("code",{children:u})]}),p&&(0,n.jsxs)("p",{className:J().opened,children:["tried to open ",(0,n.jsx)("code",{children:p.filePath}),"using ",(0,n.jsx)("code",{children:p.binary}),p.isTerminalEditor&&"(is terminal editor)"]}),y&&(0,n.jsxs)("p",{className:J().opened,children:["an error occurred trying to open the file:"," ",(0,n.jsx)("code",{children:y.toString()})]}),(0,n.jsxs)("p",{children:["Found ",r.length.toLocaleString()," ",r.length>g?"(only showing first ".concat(g.toLocaleString(),")"):null]}),(0,n.jsxs)(m.i,{className:J().found_records,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"\xa0"}),j.map((function(e){return(0,n.jsx)("th",{children:e},e)}))]})}),(0,n.jsx)("tbody",{children:r.slice(0,g).map((function(e,r){return(0,n.jsxs)("tr",{id:"l".concat(r+1),className:J().row,children:[(0,n.jsx)("td",{className:J().row_number,children:(0,n.jsx)(b.e,{href:"#l".concat(r+1),children:r+1})}),j.map((function(r){var t=e[r];return(0,n.jsx)("td",{children:(0,n.jsx)(K,{key_:r,value:t,allowLocalLinks:a,setOpening:function(e){d(e)}})},r)}))]},"".concat(v).concat(r))}))})]}),r.length>0&&(0,n.jsx)(H,{records:r}),r.length>g&&(0,n.jsx)("p",{children:(0,n.jsxs)("small",{children:["Capped to the first ",(0,n.jsxs)("b",{children:[g.toLocaleString()," rows"]})]})})]})}function K(e){var r=e.key_,t=e.value,o=e.allowLocalLinks,s=e.setOpening;return r.endsWith("_url")&&"string"===typeof t?(0,n.jsx)(b.e,{href:t,target:"_blank",rel:"noreferrer",children:t}):"_file"===r?o?(0,n.jsx)(b.e,{href:"#".concat(t),onClick:function(e){e.preventDefault(),s(t)},children:(0,n.jsx)(X,{value:t||""})}):(0,n.jsx)(X,{value:t||""}):(0,n.jsx)(n.Fragment,{children:V(t)})}function X(e){var r=e.value,t=e.maxLength,o=void 0===t?100:t;if(r.length>o){for(var s=Math.floor(r.length/2),i=r.slice(0,s),a=r.slice(s),l=1;i.length+a.length>o;)i=r.slice(0,s-l),a=r.slice(s+l),l++;return(0,n.jsxs)("abbr",{title:r,children:[i,"[\u2026]",a]})}return(0,n.jsx)("span",{children:r})}function V(e){return"string"===typeof e?e:0===e?"0":"number"===typeof e&&e>1e3?e.toLocaleString():null===e?"null":Array.isArray(e)||"object"===typeof e?JSON.stringify(e):void 0===e?(0,n.jsx)("span",{className:J().undefined_value,children:"undefined"}):e.toString()}var $=t(5247),ee=t.n($);function re(e){var r=e.meta,t=(0,h.useState)(!1),o=t[0],s=t[1];return(0,n.jsx)("footer",{className:ee().footer,children:0===r.rows?(0,n.jsx)(a.b,{color:"red",title:"Loading problem",children:"No rows loaded! Something is wrong with the sources or the crawler."}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["It took ",te(r.took)," to load"," ",r.rows.toLocaleString()," records."," ",(0,n.jsxs)("a",{href:"#more",className:ee().more_meta,onClick:function(e){e.preventDefault(),s((function(e){return!e}))},children:["[",o?"less":"more","]"]})]}),o&&(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)("b",{children:"Sources"})}),(0,n.jsx)("ul",{children:r.sources.map((function(e){return(0,n.jsxs)("li",{children:[e.files.toLocaleString()," files from"," ",(0,n.jsx)("i",{children:e.source})]},e.source)}))}),r.version&&(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"docsQL version"})," ",r.version]})]})]})})}function te(e){return e>1e3?"".concat((e/1e3).toFixed(2),"s"):"".concat(e.toFixed(0),"ms")}var ne=t(1238),oe=t(6894),se=t(6145),ie=t(1945),ae=t.n(ie);function le(e){var r=e.current,t=e.toggle,o=e.savedQueries;return(0,n.jsxs)(q.Z,{children:[(0,n.jsx)(k.z,{type:"button",onClick:function(){return t("help")},variant:"help"===r?"filled":"outline",children:"help"===r?"Close help":"Open help"}),(0,n.jsx)(k.z,{type:"button",onClick:function(){return t("saved")},variant:"saved"===r?"filled":"outline",children:"saved"===r?"Close saved queries":"Open saved queries (".concat(o.length,")")}),(0,n.jsx)(k.z,{type:"button",onClick:function(){return t("examples")},variant:"examples"===r?"filled":"outline",children:"examples"===r?"Close example queries":"Open example queries"})]})}function ce(e){var r=e.onChange,t=e.query,o=e.prettyQuery,s=e.typedQuery,i=e.setTypedQuery,a=e.hasError,l=e.savedQueries,c=e.currentMenu,u=e.toggleMenu,d=(0,h.useCallback)((function(){r(s.trim())}),[s]),f=(0,h.useRef)(null),x=f.current;return(0,h.useEffect)((function(){var e=function(e){"Enter"===e.key&&e.metaKey&&d()};return x&&x.addEventListener("keydown",e),function(){x&&x.removeEventListener("keydown",e)}}),[x,d]),(0,n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d()},children:[(0,n.jsxs)(C.x,{size:"sm",align:"right",children:[(0,n.jsx)("b",{children:"Tip!"})," Use ",(0,n.jsx)(se.T,{children:"\u2318"}),"-",(0,n.jsx)(se.T,{children:"Enter"})," to run the query when focus is inside textarea"]}),(0,n.jsx)(ne.g,{className:ae().textarea,spellCheck:"false",autoFocus:!0,error:a?"Query has error":void 0,required:!0,rows:Math.min(100,Math.max(4,s.split("\n").length)),size:"md",ref:f,value:s,onChange:function(e){i(e.target.value)},autoCorrect:"off",children:t}),(0,n.jsxs)(oe.r,{children:[(0,n.jsxs)(oe.r.Col,{span:6,children:[(0,n.jsx)(k.z,{type:"submit",disabled:s.trim()===t,color:s.trim()!==t?"green":a?"red":void 0,children:"Run"})," ",(0,n.jsx)(k.z,{type:"button",variant:"outline",disabled:!o||o===s,onClick:function(){i(o),r(o)},children:"Pretty format"})]}),(0,n.jsx)(oe.r.Col,{span:6,children:(0,n.jsx)(le,{toggle:u,current:c,savedQueries:l})})]})]})}function ue(e){var r,t=e.data,o=(0,f.useRouter)(),s=(r=o.query.query||"",Array.isArray(r)?r[0]:r),i=(0,h.useState)(null),l=i[0],x=i[1],y=(0,h.useState)(null),j=y[0],v=y[1],g=(0,h.useState)(s),m=g[0],b=g[1],_=t.pages,L=function(){var e=(0,f.useRouter)(),r=(0,h.useRef)(e);return r.current=e,(0,h.useState)({replace:function(e){return r.current.replace(e)}})[0].replace}();(0,h.useEffect)((function(){if(m)try{x(p()(m,[_])),v(null)}catch(e){if(!(0,c.Z)(e,Error))throw e;v(e)}}),[m,_]);var C=(0,h.useState)(""),q=C[0],k=C[1];(0,h.useEffect)((function(){if(m)try{var e=function(e){var r=new Set,t=!0,n=!1,o=void 0;try{for(var s,i=(e.match(/\sAS \w+/g)||[])[Symbol.iterator]();!(t=(s=i.next()).done);t=!0){var a=s.value;r.has(a)&&(e=e.replace(a,"")),r.add(a)}}catch(l){n=!0,o=l}finally{try{t||null==i.return||i.return()}finally{if(n)throw o}}return e}(p().parse(m).toString().replace("FROM $0 AS default","FROM ?"));e!==m&&k(e)}catch(r){k("")}}),[m]);var R=o.asPath;(0,h.useEffect)((function(){var e=(0,u.Z)(R.split("?"),2),r=e[0],t=e[1],n=new URLSearchParams(void 0===t?"":t);m?n.set("query",m):n.delete("query");var o=r;n.toString()&&(o+="?".concat(n.toString())),o!==R&&L(o)}),[m,R,L]);var T=(0,h.useState)([]),O=T[0],Q=T[1];(0,h.useEffect)((function(){var e=localStorage;try{var r=JSON.parse(e.getItem("saved_queries")||"[]");Array.isArray(r)||(r=[]),Q(r)}catch(t){console.warn("Unable to save to local storage",t)}}),[]),(0,h.useEffect)((function(){s||(O.length?b(O[0].query):b("SELECT title, length(title) AS length FROM ? ORDER BY 2 DESC LIMIT 10"))}),[s,O]),(0,h.useEffect)((function(){var e=localStorage;try{e.setItem("saved_queries",JSON.stringify(O.sort((function(e,r){return Number(Boolean(r.star))-Number(Boolean(e.star))}))))}catch(r){console.warn("Unable to save to local storage",r)}}),[O]),(0,h.useEffect)((function(){j?Q((function(e){return e.filter((function(e){return e.query!=m}))})):l&&Q((function(e){if(e.length>0&&e[0].query===m&&e[0].count===l.length)return e;var r=[];return e.forEach((function(e,t){e.query!==m&&(t>50&&!e.star||r.push(e))})),[{query:m,count:l.length,ts:(new Date).getTime()}].concat((0,d.Z)(r))}))}),[m,l,j]);var M=(0,h.useState)(""),N=M[0],F=M[1],A=function(e){var r=new Map,t=0,n=!0,o=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var l=i.value,c=!0,d=!1,h=void 0;try{for(var f,x=Object.entries(l)[Symbol.iterator]();!(c=(f=x.next()).done);c=!0){var p=(0,u.Z)(f.value,2),y=p[0],j=p[1];if(!r.has(y)){var v="unknown";"boolean"===typeof j?v="boolean":"number"===typeof j?v="number":"string"===typeof j?v="string":Array.isArray(j)?v=E(j):"object"===typeof j?v="json":console.warn("Unknown type of value:",{name:y,value:j},"undefined"===typeof j?"undefined":(0,S.Z)(j)),r.set(y,v)}}}catch(g){d=!0,h=g}finally{try{c||null==x.return||x.return()}finally{if(d)throw h}}if(++t>=100)break}}catch(g){o=!0,s=g}finally{try{n||null==a.return||a.return()}finally{if(o)throw s}}return r}(t.pages);return(0,n.jsxs)("div",{children:[j&&(0,n.jsx)(a.b,{title:"Query error",color:"red",radius:"md",children:(0,n.jsx)("code",{children:j.toString()})}),(0,n.jsx)(w.Provider,{value:A,children:(0,n.jsx)(de,{query:m,setQuery:b,prettyQuery:q,queryError:j,savedQueries:O,deleteSavedQuery:function(e){Q((function(r){return(0,d.Z)(r.filter((function(r){return r.query!==e})))}))},starQuery:function(e){Q((function(r){return(0,d.Z)(r.map((function(r){return r.query===e?Object.assign({},r,{star:!Boolean(r.star)}):Object.assign({},r)})))}))},currentMenu:N,toggleMenu:function(e){F((function(r){return r===e?"":e}))},deleteAllSavedQueries:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];Q((function(r){return r.filter((function(r){return!e&&r.star}))}))}})}),null!==l&&""===N&&(0,n.jsx)(G,{records:l}),(0,n.jsx)(re,{meta:t.meta})]})}function de(e){var r=e.query,t=e.setQuery,o=e.prettyQuery,s=e.queryError,i=e.savedQueries,a=e.deleteSavedQuery,l=e.starQuery,c=e.currentMenu,u=e.toggleMenu,d=e.deleteAllSavedQueries,f=(0,h.useState)(""),x=f[0],p=f[1];return(0,h.useEffect)((function(){r&&p(r)}),[r]),(0,n.jsxs)("div",{children:[(0,n.jsx)(ce,{query:r,typedQuery:x,prettyQuery:o,setTypedQuery:p,onChange:function(e){t(e.trim()),u("")},hasError:Boolean(s),savedQueries:i,currentMenu:c,toggleMenu:u}),(0,n.jsx)(W,{currentMenu:c,toggleMenu:u,savedQueries:i,loadQuery:function(e){p(e),t(e.trim())},deleteSavedQuery:function(e){a(e),x===e&&p("")},starQuery:l,deleteAllSavedQueries:d})]})}var he=t(7460),fe=t.n(he);function xe(){return(0,n.jsx)("footer",{className:fe().footer,children:(0,n.jsx)(C.x,{fz:"sm",children:(0,n.jsx)(b.e,{href:"https://github.com/peterbe/docsql",target:"_blank",rel:"noopener",children:"github.com/peterbe/docsql"})})})}var pe="This is just a demo!";function ye(){var e=(0,h.useState)(Boolean(pe)),r=e[0],t=e[1];return r?(0,n.jsx)(a.b,{withCloseButton:!0,closeButtonLabel:"Close alert",title:pe,color:"pink",radius:"lg",style:{margin:20},onClose:function(){t(!1)},children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:'With <b>docsQL</b>, you&apos;re supposed to run it with your ownprojects Markdown files. What you&apos;re seeing here is just a sample instance that uses a sample of content from the <a href="https://github.com/github/docs" target="_blank" rel="noreferrer">GitHub Docs project</a>.'}})}):null}var je=t(6972);function ve(){var e=(0,je.X)(),r=e.colorScheme,t=e.toggleColorScheme,o="dark"===r;return(0,n.jsx)(k.z,{variant:"subtle",leftIcon:o?(0,n.jsx)(R.O31,{}):(0,n.jsx)(R.zG9,{}),onClick:function(){return t()},style:{position:"absolute",top:3,right:3},children:o?"Make it bright":"Go dark"})}var ge=t(6811),me=t.n(ge),be=function(){var e=(0,i.ZP)("docs.json",function(){var e=(0,o.Z)((function(e){var r,t;return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return[4,fetch(e)];case 1:return(r=n.sent()).ok?[4,r.json()]:[3,3];case 2:return[2,n.sent()];case 3:t="".concat(r.status," on ").concat(e),n.label=4;case 4:return n.trys.push([4,6,,7]),[4,r.json()];case 5:return t=n.sent().error,[3,7];case 6:return n.sent(),[3,7];case 7:throw new Error(t)}}))}));return function(r){return e.apply(this,arguments)}}(),{revalidateOnFocus:!1}),r=e.data,t=e.error;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ye,{}),(0,n.jsxs)("div",{className:me().container,children:[(0,n.jsx)("h1",{className:me().heading,children:"docsQL"}),(0,n.jsx)(ve,{}),(0,n.jsxs)("main",{className:me().main,children:[t&&(0,n.jsx)(a.b,{color:"red",title:"Loading error",children:(0,n.jsxs)("div",{className:r?me().reloading_error:me().loading_error,children:[(0,n.jsx)("code",{children:t.toString()}),r&&(0,n.jsx)("p",{children:'Showing "old" data.'})]})}),(0,n.jsx)(l.f,{visible:!t&&!r,transitionDuration:500}),r&&(0,n.jsx)(ue,{data:r})]}),(0,n.jsx)(xe,{})]})]})},Se=function(){return(0,n.jsx)(be,{})}},5247:function(e){e.exports={footer:"about-metadata_footer__yf04u",more_meta:"about-metadata_more_meta__tJLZu"}},1945:function(e){e.exports={textarea:"code-input_textarea__IpE6U"}},3008:function(e){e.exports={example:"example-queries_example__fsbGt"}},7460:function(e){e.exports={footer:"footer_footer__uSNcK"}},1433:function(e){e.exports={row:"found-records_row__KYyBT",row_number:"found-records_row_number__nd4q0",undefined_value:"found-records_undefined_value__BQGz3",opening:"found-records_opening__nhkDC",opened:"found-records_opened__QbiNq",found_records:"found-records_found_records__bmg8f"}},6811:function(e){e.exports={container:"home_container__GJ1Uu",loading_error:"home_loading_error__MeQiF",reloading_error:"home_reloading_error__4v2Kk",heading:"home_heading__FV4U6"}},3178:function(e){e.exports={saved_query:"saved-queries_saved_query__Me2bK"}}},function(e){e.O(0,[616,584,247,774,888,179],(function(){return r=8312,e(e.s=r);var r}));var r=e.O();_N_E=r}]);