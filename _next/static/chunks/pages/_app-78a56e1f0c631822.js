(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4474:function(e,t,r){"use strict";r.d(t,{Z:function(){return oe}});var n=r(1526),o=Math.abs,a=String.fromCharCode,i=Object.assign;function c(e){return e.trim()}function s(e,t,r){return e.replace(t,r)}function u(e,t){return e.indexOf(t)}function f(e,t){return 0|e.charCodeAt(t)}function l(e,t,r){return e.slice(t,r)}function d(e){return e.length}function p(e){return e.length}function b(e,t){return t.push(e),e}var m=1,h=1,y=0,g=0,v=0,x="";function w(e,t,r,n,o,a,i){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:m,column:h,length:i,return:""}}function S(e,t){return i(w("",null,null,"",null,null,0),e,{length:-e.length},t)}function k(){return v=g>0?f(x,--g):0,h--,10===v&&(h=1,m--),v}function $(){return v=g<y?f(x,g++):0,h++,10===v&&(h=1,m++),v}function C(){return f(x,g)}function O(){return g}function z(e,t){return l(x,e,t)}function j(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function P(e){return m=h=1,y=d(x=e),g=0,[]}function A(e){return x="",e}function E(e){return c(z(g-1,F(91===e?e+2:40===e?e+1:e)))}function M(e){for(;(v=C())&&v<33;)$();return j(e)>2||j(v)>3?"":" "}function _(e,t){for(;--t&&$()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return z(e,O()+(t<6&&32==C()&&32==$()))}function F(e){for(;$();)switch(v){case e:return g;case 34:case 39:34!==e&&39!==e&&F(v);break;case 40:41===e&&F(e);break;case 92:$()}return g}function N(e,t){for(;$()&&e+v!==57&&(e+v!==84||47!==C()););return"/*"+z(t,g-1)+"*"+a(47===e?e:$())}function T(e){for(;!j(C());)$();return z(e,g)}var I="-ms-",H="-moz-",R="-webkit-",L="comm",G="rule",D="decl",W="@keyframes";function B(e,t){for(var r="",n=p(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function U(e,t,r,n){switch(e.type){case"@import":case D:return e.return=e.return||e.value;case L:return"";case W:return e.return=e.value+"{"+B(e.children,n)+"}";case G:e.value=e.props.join(",")}return d(r=B(e.children,n))?e.return=e.value+"{"+r+"}":""}function V(e,t){switch(function(e,t){return(((t<<2^f(e,0))<<2^f(e,1))<<2^f(e,2))<<2^f(e,3)}(e,t)){case 5103:return R+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return R+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return R+e+H+e+I+e+e;case 6828:case 4268:return R+e+I+e+e;case 6165:return R+e+I+"flex-"+e+e;case 5187:return R+e+s(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return R+e+I+"flex-item-"+s(e,/flex-|-self/,"")+e;case 4675:return R+e+I+"flex-line-pack"+s(e,/align-content|flex-|-self/,"")+e;case 5548:return R+e+I+s(e,"shrink","negative")+e;case 5292:return R+e+I+s(e,"basis","preferred-size")+e;case 6060:return R+"box-"+s(e,"-grow","")+R+e+I+s(e,"grow","positive")+e;case 4554:return R+s(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return s(s(s(e,/(zoom-|grab)/,R+"$1"),/(image-set)/,R+"$1"),e,"")+e;case 5495:case 3959:return s(e,/(image-set\([^]*)/,R+"$1$`$1");case 4968:return s(s(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+R+e+e;case 4095:case 3583:case 4068:case 2532:return s(e,/(.+)-inline(.+)/,R+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(d(e)-1-t>6)switch(f(e,t+1)){case 109:if(45!==f(e,t+4))break;case 102:return s(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+H+(108==f(e,t+3)?"$3":"$2-$3"))+e;case 115:return~u(e,"stretch")?V(s(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==f(e,t+1))break;case 6444:switch(f(e,d(e)-3-(~u(e,"!important")&&10))){case 107:return s(e,":",":"+R)+e;case 101:return s(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+R+(45===f(e,14)?"inline-":"")+"box$3$1"+R+"$2$3$1"+I+"$2box$3")+e}break;case 5936:switch(f(e,t+11)){case 114:return R+e+I+s(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return R+e+I+s(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return R+e+I+s(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return R+e+I+e+e}return e}function Y(e){return A(Z("",null,null,null,[""],e=P(e),0,[0],e))}function Z(e,t,r,n,o,i,c,f,l){for(var p=0,m=0,h=c,y=0,g=0,v=0,x=1,w=1,S=1,z=0,j="",P=o,A=i,F=n,I=j;w;)switch(v=z,z=$()){case 40:if(108!=v&&58==I.charCodeAt(h-1)){-1!=u(I+=s(E(z),"&","&\f"),"&\f")&&(S=-1);break}case 34:case 39:case 91:I+=E(z);break;case 9:case 10:case 13:case 32:I+=M(v);break;case 92:I+=_(O()-1,7);continue;case 47:switch(C()){case 42:case 47:b(X(N($(),O()),t,r),l);break;default:I+="/"}break;case 123*x:f[p++]=d(I)*S;case 125*x:case 59:case 0:switch(z){case 0:case 125:w=0;case 59+m:g>0&&d(I)-h&&b(g>32?Q(I+";",n,r,h-1):Q(s(I," ","")+";",n,r,h-2),l);break;case 59:I+=";";default:if(b(F=q(I,t,r,p,m,o,f,j,P=[],A=[],h),i),123===z)if(0===m)Z(I,t,F,F,P,i,h,f,A);else switch(y){case 100:case 109:case 115:Z(e,F,F,n&&b(q(e,F,F,0,0,o,f,j,o,P=[],h),A),o,A,h,f,n?P:A);break;default:Z(I,F,F,F,[""],A,0,f,A)}}p=m=g=0,x=S=1,j=I="",h=c;break;case 58:h=1+d(I),g=v;default:if(x<1)if(123==z)--x;else if(125==z&&0==x++&&125==k())continue;switch(I+=a(z),z*x){case 38:S=m>0?1:(I+="\f",-1);break;case 44:f[p++]=(d(I)-1)*S,S=1;break;case 64:45===C()&&(I+=E($())),y=C(),m=h=d(j=I+=T(O())),z++;break;case 45:45===v&&2==d(I)&&(x=0)}}return i}function q(e,t,r,n,a,i,u,f,d,b,m){for(var h=a-1,y=0===a?i:[""],g=p(y),v=0,x=0,S=0;v<n;++v)for(var k=0,$=l(e,h+1,h=o(x=u[v])),C=e;k<g;++k)(C=c(x>0?y[k]+" "+$:s($,/&\f/g,y[k])))&&(d[S++]=C);return w(e,t,r,0===a?G:f,d,b,m)}function X(e,t,r){return w(e,t,r,L,a(v),l(e,2,-2),0)}function Q(e,t,r,n){return w(e,t,r,D,l(e,0,n),l(e,n+1,-1),n)}var J=function(e,t,r){for(var n=0,o=0;n=o,o=C(),38===n&&12===o&&(t[r]=1),!j(o);)$();return z(e,g)},K=function(e,t){return A(function(e,t){var r=-1,n=44;do{switch(j(n)){case 0:38===n&&12===C()&&(t[r]=1),e[r]+=J(g-1,t,r);break;case 2:e[r]+=E(n);break;case 4:if(44===n){e[++r]=58===C()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=a(n)}}while(n=$());return e}(P(e),t))},ee=new WeakMap,te=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ee.get(r))&&!n){ee.set(e,!0);for(var o=[],a=K(t,o),i=r.props,c=0,s=0;c<a.length;c++)for(var u=0;u<i.length;u++,s++)e.props[s]=o[c]?a[c].replace(/&\f/g,i[u]):i[u]+" "+a[c]}}},re=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},ne=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case D:e.return=V(e.value,e.length);break;case W:return B([S(e,{value:s(e.value,"@","@"+R)})],n);case G:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return B([S(e,{props:[s(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return B([S(e,{props:[s(t,/:(plac\w+)/,":-webkit-input-$1")]}),S(e,{props:[s(t,/:(plac\w+)/,":-moz-$1")]}),S(e,{props:[s(t,/:(plac\w+)/,I+"input-$1")]})],n)}return""}))}}],oe=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var o=e.stylisPlugins||ne;var a,i,c={},s=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)c[t[r]]=!0;s.push(e)}));var u,f,l=[U,(f=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&f(e)})],d=function(e){var t=p(e);return function(r,n,o,a){for(var i="",c=0;c<t;c++)i+=e[c](r,n,o,a)||"";return i}}([te,re].concat(o,l));i=function(e,t,r,n){u=r,B(Y(e?e+"{"+t.styles+"}":t.styles),d),n&&(b.inserted[t.name]=!0)};var b={key:t,sheet:new n.m({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:c,registered:{},insert:i};return b.sheet.hydrate(s),b}},2243:function(e,t,r){"use strict";r.d(t,{O:function(){return b}});var n=function(e){for(var t,r=0,n=0,o=e.length;o>=4;++n,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(o){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},o={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var a=/[A-Z]|^ms/g,i=/_EMO_([^_]+?)_([^]*?)_EMO_/g,c=function(e){return 45===e.charCodeAt(1)},s=function(e){return null!=e&&"boolean"!==typeof e},u=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return c(e)?e:e.replace(a,"-$&").toLowerCase()})),f=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(i,(function(e,t,r){return d={name:t,styles:r,next:d},t}))}return 1===o[e]||c(e)||"number"!==typeof t||0===t?t:t+"px"};function l(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return d={name:r.name,styles:r.styles,next:d},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)d={name:n.name,styles:n.styles,next:d},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=l(e,t,r[o])+";";else for(var a in r){var i=r[a];if("object"!==typeof i)null!=t&&void 0!==t[i]?n+=a+"{"+t[i]+"}":s(i)&&(n+=u(a)+":"+f(a,i)+";");else if(!Array.isArray(i)||"string"!==typeof i[0]||null!=t&&void 0!==t[i[0]]){var c=l(e,t,i);switch(a){case"animation":case"animationName":n+=u(a)+":"+c+";";break;default:n+=a+"{"+c+"}"}}else for(var d=0;d<i.length;d++)s(i[d])&&(n+=u(a)+":"+f(a,i[d])+";")}return n}(e,t,r);case"function":if(void 0!==e){var o=d,a=r(e);return d=o,l(e,t,a)}break;case"string":}if(null==t)return r;var i=t[r];return void 0!==i?i:r}var d,p=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var b=function(e,t,r){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var o=!0,a="";d=void 0;var i=e[0];null==i||void 0===i.raw?(o=!1,a+=l(r,t,i)):a+=i[0];for(var c=1;c<e.length;c++)a+=l(r,t,e[c]),o&&(a+=i[c]);p.lastIndex=0;for(var s,u="";null!==(s=p.exec(a));)u+="-"+s[1];return{name:n(a)+u,styles:a,next:d}}},1526:function(e,t,r){"use strict";r.d(t,{m:function(){return n}});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}()},444:function(e,t,r){"use strict";r.d(t,{f:function(){return n},M:function(){return o}});function n(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var o=function(e,t,r){var n=e.key+"-"+t.name;if(!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles),void 0===e.inserted[t.name]){var o=t;do{e.insert(t===o?"."+n:"",o,e.sheet,!0);o=o.next}while(void 0!==o)}}},4065:function(e,t,r){"use strict";r.d(t,{a:function(){return o}});var n=r(7294);function o(e){const[t,r]=(0,n.useState)(function(e){return"undefined"!==typeof window&&"matchMedia"in window&&window.matchMedia(e).matches}(e)),o=(0,n.useRef)();return(0,n.useEffect)((()=>{if("matchMedia"in window)return o.current=window.matchMedia(e),r(o.current.matches),function(e,t){try{return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}catch(r){return e.addListener(t),()=>e.removeListener(t)}}(o.current,(e=>r(e.matches)))}),[e]),t}},6972:function(e,t,r){"use strict";r.d(t,{A:function(){return i},X:function(){return a}});var n=r(7294);const o=(0,n.createContext)(null);function a(){const e=(0,n.useContext)(o);if(!e)throw new Error("useMantineColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return e}function i({colorScheme:e,toggleColorScheme:t,children:r}){const[a,i]=(0,n.useState)("init");return(0,n.useEffect)((()=>{i("update")}),[]),n.createElement(o.Provider,{key:a,value:{colorScheme:e,toggleColorScheme:t}},r)}i.displayName="@mantine/core/ColorSchemeProvider"},1129:function(e,t,r){"use strict";r.d(t,{Me:function(){return H},ly:function(){return T},rZ:function(){return F},sr:function(){return N}});var n=r(7294),o=r(4474),a=r(2243),i=(0,n.createContext)("undefined"!==typeof HTMLElement?(0,o.Z)({key:"css"}):null);i.Provider;var c=function(e){return(0,n.forwardRef)((function(t,r){var o=(0,n.useContext)(i);return e(t,o,r)}))},s=(0,n.createContext)({});r(8679);var u=r(444),f=r(1526),l=c((function(e,t){var r=e.styles,o=(0,a.O)([r],void 0,(0,n.useContext)(s)),i=(0,n.useRef)();return(0,n.useLayoutEffect)((function(){var e=t.key+"-global",r=new f.m({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),n=!1,a=document.querySelector('style[data-emotion="'+e+" "+o.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==a&&(n=!0,a.setAttribute("data-emotion",e),r.hydrate([a])),i.current=[r,n],function(){r.flush()}}),[t]),(0,n.useLayoutEffect)((function(){var e=i.current,r=e[0];if(e[1])e[1]=!1;else{if(void 0!==o.next&&(0,u.M)(t,o.next,!0),r.tags.length){var n=r.tags[r.tags.length-1].nextElementSibling;r.before=n,r.flush()}t.insert("",o,r,!1)}}),[t,o.name]),null}));var d=r(7447),p=r(320),b=Object.defineProperty,m=Object.defineProperties,h=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,w=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&x(e,r,t[r]);if(y)for(var r of y(t))v.call(t,r)&&x(e,r,t[r]);return e},S=(e,t)=>m(e,h(t));const k={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}};function $(){return n.createElement(l,{styles:k})}var C=Object.defineProperty,O=Object.defineProperties,z=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,E=(e,t,r)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,M=(e,t)=>{for(var r in t||(t={}))P.call(t,r)&&E(e,r,t[r]);if(j)for(var r of j(t))A.call(t,r)&&E(e,r,t[r]);return e};const _=(0,n.createContext)({theme:d.t0,styles:{},emotionOptions:{key:"mantine",prepend:!0}});function F(){var e;return(null==(e=(0,n.useContext)(_))?void 0:e.theme)||d.t0}function N(){var e;return(null==(e=(0,n.useContext)(_))?void 0:e.styles)||{}}function T(){var e;return(null==(e=(0,n.useContext)(_))?void 0:e.emotionOptions)||{key:"mantine",prepend:!0}}function I(){const e=F();return n.createElement(l,{styles:{"*, *::before, *::after":{boxSizing:"border-box"},body:(t=M({},e.fn.fontStyles()),r={backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,lineHeight:e.lineHeight,fontSizes:e.fontSizes.md},O(t,z(r)))}});var t,r}function H({theme:e,styles:t={},emotionOptions:r,withNormalizeCSS:o=!1,withGlobalStyles:a=!1,children:i}){return n.createElement(_.Provider,{value:{theme:(c=d.t0,s=e,s?(0,p.P)(Object.keys(c).reduce(((e,t)=>{if("headings"===t&&s.headings){const t=s.headings.sizes?Object.keys(c.headings.sizes).reduce(((e,t)=>(e[t]=w(w({},c.headings.sizes[t]),s.headings.sizes[t]),e)),{}):c.headings.sizes;return S(w({},e),{headings:S(w(w({},c.headings),s.headings),{sizes:t})})}return e[t]="object"===typeof s[t]?w(w({},c[t]),s[t]):s[t]||c[t],e}),{})):(0,p.P)(c)),styles:t,emotionOptions:r}},o&&n.createElement($,null),a&&n.createElement(I,null),i);var c,s}H.displayName="@mantine/core/MantineProvider"},7447:function(e,t,r){"use strict";r.d(t,{t0:function(){return c},j1:function(){return a}});const n={dark:["#C1C2C5","#A6A7AB","#909296","#5c5f66","#373A40","#2C2E33","#25262b","#1A1B1E","#141517","#101113"],gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]};var o=r(320);Object.keys(n);const a=["xs","sm","md","lg","xl"],i={dir:"ltr",loader:"oval",dateFormat:"MMMM D, YYYY",colorScheme:"light",white:"#fff",black:"#000",transitionTimingFunction:"cubic-bezier(.51,.3,0,1.21)",colors:n,lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:"blue",shadows:{xs:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",sm:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",md:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",lg:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xl:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},fontSizes:{xs:12,sm:14,md:16,lg:18,xl:20},radius:{xs:2,sm:4,md:8,lg:16,xl:32},spacing:{xs:10,sm:12,md:16,lg:20,xl:24},breakpoints:{xs:576,sm:768,md:992,lg:1200,xl:1400},headings:{fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontWeight:700,sizes:{h1:{fontSize:34,lineHeight:1.3},h2:{fontSize:26,lineHeight:1.35},h3:{fontSize:22,lineHeight:1.4},h4:{fontSize:18,lineHeight:1.45},h5:{fontSize:16,lineHeight:1.5},h6:{fontSize:14,lineHeight:1.5}}},other:{},datesLocale:"en"},c=(0,o.P)(i)},320:function(e,t,r){"use strict";function n(e){let t="";for(let r=1;r<e.length-1;r+=1)t+=`${e[r]} ${r/(e.length-1)*100}%, `;return`${e[0]} 0%, ${t}${e[e.length-1]} 100%`}function o(e){return"number"===typeof e.size?e.size:e.sizes[e.size]||e.size||e.sizes.md}function a(e){return function(e){const t=e.replace("#","");return"string"===typeof t&&6===t.length&&!Number.isNaN(Number(`0x${t}`))}(e)?function(e){const t=e.replace("#",""),r=parseInt(t,16);return{r:r>>16&255,g:r>>8&255,b:255&r,a:1}}(e):e.startsWith("rgb")?function(e){const[t,r,n,o]=e.replace(/[^0-9,.]/g,"").split(",").map(Number);return{r:t,g:r,b:n,a:o||1}}(e):{r:0,g:0,b:0,a:1}}r.d(t,{P:function(){return b}});const i={fontStyles:function(e){return()=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:e.fontFamily||"sans-serif"})},themeColor:function(e){return(t,r,n=!0)=>{const o=e.colors[e.primaryColor];return t in e.colors?e.colors[t][r]:n?o[r]:t}},focusStyles:function(e){return()=>({WebkitTapHighlightColor:"transparent","&:focus":{outline:"none",boxShadow:`0 0 0 2px ${"dark"===e.colorScheme?e.colors.dark[9]:e.white}, 0 0 0 4px ${e.colors[e.primaryColor]["dark"===e.colorScheme?7:5]}`},"&:focus:not(:focus-visible)":{boxShadow:"none"}})},linearGradient:function(e,...t){return`linear-gradient(${e}deg, ${n(t)})`},radialGradient:function(...e){return`radial-gradient(circle, ${n(e)})`},smallerThan:function(e){return t=>`@media (max-width: ${o({size:t,sizes:e.breakpoints})}px)`},largerThan:function(e){return t=>`@media (min-width: ${o({size:t,sizes:e.breakpoints})+1}px)`},rgba:function(e,t){if("string"!==typeof e||t>1||t<0)return"rgba(0, 0, 0, 1)";const{r:r,g:n,b:o}=a(e);return`rgba(${r}, ${n}, ${o}, ${t})`},size:o,cover:function(e=0){return{position:"absolute",top:e,right:e,left:e,bottom:e}},darken:function(e,t){const{r:r,g:n,b:o,a:i}=a(e),c=1-t,s=e=>Math.round(e*c);return`rgba(${s(r)}, ${s(n)}, ${s(o)}, ${i})`},lighten:function(e,t){const{r:r,g:n,b:o,a:i}=a(e),c=e=>Math.round(e+(255-e)*t);return`rgba(${c(r)}, ${c(n)}, ${c(o)}, ${i})`}};var c=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function b(e){return t=((e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(f)for(var r of f(t))d.call(t,r)&&p(e,r,t[r]);return e})({},e),r={fn:{fontStyles:i.fontStyles(e),themeColor:i.themeColor(e),focusStyles:i.focusStyles(e),largerThan:i.largerThan(e),smallerThan:i.smallerThan(e),radialGradient:i.radialGradient,linearGradient:i.linearGradient,rgba:i.rgba,size:i.size,cover:i.cover,lighten:i.lighten,darken:i.darken}},s(t,u(r));var t,r}},8679:function(e,t,r){"use strict";var n=r(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return n.isMemo(e)?i:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=i;var u=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,b=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(b){var o=p(r);o&&o!==b&&e(t,o,n)}var i=f(r);l&&(i=i.concat(l(r)));for(var c=s(t),m=s(r),h=0;h<i.length;++h){var y=i[h];if(!a[y]&&(!n||!n[y])&&(!m||!m[y])&&(!c||!c[y])){var g=d(r,y);try{u(t,y,g)}catch(v){}}}}return t}},6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(8319)}])},8319:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(5893),o=r(9008),a=r(6972),i=r(1129),c=r(4065);var s=r(7294);function u({key:e,defaultValue:t}){const[r,n]=(0,s.useState)("undefined"!==typeof window&&"localStorage"in window?window.localStorage.getItem(e):null!=t?t:""),o=(0,s.useCallback)((t=>{"function"===typeof t?n((r=>{const n=t(r);return window.localStorage.setItem(e,n),n})):(window.localStorage.setItem(e,t),n(t))}),[e]);var a,i,c;return a="storage",i=t=>{t.storageArea===window.localStorage&&t.key===e&&n(t.newValue)},(0,s.useEffect)((()=>(window.addEventListener(a,i,c),()=>window.removeEventListener(a,i,c))),[]),(0,s.useEffect)((()=>{t&&!r&&o(t)}),[t,r,o]),[r||t,o]}r(472);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(s){c=!0,o=s}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=function(e){var t=e.Component,r=e.pageProps,s=p(u({key:"mantine-color-scheme",defaultValue:(0,c.a)("(prefers-color-scheme: dark)")?"dark":"light"}),2),f=s[0],l=s[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"docsQL"}),(0,n.jsx)("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"})]}),(0,n.jsx)(a.A,{colorScheme:f,toggleColorScheme:function(e){return l(e||("dark"===f?"light":"dark"))},children:(0,n.jsx)(i.Me,{theme:{colorScheme:f,fontFamilyMonospace:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace"},children:(0,n.jsx)(t,d({},r))})})]})}},472:function(){},9008:function(e,t,r){e.exports=r(5443)},9921:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,b=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case l:case a:case c:case i:case p:return e;default:switch(e=e&&e.$$typeof){case u:case d:case h:case m:case s:return e;default:return t}}case o:return t}}}function S(e){return w(e)===l}t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=u,t.ContextProvider=s,t.Element=n,t.ForwardRef=d,t.Fragment=a,t.Lazy=h,t.Memo=m,t.Portal=o,t.Profiler=c,t.StrictMode=i,t.Suspense=p,t.isAsyncMode=function(e){return S(e)||w(e)===f},t.isConcurrentMode=S,t.isContextConsumer=function(e){return w(e)===u},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===a},t.isLazy=function(e){return w(e)===h},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===o},t.isProfiler=function(e){return w(e)===c},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===l||e===c||e===i||e===p||e===b||"object"===typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===s||e.$$typeof===u||e.$$typeof===d||e.$$typeof===g||e.$$typeof===v||e.$$typeof===x||e.$$typeof===y)},t.typeOf=w},9864:function(e,t,r){"use strict";e.exports=r(9921)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(387)}));var r=e.O();_N_E=r}]);