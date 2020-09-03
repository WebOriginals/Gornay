/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csscalc-cssgrid_cssgridlegacy-csspointerevents-csstransforms-csstransforms3d-csstransitions-cssvhunit-cssvwunit-flexbox-flexboxlegacy-flexwrap-nthchild-opacity-preserve3d-svg-touchevents-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function s(){var e,t,n,s,o,i,a;for(var l in T)if(T.hasOwnProperty(l)){if(e=[],t=T[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),w.push((s?"":"no-")+a.join("-"))}}function o(e){var t=S.className,n=Modernizr._config.classPrefix||"";if(b&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),b?S.className.baseVal=t:S.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):b?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(t,n,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,t,n);var o=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!n&&t.currentStyle&&t.currentStyle[r];return s}function l(e,t){return e-1===t||e===t||e+1===t}function d(){var e=t.body;return e||(e=i(b?"svg":"body"),e.fake=!0),e}function u(e,n,r,s){var o,a,l,u,f="modernizr",c=i("div"),p=d();if(parseInt(r,10))for(;r--;)l=i("div"),l.id=s?s[r]:f+(r+1),c.appendChild(l);return o=i("style"),o.type="text/css",o.id="s"+f,(p.fake?p:c).appendChild(o),p.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),c.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),a=n(c,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=u,S.offsetHeight):c.parentNode.removeChild(c),!!a}function f(e,t){return!!~(""+e).indexOf(t)}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function p(e,t){return function(){return e.apply(t,arguments)}}function m(e,t,n){var s;for(var o in e)if(e[o]in t)return n===!1?e[o]:(s=t[e[o]],r(s,"function")?p(s,n||t):s);return!1}function h(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function v(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(h(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+h(t[s])+":"+r+")");return o=o.join(" or "),u("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==a(e,null,"position")})}return n}function g(e,t,s,o){function a(){d&&(delete I.style,delete I.modElem)}if(o=r(o,"undefined")?!1:o,!r(s,"undefined")){var l=v(e,s);if(!r(l,"undefined"))return l}for(var d,u,p,m,h,g=["modernizr","tspan","samp"];!I.style&&g.length;)d=!0,I.modElem=i(g.shift()),I.style=I.modElem.style;for(p=e.length,u=0;p>u;u++)if(m=e[u],h=I.style[m],f(m,"-")&&(m=c(m)),I.style[m]!==n){if(o||r(s,"undefined"))return a(),"pfx"==t?m:!0;try{I.style[m]=s}catch(y){}if(I.style[m]!=h)return a(),"pfx"==t?m:!0}return a(),!1}function y(e,t,n,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+j.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?g(a,t,s,o):(a=(e+" "+k.join(i+" ")+i).split(" "),m(a,t,n))}function x(e,t,r){return y(e,n,n,t,r)}var w=[],T=[],C={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){T.push({name:e,fn:t,options:n})},addAsyncTest:function(e){T.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr,Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var S=t.documentElement,b="svg"===S.nodeName.toLowerCase(),_=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=_,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=i("a");return n.style.cssText=e+_.join(t+e),!!n.style.length}),Modernizr.addTest("opacity",function(){var e=i("a").style;return e.cssText=_.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("csspointerevents",function(){var e=i("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),Modernizr.addTest("preserve3d",function(){var t,n,r=e.CSS,s=!1;return r&&r.supports&&r.supports("(transform-style: preserve-3d)")?!0:(t=i("a"),n=i("a"),t.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",n.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",t.appendChild(n),S.appendChild(t),s=n.getBoundingClientRect(),S.removeChild(t),s=s.width&&s.width<4)});var z="CSS"in e&&"supports"in e.CSS,E="supportsCSS"in e;Modernizr.addTest("supports",z||E);var N=C.testStyles=u;Modernizr.addTest("touch",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",_.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");N(r,function(e){n=9===e.offsetTop})}return n}),N("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,r=0;5>r;r++)n=n&&t[r].offsetWidth===r%2+1;Modernizr.addTest("nthchild",n)},5),N("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt(a(t,null,"height"),10);Modernizr.addTest("cssvhunit",l(r,n))}),N("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),r=parseInt(a(t,null,"width"),10);Modernizr.addTest("cssvwunit",l(r,n))});var P="Moz O ms Webkit",j=C._config.usePrefixes?P.split(" "):[];C._cssomPrefixes=j;var k=C._config.usePrefixes?P.toLowerCase().split(" "):[];C._domPrefixes=k;var A={elem:i("modernizr")};Modernizr._q.push(function(){delete A.elem});var I={style:A.elem.style};Modernizr._q.unshift(function(){delete I.style}),C.testAllProps=y,C.testAllProps=x,Modernizr.addTest("cssgridlegacy",x("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",x("grid-template-rows","none",!0)),Modernizr.addTest("flexbox",x("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",x("boxDirection","reverse",!0)),Modernizr.addTest("flexwrap",x("flexWrap","wrap",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&x("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){return!!x("perspective","1px",!0)}),Modernizr.addTest("csstransitions",x("transition","all",!0)),s(),o(w),delete C.addTest,delete C.addAsyncTest;for(var q=0;q<Modernizr._q.length;q++)Modernizr._q[q]();e.Modernizr=Modernizr}(window,document);