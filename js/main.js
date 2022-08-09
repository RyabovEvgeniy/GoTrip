// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
// 		center: true,
// 		loop: true,
// 		items: 3,
// 		margin: 30,
// 		startPosition: 1,		
// 	});
// });


$(document).ready(function () {
	$('.slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 1,
	});
});
	