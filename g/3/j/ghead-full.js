/*!
 * modernizr v3.5.0
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
!function(e,t,n){function r(e,t){return typeof e===t}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=o(E?"svg":"body"),e.fake=!0),e}function i(e,n,r,i){var s,l,c,f,u="modernizr",d=o("div"),p=a();if(parseInt(r,10))for(;r--;)c=o("div"),c.id=i?i[r]:u+(r+1),d.appendChild(c);return s=o("style"),s.type="text/css",s.id="s"+u,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),d.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",f=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),l=n(d,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=f,C.offsetHeight):d.parentNode.removeChild(d),!!l}function s(e,t){return!!~(""+e).indexOf(t)}function l(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var a=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(a){var i=a.error?"error":"log";a[i].call(a,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function f(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(l(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];o--;)a.push("("+l(t[o])+":"+r+")");return a=a.join(" or "),i("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return n}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function d(e,t,a,i){function l(){d&&(delete _.style,delete _.modElem)}if(i=!r(i,"undefined")&&i,!r(a,"undefined")){var c=f(e,a);if(!r(c,"undefined"))return c}for(var d,p,m,h,g,v=["modernizr","tspan","samp"];!_.style&&v.length;)d=!0,_.modElem=o(v.shift()),_.style=_.modElem.style;for(m=e.length,p=0;p<m;p++)if(h=e[p],g=_.style[h],s(h,"-")&&(h=u(h)),_.style[h]!==n){if(i||r(a,"undefined"))return l(),"pfx"!=t||h;try{_.style[h]=a}catch(e){}if(_.style[h]!=g)return l(),"pfx"!=t||h}return l(),!1}function p(e,t){return function(){return e.apply(t,arguments)}}function m(e,t,n){var o;for(var a in e)if(e[a]in t)return!1===n?e[a]:(o=t[e[a]],r(o,"function")?p(o,n||t):o);return!1}function h(e,t,n,o,a){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+T.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?d(s,t,o,a):(s=(e+" "+z.join(i+" ")+i).split(" "),m(s,t,n))}function g(e,t,r){return h(e,n,n,t,r)}var v=[],y={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){v.push({name:e,fn:t,options:n})},addAsyncTest:function(e){v.push({name:null,fn:e})}},x=function(){};x.prototype=y,x=new x;var b=[],C=t.documentElement,E="svg"===C.nodeName.toLowerCase(),S=y.testStyles=i;E||function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=y.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),y.elements=n+" "+e,c(t)}function a(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function i(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=a(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||p.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||a(e);for(var o=n.frag.cloneNode(),i=0,s=r(),l=s.length;i<l;i++)o.createElement(s[i]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function c(e){e||(e=t);var r=a(e);return!y.shivCSS||f||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||l(e,r),e}var f,u,d=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",f="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){f=!0,u=!0}}();var y={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==d.shivCSS,supportsUnknownElements:u,shivMethods:!1!==d.shivMethods,type:"default",shivDocument:c,createElement:i,createDocumentFragment:s,addElements:o};e.html5=y,c(t),"object"==typeof module&&module.exports&&(module.exports=y)}(void 0!==e?e:this,t),/*!
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
S("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,x.addTest("displaytable",t,{aliases:["display-table"]})},2);var w="Moz O ms Webkit",T=y._config.usePrefixes?w.split(" "):[];y._cssomPrefixes=T;var N={elem:o("modernizr")};x._q.push(function(){delete N.elem});var _={style:N.elem.style};x._q.unshift(function(){delete _.style});var z=y._config.usePrefixes?w.toLowerCase().split(" "):[];y._domPrefixes=z,y.testAllProps=h,y.testAllProps=g,/*!
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
x.addTest("flexbox",g("flexBasis","1px",!0)),/*!
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
x.addTest("flexboxlegacy",g("boxDirection","reverse",!0)),/*!
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
x.addTest("flexboxtweener",g("flexAlign","end",!0)),/*!
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
x.addTest("flexwrap",g("flexWrap","wrap",!0)),function(){var e=navigator.userAgent,t=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return t||n}()?x.addTest("fontface",!1):S('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),o=r.sheet||r.styleSheet,a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",i=/src/i.test(a)&&0===a.indexOf(n.split(" ")[0]);x.addTest("fontface",i)}),function(){var e,t,n,o,a,i,s;for(var l in v)if(v.hasOwnProperty(l)){if(e=[],t=v[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)i=e[a],s=i.split("."),1===s.length?x[s[0]]=o:(!x[s[0]]||x[s[0]]instanceof Boolean||(x[s[0]]=new Boolean(x[s[0]])),x[s[0]][s[1]]=o),b.push((o?"":"no-")+s.join("-"))}}(),function(e){var t=C.className,n=x._config.classPrefix||"";if(E&&(t=t.baseVal),x._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}x._config.enableClasses&&(t+=" "+n+e.join(" "+n),E?C.className.baseVal=t:C.className=t)}(b),delete y.addTest,delete y.addAsyncTest;for(var j=0;j<x._q.length;j++)x._q[j]();e.Modernizr=x}(window,document);
(function ($) {
  var queryParser = function (a) {
      var i, p, b = {};
      if (a === "") {
        return {};
      }
      for (i = 0; i < a.length; i += 1) {
        p = a[i].split('=');
        if (p.length === 2) {
          b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
      }
      return b;
    };
  $.queryParams = function () {
    return queryParser(window.location.search.substr(1).split('&'));
  };
  $.hashParams = function () {
    return queryParser(window.location.hash.substr(1).split('&'));
  };


  var ident = 0;

  window.Swiftype = window.Swiftype || {};
  Swiftype.root_url = Swiftype.root_url || 'https://api.swiftype.com';
  Swiftype.pingUrl = function(endpoint, callback) {
    var to = setTimeout(callback, 350);
    var img = new Image();
    img.onload = img.onerror = function() {
      clearTimeout(to);
      callback();
    };
    img.src = endpoint;
    return false;
  };
  Swiftype.pingAutoSelection = function(engineKey, docId, value, callback) {
    var params = {
      t: new Date().getTime(),
      engine_key: engineKey,
      doc_id: docId,
      prefix: value
    };
    var url = Swiftype.root_url + '/api/v1/public/analytics/pas?' + $.param(params);
    Swiftype.pingUrl(url, callback);
  };
  Swiftype.findSelectedSection = function() {
    var sectionText = $.hashParams().sts;
    if (!sectionText) { return; }

    function normalizeText(str) {
      var out = str.replace(/\s+/g, '');
      out = out.toLowerCase();
      return out;
    }

    sectionText = normalizeText(sectionText);

    $('h1, h2, h3, h4, h5, h6').each(function(idx) {
      $this = $(this);
      if (normalizeText($this.text()).indexOf(sectionText) >= 0) {
        this.scrollIntoView(true);
        return false;
      }
    });
  };

  Swiftype.htmlEscape = Swiftype.htmlEscape || function htmlEscape(str) {
    return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };

  $.fn.swiftype = function (options) {
    Swiftype.findSelectedSection();
    var options = $.extend({}, $.fn.swiftype.defaults, options);

    return this.each(function () {
      var $this = $(this);
      var config = $.meta ? $.extend({}, options, $this.data()) : options;
      $this.attr('autocomplete', 'off');
      $this.data('swiftype-config-autocomplete', config);
      $this.submitted = false;
      $this.cache = new LRUCache(10);
      $this.emptyQueries = [];

      $this.isEmpty = function(query) {
        return $.inArray(normalize(query), this.emptyQueries) >= 0
      };

      $this.addEmpty = function(query) {
        $this.emptyQueries.unshift(normalize(query));
      };

      var styles = config.dropdownStylesFunction($this);
      var $swiftypeWidget = $('<div class="' + config.widgetContainerClass + '" />');
      var $listContainer = $('<div />').addClass(config.suggestionListClass).appendTo($swiftypeWidget).css(styles).hide();
      $swiftypeWidget.appendTo(config.autocompleteContainingElement);
      var $list = $('<' + config.suggestionListType + ' />').appendTo($listContainer);

      $this.data('swiftype-list', $list);

      $this.abortCurrent = function() {
        if ($this.currentRequest) {
          $this.currentRequest.abort();
        }
      };

      $this.showList = function() {
        if (handleFunctionParam(config.disableAutocomplete) === false) {
          $listContainer.show();
        }
      };


      $this.hideList = function(sync) {
        if (sync) {
          $listContainer.hide();
        } else {
          setTimeout(function() { $listContainer.hide(); }, 10);
        }
      };

      $this.focused = function() {
        return $this.is(':focus');
      };

      $this.submitting = function() {
        $this.submitted = true;
      };

      $this.listResults = function() {
        return $(config.resultListSelector, $list);
      };

      $this.activeResult = function() {
        return $this.listResults().filter('.' + config.activeItemClass).first();
      };

      $this.prevResult = function() {
        var list = $this.listResults(),
          currentIdx = list.index($this.activeResult()),
          nextIdx = currentIdx - 1,
          next = list.eq(nextIdx);
        $this.listResults().removeClass(config.activeItemClass);
        if (nextIdx >= 0) {
          next.addClass(config.activeItemClass);
        }
      };

      $this.nextResult = function() {
        var list = $this.listResults(),
          currentIdx = list.index($this.activeResult()),
          nextIdx = currentIdx + 1,
          next = list.eq(nextIdx);
        $this.listResults().removeClass(config.activeItemClass);
        if (nextIdx >= 0) {
          next.addClass(config.activeItemClass);
        }
      };

      $this.selectedCallback = function(data) {
        return function() {
          var value = $this.val(),
            callback = function() {
              config.onComplete(data, value);
            };
          Swiftype.pingAutoSelection(config.engineKey, data['id'], value, callback);
        };
      };

      $this.registerResult = function($element, data) {
        $element.data('swiftype-item', data);
        $element.click($this.selectedCallback(data)).mouseover(function () {
          $this.listResults().removeClass(config.activeItemClass);
          $element.addClass(config.activeItemClass);
        });
      };

      $this.getContext = function() {
        return {
          config: config,
          list: $list,
          registerResult: $this.registerResult
        };
      };


      var typingDelayPointer;
      var suppressKey = false;
      $this.lastValue = '';
      $this.keyup(function (event) {
        if (suppressKey) {
          suppressKey = false;
          return;
        }

        // ignore arrow keys, shift
        if (((event.which > 36) && (event.which < 41)) || (event.which == 16)) return;

        if (config.typingDelay > 0) {
          clearTimeout(typingDelayPointer);
          typingDelayPointer = setTimeout(function () {
            processInput($this);
          }, config.typingDelay);
        } else {
          processInput($this);
        }
      });

      $this.styleDropdown = function() {
        $listContainer.css(config.dropdownStylesFunction($this));
      };

      $(window).resize(function (event) {
        $this.styleDropdown();
      });

      $this.keydown(function (event) {
        $this.styleDropdown();
        // enter = 13; up = 38; down = 40; esc = 27
        var $active = $this.activeResult();
        switch (event.which) {
        case 13:
          if (($active.length !== 0) && ($list.is(':visible'))) {
            event.preventDefault();
            $this.selectedCallback($active.data('swiftype-item'))();
          } else if ($this.currentRequest) {
            $this.submitting();
          }
          $this.hideList();
          suppressKey = true;
          break;
        case 38:
          event.preventDefault();
          if ($active.length === 0) {
            $this.listResults().last().addClass(config.activeItemClass);
          } else {
            $this.prevResult();
          }
          break;
        case 40:
          event.preventDefault();
          if ($active.length === 0) {
            $this.listResults().first().addClass(config.activeItemClass);
          } else if ($active != $this.listResults().last()) {
            $this.nextResult();
          }
          break;
        case 27:
          $this.hideList();
          suppressKey = true;
          break;
        default:
          $this.submitted = false;
          break;
        }
      });

      // opera wants keypress rather than keydown to prevent the form submit
      $this.keypress(function (event) {
        if ((event.which == 13) && ($this.activeResult().length > 0)) {
          event.preventDefault();
        }
      });

      // stupid hack to get around loss of focus on mousedown
      var mouseDown = false;
      var blurWait = false;
      $(document).bind('mousedown.swiftype' + ++ident, function () {
        mouseDown = true;
      });
      $(document).bind('mouseup.swiftype' + ident, function () {
        mouseDown = false;
        if (blurWait) {
          blurWait = false;
          $this.hideList();
        }
      });
      $this.blur(function () {
        if (mouseDown) {
          blurWait = true;
        } else {
          $this.hideList();
        }
      });
      $this.focus(function () {
        setTimeout(function() { $this.select() }, 10);
        if ($this.listResults().filter(':not(.' + config.noResultsClass + ')').length > 0) {
          $this.showList();
        }
      });
    });
  };

  var normalize = function(str) {
    return $.trim(str).toLowerCase();
  };

  var callRemote = function ($this, term) {
    $this.abortCurrent();

    var params = {},
      config = $this.data('swiftype-config-autocomplete');

    params['q'] = term;
    params['engine_key'] = config.engineKey;
    params['search_fields'] = handleFunctionParam(config.searchFields);
    params['fetch_fields'] = handleFunctionParam(config.fetchFields);
    params['filters'] = handleFunctionParam(config.filters);
    params['document_types'] = handleFunctionParam(config.documentTypes);
    params['functional_boosts'] = handleFunctionParam(config.functionalBoosts);
    params['sort_field'] = handleFunctionParam(config.sortField);
    params['sort_direction'] = handleFunctionParam(config.sortDirection);
    params['per_page'] = config.resultLimit;
    params['highlight_fields'] = config.highlightFields;

    var endpoint = Swiftype.root_url + '/api/v1/public/engines/suggest.json';
    $this.currentRequest = $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      url: endpoint,
      data: params
    }).done(function(data) {
      var norm = normalize(term);
      if (data.record_count > 0) {
        $this.cache.put(norm, data.records);
      } else {
        $this.addEmpty(norm);
        $this.data('swiftype-list').empty();
        $this.hideList();
        return;
      }
      processData($this, data.records, term);
    });
  };

  var getResults = function($this, term) {
    var norm = normalize(term);
    if ($this.isEmpty(norm)) {
      $this.data('swiftype-list').empty();
      $this.hideList();
      return;
    }
    var cached = $this.cache.get(norm);
    if (cached) {
      processData($this, cached, term);
    } else {
      callRemote($this, term);
    }
  };

  // private helpers
  var processInput = function ($this) {
      var term = $this.val();
      if (term === $this.lastValue) {
        return;
      }
      $this.lastValue = term;
      if ($.trim(term) === '') {
        $this.data('swiftype-list').empty()
        $this.hideList();
        return;
      }
      if (typeof $this.data('swiftype-config-autocomplete').engineKey !== 'undefined') {
        getResults($this, term);
      }
    };

  var processData = function ($this, data, term) {
      var $list = $this.data('swiftype-list'),
        config = $this.data('swiftype-config-autocomplete');

      $list.empty();
      $this.hideList(true);

      config.resultRenderFunction($this.getContext(), data);

      var totalItems = $this.listResults().length;
      if ((totalItems > 0 && $this.focused()) || (config.noResultsMessage !== undefined)) {
        if ($this.submitted) {
          $this.submitted = false;
        } else {
          $this.showList();
        }
      }
    };

  var defaultResultRenderFunction = function(ctx, results) {
    var $list = ctx.list,
      config = ctx.config;

    $.each(results, function(document_type, items) {
      $.each(items, function(idx, item) {
        ctx.registerResult($('<li>' + config.renderFunction(document_type, item) + '</li>').appendTo($list), item);
      });
    });
  };

  var defaultRenderFunction = function(document_type, item) {
    return '<p class="title">' + Swiftype.htmlEscape(item['title']) + '</p>';
  };

  var defaultOnComplete = function(item, prefix) {
    window.location = item['url'];
  };

  var defaultDropdownStylesFunction = function($this) {
    var config = $this.data('swiftype-config-autocomplete');
    var $attachEl = config.attachTo ? $(config.attachTo) : $this;
    var offset = $attachEl.offset();
    var styles = {
      'position': 'absolute',
      'z-index': 9999,
      'top': offset.top + $attachEl.outerHeight() + 1,
      'left': offset.left
    };
    if (config.setWidth) {
      styles['width'] = $attachEl.outerWidth() - 2;
    }
    return styles;
  };

  var handleFunctionParam = function(field) {
    if (field !== undefined) {
      var evald = field;
      if (typeof evald === 'function') {
        evald = evald.call();
      }
      return evald;
    }
    return undefined;
  };

	// simple client-side LRU Cache, based on https://github.com/rsms/js-lru

	function LRUCache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this._keymap = {};
	}

  LRUCache.prototype.put = function (key, value) {
    var entry = {
      key: key,
      value: value
    };
    this._keymap[key] = entry;
    if (this.tail) {
      this.tail.newer = entry;
      entry.older = this.tail;
    } else {
      this.head = entry;
    }
    this.tail = entry;
    if (this.size === this.limit) {
      return this.shift();
    } else {
      this.size++;
    }
  };

  LRUCache.prototype.shift = function () {
    var entry = this.head;
    if (entry) {
      if (this.head.newer) {
        this.head = this.head.newer;
        this.head.older = undefined;
      } else {
        this.head = undefined;
      }
      entry.newer = entry.older = undefined;
      delete this._keymap[entry.key];
    }
    return entry;
  };

  LRUCache.prototype.get = function (key, returnEntry) {
    var entry = this._keymap[key];
    if (entry === undefined) return;
    if (entry === this.tail) {
      return entry.value;
    }
    if (entry.newer) {
      if (entry === this.head) this.head = entry.newer;
      entry.newer.older = entry.older;
    }
    if (entry.older) entry.older.newer = entry.newer;
    entry.newer = undefined;
    entry.older = this.tail;
    if (this.tail) this.tail.newer = entry;
    this.tail = entry;
    return returnEntry ? entry : entry.value;
  };

  LRUCache.prototype.remove = function (key) {
    var entry = this._keymap[key];
    if (!entry) return;
    delete this._keymap[entry.key];
    if (entry.newer && entry.older) {
      entry.older.newer = entry.newer;
      entry.newer.older = entry.older;
    } else if (entry.newer) {
      entry.newer.older = undefined;
      this.head = entry.newer;
    } else if (entry.older) {
      entry.older.newer = undefined;
      this.tail = entry.older;
    } else {
      this.head = this.tail = undefined;
    }

    this.size--;
    return entry.value;
  };

  LRUCache.prototype.clear = function () {
    this.head = this.tail = undefined;
    this.size = 0;
    this._keymap = {};
  };

  if (typeof Object.keys === 'function') {
    LRUCache.prototype.keys = function () {
      return Object.keys(this._keymap);
    };
  } else {
    LRUCache.prototype.keys = function () {
      var keys = [];
      for (var k in this._keymap) keys.push(k);
      return keys;
    };
  }

  $.fn.swiftype.defaults = {
    activeItemClass: 'active',
    attachTo: undefined,
    documentTypes: undefined,
    filters: undefined,
    engineKey: undefined,
    searchFields: undefined,
    functionalBoosts: undefined,
    sortField: undefined,
    sortDirection: undefined,
    fetchFields: undefined,
    highlightFields: undefined,
    noResultsClass: 'noResults',
    noResultsMessage: undefined,
    onComplete: defaultOnComplete,
    resultRenderFunction: defaultResultRenderFunction,
    renderFunction: defaultRenderFunction,
    dropdownStylesFunction: defaultDropdownStylesFunction,
    resultLimit: undefined,
    suggestionListType: 'ul',
    suggestionListClass: 'autocomplete',
    resultListSelector: 'li',
    setWidth: true,
    typingDelay: 80,
    disableAutocomplete: false,
    autocompleteContainingElement: 'body',
    widgetContainerClass: 'swiftype-widget'
  };

})(jQuery);
