$(function() {
  var swiperHeader = new Swiper ('.header', {
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      paginationClickable: true,
      effect: 'fade',
      autoplay: 5000,
      loop: true
  });
	$(".header").hover(function(){
  	swiperHeader.stopAutoplay();
  }, function(){
  	swiperHeader.startAutoplay();
  });

	DEFAULT_SLIDER = {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    grabCursor: true,
    slidesPerView: "auto"
  };
  var swiperTransform = new Swiper ('.transformers .swiper-container', DEFAULT_SLIDER);
  var swiperEco 			= new Swiper ('.eco .swiper-container', DEFAULT_SLIDER);
  var swiperSingle 		= new Swiper ('.single .swiper-container', DEFAULT_SLIDER);
  var swiperPremium 	= new Swiper ('.premium .swiper-container', DEFAULT_SLIDER);

});
