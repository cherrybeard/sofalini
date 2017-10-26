$(function() {
	$('.options').on('click', '.options-invite button', function(){
		$(this).closest('.options').addClass('options-opened');
	});
	$('.contacts').on('click', '.callback', function(){
		$(this).closest('.contacts').addClass('contacts-opened');
	});

	checkInputs = function($inputs){
		$inputs.each(function(){
			var $input = $(this).closest('.text-input');
			if (!$(this).val()) {$input.addClass('error'); }
		});
	};

	$('[data-form]').on('submit', function(e){
		$this = $(this);
		e.preventDefault();

		checkInputs($this.find('input[type=text]'));
		checkInputs($this.find('input[type=email]'));
		checkInputs($this.find('textarea'));

		if (!$this.find('.text-input.error').length){
			var ajaxData = {
				url: 'index.php',
				type: $this.attr('method'),
				data: $this.serialize()
			};
			$this.find('button[type=submit]').prop('disabled', true);
			$this.find('.text-input').addClass('disabled');
			$.ajax(ajaxData).done(function(req) {
				$this.find('button[type=submit]').prop('disabled', false).addClass('success').text('Отправлено!');
			});
		}
	});

	$('[data-form]').on('focus', 'input', function(){
		$(this).closest('.text-input').removeClass('error');
	});

	$('[data-form]').on('focus', 'textarea', function(){
		$(this).closest('.text-input').removeClass('error');
	});
});
