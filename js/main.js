$(document).ready(function() {

    $window = $(window);
    $section = $(".scrollView");

    resizeWindow();

    function resizeWindow() {

        viewH = $window.height();
        viewW = $window.width();

        var s = skrollr.init({
            forceHeight: false
        });

        $section.height(viewH);
        $section.width(viewW);

        s.refresh($(".scrollView"));
    }

});
