$(document).ready(function() {
    noMobile();
    reSize();
});

$(window).resize(function() {
    noMobile();
    reSize();
});

var noMobile = function() {
    if ($(window).width() <= 961) {
        $('.mobile').remove();
    };
};

var reSize = function() {
    fh = $(window).width();
    fw = $(window).height();

    $('#d1').width(fw);
    $('#d1').height(fh);
    $('#d3').width(fw);
    $('#d3').height(fh);
    $('#d4').width(fw);
    $('#d4').height(fh);
}
