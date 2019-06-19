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

// burger
$(document).ready(function () {
	$('.burger').click(function () {
		$(this).toggleClass('burger--active');
		$('.nav-menu').toggleClass('nav-menu--active')
		if($(window).scrollTop() > 100) {
		} else {
			$('.header').addClass('header--active')	
		}
		
	});
});

// clients slider
$(document).ready(function () {
	$('.clients-slider').slick({
		dots: true,
		infinite:true,
		speed: 500
	});
});

// our team slider
$(document).ready(function () {
	$('.our-team__slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
	});
});