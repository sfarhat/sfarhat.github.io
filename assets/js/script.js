$(document).ready(function() {

	var numApplicationClicked = 0;
	$('.check-circle').click(function() {
		$(this).css('background-color', 'darkseagreen');
		numApplicationClicked += 1;

		if (numApplicationClicked == 3) {
			$('#end-of-application').hide();
			$('#end-of-application').text('Ah, perfect! We are here to help.');
			$('#end-of-application').show();
			$('html, body').animate({ scrollTop: 300 }, 1500)
		}
	});

	$('#section-1.arrow-circle').click(function() {
		if ($(this).hasClass('rotated')) {
			$(this).removeClass('rotated');
			$('html, body').animate({ scrollTop: 300 }, 1500);
		} else {
			$(this).addClass('rotated');
			$('html, body').animate({ scrollTop: 835 }, 1500);
		}
	});

	$('#section-2.arrow-circle').click(function() {
		if ($(this).hasClass('rotated')) {
			$(this).removeClass('rotated');
			$('html, body').animate({ scrollTop: 740 }, 1500);
		} else {
			$(this).addClass('rotated');
			$('html, body').animate({ scrollTop: 1350 }, 1500);
		}
	});

	$('.card').click(function() {
		var word = $(this).attr('id');
		var card = '.card-container#' + word;
		$(card).fadeIn(300);
		$('#overlay').fadeIn(300);
	});

	$('.back-button').click(function() {
		$('.card-container').fadeOut(300);
		$('#overlay').fadeOut(300);
	});

});