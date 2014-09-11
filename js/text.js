$(function() {
    $('.overlay').css('font-size', '1rem');

    while( $('.overlay').height() > $('#videoContent img').height() ) {
        $('.overlay').css('font-size', (parseInt($('.overlay').css('font-size')) -1) + "rem");
    }
});
