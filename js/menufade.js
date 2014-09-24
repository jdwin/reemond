$(function() { 

    //Fade out initial menu
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop < 230)
            $('#splashMenu').stop().fadeIn('fast');
        else
            $('#splashMenu').stop().fadeOut('fast');
    });

    //Fade in second menu
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 399)
            $('#topMenu').stop().animate({'opacity':'1'});
        else
            $('#topMenu').stop().animate({'opacity':'0'});
    });

});
