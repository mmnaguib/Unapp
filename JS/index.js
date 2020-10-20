/*global $*/
$(function () {
    'use strict';
    $(".creation button").hover(function () {
	    $(this).css({"background-color": "#4aca85", "color": "#FFF", "width": "200px"});
	    $('.creation button .fa').fadeIn(100);
    }, function () {
	    $(this).css({"background-color": "#fff", "color": "#4aca85", "width": "180px"});
	    $('.creation button .fa').fadeOut(100);
    });
    
    
    
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    
    var scrollBtn = $('#scroll-to-top');
	$(window).on('scroll', function () {
		if ($(this).scrollTop() >= 700) {
			scrollBtn.show();
		} else {
			scrollBtn.hide();
		}
	});


	scrollBtn.click(function () {
		$('html,body').animate({scrollTop: 0}, 600);
	});
    
});