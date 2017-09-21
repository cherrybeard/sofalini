
$(function() {
    var swiperHeader = new Swiper ('.header', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        effect: 'fade',
        autoplay: 5000,
        loop: true
        // grabCursor: true,
        // slidesPerView: "auto"
    });
    var swiperTransform = new Swiper ('.transformers', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        grabCursor: true,
        slidesPerView: "auto"
    });   
    var swiperSingle = new Swiper ('.single', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        grabCursor: true,
        slidesPerView: "auto"
    }); 
      
});


























// 	$(".slider").slick({
// 		infinite: true,
// 		variableWidth: true,
// 		initialSlide: 0,
// 		prevArrow: '<button type="button" data-role="none" class="slick-prev"></button>',
// 		nextArrow: '<button type="button" data-role="none" class="slick-next"></button>',


// 	});

	// $('.slider').on('afterChange', function (event, slick, currentSlide) {

	// 	if(currentSlide == 0) {
 //            $('.slick-prev').addClass('hidden');
 //        }
 //        else {
 //            $('.slick-prev').removeClass('hidden');
 //        }  

 //        if(currentSlide === 4) {
 //            $('.slick-next').addClass('hidden');
 //        }
 //        else {
 //            $('.slick-next').removeClass('hidden');
 //        }

	// });
