$(document).ready(function() {

	$window = $(window);
	$slide = $('.smoothSlide');
	$body = $('body');
	
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      adjustWindow();
		      
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	
	function adjustWindow(){
		
	    winH = $window.height();
        winW = $window.width();

	    if(winH <= 550) {
			winH = 550;
		} 

        if( winW > 961) {
		    var s = skrollr.init({
                forceHeight: false
            });

            $slide.height(winH);

            s.refresh($('.smoothSlide'));
        } else {

            var s = skrollr.init();
            s.destory();
        }




	}

});