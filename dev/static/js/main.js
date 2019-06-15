$(document).ready(function () {
    svg4everybody({});
});

$(document).ready(function () {
	$(window).on("scroll", function () {
		if($(window).scrollTop() > 100) {
					$(".header").addClass('header--active');
	} else {
			$(".header").removeClass('header--active');
		}
	})
});