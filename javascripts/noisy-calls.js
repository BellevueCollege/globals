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
