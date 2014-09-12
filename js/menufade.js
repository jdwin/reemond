$(function() { 

    //Fade out initial menu
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop < 230)
            $('#menu').fadeIn('fast');
        else
            $('#menu').fadeOut('fast');
    });

    //Fade in second menu
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 399)
            $('#menu2').animate({'opacity':'1'});
        else
            $('#menu2').animate({'opacity':'0'});
    });

});
