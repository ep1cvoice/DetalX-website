$(document).ready(function () {
	$('.swiper-wrapper').slick({
		mobileFirst: true,
		centerMode: true,
		centerPadding: '40px',
		slidesToShow: 1,
		arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
		pauseOnHover: true,

		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					centerPadding: '60px',
					arrows: false,
				},
			},
		],
	});
});
