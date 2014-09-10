( function( $ ) {

    //SKROLLR	
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
		
		// Init Skrollr
		var s = skrollr.init();
		
		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slide.height(winH);

        s.refresh($('.smoothSlide'));
	    
	}

} )( jQuery );
