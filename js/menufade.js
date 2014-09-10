$(function() { 
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop < 400)
            $('#menu').stop().animate({'opacity':'1'});
        else
            $('#menu').stop().animate({'opacity':'0'});
    });

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 399)
            $('#menu2').stop().animate({'opacity':'1'});
        else
            $('#menu2').stop().animate({'opacity':'0'});
    });

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop < 800)
            $('#d4 .ree').animate({'opacity':'0'});
        else
            $('#d4 .ree').animate({'opacity':'1'}, {'duration':'300'});
    });
});
