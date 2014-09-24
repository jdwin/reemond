$(document).ready(function() {
    checkSize();
});
$(window).resize(function() {
    checkSize();
});

$window = $(window);
$section = $(".scrollView");

function resizeWindow() {

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
    $('.mobile').remove();
};

function checkSize() {

    viewW = $window.width();

    if (viewW > 961) {

        resizeWindow();

    } else {

        noMobile();

    };
};

