$(document.ready(function() {
    
    $(window).scroll(function() { 
    var scrollTop = $(window).scrollTop();
        position = 1,
        playlist = ['./vid/vancouverearth.mp4', './vid/torontozoom.mp4', './vid/vancouverglass.mp4'],
        video = document.getElementById('splashVid');

    video.addEventListener('ended', rotate_video, false);
    
    if(scrollTop < 230) {
        function rotate_video() {
        video.setAttribute('src', playlist[position]);
        video.load();
        position++;
        if position >=playlist.length) {position = 0;}
    }
