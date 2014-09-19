$(window).resize(function(){
        if($(window).width() < 961) {
            $("#splashVid").remove();
            $("#recentVid").remove();
        }
});
