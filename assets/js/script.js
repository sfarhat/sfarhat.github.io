$(document).ready(function() {

	var headingWidth = $('#heading-container').width();
	var pageWidth = $(document).width();
	var adjusted = (pageWidth - headingWidth) / 2;
	$('heading-container').css('left', adjusted);

	var numApplicationClicked = 0;
	$('.check-circle').click(function() {
		$(this).css('background-color', 'darkseagreen');
		numApplicationClicked += 1;

		if (numApplicationClicked == 3) {
			$('#end-of-application').hide();
			$('#end-of-application').text('Ah, perfect! We are here to help.');
			$('#end-of-application').show();
		}
	});

	$('.arrow-circle').click(function() {
		if ($(this).hasClass('rotated')) {
			$(this).removeClass('rotated');
			$('html, body').animate({ scrollTop: 250 }, 2000);
		} else {
			$(this).addClass('rotated');
			$('html, body').animate({ scrollTop: 750 }, 2000);
		}
	});

});