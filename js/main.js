$(document).ready(function() {
    checkSize();
});
$(window).resize(function() {
    checkSize();
});

$window = $(window);
$section = $(".scrollView");

function resizeWindow() {
//initialise skrollr, check window size, and resize sections

    viewH = $window.height();
    viewW = $window.width();

    var s = skrollr.init({
        forceHeight: false
    });

    $section.height(viewH);
    $section.width(viewW);

    s.refresh($(".scrollView"));
};

function noMobile() {
//remove elements on mobile
    $('.mobile').remove();
};

function checkSize() {
//run functions at size
    viewW = $window.width();

    if (viewW > 961) {

        resizeWindow();

    } else {

        noMobile();

    };
};

