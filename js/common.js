$(function() {

	$('header nav ul li a').each(function () {
		var location = window.location.href,
				link = this.href; 
		if(location == link) {
			$(this).addClass('active_mnu');
		}
	});


	$('.nav_button').click(function(){
		$('#burger').toggleClass('active-sandwich');
		$('header nav').slideToggle();
	});


	$('.portfolio_item').each(function(e) {
		var	th = $(this);
		th.attr('href', '#poprtfolio_img_' + e)
		.find(".portfolio-popup")
		.attr("id", 'poprtfolio_img_' + e);
	});

	$('.portfolio_item').magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline'
	});


	$('.owl-carousel1').owlCarousel({
		items: 1,
		loop: true,
		mouseDrag: false,
		touchDrag: false,
		autoplay: true,
		dots: false,
		autoplaySpeed: 1000,
		autoplayTimeout: 5000
	});

	$('.owl-carousel2').owlCarousel({
		items: 1,
		nav: true,
		navText: [ '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>' ]
	});

});
