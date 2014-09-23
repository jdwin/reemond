$(document).ready(function() {
    noMobile();
});

$(window).resize(function() {
    noMobile();
});

var noMobile = function() {
    if ($(window).width() <= 961) {
        $('.mobile').remove();
    };
};
