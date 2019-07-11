/*!
 * modernizr v3.7.1
 * Build https://modernizr.com/download?-displaytable-flexbox-flexboxlegacy-flexboxtweener-flexwrap-fontface-setclasses-shiv-teststyles-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera
 *  Veeck

 * MIT License
 */
!function(a,u,d){var i=[],e={_version:"3.7.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){i.push({name:e,fn:t,options:n})},addAsyncTest:function(e){i.push({name:null,fn:e})}},l=function(){};l.prototype=e,l=new l;var c=[];function p(e,t){return typeof e===t}var m=u.documentElement,h="svg"===m.nodeName.toLowerCase();function g(e){return"function"!=typeof u.createElement?u.createElement(e):h?u.createElementNS.call(u,"http://www.w3.org/2000/svg",e):u.createElement.apply(u,arguments)}function o(e,t,n,r){var o,a,s,i,l="modernizr",c=g("div"),f=function(){var e=u.body;return e||((e=g(h?"svg":"body")).fake=!0),e}();if(parseInt(n,10))for(;n--;)(s=g("div")).id=r?r[n]:l+(n+1),c.appendChild(s);return(o=g("style")).type="text/css",o.id="s"+l,(f.fake?f:c).appendChild(o),f.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(u.createTextNode(e)),c.id=l,f.fake&&(f.style.background="",f.style.overflow="hidden",i=m.style.overflow,m.style.overflow="hidden",m.appendChild(f)),a=t(c,e),f.fake?(f.parentNode.removeChild(f),m.style.overflow=i,m.offsetHeight):c.parentNode.removeChild(c),!!a}var t=e.testStyles=o;h||function(e,s){var n,i,t=e.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,a=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,r="_html5shiv",l=0,c={};function f(){var e=m.elements;return"string"==typeof e?e.split(" "):e}function u(e){var t=c[e[r]];return t||(t={},l++,e[r]=l,c[l]=t),t}function d(e,t,n){return t=t||s,i?t.createElement(e):!(r=(n=n||u(t)).cache[e]?n.cache[e].cloneNode():a.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren||o.test(e)||r.tagUrn?r:n.frag.appendChild(r);var r}function p(e){var t=u(e=e||s);return!m.shivCSS||n||t.hasCSS||(t.hasCSS=!!function(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),i||function(t,n){n.cache||(n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag()),t.createElement=function(e){return m.shivMethods?d(e,t,n):n.createElem(e)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+f().join().replace(/[\w\-:]+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(m,n.frag)}(e,t),e}!function(){try{var e=s.createElement("a");e.innerHTML="<xyz></xyz>",n="hidden"in e,i=1==e.childNodes.length||function(){s.createElement("a");var e=s.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){i=n=!0}}();var m={elements:t.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==t.shivCSS,supportsUnknownElements:i,shivMethods:!1!==t.shivMethods,type:"default",shivDocument:p,createElement:d,createDocumentFragment:function(e,t){if(e=e||s,i)return e.createDocumentFragment();for(var n=(t=t||u(e)).frag.cloneNode(),r=0,o=f(),a=o.length;r<a;r++)n.createElement(o[r]);return n},addElements:function(e,t){var n=m.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),m.elements=n+" "+e,p(t)}};e.html5=m,p(s),"object"==typeof module&&module.exports&&(module.exports=m)}(void 0!==a?a:this,u),
/*!
{
  "name": "CSS Display table",
  "property": "displaytable",
  "caniuse": "css-table",
  "authors": ["scottjehl"],
  "tags": ["css"],
  "builderAliases": ["css_displaytable"],
  "notes": [{
    "name": "Detects for all additional table display values",
    "href": "https://pastebin.com/Gk9PeVaQ"
  }]
}
!*/
t("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,l.addTest("displaytable",t,{aliases:["display-table"]})},2);var n="Moz O ms Webkit",f=e._config.usePrefixes?n.split(" "):[];e._cssomPrefixes=f;var r={elem:g("modernizr")};l._q.push(function(){delete r.elem});var v={style:r.elem.style};function s(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function y(e,t){var n=e.length;if("CSS"in a&&"supports"in a.CSS){for(;n--;)if(a.CSS.supports(s(e[n]),t))return!0;return!1}if("CSSSupportsRule"in a){for(var r=[];n--;)r.push("("+s(e[n])+":"+t+")");return o("@supports ("+(r=r.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"===function(e,t,n){var r;if("getComputedStyle"in a){r=getComputedStyle.call(a,e,t);var o=a.console;if(null!==r)n&&(r=r.getPropertyValue(n));else if(o)o[o.error?"error":"log"].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else r=!t&&e.currentStyle&&e.currentStyle[n];return r}(e,null,"position")})}return d}l._q.unshift(function(){delete v.style});var x,b,C,E=e._config.usePrefixes?n.toLowerCase().split(" "):[];function S(e,t){return function(){return e.apply(t,arguments)}}function w(e,t,n,r,o){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+f.join(a+" ")+a).split(" ");return p(t,"string")||p(t,"undefined")?function(e,t,n,r){if(r=!p(r,"undefined")&&r,!p(n,"undefined")){var o=y(e,n);if(!p(o,"undefined"))return o}for(var a,s,i,l,c,f=["modernizr","tspan","samp"];!v.style&&f.length;)a=!0,v.modElem=g(f.shift()),v.style=v.modElem.style;function u(){a&&(delete v.style,delete v.modElem)}for(i=e.length,s=0;s<i;s++)if(l=e[s],c=v.style[l],~(""+l).indexOf("-")&&(l=l.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")),v.style[l]!==d){if(r||p(n,"undefined"))return u(),"pfx"!==t||l;try{v.style[l]=n}catch(e){}if(v.style[l]!==c)return u(),"pfx"!==t||l}return u(),!1}(s,t,r,o):function(e,t,n){var r;for(var o in e)if(e[o]in t)return!1===n?e[o]:p(r=t[e[o]],"function")?S(r,n||t):r;return!1}(s=(e+" "+E.join(a+" ")+a).split(" "),t,n)}function T(e,t,n){return w(e,d,d,t,n)}e._domPrefixes=E,e.testAllProps=w,e.testAllProps=T,
/*!
{
  "name": "Flexbox",
  "property": "flexbox",
  "caniuse": "flexbox",
  "tags": ["css"],
  "notes": [{
    "name": "The _new_ flexbox",
    "href": "https://www.w3.org/TR/css-flexbox-1/"
  }],
  "warnings": [
    "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
  ]
}
!*/
l.addTest("flexbox",T("flexBasis","1px",!0)),
/*!
{
  "name": "Flexbox (legacy)",
  "property": "flexboxlegacy",
  "tags": ["css"],
  "polyfills": ["flexie"],
  "notes": [{
    "name": "The _old_ flexbox",
    "href": "https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/"
  }]
}
!*/
l.addTest("flexboxlegacy",T("boxDirection","reverse",!0)),
/*!
{
  "name": "Flexbox (tweener)",
  "property": "flexboxtweener",
  "tags": ["css"],
  "polyfills": ["flexie"],
  "notes": [{
    "name": "The _inbetween_ flexbox",
    "href": "https://www.w3.org/TR/2011/WD-css3-flexbox-20111129/"
  }],
  "warnings": ["This represents an old syntax, not the latest standard syntax."]
}
!*/
l.addTest("flexboxtweener",T("flexAlign","end",!0)),
/*!
{
  "name": "Flex Line Wrapping",
  "property": "flexwrap",
  "tags": ["css", "flexbox"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/css-flexbox-1/"
  }],
  "warnings": [
    "Does not imply a modern implementation – see documentation."
  ]
}
!*/
l.addTest("flexwrap",T("flexWrap","wrap",!0)),(x=navigator.userAgent,b=x.match(/w(eb)?osbrowser/gi),C=x.match(/windows phone/gi)&&x.match(/iemobile\/([0-9])+/gi)&&9<=parseFloat(RegExp.$1),b||C)?l.addTest("fontface",!1):t('@font-face {font-family:"font";src:url("https://")}',function(e,t){var n=u.getElementById("smodernizr"),r=n.sheet||n.styleSheet,o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",a=/src/i.test(o)&&0===o.indexOf(t.split(" ")[0]);l.addTest("fontface",a)}),function(){var e,t,n,r,o,a;for(var s in i)if(i.hasOwnProperty(s)){if(e=[],(t=i[s]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=p(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)1===(a=e[o].split(".")).length?l[a[0]]=r:(!l[a[0]]||l[a[0]]instanceof Boolean||(l[a[0]]=new Boolean(l[a[0]])),l[a[0]][a[1]]=r),c.push((r?"":"no-")+a.join("-"))}}(),function(e){var t=m.className,n=l._config.classPrefix||"";if(h&&(t=t.baseVal),l._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}l._config.enableClasses&&(0<e.length&&(t+=" "+n+e.join(" "+n)),h?m.className.baseVal=t:m.className=t)}(c),delete e.addTest,delete e.addAsyncTest;for(var N=0;N<l._q.length;N++)l._q[N]();a.Modernizr=l}(window,document);