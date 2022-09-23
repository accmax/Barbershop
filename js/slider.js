$(document).ready(function(){
	$('.hero-slider').slick({
 	    arrows:false,
		dots:true,
		slidesToShow:1,
		autoplay:true,
		speed:2000,
		autoplaySpeed: 5000,
		accessibility: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		dragable: false,
		swipe: false
	});

	$('.slick-prev').click(function (){
		$('.hero-slider').slick('slickPrev');
		
	});

	$('.slick-next').click(function (){
		$('.hero-slider').slick('slickNext');
		
	});
});