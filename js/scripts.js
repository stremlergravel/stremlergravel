$('button').click(function() {
  $(this).toggleClass('expanded').siblings('div').slideToggle();
});



// Smooth scroll for in page links - http://wibblystuff.blogspot.in/2014/04/in-page-smooth-scroll-using-css3.html
// Improvements from - http://codepen.io/kayhadrin/pen/KbalA

$(function() {
	var $window = $(window), $document = $(document),
		transitionSupported = typeof document.body.style.transitionProperty === "string", // detect CSS transition support
		scrollTime = 1; // scroll time in seconds

	$(document).on("click", "a[href*=#]:not([href=#])", function(e) {
		var target, avail, scroll, deltaScroll;
    
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
			target = $(this.hash);
			target = target.length ? target : $("[id=" + this.hash.slice(1) + "]");

			if (target.length) {
				avail = $document.height() - $window.height();

				if (avail > 0) {
					scroll = target.offset().top;
          
					if (scroll > avail) {
						scroll = avail;
					}
				} else {
					scroll = 0;
				}

				deltaScroll = $window.scrollTop() - scroll;

				// if we don't have to scroll because we're already at the right scrolling level,
				if (!deltaScroll) {
					return; // do nothing
				}

				e.preventDefault();
				
				if (transitionSupported) {
					$("html").css({
						"margin-top": deltaScroll + "px",
						"transition": scrollTime + "s ease-in-out"
					}).data("transitioning", scroll);
				} else {
					$("html, body").stop(true, true) // stop potential other jQuery animation (assuming we're the only one doing it)
					.animate({
						scrollTop: scroll + "px"
					}, scrollTime * 1000);
					
					return;
				}
			}
		}
	});

	if (transitionSupported) {
		$("html").on("transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd", function(e) {
			var $this = $(this),
				scroll = $this.data("transitioning");
			
			if (e.target === e.currentTarget && scroll) {
				$this.removeAttr("style").removeData("transitioning");
				
				$("html, body").scrollTop(scroll);
			}
		});
	}
});


jQuery(document).ready(function($){
	//open the lateral panel
	$('.cd-btn-1').on('click', function(event){
		event.preventDefault();
		$('.cd-panel-1').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel-1').on('click', function(event){
		if( $(event.target).is('.cd-panel-1') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel-1').removeClass('is-visible');
			event.preventDefault();
		}
	});
  
  //open the lateral panel
	$('.cd-btn-2').on('click', function(event){
		event.preventDefault();
		$('.cd-panel-2').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel-2').on('click', function(event){
		if( $(event.target).is('.cd-panel-2') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel-2').removeClass('is-visible');
			event.preventDefault();
		}
	});
  
  //open the lateral panel
	$('.cd-btn-3').on('click', function(event){
		event.preventDefault();
		$('.cd-panel-3').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel-3').on('click', function(event){
		if( $(event.target).is('.cd-panel-3') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel-3').removeClass('is-visible');
			event.preventDefault();
		}
	});
  
  //open the lateral panel
	$('.cd-btn-4').on('click', function(event){
		event.preventDefault();
		$('.cd-panel-4').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel-4').on('click', function(event){
		if( $(event.target).is('.cd-panel-4') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel-4').removeClass('is-visible');
			event.preventDefault();
		}
	});
  
  //open the lateral panel
	$('.cd-btn-5').on('click', function(event){
		event.preventDefault();
		$('.cd-panel-5').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel-5').on('click', function(event){
		if( $(event.target).is('.cd-panel-5') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel-5').removeClass('is-visible');
			event.preventDefault();
		}
	});
  
  //open the lateral panel
	$('.cd-btn-6').on('click', function(event){
		event.preventDefault();
		$('.cd-panel-6').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel-6').on('click', function(event){
		if( $(event.target).is('.cd-panel-6') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel-6').removeClass('is-visible');
			event.preventDefault();
		}
	});
  //open the lateral panel
	$('.cd-btn-7').on('click', function(event){
		event.preventDefault();
		$('.cd-panel-7').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel-7').on('click', function(event){
		if( $(event.target).is('.cd-panel-7') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel-7').removeClass('is-visible');
			event.preventDefault();
		}
	});
  
  //open the lateral panel
	$('.cd-btn-8').on('click', function(event){
		event.preventDefault();
		$('.cd-panel-8').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel-8').on('click', function(event){
		if( $(event.target).is('.cd-panel-8') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel-8').removeClass('is-visible');
			event.preventDefault();
		}
	});
});