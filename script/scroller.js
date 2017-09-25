$(function(){

	$.fn.extend( {
	  scroller: function(){
	    var self = $.fn.scroller;
	    $(this).each(function(i, el) {
	      self.init(el);
			});
		}
	});

	$.extend($.fn.scroller,
		{
			init: function(el) {
				var $el = $(el);
				$el.on('click', function(e){
					var target = $el.attr('data-scroll-to');
					if (target) {
						e.preventDefault();
						pos = $(target).offset().top;
						var targetHeight = $(target).height();
						var windowHeight = $(window).height();
						$('html, body').animate({
			        scrollTop: (pos - (windowHeight - targetHeight) / 2)
				    }, 300);
					}
				});
			}
		}
	);
});
