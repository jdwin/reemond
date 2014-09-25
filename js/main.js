var $window = $(window),
    $section = $(".scrollView"),
    viewH = $window.height(),
    viewW = $window.width();

function resizeWindow() {
//initialise skrollr, check window size, and resize sections
    $section = $(".scrollView"),
    viewH = $window.height(),
    viewW = $window.width();

    var s = skrollr.init({
        forceHeight: false
    });

    $section.height(viewH);
    $section.width(viewW);

    s.refresh($(".scrollView"));
};

function fadeMenu() { 

    //Fade out initial menu
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop < 230) {
            $('#splashMenu').stop().fadeIn('fast');
        } else {
            $('#splashMenu').stop().fadeOut('fast');
        }
    });

    //Fade in second menu
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 399) {
            $('#topMenu').stop().animate({'opacity':'1'});
        } else {
            $('#topMenu').stop().animate({'opacity':'0'});
        }
    });

};

function randomVideo() {

    var sequence = [0,1,2,3,4],
        count = 1,
        playlist = ['./vid/vancouverearth.mp4',  './vid/torontozoomout.mp4', './vid/torontozoom.mp4', './vid/vancouverglass.mp4', './vid/birds.mp4'],
        video = document.getElementById('splashVid');

    video.addEventListener('ended', randomVideo, false);

    sequence.sort(function() {return 0.5 - Math.random()});

        video.setAttribute('src', playlist[sequence[count]]);
        video.load();
        count++;
        if (count >= playlist.length) {count=1;}
};

function mobile() {
//remove elements on mobile
    $(".mobile").remove();
    $("#splashMenu").replaceWith("#mobileMenu");
};

function desktop() {
//remove elements on mobile
    $("#mobileMenu").remove();
    $(".splashSlide").remove();
};

function checkDeploy() {
//run functions at size
    if (viewW > 961) {
        randomVideo();
        resizeWindow();
        desktop();
    } else {
        mobile();
    };
};

fadeMenu();

$(window).resize(function() {checkDeploy();});
$(document).ready(function() {checkDeploy();});
