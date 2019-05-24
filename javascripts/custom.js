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
	

	$.fn.searchHistory = function( options ) {

		$.fn.searchHistory.defaults = {
			container: this, // to override, an element will need to be provided
			field: '#college-search-field',
			autocompleteItem: '.autocomplete',
			id: 'recent-pages-autocomplete',
			searchURL: 'https://www.bellevuecollege.edu/search/?txtQuery=',
			localStorageKey: 'searchHistory'
		}

		var options = $.extend({}, $.fn.searchHistory.defaults, options);

		// Store Search Terms in Local Storage
		var storeSearchItem = function storeSearchItem( term, target ) {
			var searchHistory;
			var historyObject = { 
				term: term,
				target: target
			}
	
			if ( ! localStorage.getItem(options.localStorageKey) ) {
				// Build array and save to local storage as JSON array in string
				searchHistory = [historyObject];
				localStorage.setItem(options.localStorageKey, JSON.stringify( searchHistory ));
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
			if ( localStorage.getItem(options.localStorageKey) 
				 && ($this.val().length < 1 )
				 && ( $('#' + options.id).length === 0 ) ) {
				// Load Search History
				var searchHistory = JSON.parse(localStorage.getItem(options.localStorageKey));
	
				// Get visual position on page
				var searchPosition = $(options.field).position();
				var searchHight = $(options.field).outerHeight();
				var searchWidth = $(options.field).css('width');
				
				// Build Output
				var autocompleteOutput = '<div id="' + options.id + '" class="recent-pages-autocomplete" style="top: '+ (searchPosition.top + searchHight) +'px; width:'+ searchWidth +'" role="listbox"><p>Recent Searches:</p><ul>';
				$.each(searchHistory, function(i, obj ){
					if (null == obj.target) {
						autocompleteOutput += '<li><a role="option" href="' + options.searchURL + encodeURIComponent(obj.term) + '">' + obj.term + '</a></li>';
					} else {
						autocompleteOutput += '<li><a role="option" href="'+ obj.target +'">'+ obj.term +'</a></li>';
					}
				});
				autocompleteOutput += '</ul></div>';
				options.container.append(autocompleteOutput);
			}
		}

		// Remove suggestions from page
		var removeSuggestions = function removeSuggestions () {
			if  ( $('#' + options.id).length > 0 ) {
				window.setTimeout( function(){
					$('#' + options.id).remove();
				}, 150 );
			}
		}

		// Save Recent Searches
		options.container.find('form').submit(function(e) {

			// Hijack search form submission if a suggestion is selected
			var historyDropdown = options.container.find('#' + options.id);

			if ( historyDropdown.find( 'li.active' ).length ) {
				e.preventDefault(); //don't submit!

				// Go to URL
				window.location = historyDropdown.find( 'li.active a' ).first().attr('href');

				return;
			}

			// Capture search field
			var searchTerm = $( options.field ).val();

			// Check there is a search term
			if (searchTerm.length > 0 ) {
			// Store without link
			storeSearchItem(searchTerm, null);
			}

			return true; // return false to cancel form action

			
		});

		// Save AutoCompletes
		$( options.autocompleteItem ).on( "click", 'p.title', function() {
			storeSearchItem($(this).text(), $(this).attr("data-url"));
		});

		// Trigger display of suggestions
		$(options.field).focus( function() {
			renderSuggestions($(this));
		});

		// Trigger removal of suggestions based on focus
		options.container.focusout( function(e) {
			// Check to make sure element that lost focus is not child of #bc-searchform
			if ( this.contains(e.relatedTarget) ) {
				// Do nothing
			} else {
				removeSuggestions();
			}
		});

		// Trigger removal of suggestions based on content of search field
		$(options.field).keyup( function() {
			// Remove suggestions when search box has content
			if ( $(this).val().length > 0 ) {
				removeSuggestions();
			} else {
				renderSuggestions($(this)); // Render out suggestions if there is content!
			}
		});

		// Keyboard Controls
		var availableOptions = $('#' + options.id).find('li');
		var selectedOption;
		// Down arrow
		$(options.field).keydown(function(e) {
			
			// Available options have often not loaded; re-load them if needed
			var loadAvailableOptions = function() {
				if (availableOptions.length === 0) {
					availableOptions = $('#' + options.id).find('li');
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
	}

	// Instantiate for Globals Branded
	$('#bc-searchform').searchHistory({});

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