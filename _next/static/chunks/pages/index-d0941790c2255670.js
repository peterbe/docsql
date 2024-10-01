(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(7923)}])},7923:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ep}});var n=r(5893),s=r(1758),l=r(3404),o=r(2198),i=r(7294),a=r(1163),c=r(2174),d=r.n(c),u=r(3445),h=r(3078),x=r(4124),f=r(8008),p=r(5323),j=r(967);function g(e){let{possibleKeys:t}=e,r=[];for(let[e,n]of Array.from(t))r.push({name:e,type:n});return r.sort((e,t)=>e.name.localeCompare(t.name)),(0,n.jsxs)("div",{children:[(0,n.jsx)(h.W,{style:{margin:40},children:(0,n.jsxs)(x.X,{p:"md",shadow:"sm",withBorder:!0,children:[(0,n.jsx)(f.D,{order:4,children:"Possible keys"}),(0,n.jsxs)(p.i,{children:[(0,n.jsx)(p.i.Thead,{children:(0,n.jsxs)(p.i.Tr,{children:[(0,n.jsx)(p.i.Th,{children:"Name"}),(0,n.jsx)(p.i.Th,{children:"Type"})]})}),(0,n.jsx)(p.i.Tbody,{children:r.map(e=>{let{name:t,type:r}=e;return(0,n.jsxs)(p.i.Tr,{children:[(0,n.jsx)(p.i.Td,{children:(0,n.jsx)("code",{children:t})}),(0,n.jsx)(p.i.Td,{children:r})]},t)})})]})]})}),(0,n.jsx)(h.W,{style:{margin:40},children:(0,n.jsxs)(x.X,{p:"md",shadow:"sm",withBorder:!0,children:[(0,n.jsx)(f.D,{order:4,children:"SQL is case-insensitive, but keys aren't"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("code",{children:"SELECT title FROM ? ORDER BY textLength LIMIT 10"}),(0,n.jsx)("br",{}),(0,n.jsx)("b",{style:{paddingLeft:170},children:"=="}),(0,n.jsx)("br",{}),(0,n.jsx)("code",{children:"Select title from ? order bY textLength limiT 10"})]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"But..."}),(0,n.jsx)("br",{}),(0,n.jsx)("code",{children:"SELECT title FROM ? ORDER BY textLength LIMIT 10"}),(0,n.jsx)("br",{}),(0,n.jsx)("b",{style:{paddingLeft:170,color:"red"},children:"!="}),(0,n.jsx)("br",{}),(0,n.jsx)("code",{children:"SELECT TiTLe FROM ? ORDER BY TextlengTH LIMIT 10"})]})]})}),(0,n.jsx)(h.W,{style:{margin:40},children:(0,n.jsxs)(x.X,{p:"md",shadow:"sm",withBorder:!0,children:[(0,n.jsx)(f.D,{order:4,children:"Read the docs"}),(0,n.jsxs)("p",{children:["The most important documentation is"," ",(0,n.jsx)(j.e,{href:"https://github.com/agershun/alasql/wiki",target:"_blank",rel:"noreferrer",children:"AlaSQL"})," ","which is what the SQL engine is based on."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Tip!"})," Since AlaSQL is based on JavaScript you can substitute the ",(0,n.jsx)("code",{children:"."}),"for ",(0,n.jsx)("code",{children:"->"}),". For example, in JavaScript you would do:"," ",(0,n.jsx)("code",{children:"myString.length.toLocaleString()"}),", and in AlaSQL that becomes ",(0,n.jsx)("code",{children:"SELECT mystring->length->toLocaleString()"}),"."]})]})})]})}var y=r(6414),m=r(4410),b=r(356),v=r(4920),S=r(1714),E=r(5003),w=r(8612),_=r.n(w),L=r(1114),C=r.n(L);function T(e){let{code:t}=e;return(0,n.jsx)(_(),{language:"sql",value:t})}r(1470),_().registerLanguage(C());var R=r(8474),k=r.n(R);function q(e){let{savedQueries:t,loadQuery:r,deleteSavedQuery:s,starQuery:l,deleteAllSavedQueries:o}=e,[a,c]=(0,i.useState)(""),d=t.filter(e=>!a.trim()||e.query.toLowerCase().includes(a.toLowerCase().trim()));return(0,n.jsxs)("div",{style:{marginTop:50},children:[(0,n.jsx)(f.D,{order:4,children:"Saved queries"}),t.length>1&&(0,n.jsxs)("form",{children:[(0,n.jsx)(y.o,{type:"search",placeholder:"Search filter...",value:a,onChange:e=>c(e.target.value),leftSection:(0,n.jsx)(S.Z,{size:14})}),a.trim()&&(0,n.jsx)("div",{children:(0,n.jsxs)(m.x,{fz:"sm",children:["Found ",d.length,". Filtered out"," ",d.length>0?t.length-d.length:"everything"]})})]}),d.map(e=>{let t=!!e.star;return(0,n.jsxs)("div",{className:k().saved_query,children:[(0,n.jsxs)("p",{children:["Found ",(0,n.jsxs)("b",{children:[e.count.toLocaleString()," records"]})," ",new Date(e.ts).toLocaleTimeString()]}),(0,n.jsx)(T,{code:e.query}),(0,n.jsxs)(b.Z,{children:[(0,n.jsx)(v.z,{type:"button",color:"green",onClick:()=>{r(e.query)},children:"Load"}),(0,n.jsx)(v.z,{title:"Don't let it drop off",onClick:()=>{l(e.query)},children:(0,n.jsx)(E.Z,{fill:t?"yellow":"transparent",color:t?"yellow":"white"})}),(0,n.jsx)(v.z,{type:"button",color:"red",title:"Delete saved query",onClick:()=>{s(e.query)},children:"Delete"})]})]},e.query+e.count+e.ts)}),t.length>1&&(0,n.jsxs)(b.Z,{style:{marginTop:50},children:[(0,n.jsx)(v.z,{type:"button",variant:"outline",color:"red",title:"Click to delete all saved queries except those starred",onClick:()=>{o()},children:"Delete un-starred saved queries"}),(0,n.jsx)(v.z,{type:"button",variant:"outline",color:"red",title:"Click to delete ALL saved queries",onClick:()=>{o(!0)},children:"Delete ALL saved queries"})]})]})}var O=r(8127),M=r(2121),N=r.n(M);let D=[{sql:"SELECT title FROM ?",description:"Select just 'title'"},{sql:"SELECT title FROM ? LIMIT 10 OFFSET 10",description:"Select first rows 10 to 20 "},{sql:"SELECT title, length(title) FROM ? ORDER BY 2 DESC LIMIT 5",description:"Top 5 longest titles"},{sql:"SELECT title, title->length as length FROM ? ORDER BY 2 ASC LIMIT 5",description:"Top 5 shortest titles"},{sql:'SELECT topics, topics->length AS length FROM ? WHERE "Accounts" IN topics',description:"Filter by presence inside an array and count entries in array"},{sql:'SELECT title FROM ? WHERE title ILIKE "%github%"',description:"Case insensitive filter by wildcard operator on string"},{sql:'SELECT title FROM ? WHERE REGEXP_LIKE(title, "\\bactions?\\b", "i")',description:"Match whole word 'action' or 'actions' but not 'transaction' or 'actionable'"},{sql:"SELECT changelog, changelog->label FROM ? WHERE changelog AND changelog->label",description:"Select from JSON object and filter by those that have a truthy value on that key"},{sql:"SELECT topics, topics->length FROM ? WHERE topics->label",description:"Select arrays and filter out those that are null"},{sql:"SELECT children->(0) FROM ? WHERE children->length",description:"Select first element in array where the array is something"},{sql:"SELECT changelog FROM ? WHERE NOT changelog->label",description:"Select from JSON objects those that do not have a certain key"},{sql:"SELECT title FROM ? ORDER BY RANDOM() LIMIT 10",description:"10 random titles"},{sql:"SELECT _id, wordCount, textLength, ROUND(textLength / wordCount, 2) FROM ? WHERE wordCount > 10 ORDER BY 4 DESC LIMIT 25",description:"Order average longest words rounded to 2 significant figures"}];function F(e){let{loadQuery:t}=e,[r,s]=(0,i.useState)(""),l=D.filter(e=>{let{sql:t,description:n}=e;return!r.trim()||t.toLowerCase().includes(r.toLowerCase())||n.toLowerCase().includes(r.toLowerCase())});return(0,n.jsxs)("div",{style:{marginTop:50},children:[(0,n.jsx)(f.D,{order:4,children:"Saved queries"}),(0,n.jsx)("form",{children:(0,n.jsx)(y.o,{type:"search",value:r,onChange:e=>s(e.target.value),placeholder:"Search filter...",leftSection:(0,n.jsx)(S.Z,{size:14})})}),l.map((e,s)=>{let{sql:l,description:o}=e;return(0,n.jsxs)("div",{className:N().example,children:[(0,n.jsx)(O.y,{highlight:r.split(/\s+/),children:o}),(0,n.jsx)(T,{code:l}),(0,n.jsx)(v.z,{size:"xs",type:"button",onClick:()=>{t(l)},children:"Load SQL"})]},s)}),0===l.length&&(0,n.jsx)("p",{children:(0,n.jsx)("i",{children:"No examples found"})}),(0,n.jsxs)(m.x,{fz:"sm",children:["These are static examples they might not work with ",(0,n.jsx)("i",{children:"your"})," data."]})]})}function A(e){let{currentMenu:t,toggleMenu:r,savedQueries:s,loadQuery:l,deleteSavedQuery:o,starQuery:i,deleteAllSavedQueries:a,possibleKeys:c}=e;return(0,n.jsxs)(u.x,{children:["help"===t&&(0,n.jsx)(g,{possibleKeys:c}),"saved"===t&&(0,n.jsx)(q,{savedQueries:s,loadQuery:e=>{l(e),r("")},deleteSavedQuery:e=>{o(e)},starQuery:i,deleteAllSavedQueries:a}),"examples"===t&&(0,n.jsx)(F,{loadQuery:e=>{l(e),r("")}})]})}var Q=r(9971),I=r.n(Q);function z(e){let{records:t}=e;return(0,n.jsxs)(b.Z,{style:{marginTop:50},children:[(0,n.jsx)(v.z,{type:"button",variant:"outline",title:"Click to start downloading as a .json file",onClick:()=>{!function(){let e=new Blob([JSON.stringify(t,void 0,2)],{type:"application/json"}),r=document.createElement("a");document.body.appendChild(r),r.setAttribute("href",window.URL.createObjectURL(e)),r.setAttribute("download","results.json"),r.style.display="none",r.click(),document.body.removeChild(r)}()},children:"Download as JSON"}),(0,n.jsx)(v.z,{type:"button",variant:"outline",title:"Click to start downloading as a .csv file",onClick:()=>{!function(){let e="",r=null;t.forEach((t,n)=>{n||(r=Object.keys(t),e+=r.map(e=>B(e))+"\n"),e+=(null==r?void 0:r.map(e=>B(t[e])))+"\n"});let n=new Blob([e],{type:"text/csv"}),s=document.createElement("a");document.body.appendChild(s),s.setAttribute("href",window.URL.createObjectURL(n)),s.setAttribute("download","results.csv"),s.style.display="none",s.click(),document.body.removeChild(s)}()},children:"Download as CSV"})]})}function B(e){return(e=(e=null===e?"null":void 0===e?"":Array.isArray(e)||"object"==typeof e?JSON.stringify(e):e.toString()).replace(/"/g,'""')).search(/("|,|\n)/g)>=0?'"'.concat(e,'"'):e}function W(e){let{records:t}=e,[r,l]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let{hostname:e}=document.location;("localhost"===e||"127.0.0.1"===e||"0.0.0.0"===e)&&l(!0)},[]);let[o,a]=(0,i.useState)(null);(0,i.useEffect)(()=>{let e=o?setTimeout(()=>{a(null)},3e3):null;return()=>{e&&clearTimeout(e)}},[o]);let c=o?"/api/open?"+new URLSearchParams({filePath:o}):null,{data:d,error:u}=(0,s.ZP)(c,async e=>{let t=await fetch(e);if(404===t.status||400===t.status)throw Error((await t.json()).error);if(200===t.status)return await t.json();throw Error("".concat(t.status," on ").concat(e))},{revalidateOnFocus:!1,revalidateOnReconnect:!1});if(0===t.length)return(0,n.jsx)("p",{children:"Absolutely diddly squat found. Sorry not sorry \uD83D\uDE43"});let h=Object.keys(t[0]),x=h.join("");return(0,n.jsxs)("div",{children:[o&&(0,n.jsxs)("p",{className:I().opening,children:["opening ",(0,n.jsx)("code",{children:o})]}),d&&(0,n.jsxs)("p",{className:I().opened,children:["tried to open ",(0,n.jsx)("code",{children:d.filePath}),"using ",(0,n.jsx)("code",{children:d.binary}),d.isTerminalEditor&&"(is terminal editor)"]}),u&&(0,n.jsxs)("p",{className:I().opened,children:["an error occurred trying to open the file:"," ",(0,n.jsx)("code",{children:u.toString()})]}),(0,n.jsxs)("p",{children:["Found ",t.length.toLocaleString()," ",t.length>1e3?"(only showing first ".concat(1e3.toLocaleString(),")"):null]}),(0,n.jsxs)(p.i,{className:I().found_records,children:[(0,n.jsx)(p.i.Thead,{children:(0,n.jsxs)(p.i.Tr,{children:[(0,n.jsx)("th",{children:"\xa0"}),h.map(e=>(0,n.jsx)("th",{children:e},e))]})}),(0,n.jsx)(p.i.Tbody,{children:t.slice(0,1e3).map((e,t)=>(0,n.jsxs)(p.i.Tr,{id:"l".concat(t+1),className:I().row,children:[(0,n.jsx)(p.i.Td,{className:I().row_number,children:(0,n.jsx)(j.e,{href:"#l".concat(t+1),children:t+1})}),h.map(t=>{let s=e[t];return(0,n.jsx)(p.i.Td,{children:(0,n.jsx)(P,{key_:t,value:s,allowLocalLinks:r,setOpening:e=>{a(e)}})},t)})]},"".concat(x).concat(t)))})]}),t.length>0&&(0,n.jsx)(z,{records:t}),t.length>1e3&&(0,n.jsx)("p",{children:(0,n.jsxs)("small",{children:["Capped to the first ",(0,n.jsxs)("b",{children:[1e3.toLocaleString()," rows"]})]})})]})}function P(e){let{key_:t,value:r,allowLocalLinks:s,setOpening:l}=e;return t.endsWith("_url")&&"string"==typeof r?(0,n.jsx)(j.e,{href:r,target:"_blank",rel:"noreferrer",children:r}):"_file"===t?s?(0,n.jsx)(j.e,{href:"#".concat(r),onClick:e=>{e.preventDefault(),l(r)},children:(0,n.jsx)(Z,{value:r||""})}):(0,n.jsx)(Z,{value:r||""}):(0,n.jsx)(n.Fragment,{children:"string"==typeof r?r:0===r?"0":"number"==typeof r&&r>1e3?r.toLocaleString():null===r?"null":Array.isArray(r)||"object"==typeof r?JSON.stringify(r):void 0===r?(0,n.jsx)("span",{className:I().undefined_value,children:"undefined"}):r.toString()})}function Z(e){let{value:t,maxLength:r=100}=e;if(t.length>r){let e=Math.floor(t.length/2),s=t.slice(0,e),l=t.slice(e),o=1;for(;s.length+l.length>r;)s=t.slice(0,e-o),l=t.slice(e+o),o++;return(0,n.jsxs)("abbr",{title:t,children:[s,"[…]",l]})}return(0,n.jsx)("span",{children:t})}var H=r(6910),U=r.n(H);function J(e){var t;let{meta:r}=e,[s,o]=(0,i.useState)(!1);return(0,n.jsx)("footer",{className:U().footer,children:0===r.rows?(0,n.jsx)(l.b,{color:"red",title:"Loading problem",children:"No rows loaded! Something is wrong with the sources or the crawler."}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["It took ",(t=r.took)>1e3?"".concat((t/1e3).toFixed(2),"s"):"".concat(t.toFixed(0),"ms")," to load"," ",r.rows.toLocaleString()," records."," ",(0,n.jsxs)("a",{href:"#more",className:U().more_meta,onClick:e=>{e.preventDefault(),o(e=>!e)},children:["[",s?"less":"more","]"]})]}),s&&(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)("b",{children:"Sources"})}),(0,n.jsx)("ul",{children:r.sources.map(e=>(0,n.jsxs)("li",{children:[e.files.toLocaleString()," files from"," ",(0,n.jsx)("i",{children:e.source})]},e.source))}),r.version&&(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"docsQL version"})," ",r.version]})]})]})})}var Y=r(3334),X=r(2105),K=r(8277),G=r(2815),V=r.n(G);function $(e){let{current:t,toggle:r,savedQueries:s}=e;return(0,n.jsxs)(b.Z,{children:[(0,n.jsx)(v.z,{type:"button",onClick:()=>r("help"),variant:"help"===t?"filled":"outline",children:"help"===t?"Close help":"Open help"}),(0,n.jsx)(v.z,{type:"button",onClick:()=>r("saved"),variant:"saved"===t?"filled":"outline",children:"saved"===t?"Close saved queries":"Open saved queries (".concat(s.length,")")}),(0,n.jsx)(v.z,{type:"button",onClick:()=>r("examples"),variant:"examples"===t?"filled":"outline",children:"examples"===t?"Close example queries":"Open example queries"})]})}function ee(e){let{onChange:t,query:r,prettyQuery:s,typedQuery:l,setTypedQuery:o,hasError:a,savedQueries:c,currentMenu:d,toggleMenu:u}=e,h=(0,i.useCallback)(()=>{t(l.trim())},[l]),x=(0,i.useRef)(null),f=x.current;return(0,i.useEffect)(()=>{let e=e=>{"Enter"===e.key&&e.metaKey&&h()};return f&&f.addEventListener("keydown",e),()=>{f&&f.removeEventListener("keydown",e)}},[f,h]),(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),h()},children:[(0,n.jsxs)(m.x,{size:"sm",ta:"right",children:[(0,n.jsx)("b",{children:"Tip!"})," Use ",(0,n.jsx)(K.T,{children:"⌘"}),"-",(0,n.jsx)(K.T,{children:"Enter"})," to run the query when focus is inside textarea"]}),(0,n.jsx)(Y.g,{className:V().textarea,spellCheck:"false",autoFocus:!0,error:a?"Query has error":void 0,required:!0,minRows:Math.min(100,Math.max(2,l.split("\n").length)),size:"md",ref:x,value:l,onChange:e=>{o(e.target.value)},autoCorrect:"off",children:r}),(0,n.jsxs)(X.r,{children:[(0,n.jsxs)(X.r.Col,{span:6,children:[(0,n.jsx)(v.z,{type:"submit",disabled:l.trim()===r,color:l.trim()!==r?"green":a?"red":void 0,children:"Run"})," ",(0,n.jsx)(v.z,{type:"button",variant:"outline",disabled:!s||s===l,onClick:()=>{o(s),t(s)},children:"Pretty format"})]}),(0,n.jsx)(X.r.Col,{span:6,children:(0,n.jsx)($,{toggle:u,current:d,savedQueries:c})})]})]})}function et(e){var t;let{data:r}=e,s=(0,a.useRouter)(),o=Array.isArray(t=s.query.query||"")?t[0]:t,[c,u]=(0,i.useState)(null),[h,x]=(0,i.useState)(null),[f,p]=(0,i.useState)(o),{pages:j}=r,g=function(){let e=(0,a.useRouter)(),t=(0,i.useRef)(e);t.current=e;let[{replace:r}]=(0,i.useState)({replace:e=>t.current.replace(e)});return r}();(0,i.useEffect)(()=>{if(f)try{u(d()(f,[j])),x(null)}catch(e){if(e instanceof Error)x(e);else throw e}},[f,j]);let[y,m]=(0,i.useState)("");(0,i.useEffect)(()=>{if(f)try{let e=d().parse(f),t=function(e){let t=new Set;for(let r of e.match(/\sAS \w+/g)||[])t.has(r)&&(e=e.replace(r,"")),t.add(r);return e}(e.toString().replace("FROM $0 AS default","FROM ?"));t!==f&&m(t)}catch(e){m("")}},[f]);let b=s.asPath;(0,i.useEffect)(()=>{let[e,t=""]=b.split("?"),r=new URLSearchParams(t);f?r.set("query",f):r.delete("query");let n=e;r.toString()&&(n+="?".concat(r.toString())),n!==b&&g(n)},[f,b,g]);let[v,S]=(0,i.useState)([]);(0,i.useEffect)(()=>{let e=localStorage;try{let t=JSON.parse(e.getItem("saved_queries")||"[]");Array.isArray(t)||(t=[]),S(t)}catch(e){console.warn("Unable to save to local storage",e)}},[]),(0,i.useEffect)(()=>{o||(v.length?p(v[0].query):p("SELECT title, length(title) AS length FROM ? ORDER BY 2 DESC LIMIT 10"))},[o,v]),(0,i.useEffect)(()=>{let e=localStorage;try{e.setItem("saved_queries",JSON.stringify(v))}catch(e){console.warn("Unable to save to local storage",e)}},[v]),(0,i.useEffect)(()=>{h?S(e=>e.filter(e=>e.query!=f)):c&&S(e=>{if(e.length>0&&e[0].query===f&&e[0].count===c.length)return e;let t=[];return e.forEach((e,r)=>{e.query!==f&&(!(r>50)||e.star)&&t.push(e)}),[{query:f,count:c.length,ts:new Date().getTime()},...t]})},[f,c,h]);let[E,w]=(0,i.useState)(""),_=function(e){let t=new Map,r=0;for(let n of e){for(let[e,r]of Object.entries(n)){if(t.has(e))continue;let n="unknown";"boolean"==typeof r?n="boolean":"number"==typeof r?n="number":"string"==typeof r?n="string":Array.isArray(r)?n=r.every(e=>"number"==typeof e)?"array(numbers)":r.every(e=>"string"==typeof e)?"array(strings)":"array":"object"==typeof r?n="json":console.warn("Unknown type of value:",{name:e,value:r},typeof r),t.set(e,n)}if(++r>=100)break}return t}(r.pages);return(0,n.jsxs)("div",{children:[h&&(0,n.jsx)(l.b,{title:"Query error",color:"red",radius:"md",children:(0,n.jsx)("code",{children:h.toString()})}),(0,n.jsx)(er,{query:f,setQuery:p,prettyQuery:y,queryError:h,savedQueries:v,deleteSavedQuery:e=>{S(t=>[...t.filter(t=>t.query!==e)])},starQuery:e=>{S(t=>[...t.map(t=>t.query===e?Object.assign({},t,{star:!t.star}):Object.assign({},t))])},currentMenu:E,toggleMenu:function(e){w(t=>t===e?"":e)},deleteAllSavedQueries:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];S(t=>t.filter(t=>!e&&t.star))},possibleKeys:_}),null!==c&&""===E&&(0,n.jsx)(W,{records:c}),(0,n.jsx)(J,{meta:r.meta})]})}function er(e){let{query:t,setQuery:r,prettyQuery:s,queryError:l,savedQueries:o,deleteSavedQuery:a,starQuery:c,currentMenu:d,toggleMenu:u,deleteAllSavedQueries:h,possibleKeys:x}=e,[f,p]=(0,i.useState)("");return(0,i.useEffect)(()=>{t&&p(t)},[t]),(0,n.jsxs)("div",{children:[(0,n.jsx)(ee,{query:t,typedQuery:f,prettyQuery:s,setTypedQuery:p,onChange:e=>{r(e.trim()),u("")},hasError:!!l,savedQueries:o,currentMenu:d,toggleMenu:u}),(0,n.jsx)(A,{currentMenu:d,toggleMenu:u,savedQueries:o,loadQuery:e=>{p(e),r(e.trim())},deleteSavedQuery:e=>{a(e),f===e&&p("")},starQuery:c,deleteAllSavedQueries:h,possibleKeys:x})]})}var en=r(5326),es=r.n(en);function el(){return(0,n.jsx)("footer",{className:es().footer,children:(0,n.jsx)(m.x,{fz:"sm",children:(0,n.jsx)(j.e,{href:"https://github.com/peterbe/docsql",target:"_blank",rel:"noopener",children:"github.com/peterbe/docsql"})})})}let eo="This is just a demo!";function ei(){let[e,t]=(0,i.useState)(!!eo);return e?(0,n.jsx)(l.b,{withCloseButton:!0,closeButtonLabel:"Close alert",title:eo,color:"pink",radius:"lg",style:{margin:20},onClose:()=>{t(!1)},children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:'With <b>docsQL</b>, you&apos;re supposed to run it with your ownprojects Markdown files. What you&apos;re seeing here is just a sample instance that uses a sample of content from the <a href="https://github.com/github/docs" target="_blank" rel="noreferrer">GitHub Docs project</a>.'}})}):null}var ea=r(9484),ec=r(49),ed=r(3476);function eu(){let{colorScheme:e,toggleColorScheme:t}=(0,ea.X)(),r="dark"===e;return(0,n.jsx)(v.z,{variant:"subtle",leftSection:r?(0,n.jsx)(ec.Z,{}):(0,n.jsx)(ed.Z,{}),onClick:()=>t(),style:{position:"absolute",top:3,right:3},children:r?"Make it bright":"Go dark"})}var eh=r(6884),ex=r.n(eh);let ef=()=>{let{data:e,error:t}=(0,s.ZP)("docs.json",async e=>{let t=await fetch(e);if(t.ok)return await t.json();let r="".concat(t.status," on ").concat(e);try{r=(await t.json()).error}catch(e){}throw Error(r)},{revalidateOnFocus:!1});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ei,{}),(0,n.jsxs)("div",{className:ex().container,children:[(0,n.jsx)("h1",{className:ex().heading,children:"docsQL"}),(0,n.jsx)(eu,{}),(0,n.jsxs)("main",{className:ex().main,children:[t&&(0,n.jsx)(l.b,{color:"red",title:"Loading error",children:(0,n.jsxs)("div",{className:e?ex().reloading_error:ex().loading_error,children:[(0,n.jsx)("code",{children:t.toString()}),e&&(0,n.jsx)("p",{children:'Showing "old" data.'})]})}),(0,n.jsx)(o.f,{visible:!t&&!e,transitionProps:{duration:500}}),e&&(0,n.jsx)(et,{data:e})]}),(0,n.jsx)(el,{})]})]})};var ep=()=>(0,n.jsx)(ef,{})},6910:function(e){e.exports={footer:"about-metadata_footer__E3f2r",more_meta:"about-metadata_more_meta__k4X5N"}},2815:function(e){e.exports={textarea:"code-input_textarea__Xrvfh"}},2121:function(e){e.exports={example:"example-queries_example__8UIWl"}},5326:function(e){e.exports={footer:"footer_footer__AQTwI"}},9971:function(e){e.exports={row:"found-records_row__myl0m",row_number:"found-records_row_number__tOlZL",undefined_value:"found-records_undefined_value___msLK",opening:"found-records_opening__vnfY2",opened:"found-records_opened__ZB4cz",found_records:"found-records_found_records__Ptlw6"}},6884:function(e){e.exports={container:"home_container__TLSt1",loading_error:"home_loading_error__RNi7d",reloading_error:"home_reloading_error__DzxHb",heading:"home_heading__kVprB"}},8474:function(e){e.exports={saved_query:"saved-queries_saved_query__A7ZG9"}}},function(e){e.O(0,[616,681,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);