(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8357:function(e,t,r){"use strict";r.d(t,{Z:function(){return oe}});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),o=Math.abs,a=String.fromCharCode,i=Object.assign;function c(e){return e.trim()}function s(e,t,r){return e.replace(t,r)}function u(e,t){return e.indexOf(t)}function l(e,t){return 0|e.charCodeAt(t)}function f(e,t,r){return e.slice(t,r)}function d(e){return e.length}function p(e){return e.length}function m(e,t){return t.push(e),e}var h=1,b=1,y=0,g=0,v=0,w="";function k(e,t,r,n,o,a,i){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:h,column:b,length:i,return:""}}function S(e,t){return i(k("",null,null,"",null,null,0),e,{length:-e.length},t)}function x(){return v=g>0?l(w,--g):0,b--,10===v&&(b=1,h--),v}function $(){return v=g<y?l(w,g++):0,b++,10===v&&(b=1,h++),v}function C(){return l(w,g)}function O(){return g}function j(e,t){return f(w,e,t)}function z(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function E(e){return h=b=1,y=d(w=e),g=0,[]}function P(e){return w="",e}function A(e){return c(j(g-1,I(91===e?e+2:40===e?e+1:e)))}function M(e){for(;(v=C())&&v<33;)$();return z(e)>2||z(v)>3?"":" "}function F(e,t){for(;--t&&$()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return j(e,O()+(t<6&&32==C()&&32==$()))}function I(e){for(;$();)switch(v){case e:return g;case 34:case 39:34!==e&&39!==e&&I(v);break;case 40:41===e&&I(e);break;case 92:$()}return g}function _(e,t){for(;$()&&e+v!==57&&(e+v!==84||47!==C()););return"/*"+j(t,g-1)+"*"+a(47===e?e:$())}function T(e){for(;!z(C());)$();return j(e,g)}var N="-ms-",R="-moz-",W="-webkit-",G="comm",H="rule",L="decl",Z="@keyframes";function D(e,t){for(var r="",n=p(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function V(e,t,r,n){switch(e.type){case"@import":case L:return e.return=e.return||e.value;case G:return"";case Z:return e.return=e.value+"{"+D(e.children,n)+"}";case H:e.value=e.props.join(",")}return d(r=D(e.children,n))?e.return=e.value+"{"+r+"}":""}function B(e,t){switch(function(e,t){return(((t<<2^l(e,0))<<2^l(e,1))<<2^l(e,2))<<2^l(e,3)}(e,t)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+R+e+N+e+e;case 6828:case 4268:return W+e+N+e+e;case 6165:return W+e+N+"flex-"+e+e;case 5187:return W+e+s(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return W+e+N+"flex-item-"+s(e,/flex-|-self/,"")+e;case 4675:return W+e+N+"flex-line-pack"+s(e,/align-content|flex-|-self/,"")+e;case 5548:return W+e+N+s(e,"shrink","negative")+e;case 5292:return W+e+N+s(e,"basis","preferred-size")+e;case 6060:return W+"box-"+s(e,"-grow","")+W+e+N+s(e,"grow","positive")+e;case 4554:return W+s(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return s(s(s(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return s(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return s(s(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+e+e;case 4095:case 3583:case 4068:case 2532:return s(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(d(e)-1-t>6)switch(l(e,t+1)){case 109:if(45!==l(e,t+4))break;case 102:return s(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+R+(108==l(e,t+3)?"$3":"$2-$3"))+e;case 115:return~u(e,"stretch")?B(s(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==l(e,t+1))break;case 6444:switch(l(e,d(e)-3-(~u(e,"!important")&&10))){case 107:return s(e,":",":"+W)+e;case 101:return s(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+W+(45===l(e,14)?"inline-":"")+"box$3$1"+W+"$2$3$1"+N+"$2box$3")+e}break;case 5936:switch(l(e,t+11)){case 114:return W+e+N+s(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+N+s(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+N+s(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return W+e+N+e+e}return e}function U(e){return P(Y("",null,null,null,[""],e=E(e),0,[0],e))}function Y(e,t,r,n,o,i,c,l,f){for(var p=0,h=0,b=c,y=0,g=0,v=0,w=1,k=1,S=1,j=0,z="",E=o,P=i,I=n,N=z;k;)switch(v=j,j=$()){case 40:if(108!=v&&58==N.charCodeAt(b-1)){-1!=u(N+=s(A(j),"&","&\f"),"&\f")&&(S=-1);break}case 34:case 39:case 91:N+=A(j);break;case 9:case 10:case 13:case 32:N+=M(v);break;case 92:N+=F(O()-1,7);continue;case 47:switch(C()){case 42:case 47:m(X(_($(),O()),t,r),f);break;default:N+="/"}break;case 123*w:l[p++]=d(N)*S;case 125*w:case 59:case 0:switch(j){case 0:case 125:k=0;case 59+h:g>0&&d(N)-b&&m(g>32?J(N+";",n,r,b-1):J(s(N," ","")+";",n,r,b-2),f);break;case 59:N+=";";default:if(m(I=q(N,t,r,p,h,o,l,z,E=[],P=[],b),i),123===j)if(0===h)Y(N,t,I,I,E,i,b,l,P);else switch(y){case 100:case 109:case 115:Y(e,I,I,n&&m(q(e,I,I,0,0,o,l,z,o,E=[],b),P),o,P,b,l,n?E:P);break;default:Y(N,I,I,I,[""],P,0,l,P)}}p=h=g=0,w=S=1,z=N="",b=c;break;case 58:b=1+d(N),g=v;default:if(w<1)if(123==j)--w;else if(125==j&&0==w++&&125==x())continue;switch(N+=a(j),j*w){case 38:S=h>0?1:(N+="\f",-1);break;case 44:l[p++]=(d(N)-1)*S,S=1;break;case 64:45===C()&&(N+=A($())),y=C(),h=b=d(z=N+=T(O())),j++;break;case 45:45===v&&2==d(N)&&(w=0)}}return i}function q(e,t,r,n,a,i,u,l,d,m,h){for(var b=a-1,y=0===a?i:[""],g=p(y),v=0,w=0,S=0;v<n;++v)for(var x=0,$=f(e,b+1,b=o(w=u[v])),C=e;x<g;++x)(C=c(w>0?y[x]+" "+$:s($,/&\f/g,y[x])))&&(d[S++]=C);return k(e,t,r,0===a?H:l,d,m,h)}function X(e,t,r){return k(e,t,r,G,a(v),f(e,2,-2),0)}function J(e,t,r,n){return k(e,t,r,L,f(e,0,n),f(e,n+1,-1),n)}var Q=function(e,t,r){for(var n=0,o=0;n=o,o=C(),38===n&&12===o&&(t[r]=1),!z(o);)$();return j(e,g)},K=function(e,t){return P(function(e,t){var r=-1,n=44;do{switch(z(n)){case 0:38===n&&12===C()&&(t[r]=1),e[r]+=Q(g-1,t,r);break;case 2:e[r]+=A(n);break;case 4:if(44===n){e[++r]=58===C()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=a(n)}}while(n=$());return e}(E(e),t))},ee=new WeakMap,te=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ee.get(r))&&!n){ee.set(e,!0);for(var o=[],a=K(t,o),i=r.props,c=0,s=0;c<a.length;c++)for(var u=0;u<i.length;u++,s++)e.props[s]=o[c]?a[c].replace(/&\f/g,i[u]):i[u]+" "+a[c]}}},re=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},ne=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case L:e.return=B(e.value,e.length);break;case Z:return D([S(e,{value:s(e.value,"@","@"+W)})],n);case H:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return D([S(e,{props:[s(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return D([S(e,{props:[s(t,/:(plac\w+)/,":-webkit-input-$1")]}),S(e,{props:[s(t,/:(plac\w+)/,":-moz-$1")]}),S(e,{props:[s(t,/:(plac\w+)/,N+"input-$1")]})],n)}return""}))}}],oe=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var o=e.stylisPlugins||ne;var a,i,c={},s=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)c[t[r]]=!0;s.push(e)}));var u,l,f=[V,(l=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&l(e)})],d=function(e){var t=p(e);return function(r,n,o,a){for(var i="",c=0;c<t;c++)i+=e[c](r,n,o,a)||"";return i}}([te,re].concat(o,f));i=function(e,t,r,n){u=r,D(U(e?e+"{"+t.styles+"}":t.styles),d),n&&(m.inserted[t.name]=!0)};var m={key:t,sheet:new n({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:c,registered:{},insert:i};return m.sheet.hydrate(s),m}},7906:function(e,t,r){"use strict";r.d(t,{O:function(){return m}});var n=function(e){for(var t,r=0,n=0,o=e.length;o>=4;++n,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(o){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},o={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var a=/[A-Z]|^ms/g,i=/_EMO_([^_]+?)_([^]*?)_EMO_/g,c=function(e){return 45===e.charCodeAt(1)},s=function(e){return null!=e&&"boolean"!==typeof e},u=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return c(e)?e:e.replace(a,"-$&").toLowerCase()})),l=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(i,(function(e,t,r){return d={name:t,styles:r,next:d},t}))}return 1===o[e]||c(e)||"number"!==typeof t||0===t?t:t+"px"};function f(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return d={name:r.name,styles:r.styles,next:d},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)d={name:n.name,styles:n.styles,next:d},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=f(e,t,r[o])+";";else for(var a in r){var i=r[a];if("object"!==typeof i)null!=t&&void 0!==t[i]?n+=a+"{"+t[i]+"}":s(i)&&(n+=u(a)+":"+l(a,i)+";");else if(!Array.isArray(i)||"string"!==typeof i[0]||null!=t&&void 0!==t[i[0]]){var c=f(e,t,i);switch(a){case"animation":case"animationName":n+=u(a)+":"+c+";";break;default:n+=a+"{"+c+"}"}}else for(var d=0;d<i.length;d++)s(i[d])&&(n+=u(a)+":"+l(a,i[d])+";")}return n}(e,t,r);case"function":if(void 0!==e){var o=d,a=r(e);return d=o,f(e,t,a)}}if(null==t)return r;var i=t[r];return void 0!==i?i:r}var d,p=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var m=function(e,t,r){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var o=!0,a="";d=void 0;var i=e[0];null==i||void 0===i.raw?(o=!1,a+=f(r,t,i)):a+=i[0];for(var c=1;c<e.length;c++)a+=f(r,t,e[c]),o&&(a+=i[c]);p.lastIndex=0;for(var s,u="";null!==(s=p.exec(a));)u+="-"+s[1];return{name:n(a)+u,styles:a,next:d}}},444:function(e,t,r){"use strict";r.d(t,{My:function(){return o},fp:function(){return n}});function n(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var o=function(e,t,r){!function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)}(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var o=t;do{e.insert(t===o?"."+n:"",o,e.sheet,!0);o=o.next}while(void 0!==o)}}},4065:function(e,t,r){"use strict";r.d(t,{a:function(){return o}});var n=r(7294);function o(e,t,{getInitialValueInEffect:r}={getInitialValueInEffect:!0}){const[o,a]=(0,n.useState)(!r&&function(e,t){return"boolean"===typeof t?t:"undefined"!==typeof window&&"matchMedia"in window&&window.matchMedia(e).matches}(e,t)),i=(0,n.useRef)();return(0,n.useEffect)((()=>{if("matchMedia"in window)return i.current=window.matchMedia(e),a(i.current.matches),function(e,t){try{return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}catch(r){return e.addListener(t),()=>e.removeListener(t)}}(i.current,(e=>a(e.matches)))}),[e]),o}},6972:function(e,t,r){"use strict";r.d(t,{A:function(){return i},X:function(){return a}});var n=r(7294);const o=(0,n.createContext)(null);function a(){const e=(0,n.useContext)(o);if(!e)throw new Error("useMantineColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return e}function i({colorScheme:e,toggleColorScheme:t,children:r}){return n.createElement(o.Provider,{value:{colorScheme:e,toggleColorScheme:t}},r)}i.displayName="@mantine/core/ColorSchemeProvider"},5628:function(e,t,r){"use strict";r.d(t,{Me:function(){return te},N4:function(){return ee},T1:function(){return K},O2:function(){return Q},rZ:function(){return J}});var n=r(7294),o=r.t(n,2),a=r(8357),i=r(7462),c=function(e){var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var n=e(r);return t.set(r,n),n}},s=r(7906),u=!!o.useInsertionEffect&&o.useInsertionEffect,l=u||n.useLayoutEffect,f=(0,n.createContext)("undefined"!==typeof HTMLElement?(0,a.Z)({key:"css"}):null);f.Provider;var d=function(e){return(0,n.forwardRef)((function(t,r){var o=(0,n.useContext)(f);return e(t,o,r)}))},p=(0,n.createContext)({});var m=c((function(e){return c((function(t){return function(e,t){return"function"===typeof t?t(e):(0,i.Z)({},e,t)}(e,t)}))})),h=function(e){var t=(0,n.useContext)(p);return e.theme!==t&&(t=m(t)(e.theme)),(0,n.createElement)(p.Provider,{value:t},e.children)};var b=r(7447),y=(r(8679),r(444)),g=d((function(e,t){var r=e.styles,o=(0,s.O)([r],void 0,(0,n.useContext)(p)),a=(0,n.useRef)();return l((function(){var e=t.key+"-global",r=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),n=!1,i=document.querySelector('style[data-emotion="'+e+" "+o.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==i&&(n=!0,i.setAttribute("data-emotion",e),r.hydrate([i])),a.current=[r,n],function(){r.flush()}}),[t]),l((function(){var e=a.current,r=e[0];if(e[1])e[1]=!1;else{if(void 0!==o.next&&(0,y.My)(t,o.next,!0),r.tags.length){var n=r.tags[r.tags.length-1].nextElementSibling;r.before=n,r.flush()}t.insert("",o,r,!1)}}),[t,o.name]),null}));var v=Object.defineProperty,w=Object.defineProperties,k=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,C=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))x.call(t,r)&&C(e,r,t[r]);if(S)for(var r of S(t))$.call(t,r)&&C(e,r,t[r]);return e};function j({theme:e}){return n.createElement(g,{styles:{"*, *::before, *::after":{boxSizing:"border-box"},body:(t=O({},e.fn.fontStyles()),r={backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,lineHeight:e.lineHeight,fontSize:e.fontSizes.md,WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},w(t,k(r)))}});var t,r}function z(e,t,r){Object.keys(t).forEach((n=>{e[`--mantine-${r}-${n}`]="number"===typeof t[n]?`${t[n]}px`:t[n]}))}function E({theme:e}){const t={"--mantine-color-white":e.white,"--mantine-color-black":e.black,"--mantine-transition-timing-function":e.transitionTimingFunction,"--mantine-line-height":`${e.lineHeight}`,"--mantine-font-family":e.fontFamily,"--mantine-font-family-monospace":e.fontFamilyMonospace,"--mantine-font-family-headings":e.headings.fontFamily,"--mantine-heading-font-weight":`${e.headings.fontWeight}`};z(t,e.shadows,"shadow"),z(t,e.fontSizes,"font-size"),z(t,e.radius,"radius"),z(t,e.spacing,"spacing"),Object.keys(e.colors).forEach((r=>{e.colors[r].forEach(((e,n)=>{t[`--mantine-color-${r}-${n}`]=e}))}));const r=e.headings.sizes;return Object.keys(r).forEach((e=>{t[`--mantine-${e}-font-size`]=`${r[e].fontSize}px`,t[`--mantine-${e}-line-height`]=`${r[e].lineHeight}`})),n.createElement(g,{styles:{":root":t}})}var P=r(3822),A=Object.defineProperty,M=Object.defineProperties,F=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,N=(e,t,r)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,R=(e,t)=>{for(var r in t||(t={}))_.call(t,r)&&N(e,r,t[r]);if(I)for(var r of I(t))T.call(t,r)&&N(e,r,t[r]);return e},W=(e,t)=>M(e,F(t));function G(e,t){return(0,P.P)(function(e,t){return t?Object.keys(e).reduce(((r,n)=>{if("headings"===n&&t.headings){const n=t.headings.sizes?Object.keys(e.headings.sizes).reduce(((r,n)=>(r[n]=R(R({},e.headings.sizes[n]),t.headings.sizes[n]),r)),{}):e.headings.sizes;return W(R({},r),{headings:W(R(R({},e.headings),t.headings),{sizes:n})})}return r[n]="object"===typeof t[n]?R(R({},e[n]),t[n]):"number"===typeof t[n]||"boolean"===typeof t[n]?t[n]:t[n]||e[n],r}),{}):e}(e,t))}var H=r(6896);const L={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"none"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}};function Z(){return n.createElement(g,{styles:L})}var D=Object.defineProperty,V=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,Y=(e,t,r)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,q=(e,t)=>{for(var r in t||(t={}))B.call(t,r)&&Y(e,r,t[r]);if(V)for(var r of V(t))U.call(t,r)&&Y(e,r,t[r]);return e};const X=(0,n.createContext)({theme:b.t0});function J(){var e;return(null==(e=(0,n.useContext)(X))?void 0:e.theme)||b.t0}function Q(e){const t=J(),r=e=>{var r,n;return{styles:(null==(r=t.components[e])?void 0:r.styles)||{},classNames:(null==(n=t.components[e])?void 0:n.classNames)||{}}};return Array.isArray(e)?e.map(r):[r(e)]}function K(){var e;return null==(e=(0,n.useContext)(X))?void 0:e.emotionCache}function ee(e,t,r){var n;const o=null==(n=J().components[e])?void 0:n.defaultProps;return q(q(q({},t),o),(0,H.L)(r))}function te({theme:e,emotionCache:t,withNormalizeCSS:r=!1,withGlobalStyles:o=!1,withCSSVariables:a=!1,inherit:i=!1,children:c}){const s=(0,n.useContext)(X),u=G(b.t0,i?q(q({},s.theme),e):e);return n.createElement(h,{theme:u},n.createElement(X.Provider,{value:{theme:u,emotionCache:t}},r&&n.createElement(Z,null),o&&n.createElement(j,{theme:u}),a&&n.createElement(E,{theme:u}),c))}te.displayName="@mantine/core/MantineProvider"},7447:function(e,t,r){"use strict";r.d(t,{t0:function(){return c},j1:function(){return a}});const n={dark:["#C1C2C5","#A6A7AB","#909296","#5c5f66","#373A40","#2C2E33","#25262b","#1A1B1E","#141517","#101113"],gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]};var o=r(3822);Object.keys(n);const a=["xs","sm","md","lg","xl"],i={dir:"ltr",primaryShade:{light:6,dark:8},focusRing:"auto",loader:"oval",dateFormat:"MMMM D, YYYY",colorScheme:"light",white:"#fff",black:"#000",defaultRadius:"sm",transitionTimingFunction:"ease",colors:n,lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:"blue",respectReducedMotion:!0,cursorType:"default",defaultGradient:{from:"indigo",to:"cyan",deg:45},shadows:{xs:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",sm:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",md:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",lg:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xl:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},fontSizes:{xs:12,sm:14,md:16,lg:18,xl:20},radius:{xs:2,sm:4,md:8,lg:16,xl:32},spacing:{xs:10,sm:12,md:16,lg:20,xl:24},breakpoints:{xs:576,sm:768,md:992,lg:1200,xl:1400},headings:{fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontWeight:700,sizes:{h1:{fontSize:34,lineHeight:1.3,fontWeight:void 0},h2:{fontSize:26,lineHeight:1.35,fontWeight:void 0},h3:{fontSize:22,lineHeight:1.4,fontWeight:void 0},h4:{fontSize:18,lineHeight:1.45,fontWeight:void 0},h5:{fontSize:16,lineHeight:1.5,fontWeight:void 0},h6:{fontSize:14,lineHeight:1.5,fontWeight:void 0}}},other:{},components:{},activeStyles:{transform:"translateY(1px)"},datesLocale:"en"},c=(0,o.P)(i)},3822:function(e,t,r){"use strict";function n(e){return t=>"number"===typeof e.primaryShade?e.primaryShade:e.primaryShade[t||e.colorScheme]}function o(e){const t=n(e);return(r,n,o=!0,a=!0)=>{if("string"===typeof r&&r.includes(".")){const[t,o]=r.split("."),i=parseInt(o,10);if(t in e.colors&&i>=0&&i<10)return e.colors[t]["number"!==typeof n||a?i:n]}const i="number"===typeof n?n:t();return r in e.colors?e.colors[r][i]:o?e.colors[e.primaryColor][i]:r}}function a(e){let t="";for(let r=1;r<e.length-1;r+=1)t+=`${e[r]} ${r/(e.length-1)*100}%, `;return`${e[0]} 0%, ${t}${e[e.length-1]} 100%`}function i(e){const t=o(e),r=n(e);return n=>{const o={from:(null==n?void 0:n.from)||e.defaultGradient.from,to:(null==n?void 0:n.to)||e.defaultGradient.to,deg:(null==n?void 0:n.deg)||e.defaultGradient.deg};return`linear-gradient(${o.deg}deg, ${t(o.from,r(),!1)} 0%, ${t(o.to,r(),!1)} 100%)`}}function c(e){if("number"===typeof e.size)return e.size;const t=e.sizes[e.size];return void 0!==t?t:e.size||e.sizes.md}function s(e){return/^#?([0-9A-F]{3}){1,2}$/i.test(e)?function(e){let t=e.replace("#","");if(3===t.length){const e=t.split("");t=[e[0],e[0],e[1],e[1],e[2],e[2]].join("")}const r=parseInt(t,16);return{r:r>>16&255,g:r>>8&255,b:255&r,a:1}}(e):e.startsWith("rgb")?function(e){const[t,r,n,o]=e.replace(/[^0-9,.]/g,"").split(",").map(Number);return{r:t,g:r,b:n,a:o||1}}(e):{r:0,g:0,b:0,a:1}}function u(e,t){if("string"!==typeof e||t>1||t<0)return"rgba(0, 0, 0, 1)";const{r:r,g:n,b:o}=s(e);return`rgba(${r}, ${n}, ${o}, ${t})`}r.d(t,{P:function(){return g}});const l={fontStyles:function(e){return()=>({fontFamily:e.fontFamily||"sans-serif"})},themeColor:o,focusStyles:function(e){return t=>({WebkitTapHighlightColor:"transparent",[t||"&:focus"]:{outlineOffset:2,outline:"always"===e.focusRing||"auto"===e.focusRing?`2px solid ${e.colors[e.primaryColor]["dark"===e.colorScheme?7:5]}`:"none"},[t?t.replace(":focus",":focus:not(:focus-visible)"):"&:focus:not(:focus-visible)"]:{outline:"auto"===e.focusRing||"never"===e.focusRing?"none":void 0}})},linearGradient:function(e,...t){return`linear-gradient(${e}deg, ${a(t)})`},radialGradient:function(...e){return`radial-gradient(circle, ${a(e)})`},smallerThan:function(e){return t=>`@media (max-width: ${c({size:t,sizes:e.breakpoints})}px)`},largerThan:function(e){return t=>`@media (min-width: ${c({size:t,sizes:e.breakpoints})+1}px)`},rgba:u,size:c,cover:function(e=0){return{position:"absolute",top:e,right:e,left:e,bottom:e}},darken:function(e,t){const{r:r,g:n,b:o,a:a}=s(e),i=1-t,c=e=>Math.round(e*i);return`rgba(${c(r)}, ${c(n)}, ${c(o)}, ${a})`},lighten:function(e,t){const{r:r,g:n,b:o,a:a}=s(e),i=e=>Math.round(e+(255-e)*t);return`rgba(${i(r)}, ${i(n)}, ${i(o)}, ${a})`},radius:function(e){return t=>{if("number"===typeof t)return t;const r="number"===typeof e.defaultRadius?e.defaultRadius:e.radius[e.defaultRadius]||e.defaultRadius;return e.radius[t]||t||r}},variant:function(e){const t=o(e),r=n(e),a=i(e);return({variant:n,color:o,gradient:i,primaryFallback:c})=>{const s=function(e,t){if("string"===typeof e&&e.includes(".")){const[r,n]=e.split("."),o=parseInt(n,10);if(r in t.colors&&o>=0&&o<10)return{isSplittedColor:!0,key:r,shade:o}}return{isSplittedColor:!1}}(o,e);switch(n){case"light":return{border:"transparent",background:u(t(o,"dark"===e.colorScheme?8:0,c,!1),"dark"===e.colorScheme?.2:1),color:"dark"===o?"dark"===e.colorScheme?e.colors.dark[0]:e.colors.dark[9]:t(o,"dark"===e.colorScheme?2:r("light")),hover:u(t(o,"dark"===e.colorScheme?7:1,c,!1),"dark"===e.colorScheme?.25:.65)};case"subtle":return{border:"transparent",background:"transparent",color:"dark"===o?"dark"===e.colorScheme?e.colors.dark[0]:e.colors.dark[9]:t(o,"dark"===e.colorScheme?2:r("light")),hover:u(t(o,"dark"===e.colorScheme?8:0,c,!1),"dark"===e.colorScheme?.2:1)};case"outline":return{border:t(o,"dark"===e.colorScheme?5:r("light")),background:"transparent",color:t(o,"dark"===e.colorScheme?5:r("light")),hover:"dark"===e.colorScheme?u(t(o,5,c,!1),.05):u(t(o,0,c,!1),.35)};case"default":return{border:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4],background:"dark"===e.colorScheme?e.colors.dark[6]:e.white,color:"dark"===e.colorScheme?e.white:e.black,hover:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[0]};case"white":return{border:"transparent",background:e.white,color:t(o,r()),hover:null};case"transparent":return{border:"transparent",color:"dark"===o?"dark"===e.colorScheme?e.colors.dark[0]:e.colors.dark[9]:t(o,"dark"===e.colorScheme?2:r("light")),background:"transparent",hover:null};case"gradient":return{background:a(i),color:e.white,border:"transparent",hover:null};default:{const n=r(),a=s.isSplittedColor?s.shade:n,i=s.isSplittedColor?s.key:o;return{border:"transparent",background:t(i,a,c),color:e.white,hover:t(i,9===a?8:a+1)}}}}},primaryShade:n,hover:function(e){return{"@media (hover: hover)":{"&:hover":e},"@media (hover: none)":{"&:active":e}}},gradient:i,primaryColor:function(e){return t=>{const r=n(e)(t);return e.colors[e.primaryColor][r]}}};var f=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function g(e){return t=((e,t)=>{for(var r in t||(t={}))h.call(t,r)&&y(e,r,t[r]);if(m)for(var r of m(t))b.call(t,r)&&y(e,r,t[r]);return e})({},e),r={fn:{fontStyles:l.fontStyles(e),themeColor:l.themeColor(e),focusStyles:l.focusStyles(e),largerThan:l.largerThan(e),smallerThan:l.smallerThan(e),radialGradient:l.radialGradient,linearGradient:l.linearGradient,gradient:l.gradient(e),rgba:l.rgba,size:l.size,cover:l.cover,lighten:l.lighten,darken:l.darken,primaryShade:l.primaryShade(e),radius:l.radius(e),variant:l.variant(e),hover:l.hover,primaryColor:l.primaryColor(e)}},d(t,p(r));var t,r}},6896:function(e,t,r){"use strict";function n(e){return Object.keys(e).reduce(((t,r)=>(void 0!==e[r]&&(t[r]=e[r]),t)),{})}r.d(t,{L:function(){return n}})},8679:function(e,t,r){"use strict";var n=r(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return n.isMemo(e)?i:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=i;var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(m){var o=p(r);o&&o!==m&&e(t,o,n)}var i=l(r);f&&(i=i.concat(f(r)));for(var c=s(t),h=s(r),b=0;b<i.length;++b){var y=i[b];if(!a[y]&&(!n||!n[y])&&(!h||!h[y])&&(!c||!c[y])){var g=d(r,y);try{u(t,y,g)}catch(v){}}}}return t}},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(4259)}])},4259:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}r.r(t),r.d(t,{default:function(){return b}});var a=r(828),i=r(5893),c=r(9008),s=r.n(c),u=r(6972),l=r(5628),f=r(4065);var d=r(7294);function p(e,t,r){(0,d.useEffect)((()=>(window.addEventListener(e,t,r),()=>window.removeEventListener(e,t,r))),[])}function m(e){try{return JSON.parse(e)}catch(t){return e}}function h(e,t){const r="localStorage"===e?"mantine-local-storage":"mantine-session-storage";return function({key:n,defaultValue:o,getInitialValueInEffect:a=!0,deserialize:i=m,serialize:c=(e=>function(e,t){try{return JSON.stringify(e)}catch(r){throw new Error(`@mantine/hooks ${t}: Failed to serialize the value`)}}(e,t))}){const s=(0,d.useCallback)((t=>{if("undefined"===typeof window||!(e in window)||t)return null!=o?o:"";const r=window[e].getItem(n);return null!==r?i(r):null!=o?o:""}),[n,o]),[u,l]=(0,d.useState)(s(a)),f=(0,d.useCallback)((t=>{t instanceof Function?l((o=>{const a=t(o);return window[e].setItem(n,c(a)),window.dispatchEvent(new CustomEvent(r,{detail:{key:n,value:t(o)}})),a})):(window[e].setItem(n,c(t)),window.dispatchEvent(new CustomEvent(r,{detail:{key:n,value:t}})),l(t))}),[n]);return p("storage",(t=>{var r;t.storageArea===window[e]&&t.key===n&&l(i(null!=(r=t.newValue)?r:void 0))})),p(r,(e=>{e.detail.key===n&&l(e.detail.value)})),(0,d.useEffect)((()=>{void 0!==o&&void 0===u&&f(o)}),[o,u,f]),(0,d.useEffect)((()=>{a&&l(s())}),[]),[void 0===u?o:u,f]}}r(472);var b=function(e){var t,r,n,c=e.Component,d=e.pageProps,p=((0,f.a)("(prefers-color-scheme: dark)","dark"===t,r),(0,a.Z)((n={key:"mantine-color-scheme",defaultValue:"light",getInitialValueInEffect:!0},h("localStorage","use-local-storage")(n)),2)),m=p[0],b=p[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s(),{children:[(0,i.jsx)("title",{children:"docsQL"}),(0,i.jsx)("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon-32x32.png"})]}),(0,i.jsx)(u.A,{colorScheme:m,toggleColorScheme:function(e){return b(e||("dark"===m?"light":"dark"))},children:(0,i.jsx)(l.Me,{theme:{colorScheme:m,fontFamilyMonospace:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace"},withGlobalStyles:!0,withNormalizeCSS:!0,children:(0,i.jsx)(c,o({},d))})})]})}},472:function(){},9008:function(e,t,r){e.exports=r(5443)},9921:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function k(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case l:case f:case a:case c:case i:case p:return e;default:switch(e=e&&e.$$typeof){case u:case d:case b:case h:case s:return e;default:return t}}case o:return t}}}function S(e){return k(e)===f}t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=s,t.Element=n,t.ForwardRef=d,t.Fragment=a,t.Lazy=b,t.Memo=h,t.Portal=o,t.Profiler=c,t.StrictMode=i,t.Suspense=p,t.isAsyncMode=function(e){return S(e)||k(e)===l},t.isConcurrentMode=S,t.isContextConsumer=function(e){return k(e)===u},t.isContextProvider=function(e){return k(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return k(e)===d},t.isFragment=function(e){return k(e)===a},t.isLazy=function(e){return k(e)===b},t.isMemo=function(e){return k(e)===h},t.isPortal=function(e){return k(e)===o},t.isProfiler=function(e){return k(e)===c},t.isStrictMode=function(e){return k(e)===i},t.isSuspense=function(e){return k(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===f||e===c||e===i||e===p||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===h||e.$$typeof===s||e.$$typeof===u||e.$$typeof===d||e.$$typeof===g||e.$$typeof===v||e.$$typeof===w||e.$$typeof===y)},t.typeOf=k},9864:function(e,t,r){"use strict";e.exports=r(9921)},7462:function(e,t,r){"use strict";function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:function(){return n}})},943:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},3375:function(e,t,r){"use strict";function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r.d(t,{Z:function(){return n}})},828:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(3375);var o=r(1566);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||(0,n.Z)(e,t)||(0,o.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(943);function o(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(387)}));var r=e.O();_N_E=r}]);