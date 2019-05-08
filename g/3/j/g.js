/* ========================================================================
* Extends Bootstrap v3.1.1

* Copyright (c) <2015> PayPal

* All rights reserved.

* Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

* Neither the name of PayPal or any of its subsidiaries or affiliates nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

* ======================================================================== */
  
 
 (function($) { 
  "use strict"; 

  // GENERAL UTILITY FUNCTIONS
  // ===============================
  
  var uniqueId = function(prefix) {
      return (prefix || 'ui-id') + '-' + Math.floor((Math.random()*1000)+1)
  }

  
  var removeMultiValAttributes = function (el, attr, val) {
   var describedby = (el.attr( attr ) || "").split( /\s+/ )
      , index = $.inArray(val, describedby)
   if ( index !== -1 ) {
     describedby.splice( index, 1 )
   }
   describedby = $.trim( describedby.join( " " ) )
   if (describedby ) {
     el.attr( attr, describedby )
   } else {
    el.removeAttr( attr )
   }
  }

// selectors  Courtesy: https://github.com/jquery/jquery-ui/blob/master/ui/focusable.js and tabbable.js
/*
Copyright jQuery Foundation and other contributors, https://jquery.org/

This software consists of voluntary contributions made by many
individuals. For exact contribution history, see the revision history
available at https://github.com/jquery/jquery-ui

The following license applies to all parts of this software except as
documented below:

====

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

====

Copyright and related rights for sample code are waived via CC0. Sample
code is defined as all source code contained within the demos directory.

CC0: http://creativecommons.org/publicdomain/zero/1.0/

====
*/

  var focusable = function ( element, isTabIndexNotNaN ) {
    var map, mapName, img,
    nodeName = element.nodeName.toLowerCase();
    if ( "area" === nodeName ) {
    map = element.parentNode;
    mapName = map.name;
    if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
    return false;
    }
    img = $( "img[usemap='#" + mapName + "']" )[ 0 ];
    return !!img && visible( img );
    }
    return ( /input|select|textarea|button|object/.test( nodeName ) ?
    !element.disabled :
    "a" === nodeName ?
    element.href || isTabIndexNotNaN :isTabIndexNotNaN) && visible( element ); // the element and all of its ancestors must be visible  
  }
  var visible = function ( element ) {
    return $.expr.filters.visible( element ) &&
      !$( element ).parents().addBack().filter(function() {
        return $.css( this, "visibility" ) === "hidden";
      }).length;
  }

  $.extend( $.expr[ ":" ], {
    data: $.expr.createPseudo ?
      $.expr.createPseudo(function( dataName ) {
        return function( elem ) {
          return !!$.data( elem, dataName );
        };
      }) :
      // support: jQuery <1.8
      function( elem, i, match ) {
        return !!$.data( elem, match[ 3 ] );
      },

    focusable: function( element ) {
      return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
    },

    tabbable: function( element ) {
      var tabIndex = $.attr( element, "tabindex" ),
        isTabIndexNaN = isNaN( tabIndex );
      return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
    }
  });

  // Modal Extension
  // ===============================

  $('.modal-dialog').attr( {'role' : 'document'})
    var modalhide =   $.fn.modal.Constructor.prototype.hide
    $.fn.modal.Constructor.prototype.hide = function(){
       modalhide.apply(this, arguments)
       $(document).off('keydown.bs.modal')
    }

    var modalfocus =   $.fn.modal.Constructor.prototype.enforceFocus
    $.fn.modal.Constructor.prototype.enforceFocus = function(){
      var $content = this.$element.find(".modal-content")
      var focEls = $content.find(":tabbable")
      , $lastEl = $(focEls[focEls.length-1])
      , $firstEl = $(focEls[0])
      $lastEl.on('keydown.bs.modal', $.proxy(function (ev) {
        if(ev.keyCode === 9 && !(ev.shiftKey | ev.ctrlKey | ev.metaKey | ev.altKey)) { // TAB pressed
          ev.preventDefault();
          $firstEl.focus();
        }
      }, this))
      $firstEl.on('keydown.bs.modal', $.proxy(function (ev) {
          if(ev.keyCode === 9 && ev.shiftKey) { // SHIFT-TAB pressed
            ev.preventDefault();
            $lastEl.focus();
          }
      }, this))
      modalfocus.apply(this, arguments)
    }

  // DROPDOWN Extension
  // ===============================

  var toggle   = '[data-toggle=dropdown]'
      , $par
      , firstItem
      , focusDelay = 200
      , menus = $(toggle).parent().find('ul').attr('role','menu')
      , lis = menus.find('li').attr('role','presentation')

    // add menuitem role and tabIndex to dropdown links
    lis.find('a').attr({'role':'menuitem', 'tabIndex':'-1'})
    // add aria attributes to dropdown toggle
    $(toggle).attr({ 'aria-haspopup':'true', 'aria-expanded': 'false'})

    $(toggle).parent()
      // Update aria-expanded when open
      .on('shown.bs.dropdown',function(e){
        $par = $(this)
        var $toggle = $par.find(toggle)
        $toggle.attr('aria-expanded','true')
        $toggle.on('keydown.bs.dropdown', $.proxy(function (ev) {
          setTimeout(function() {
            firstItem = $('.dropdown-menu [role=menuitem]:visible', $par)[0]
            try{ firstItem.focus()} catch(ex) {}
          }, focusDelay)
        }, this))

      })
      // Update aria-expanded when closed
      .on('hidden.bs.dropdown',function(e){
        $par = $(this)
        var $toggle = $par.find(toggle)
        $toggle.attr('aria-expanded','false')
      })

    // Close the dropdown if tabbed away from
    $(document)
      .on('focusout.dropdown.data-api', '.dropdown-menu', function(e){
        var $this = $(this)
          , that = this;
        // since we're trying to close when appropriate,
        // make sure the dropdown is open
        if (!$this.parent().hasClass('open')) {
          return;
        }
        setTimeout(function() {
          if(!$.contains(that, document.activeElement)){
            $this.parent().find('[data-toggle=dropdown]').dropdown('toggle')
          }
        }, 150)
       })
      .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu]' , $.fn.dropdown.Constructor.prototype.keydown);

  // Tab Extension
  // ===============================
  
  var $tablist = $('.nav-tabs, .nav-pills')
        , $lis = $tablist.children('li')
        , $tabs = $tablist.find('[data-toggle="tab"], [data-toggle="pill"]')

    if($tabs){
      $tablist.attr('role', 'tablist')
      $lis.attr('role', 'presentation')
      $tabs.attr('role', 'tab')
    }

    $tabs.each(function( index ) {
      var tabpanel = $($(this).attr('href'))
        , tab = $(this)
        , tabid = tab.attr('id') || uniqueId('ui-tab')

        tab.attr('id', tabid)

      if(tab.parent().hasClass('active')){
        tab.attr( { 'tabIndex' : '0', 'aria-selected' : 'true', 'aria-controls': tab.attr('href').substr(1) } )
        tabpanel.attr({ 'role' : 'tabpanel', 'tabIndex' : '0', 'aria-hidden' : 'false', 'aria-labelledby':tabid })
      }else{
        tab.attr( { 'tabIndex' : '-1', 'aria-selected' : 'false', 'aria-controls': tab.attr('href').substr(1) } )
        tabpanel.attr( { 'role' : 'tabpanel', 'tabIndex' : '-1', 'aria-hidden' : 'true', 'aria-labelledby':tabid } )
      }
    })

    $.fn.tab.Constructor.prototype.keydown = function (e) {
      var $this = $(this)
      , $items
      , $ul = $this.closest('ul[role=tablist] ')
      , index
      , k = e.which || e.keyCode

      $this = $(this)
      if (!/(37|38|39|40)/.test(k)) return

      $items = $ul.find('[role=tab]:visible')
      index = $items.index($items.filter(':focus'))

      if (k == 38 || k == 37) index--                         // up & left
      if (k == 39 || k == 40) index++                        // down & right


      if(index < 0) index = $items.length -1
      if(index == $items.length) index = 0

      var nextTab = $items.eq(index)
      if(nextTab.attr('role') ==='tab'){

        nextTab.tab('show')      //Comment this line for dynamically loaded tabPabels, to save Ajax requests on arrow key navigation
        .focus()
      }
      // nextTab.focus()

      e.preventDefault()
      e.stopPropagation()
    }

    $(document).on('keydown.tab.data-api','[data-toggle="tab"], [data-toggle="pill"]' , $.fn.tab.Constructor.prototype.keydown)

   var tabactivate =    $.fn.tab.Constructor.prototype.activate;
   $.fn.tab.Constructor.prototype.activate = function (element, container, callback) {
      var $active = container.find('> .active')
      $active.find('[data-toggle=tab], [data-toggle=pill]').attr({ 'tabIndex' : '-1','aria-selected' : false })
      $active.filter('.tab-pane').attr({ 'aria-hidden' : true,'tabIndex' : '-1' })

      tabactivate.apply(this, arguments)

      element.addClass('active')
      element.find('[data-toggle=tab], [data-toggle=pill]').attr({ 'tabIndex' : '0','aria-selected' : true })
      element.filter('.tab-pane').attr({ 'aria-hidden' : false,'tabIndex' : '0' })
   }

  // Collapse Extension
  // ===============================

     var $colltabs =  $('[data-toggle="collapse"]')
      $colltabs.each(function( index ) {
        var colltab = $(this)
        , collpanel = (colltab.attr('data-target')) ? $(colltab.attr('data-target')) : $(colltab.attr('href'))
        , parent  = colltab.attr('data-parent')
        , collparent = parent && $(parent)
        , collid = colltab.attr('id') || uniqueId('ui-collapse')

          colltab.attr('id', collid)

          if(collparent){
            colltab.attr({ 'role':'tab', 'aria-selected':'false', 'aria-expanded':'false' })
            $(collparent).find('div:not(.collapse,.panel-body), h4').attr('role','presentation')
            collparent.attr({ 'role' : 'tablist', 'aria-multiselectable' : 'true' })

            if(collpanel.hasClass('in')){
              colltab.attr({ 'aria-controls': collpanel.attr('id'), 'aria-selected':'true', 'aria-expanded':'true', 'tabindex':'0' })
              collpanel.attr({ 'role':'tabpanel', 'tabindex':'0', 'aria-labelledby':collid, 'aria-hidden':'false' })
            }else{
              colltab.attr({'aria-controls' : collpanel.attr('id'), 'tabindex':'-1' })
              collpanel.attr({ 'role':'tabpanel', 'tabindex':'-1', 'aria-labelledby':collid, 'aria-hidden':'true' })
            }
          }
      })

    var collToggle = $.fn.collapse.Constructor.prototype.toggle
    $.fn.collapse.Constructor.prototype.toggle = function(){
        var prevTab = this.$parent && this.$parent.find('[aria-expanded="true"]') , href

        if(prevTab){
          var prevPanel = prevTab.attr('data-target') || (href = prevTab.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')
          , $prevPanel = $(prevPanel)
          , $curPanel = this.$element
          , par = this.$parent
          , curTab

        if (this.$parent) curTab = this.$parent.find('[data-toggle=collapse][href="#' + this.$element.attr('id') + '"]')

        collToggle.apply(this, arguments)

        if ($.support.transition) {
          this.$element.one($.support.transition.end, function(){

              prevTab.attr({ 'aria-selected':'false','aria-expanded':'false', 'tabIndex':'-1' })
              $prevPanel.attr({ 'aria-hidden' : 'true','tabIndex' : '-1'})

              curTab.attr({ 'aria-selected':'true','aria-expanded':'true', 'tabIndex':'0' })

              if($curPanel.hasClass('in')){
                $curPanel.attr({ 'aria-hidden' : 'false','tabIndex' : '0' })
              }else{
                curTab.attr({ 'aria-selected':'false','aria-expanded':'false'})
                $curPanel.attr({ 'aria-hidden' : 'true','tabIndex' : '-1' })
              }
          })
        }
      }else{
        collToggle.apply(this, arguments)
      }
    }

    $.fn.collapse.Constructor.prototype.keydown = function (e) {
      var $this = $(this)
      , $items
      , $tablist = $this.closest('div[role=tablist] ')
      , index
      , k = e.which || e.keyCode

      $this = $(this)
      if (!/(32|37|38|39|40)/.test(k)) return
      if(k==32) $this.click()

      $items = $tablist.find('[role=tab]')
      index = $items.index($items.filter(':focus'))

      if (k == 38 || k == 37) index--                                        // up & left
      if (k == 39 || k == 40) index++                        // down & right
      if(index < 0) index = $items.length -1
      if(index == $items.length) index = 0

      $items.eq(index).focus()

      e.preventDefault()
      e.stopPropagation()

    }

    $(document).on('keydown.collapse.data-api','[data-toggle="collapse"]' ,  $.fn.collapse.Constructor.prototype.keydown);
    

// Carousel Extension
  // ===============================

      $('.carousel').each(function (index) {

        // This function positions a highlight box around the tabs in the tablist to use in focus styling

        function setTablistHighlightBox() {

          var $tab
              , offset
              , height
              , width
              , highlightBox = {}

            highlightBox.top     = 0
          highlightBox.left    = 32000
          highlightBox.height  = 0
          highlightBox.width   = 0

          for (var i = 0; i < $tabs.length; i++) {
            $tab = $tabs[i]
            offset = $($tab).offset()
            height = $($tab).height()
            width  = $($tab).width()

//            console.log(" Top: " + offset.top + " Left: " + offset.left + " Height: " + height + " Width: " + width)

            if (highlightBox.top < offset.top) {
              highlightBox.top    = Math.round(offset.top)
            }

            if (highlightBox.height < height) {
              highlightBox.height = Math.round(height)
            }

            if (highlightBox.left > offset.left) {
              highlightBox.left = Math.round(offset.left)
            }

            var w = (offset.left - highlightBox.left) + Math.round(width)

            if (highlightBox.width < w) {
              highlightBox.width = w
            }

          } // end for

//          console.log("[HIGHLIGHT]  Top: " +  highlightBox.top + " Left: " +  highlightBox.left + " Height: " +  highlightBox.height + " Width: " +  highlightBox.width)

          $tablistHighlight.style.top    = (highlightBox.top    - 2)  + 'px'
          $tablistHighlight.style.left   = (highlightBox.left   - 2)  + 'px'
          $tablistHighlight.style.height = (highlightBox.height + 7)  + 'px'
          $tablistHighlight.style.width  = (highlightBox.width  + 8)  + 'px'

        } // end function

        var $this = $(this)
          , $prev        = $this.find('[data-slide="prev"]')
          , $next        = $this.find('[data-slide="next"]')
          , $tablist    = $this.find('.carousel-indicators')
          , $tabs       = $this.find('.carousel-indicators li')
          , $tabpanels  = $this.find('.item')
          , $tabpanel
          , $tablistHighlight
          , $pauseCarousel
          , $complementaryLandmark
          , $tab
          , $is_paused = false
          , offset
          , height
          , width
          , i
          , id_title  = 'id_title'
          , id_desc   = 'id_desc'


        $tablist.attr('role', 'tablist')

        $tabs.focus(function() {
          $this.carousel('pause')
          $is_paused = true
          $pauseCarousel.innerHTML = "Play Carousel"
          $(this).parent().addClass('active');
//          $(this).addClass('focus')
          setTablistHighlightBox()
          $($tablistHighlight).addClass('focus')
          $(this).parents('.carousel').addClass('contrast')
        })

        $tabs.blur(function(event) {
          $(this).parent().removeClass('active');
//          $(this).removeClass('focus')
          $($tablistHighlight).removeClass('focus')
          $(this).parents('.carousel').removeClass('contrast')
        })


        for (i = 0; i < $tabpanels.length; i++) {
          $tabpanel = $tabpanels[i]
          $tabpanel.setAttribute('role', 'tabpanel')
          $tabpanel.setAttribute('id', 'tabpanel-' + index + '-' + i)
          $tabpanel.setAttribute('aria-labelledby', 'tab-' + index + '-' + i)
        }

        if (typeof $this.attr('role') !== 'string') {
          $this.attr('role', 'complementary');
          $this.attr('aria-labelledby', id_title);
          $this.attr('aria-describedby', id_desc);
          $this.prepend('<p  id="' + id_desc   + '" class="sr-only">A carousel is a rotating set of images, rotation stops on keyboard focus on carousel tab controls or hovering the mouse pointer over images.  Use the tabs or the previous and next buttons to change the displayed slide.</p>')
          $this.prepend('<h2 id="' + id_title  + '" class="sr-only">Carousel content with ' + $tabpanels.length + ' slides.</h2>')
        }


        for (i = 0; i < $tabs.length; i++) {
          $tab = $tabs[i]

          $tab.setAttribute('role', 'tab')
          $tab.setAttribute('id', 'tab-' + index + '-' + i)
          $tab.setAttribute('aria-controls', 'tabpanel-' + index + '-' + i)

          var tpId = '#tabpanel-' + index + '-' + i
          var caption = $this.find(tpId).find('h1').text()

          if ((typeof caption !== 'string') || (caption.length === 0)) caption = $this.find(tpId).text()
          if ((typeof caption !== 'string') || (caption.length === 0)) caption = $this.find(tpId).find('h3').text()
          if ((typeof caption !== 'string') || (caption.length === 0)) caption = $this.find(tpId).find('h4').text()
          if ((typeof caption !== 'string') || (caption.length === 0)) caption = $this.find(tpId).find('h5').text()
          if ((typeof caption !== 'string') || (caption.length === 0)) caption = $this.find(tpId).find('h6').text()
          if ((typeof caption !== 'string') || (caption.length === 0)) caption = "no title";

//          console.log("CAPTION: " + caption )

          var tabName = document.createElement('span')
          tabName.setAttribute('class', 'sr-only')
          tabName.innerHTML='Slide ' + (i+1)
          if (caption) tabName.innerHTML += ": " +  caption
          $tab.appendChild(tabName)

         }

        // create div for focus styling of tablist
        $tablistHighlight = document.createElement('div')
        $tablistHighlight.className = 'carousel-tablist-highlight'
        document.body.appendChild($tablistHighlight)

        // create button for screen reader users to stop rotation of carousel

        // create button for screen reader users to pause carousel for virtual mode review
        $complementaryLandmark = document.createElement('aside')
        $complementaryLandmark.setAttribute('class', 'carousel-aside-pause')
        $complementaryLandmark.setAttribute('aria-label', 'carousel pause/play control')
        $this.prepend($complementaryLandmark)

        $pauseCarousel = document.createElement('button')
        $pauseCarousel.className = "carousel-pause-button"
        $pauseCarousel.innerHTML = "Pause Carousel"
        $pauseCarousel.setAttribute('title', "Pause/Play carousel button can be used by screen reader users to stop carousel animations")
        $($complementaryLandmark).append($pauseCarousel)

        $($pauseCarousel).click(function() {
          if ($is_paused) {
            $pauseCarousel.innerHTML = "Pause Carousel"
            $this.carousel('cycle')
            $is_paused = false
          }
          else {
            $pauseCarousel.innerHTML = "Play Carousel"
            $this.carousel('pause')
            $is_paused = true
          }
        })
        $($pauseCarousel).focus(function() {
          $(this).addClass('focus')
        })

        $($pauseCarousel).blur(function() {
          $(this).removeClass('focus')
        })

        setTablistHighlightBox()

        $( window ).resize(function() {
          setTablistHighlightBox()
        })

        // Add space bar behavior to prev and next buttons for SR compatibility
        $prev.attr('aria-label', 'Previous Slide')
        $prev.keydown(function(e) {
          var k = e.which || e.keyCode
          if (/(13|32)/.test(k)) {
            e.preventDefault()
            e.stopPropagation()
            $prev.trigger('click');
          }
        });

        $prev.focus(function() {
          $(this).parents('.carousel').addClass('contrast')
        })

        $prev.blur(function() {
          $(this).parents('.carousel').removeClass('contrast')
        })

        $next.attr('aria-label', 'Next Slide')
        $next.keydown(function(e) {
          var k = e.which || e.keyCode
          if (/(13|32)/.test(k)) {
            e.preventDefault()
            e.stopPropagation()
            $next.trigger('click');
          }
        });

        $next.focus(function() {
          $(this).parents('.carousel').addClass('contrast')
        })

        $next.blur(function() {
          $(this).parents('.carousel').removeClass('contrast')
        })

        $('.carousel-inner a').focus(function() {
          $(this).parents('.carousel').addClass('contrast')
        })

         $('.carousel-inner a').blur(function() {
          $(this).parents('.carousel').removeClass('contrast')
        })

        $tabs.each(function () {
          var item = $(this)
          if(item.hasClass('active')) {
            item.attr({ 'aria-selected': 'true', 'tabindex' : '0' })
          }else{
            item.attr({ 'aria-selected': 'false', 'tabindex' : '-1' })
          }
        })
      })

      var slideCarousel = $.fn.carousel.Constructor.prototype.slide
      $.fn.carousel.Constructor.prototype.slide = function (type, next) {
        var $element = this.$element
          , $active  = $element.find('[role=tabpanel].active')
          , $next    = next || $active[type]()
          , $tab
          , $tab_count = $element.find('[role=tabpanel]').size()
          , $prev_side = $element.find('[data-slide="prev"]')
          , $next_side = $element.find('[data-slide="next"]')
          , $index      = 0
          , $prev_index = $tab_count -1
          , $next_index = 1
          , $id

        if ($next && $next.attr('id')) {
          $id = $next.attr('id')
          $index = $id.lastIndexOf("-")
          if ($index >= 0) $index = parseInt($id.substring($index+1), 10)

          $prev_index = $index - 1
          if ($prev_index < 1) $prev_index = $tab_count - 1

          $next_index = $index + 1
          if ($next_index >= $tab_count) $next_index = 0
        }

        $prev_side.attr('aria-label', 'Show slide ' + ($prev_index+1) + ' of ' + $tab_count)
        $next_side.attr('aria-label', 'Show slide ' + ($next_index+1) + ' of ' + $tab_count)


        slideCarousel.apply(this, arguments)

      $active
        .one('bsTransitionEnd', function () {
          var $tab

          $tab = $element.find('li[aria-controls="' + $active.attr('id') + '"]')
          if ($tab) $tab.attr({'aria-selected':false, 'tabIndex': '-1'})

          $tab = $element.find('li[aria-controls="' + $next.attr('id') + '"]')
          if ($tab) $tab.attr({'aria-selected': true, 'tabIndex': '0'})

       })
      }

     var $this;
     $.fn.carousel.Constructor.prototype.keydown = function (e) {

     $this = $this || $(this)
     if(this instanceof Node) $this = $(this)

     function selectTab(index) {
       if (index >= $tabs.length) return
       if (index < 0) return

       $carousel.carousel(index)
       setTimeout(function () {
            $tabs[index].focus()
            // $this.prev().focus()
       }, 150)
     }

     var $carousel = $(e.target).closest('.carousel')
      , $tabs      = $carousel.find('[role=tab]')
      , k = e.which || e.keyCode
      , index

      if (!/(37|38|39|40)/.test(k)) return

      index = $tabs.index($tabs.filter('.active'))
      if (k == 37 || k == 38) {                           //  Up
        index--
        selectTab(index);
      }

      if (k == 39 || k == 40) {                          // Down
        index++
        selectTab(index);
      }

      e.preventDefault()
      e.stopPropagation()
    }
    $(document).on('keydown.carousel.data-api', 'li[role=tab]', $.fn.carousel.Constructor.prototype.keydown);


 })(jQuery);
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
(function ($) {
	// Swiftype Autofill in search box
	$('#college-search-field').swiftype({ 
		engineKey: 'YUFwdxQ6-Kaa9Zac4rpb',
		resultLimit: 5,
		typingDelay: 600,
		renderFunction: function(document_type, item, idx) {
			return '<p class="title" data-url="'+ item['url'] +'">' + Swiftype.htmlEscape(item['title']) + '</p>';
		}
	});

/**
 * Suggest Recent Searches
 * 
 * Store recent searches and autofills, and suggest them in search box
 */
	// Store Search Terms in Local Storage
	var storeSearchItem = function storeSearchItem( term, target ) {
		var searchHistory;
		var historyObject = { 
			term: term,
			target: target
		}

		if ( ! localStorage.getItem('searchHistory') ) {
			// Build array and save to local storage as JSON array in string
			searchHistory = [historyObject];
			localStorage.searchHistory = JSON.stringify( searchHistory );
		} else {
			// Load previous search history and parse to JSON
			searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
			// Add new search term to array
			searchHistory.unshift(historyObject);
			// Truncate array to only save 5 items
			searchHistory = searchHistory.slice(0, 5);
			// Build array and save to local storage as JSON array in string
			localStorage.searchHistory = JSON.stringify( searchHistory );
		}
		
	}

	// Output Search Terms to Page
	var renderSuggestions = function renderSuggestions($this) {
		if ( localStorage.getItem('searchHistory') 
			 && ($this.val().length < 1 )
			 && ( $('#recent-pages-autocomplete').length === 0 ) ) {
			// Load Search History
			var searchHistory = JSON.parse(localStorage.getItem("searchHistory"));

			// Get visual position on page
			var searchPosition = $('#college-search-field').position();
			var searchWidth = $('#college-search-field').css('width');
			
			// Build Output
			var autocompleteOutput = '<div id="recent-pages-autocomplete" style="top: '+ (searchPosition.top + 33) +'px; left: '+ (searchPosition.left + 18 ) +'px; width:'+ searchWidth +'" role="listbox"><p>Recent Searches:</p><ul>';
			$.each(searchHistory, function(i, obj ){
				if (null == obj.target) {
					autocompleteOutput += '<li><a role="option" href="https://www.bellevuecollege.edu/search/?txtQuery=' + obj.term + '">'+ obj.term + '</a></li>';
				} else {
					autocompleteOutput += '<li><a role="option" href="'+ obj.target +'">'+ obj.term +'</a></li>';
				}
			});
			autocompleteOutput += '</ul></div>';
			$('#bc-searchform').append(autocompleteOutput);
		}
	}
	// Remove suggestions from page
	var removeSuggestions = function removeSuggestions () {
		if  ( $('#recent-pages-autocomplete').length > 0 ) {
			window.setTimeout( function(){
				$('#recent-pages-autocomplete').remove();
			}, 150 );
		}
	}

	// Save Recent Searches
	$('#bc-searchform form').submit(function(e) {

		// Hijack search form submission if a suggestion is selected
		if ( $('#recent-pages-autocomplete li.active').length ) {
			e.preventDefault(); //don't submit!

			// Go to URL
			$('#recent-pages-autocomplete li.active a').first().click();

			return;
		}

		// Capture search field
		var searchTerm = $( 'input#college-search-field' ).val();

		// Check there is a search term
		if (searchTerm.length > 0 ) {
		// Store without link
		storeSearchItem(searchTerm, null);
		}

		return true; // return false to cancel form action

		
	});

	// Save AutoCompletes
	$( ".autocomplete" ).first().on( "click", 'p.title', function() {
		storeSearchItem($(this).text(), $(this).attr("data-url"));
	});
	
	// Trigger display of suggestions
	$('#college-search-field').focus( function() {
		renderSuggestions($(this));
	});

	// Trigger removal of suggestions based on focus
	$('#bc-searchform').focusout( function(e) {
		// Check to make sure element that lost focus is not child of #bc-searchform
		if ( this.contains(e.relatedTarget) ) {
			// Do nothing
		} else {
			removeSuggestions();
		}
	});

	// Trigger removal of suggestions based on content of search field
	$('#college-search-field').keyup( function() {
		// Remove suggestions when search box has content
		if ( $(this).val().length > 0 ) {
			removeSuggestions();
		} else {
			renderSuggestions($(this)); // Render out suggestions if there is content!
		}
	});

	// Keyboard Controls
	var availableOptions = $('#recent-pages-autocomplete li');
	var selectedOption;
	// Down arrow
	$('#college-search-field').keydown(function(e) {
		
		// Available options have often not loaded; re-load them if needed
		var loadAvailableOptions = function() {
			if (availableOptions.length === 0) {
				availableOptions = $('#recent-pages-autocomplete li');
			}
		}

		// Check for arrow keys
		switch(e.which) {
			case 40 : // Down Arrow
				loadAvailableOptions();
				if(selectedOption) {
					selectedOption.removeClass('active');
					next = selectedOption.next();
					if(next.length > 0) {
						selectedOption = next.addClass('active');
					} else {
						selectedOption = availableOptions.eq(0).addClass('active');
					}
				} else {
					selectedOption = availableOptions.eq(0).addClass('active');
				}
				break;
			case 38 : // Up Arrow
				loadAvailableOptions();
				if(selectedOption) {
					selectedOption.removeClass('active');
					next = selectedOption.prev();
					if(next.length > 0) {
						selectedOption = next.addClass('active');
					} else {
						selectedOption = availableOptions.last().addClass('active');
					}
				} else {
					selectedOption = availableOptions.last().addClass('active');
				}
				break;
		}
	});

	// Javascript to enable link to tab
	// From https://stackoverflow.com/a/18627712
	if ($('.nav-tabs').length) {
		var hash = document.location.hash;
		var prefix = "tab_";

		if (hash) {
			hash = hash.replace(prefix, '');
			var hashPieces = hash.split('?');
			activeTab = $('.nav-tabs a[href="' + hashPieces[0] + '"]');
			activeTab && activeTab.tab('show');
		}

		// Change hash for page-reload
		$('.nav-tabs a').on('shown.bs.tab', function (e) {
			window.location.hash = e.target.hash.replace("#", "#" + prefix);
		});
	}

	// Mobile Nav Toggles 

	// Branded
	// Make sure new class is in place
	if ($("#top-wrap").hasClass("mobile-s17") && $("#top-wrap").hasClass("branded")) {

		// Open tools menu
		$("#tools-link").find('a').click(function (event) {
			event.preventDefault();
			$("header#top-wrap").toggleClass("action-tools");
			$("#tools-close-icon").focus();
		});

		// Close tools menu
		$("#tools-close-icon").click(function (event) {
			event.preventDefault();
			$("header#top-wrap").toggleClass("action-tools");
			$("#tools-link a").focus();
		});

		// Move menu to header
		$("#main-nav-wrap").insertAfter($("header#top-wrap").find(".container") );

		// Expand menu
		$("#main-nav-link").find('a').click( function( event ) {
			event.preventDefault();
			if ( $(this).attr('aria-expanded') == 'false' ) {
				$(this).attr('aria-expanded', 'true').focus();
			} else {
				$(this).attr('aria-expanded', 'false');
			}
			
			$("header#top-wrap").toggleClass("action-menu").
				find("#main-nav-wrap").slideToggle().attr('aria-role', 'region');
		});

		// Transform when search has focus
		$("#bc-searchform").focusin( function ( event ) {
			$("header#top-wrap").addClass("action-search");
		}).focusout( function ( event ) {
			$("header#top-wrap").removeClass("action-search");
		});
	}

	// Lite
	// Make sure new class is in place
	if ($("#header-actions-container").length && $("#top-wrap").hasClass("lite")) {

		// Move menu to header
		$("#main-nav-wrap").appendTo($("#top"));

		// Expand menu
		$("#main-nav-link").find('a').click(function (event) {
			if ($("#top").css("flex-direction") == "column") {  // only fire when in mobile view
				event.preventDefault();
				if ($(this).attr('aria-expanded') == 'false') {
					$(this).attr('aria-expanded', 'true').focus();
				} else {
					$(this).attr('aria-expanded', 'false');
				}

				$("div#top.mobile-s17").toggleClass("action-menu").
					find("#main-nav-wrap").slideToggle().attr('aria-role', 'region');
			}
		});

		// Transform when search has focus
		$("#bc-search").focusin(function (event) {
			$("div#top.mobile-s17").addClass("action-search");
		}).focusout(function (event) {
			$("div#top.mobile-s17").removeClass("action-search");
		});
	}


})(jQuery);