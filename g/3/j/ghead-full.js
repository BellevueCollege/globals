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

      $this.showNoResults = function () {
        $list.empty();
        if (config.noResultsMessage === undefined) {
          $this.hideList();
        } else {
          $list.append($('<li />', { 'class': config.noResultsClass }).text(config.noResultsMessage));
          $this.showList();
        }
      };

      $this.focused = function() {
        return $this.is(':focus');
      };

      $this.submitting = function() {
        $this.submitted = true;
      };

      $this.listResults = function() {
        return $(config.resultListSelector, $list).filter(':not(.' + config.noResultsClass + ')');
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
          renderSearchLoadingIcon($this);
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
        if ($this.listResults().length > 0) {
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

    var endpoint = 'https://www.bellevuecollege.edu/search' + '/wp-json/bcswiftype/v1/autofill';
    $this.currentRequest = $.ajax({
      type: 'GET',
      dataType: 'json',
      url: endpoint,
      data: params
    }).done(function(data) {
      var norm = normalize(term);
      if (data.record_count > 0) {
        $this.cache.put(norm, data.records);
      } else {
        hideSearchLoadingIcon();
        $this.addEmpty(norm);
        $this.showNoResults();
        return;
      }
      hideSearchLoadingIcon();
      processData($this, data.records, term);
    });
  };

  var getResults = function($this, term) {
    var norm = normalize(term);
    if ($this.isEmpty(norm)) {
      $this.showNoResults();
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
        hideSearchLoadingIcon();
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

      config.resultRenderFunction($this.getContext(), data, term);

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
        ctx.registerResult($('<li>' + config.renderFunction(document_type, item, idx) + '</li>').appendTo($list), item);
      });
    });
  };

  var defaultRenderFunction = function(document_type, item, idx) {
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

  // Add Loading Icon -- BC Custom
  var renderSearchLoadingIcon = function( input ) {
    if ( input.val().length > 2 ) {
      $('#autocomplete-loading').show();

      window.setTimeout( function(){
        hideSearchLoadingIcon();
      }, 5000 );
    }
  }
  var hideSearchLoadingIcon = function() {
    $('#autocomplete-loading').hide();
  }

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