$(document).ready(function() {

    // Reel One ------------------------------------------
    $('#videoReel1').bind('mouseenter', function() {
        $('#videoReel1 img').animate({"opacity":0.1});
        $('#videoReel1 .overlay').animate({"opacity":1});
    });
    $('#videoReel1').bind('mouseleave', function() {
        $('#videoReel1 img').animate({"opacity":1});
        $('#videoReel1 .overlay').animate({"opacity":0.1});
    });

    // Reel Two ------------------------------------------
    $('#videoReel2').bind('mouseenter', function() {
        $('#videoReel2 img').animate({"opacity":0.1});
        $('#videoReel2 .overlay').animate({"opacity":1});
    });
    $('#videoReel2').bind('mouseleave', function() {
        $('#videoReel2 img').animate({"opacity":1});
        $('#videoReel2 .overlay').animate({"opacity":0});
    });

    // Reel Three -----------------------------------------
    $('#videoReel3').bind('mouseenter', function() {
        $('#videoReel3 img').animate({"opacity":0.1});
        $('#videoReel3 .overlay').animate({"opacity":1});
    });
    $('#videoReel3').bind('mouseleave', function() {
        $('#videoReel3 img').animate({"opacity":1});
        $('#videoReel3 .overlay').animate({"opacity":0});
    });

    // Reel Four -----------------------------------------
    $('#videoReel4').bind('mouseenter', function() {
        $('#videoReel4 img').animate({"opacity":0.1});
        $('#videoReel4 .overlay').animate({"opacity":1});
    });
    $('#videoReel4').bind('mouseleave', function() {
        $('#videoReel4 img').animate({"opacity":1});
        $('#videoReel4 .overlay').animate({"opacity":0});
    });

    // Reel Five -----------------------------------------
    $('#videoReel5').bind('mouseenter', function() {
        $('#videoReel5 img').animate({"opacity":0.1});
        $('#videoReel5 .overlay').animate({"opacity":1});
    });
    $('#videoReel5').bind('mouseleave', function() {
        $('#videoReel5 img').animate({"opacity":1});
        $('#videoReel5 .overlay').animate({"opacity":0});
    });

    // Reel Six ------------------------------------------
    $('#videoReel6').bind('mouseenter', function() {
        $('#videoReel6 img').animate({"opacity":0.3});
        $('#videoReel6 .overlay').animate({"opacity":1});
    });
    $('#videoReel6').bind('mouseleave', function() {
        $('#videoReel6 img').animate({"opacity":1});
        $('#videoReel6 .overlay').animate({"opacity":0});
    });

});
