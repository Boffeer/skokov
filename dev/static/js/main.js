$(document).ready(function () {
    svg4everybody({});
});


// dark header-bg
$(document).ready(function () {
	$(window).on("scroll", function () {
		if($(window).scrollTop() > 100) {
					$(".header").addClass('header--active');
	} else {
			$(".header").removeClass('header--active');
		}
	})
});


$(document).ready(function () {
	$('.clients-slider').slick({
		dots: true,
		infinite:true,
		speed: 500
	});
});