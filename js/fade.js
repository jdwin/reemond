$(function() { 
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop != 0)
            $('#menu').stop().animate({'opacity':'0'});
        else
            $('#menu').stop().animate({'opacity':'1'});
    });

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop >= 9)
            $('#menu2').stop().animate({'opacity':'1'});
        else
            $('#menu2').stop().animate({'opacity':'0'});
    });
});
