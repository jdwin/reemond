var Overlay(video) {
    this.video : video;
}
    
Overlay.assign = function() {
    $('videoReel' + this.video).bind('mouseenter', function() {
            $('#videoReel' + this.video + ' img').animate({'opacity':0.1});
            $('#videoReel' + this.video + ' .overlay').animate({'opacity':1});
            $('.overlay').width($('#videoReel' + this.video + ' img').width());
            $('.overlay').height($('#videoReel' + this.video + ' img').height());
        });
        $('videoReel' + this.video).bind('mouseleave', function() {
            $('videoReel' + this.video + ' img').animate({'opacity':1});
            $('videoReel' + this.video ' .overlay').animate({'opacity':0});
        });
}

var vid1 = new Overlay('1');
vid1.assign();
var vid2 = new Overlay('2');
vid2.assign();
var vid3 = new Overlay('3');
vid3.assign();
var vid4 = new Overlay('4');
vid4.assign();
var vid5 = new Overlay('5');
vid5.assign();
var vid6 = new Overlay('6');
vid6.assign();

