$(document).ready(function() {
	$("#slider").bxSlider({
	  auto: true,
	  // One image at a time
	  minSlides: 1,
	  maxSlides: 1,
	  slideWidth: 250,
	  slideMargin: 10,
	  randomStart: true,
	  // Move one slide at a time
	  moveSlides: 1,
	  // Auto transition in every 3 seconds
	  pause: 3000,
	  // Pager
	  pagerSelector: $("#pager"),
	  pagerType: "short"
	});
});
