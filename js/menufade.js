$(function() { 

    //Fade out initial menu
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop < 230)
            $('#menu').stop().fadeIn('fast');
        else
            $('#menu').stop().fadeOut('fast');
    });

    //Fade in second menu
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 399)
            $('#menu2').stop().animate({'opacity':'1'});
        else
            $('#menu2').stop().animate({'opacity':'0'});
    });

});
