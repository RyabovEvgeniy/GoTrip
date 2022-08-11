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
	

// Nav icon
const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav')
const menuIcon = document.querySelector('.menu-icon');


navBtn.onclick = function () {
	nav.classList.toggle('nav_mobile')
	menuIcon.classList.toggle('menu-icon_active');
	document.body.classList.toggle('no-scroll');
};