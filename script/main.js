/* NAVICONE */
/************/
var $navicon_block = $('.navicon_block'),
	$navicon = $('.navicon'),
	$h_nav_hidden = $('.hed__nav_hidden');

$($navicon_block).on('click', function() {
	$($navicon).toggleClass('navicon__active');
	$($h_nav_hidden).slideToggle();
})

/* HED SLIDE */
/*************/
var 
	$headerSlideOne = $('.hed__slide_one'),
	$headerSlideTwo = $('.hed__slide_two')
	hedTimeSlide = 15000,
	hedDur = 300,
	i = 0;

setInterval(function(){
	if(i == 0) {
		$headerSlideOne.fadeOut(hedDur, function() {
			$headerSlideTwo.fadeIn(hedDur);
		});
		i = 1;
	}else if(i == 1) {
		$headerSlideTwo.fadeOut(hedDur, function() {
			$headerSlideOne.fadeIn(hedDur)
		});
		i = 0;
	}
}, hedTimeSlide);

/* SLIDE DOWN */
/**************/
var scroll = 500;

$(".hed__down").on("click", function(event) {
	event.preventDefault();
	var id = $(this).attr("href");
	var top = $(id).offset().top;
	$("body, html").animate({scrollTop: top}, scroll);
});
