$(window).resize(function() {
    noVid();
});

function noVid() {

    console.log($(window).width());

    if($(window).width() < 961) {
        $(".noVid").remove();
    }
};
