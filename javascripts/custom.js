/*Functions for BC Calls to Noisy.js*/

/* JQuery Document Ready*/
jQuery(function() {

	jQuery('body').noisy({
		'intensity' : 0.5,
		'size' : 200,
		'opacity' : 0.04,
		'fallback' : '',
		'monochrome' : false
	});
	jQuery('#bigfoot').noisy({
		'intensity' : 0.5,
		'size' : 80,
		'opacity' : 0.05,
		'fallback' : '',
		'monochrome' : false
	}).find('.inner').noisy({
		'intensity' : 1,
		'size' : 80,
		'opacity' : 0.04,
		'fallback' : '',
		'monochrome' : false
	});
	jQuery('#top-wrapper').find('.border').noisy({
		'intensity' : 0.5,
		'size' : 80,
		'opacity' : 0.05,
		'fallback' : '',
		'monochrome' : true
	});

	jQuery('.navbar').find('.navbar-inner').noisy({
		'intensity' : 0.5,
		'size' : 40,
		'opacity' : 0.05,
		'fallback' : '',
		'monochrome' : true
	});
});


(function ($) {
	// Swiftype Autofill in search box
	$('#college-search-field').swiftype({ 
		engineKey: 'YUFwdxQ6-Kaa9Zac4rpb',
		resultLimit: 5
	});

	// Mobile Nav Toggles 

	// Branded
	// Make sure new class is in place
	if ($("#top-wrap").hasClass("mobile-s17") && $("#top-wrap").hasClass("branded")) {

		// Open tools menu
		$("#tools-link").find('a').click(function (event) {
			event.preventDefault();
			$("section#top-wrap").toggleClass("action-tools");
			$("#tools-close-icon").focus();
		});

		// Close tools menu
		$("#tools-close-icon").click(function (event) {
			event.preventDefault();
			$("section#top-wrap").toggleClass("action-tools");
			$("#tools-link a").focus();
		});

		// Move menu to header
		$("#main-nav-wrap").insertAfter($("section#top-wrap").find(".container") );

		// Expand menu
		$("#main-nav-link").find('a').click( function( event ) {
			event.preventDefault();
			if ( $(this).attr('aria-expanded') == 'false' ) {
				$(this).attr('aria-expanded', 'true').focus();
			} else {
				$(this).attr('aria-expanded', 'false');
			}
			
			$("section#top-wrap").toggleClass("action-menu").
				find("#main-nav-wrap").slideToggle().attr('aria-role', 'region');
		});

		// Transform when search has focus
		$("#bc-searchform").focusin( function ( event ) {
			$("section#top-wrap").addClass("action-search");
		}).focusout( function ( event ) {
			$("section#top-wrap").removeClass("action-search");
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