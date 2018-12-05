/*!
 * modernizr v3.6.0
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

 * MIT License
 */
!function(a,u,p){var i=[],e={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){i.push({name:e,fn:t,options:n})},addAsyncTest:function(e){i.push({name:null,fn:e})}},l=function(){};l.prototype=e,l=new l;var c=[];function m(e,t){return typeof e===t}var h=u.documentElement,g="svg"===h.nodeName.toLowerCase();function v(){return"function"!=typeof u.createElement?u.createElement(arguments[0]):g?u.createElementNS.call(u,"http://www.w3.org/2000/svg",arguments[0]):u.createElement.apply(u,arguments)}function o(e,t,n,r){var o,a,s,i,l,c="modernizr",f=v("div"),d=((l=u.body)||((l=v(g?"svg":"body")).fake=!0),l);if(parseInt(n,10))for(;n--;)(s=v("div")).id=r?r[n]:c+(n+1),f.appendChild(s);return(o=v("style")).type="text/css",o.id="s"+c,(d.fake?d:f).appendChild(o),d.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(u.createTextNode(e)),f.id=c,d.fake&&(d.style.background="",d.style.overflow="hidden",i=h.style.overflow,h.style.overflow="hidden",h.appendChild(d)),a=t(f,e),d.fake?(d.parentNode.removeChild(d),h.style.overflow=i,h.offsetHeight):f.parentNode.removeChild(f),!!a}var t=e.testStyles=o;g||function(e,l){var c,f,t=e.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,a=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,n="_html5shiv",r=0,s={};function d(){var e=m.elements;return"string"==typeof e?e.split(" "):e}function u(e){var t=s[e[n]];return t||(t={},r++,e[n]=r,s[r]=t),t}function p(e,t,n){return t||(t=l),f?t.createElement(e):(n||(n=u(t)),!(r=n.cache[e]?n.cache[e].cloneNode():a.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren||o.test(e)||r.tagUrn?r:n.frag.appendChild(r));var r}function i(e){e||(e=l);var t,n,r,o,a,s,i=u(e);return!m.shivCSS||c||i.hasCSS||(i.hasCSS=(n="article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}",r=(t=e).createElement("p"),o=t.getElementsByTagName("head")[0]||t.documentElement,r.innerHTML="x<style>"+n+"</style>",!!o.insertBefore(r.lastChild,o.firstChild))),f||(a=e,(s=i).cache||(s.cache={},s.createElem=a.createElement,s.createFrag=a.createDocumentFragment,s.frag=s.createFrag()),a.createElement=function(e){return m.shivMethods?p(e,a,s):s.createElem(e)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(e){return s.createElem(e),s.frag.createElement(e),'c("'+e+'")'})+");return n}")(m,s.frag)),e}!function(){try{var e=l.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,f=1==e.childNodes.length||function(){l.createElement("a");var e=l.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){f=c=!0}}();var m={elements:t.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==t.shivCSS,supportsUnknownElements:f,shivMethods:!1!==t.shivMethods,type:"default",shivDocument:i,createElement:p,createDocumentFragment:function(e,t){if(e||(e=l),f)return e.createDocumentFragment();for(var n=(t=t||u(e)).frag.cloneNode(),r=0,o=d(),a=o.length;r<a;r++)n.createElement(o[r]);return n},addElements:function(e,t){var n=m.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),m.elements=n+" "+e,i(t)}};e.html5=m,i(l),"object"==typeof module&&module.exports&&(module.exports=m)}(void 0!==a?a:this,u),
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
    "href": "http://pastebin.com/Gk9PeVaQ"
  }]
}
!*/
t("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,l.addTest("displaytable",t,{aliases:["display-table"]})},2);var n="Moz O ms Webkit",f=e._config.usePrefixes?n.split(" "):[];e._cssomPrefixes=f;var r={elem:v("modernizr")};l._q.push(function(){delete r.elem});var y={style:r.elem.style};function s(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function x(e,t){var n=e.length;if("CSS"in a&&"supports"in a.CSS){for(;n--;)if(a.CSS.supports(s(e[n]),t))return!0;return!1}if("CSSSupportsRule"in a){for(var r=[];n--;)r.push("("+s(e[n])+":"+t+")");return o("@supports ("+(r=r.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"==function(e,t,n){var r;if("getComputedStyle"in a){r=getComputedStyle.call(a,e,t);var o=a.console;null!==r?n&&(r=r.getPropertyValue(n)):o&&o[o.error?"error":"log"].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else r=!t&&e.currentStyle&&e.currentStyle[n];return r}(e,null,"position")})}return p}l._q.unshift(function(){delete y.style});var d,b,C,E=e._config.usePrefixes?n.toLowerCase().split(" "):[];function S(e,t){return function(){return e.apply(t,arguments)}}function w(e,t,n,r,o){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+f.join(a+" ")+a).split(" ");return m(t,"string")||m(t,"undefined")?function(e,t,n,r){if(r=!m(r,"undefined")&&r,!m(n,"undefined")){var o=x(e,n);if(!m(o,"undefined"))return o}for(var a,s,i,l,c,f=["modernizr","tspan","samp"];!y.style&&f.length;)a=!0,y.modElem=v(f.shift()),y.style=y.modElem.style;function d(){a&&(delete y.style,delete y.modElem)}for(i=e.length,s=0;s<i;s++)if(l=e[s],c=y.style[l],~(""+l).indexOf("-")&&(l=l.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")),y.style[l]!==p){if(r||m(n,"undefined"))return d(),"pfx"!=t||l;try{y.style[l]=n}catch(e){}if(y.style[l]!=c)return d(),"pfx"!=t||l}return d(),!1}(s,t,r,o):function(e,t,n){var r;for(var o in e)if(e[o]in t)return!1===n?e[o]:m(r=t[e[o]],"function")?S(r,n||t):r;return!1}(s=(e+" "+E.join(a+" ")+a).split(" "),t,n)}function T(e,t,n){return w(e,p,p,t,n)}e._domPrefixes=E,e.testAllProps=w,e.testAllProps=T,
/*!
{
  "name": "Flexbox",
  "property": "flexbox",
  "caniuse": "flexbox",
  "tags": ["css"],
  "notes": [{
    "name": "The _new_ flexbox",
    "href": "http://dev.w3.org/csswg/css3-flexbox"
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
    "name": "W3C Flexible Box Layout spec",
    "href": "http://dev.w3.org/csswg/css3-flexbox"
  }],
  "warnings": [
    "Does not imply a modern implementation – see documentation."
  ]
}
!*/
l.addTest("flexwrap",T("flexWrap","wrap",!0)),(d=navigator.userAgent,b=d.match(/w(eb)?osbrowser/gi),C=d.match(/windows phone/gi)&&d.match(/iemobile\/([0-9])+/gi)&&9<=parseFloat(RegExp.$1),b||C)?l.addTest("fontface",!1):t('@font-face {font-family:"font";src:url("https://")}',function(e,t){var n=u.getElementById("smodernizr"),r=n.sheet||n.styleSheet,o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",a=/src/i.test(o)&&0===o.indexOf(t.split(" ")[0]);l.addTest("fontface",a)}),function(){var e,t,n,r,o,a;for(var s in i)if(i.hasOwnProperty(s)){if(e=[],(t=i[s]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=m(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)1===(a=e[o].split(".")).length?l[a[0]]=r:(!l[a[0]]||l[a[0]]instanceof Boolean||(l[a[0]]=new Boolean(l[a[0]])),l[a[0]][a[1]]=r),c.push((r?"":"no-")+a.join("-"))}}(),function(e){var t=h.className,n=l._config.classPrefix||"";if(g&&(t=t.baseVal),l._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}l._config.enableClasses&&(t+=" "+n+e.join(" "+n),g?h.className.baseVal=t:h.className=t)}(c),delete e.addTest,delete e.addAsyncTest;for(var N=0;N<l._q.length;N++)l._q[N]();a.Modernizr=l}(window,document);