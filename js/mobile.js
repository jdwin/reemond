$(document).ready(function() {
    noVid();
});

$(window).resize(function() {
    noVid();
});

var noVid = function() {
    if ($(window).width() <= 961) {
        $('.noVid').remove();
    };
};
