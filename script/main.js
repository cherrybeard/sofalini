$(function(){
	$('[data-scroll-to]').scroller();

	var $popup = $('[data-popup]'),
			$body = $('body'),
			$popupModel = $('[data-popup-window]'),
			$modelBlock = $popupModel.find('.model'),
			$modelInput = $popupModel.find('input[name=message]'),
			$textInput = $popupModel.find('input[name=email]');

	$('.swiper-slide').on('click', function(){
		var $this = $(this);
		var $header = $this.closest('header');
		if ($header.length || $this.hasClass('promo')) return;

		var message = $this.find('h3').text() + ' ' + $this.find('.cost').text();
		var $model = $this.clone();

		$modelBlock.empty();
		$modelBlock.append($model);
		$modelInput.val(message);

		$body.addClass('popup-opened');
		$popup.attr('data-popup', 'model');
	});

	$popup.on('click', '[data-popup-close]', function(){
		$popup.attr('data-popup', 'closed');
		$body.removeClass('popup-opened');
	});
});
