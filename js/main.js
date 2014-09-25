var $window = $(window),
    $section = $(".scrollView"),
    viewH = $window.height(),
    viewW = $window.width();

function resizeWindow() {
//initialise skrollr, check window size, and resize sections

    var s = skrollr.init({
        forceHeight: false
    });

    $section.height(viewH);
    $section.width(viewW);

    s.refresh($(".scrollView"));
};

function Mobile() {
//remove elements on mobile
    $(".mobile").remove();
    $("#splashMenu").replaceWith("#mobileMenu");
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

function checkDeploy() {
//run functions at size
    if (viewW > 961) {
        $("#mobileMenu").remove();
        $(".splashSlide").remove();
        randomVideo();
        resizeWindow();
    } else {
        Mobile();
    };
};

$(document).ready(function() {
    checkDeploy();
});
$(window).resize(function() {
    checkDeploy();
});

