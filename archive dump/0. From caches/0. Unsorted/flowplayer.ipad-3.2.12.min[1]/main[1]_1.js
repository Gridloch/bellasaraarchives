(function(fn) {
	window.console = window.console || {log: fn, warn: fn, info: fn};
})(function() {});

(function ($, define, Drupal, window, document, undefined) {

define([
	'Disney/UI',
	'config',

	'libs/mejs/mediaelement-and-player',
	'libs/swfobject',
	'plugins/jquery.zee.sugar',
	'plugins/jquery.zee.slide',
	'plugins/jquery.zee.gallery',
	'plugins/jquery.zee.target',
	'plugins/jquery.scrollto',
	'plugins/mediaelement.googleanalytics'

], function(UI, config) {

	$(function() {

		UI.init();

		/**/
		$('script[type="text/javascript-onready"]').each(function() {
			var s = document.createElement('script');
			s.type = 'text/javascript';
			s.innerHTML = $(this).detach().html();
			document.body.appendChild(s);
		});
		/**/

		// Slideshow
		if(UI.$slideshow.length) {

			UI.$slideshow.slide();

		}

		// Gallery
		if(UI.$gallery.length) {

			UI.$gallery.gallery();

		}

		var closeHandler = function(e) {

			if(UI.$body.hasClass('mobile-sidebar-visible')) {
				e.preventDefault();
				UI.$body.removeClass('mobile-sidebar-visible');

				$('.page').off('click', closeHandler);
			}
		}

		// Mobile nav
		if(UI.$mobileLinkNav.length) { 

			UI.$mobileLinkNav.on('click', function(e) {
				e.preventDefault();

				if(!UI.$body.hasClass('mobile-sidebar-visible')) { 
					e.stopPropagation();
				}
				
				UI.$body.addClass('mobile-sidebar-visible');

				$('.page').on('click', closeHandler);
			});
	
		}

		// Mobile sidebar close
		if(UI.$mobileSidebarClose.length) { 

			UI.$mobileSidebarClose.on('click', function(e) {
				e.preventDefault();
				UI.$body.removeClass('mobile-sidebar-visible');
			});

		}

		// Mobile sidebar
		if(UI.$mobileSidebar.length) { 

			UI.$mobileNav.on('click', '.submenu > a', function(e) {
				e.preventDefault();
				$(this).closest('li').toggleClass('expanded');
			});

		}

		if(UI.$primaryNav.length) {

			var $pageNav = UI.$primaryNav.on('click', '.page-nav-item:not(.item-moments) > a', function(e) {
				var $a = $(this),
					$li = $a.closest('li'),
					$overlay = $li.children('.page-nav-overlay');

				if($overlay.length || $li.hasClass('expandable')) {
					e.preventDefault();
					$li.expand();
					$pageNav.addClass('hoverable');
				}
			});

			var isOnPrimaryNav = false,
			primaryLeaveTimer = false,
			primaryNavDelay = 500;

			$pageNav.on('mouseenter', function() {
				clearTimeout(primaryLeaveTimer);
				primaryLeaveTimer = false;
			});

			$handle = $('.page-nav-handle');

			$handle.on('click', function(e) {
				e.preventDefault();
				$('li.hover.expanded').removeClass('expanded').removeClass('hover');
				$('li.hover').removeClass('hover');
			});
			
			$pageNav.on('mouseleave', function() {
				primaryLeaveTimer = setTimeout(function() {
					$pageNav.removeClass('hoverable').find('li.hover').removeClass('hover');
				}, primaryNavDelay);
			});

			$pageNav.on('mouseenter', '.page-nav-item', function() {
				$pageNav.find('li.hover').removeClass('hover');
				$(this).addClass('hover');
			});

		}


		if(UI.$video.length) {

			UI.$video.filter(':not(.no-mejs)').mediaelementplayer(mejsOptions);

		}


		// Sheet Filter
		if(UI.$sheetFilter.length) {

			UI.$sheetFilter.find(UI.$sheetFilterHandle).click(function(e) {
		     	e.preventDefault();
		        UI.$sheetFilter.toggleClass('sheet-filter-drawer-visible')
		        return false;
		     });

		}


		$('.fake-upload input').on('change', function() {
			if(this.value) {
			 	$('.upload').addClass('attachment');
			}
			else {
				$('.upload').removeClass('attachment');
			}
		});

		// Back to top
		if(UI.$backToTop.length) {

			UI.onscroll(function() {
				UI.$backToTop[UI.$window.scrollTop() <= 0 ? 'turnOff' : 'turnOn']();
			});

			UI.$backToTop.on('click', function(e) {
				e.preventDefault();
			    UI.$htmlBody.animate({scrollTop:0}, 400);
			});
			
		}

		$.fn.scrollToOnlyIfVisible = function(duration, callback) {
			return this.each(function() {
				var $el = $(this),
					eTop = $el.offset().top,
					eHeight = $el.height(),
					$window = $(window),
					wTop = $window.scrollTop(),
					wHeight = $window.height();

				if(eTop < wTop || (eTop + eHeight) > (wTop + wHeight)) {
					$.scrollTo($el, duration, callback);
				}
			});
		};

		// Targeters
		UI.$body.zeeTarget();

	});
});
})(jQuery, define, Drupal, this, this.document);