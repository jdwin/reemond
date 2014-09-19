$(document).ready(function() {
    noVid();
});

$(window).resize(function() {
    noVid();
});

function noVid() {

    console.log($(window).width());

    if($(window).width() < 961) {
        skrollr.init().destory();
        $(".noVid").remove();
    }
};
