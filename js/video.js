$(document).ready(function() {
    var position = 1,
        playlist = ['./vid/vancouverearth.mp4', './vid/torontozoom.mp4', './vid/vancouverglass.mp4'],
        video = document.getElementById('splashVid');

    video.addEventListener('ended', rotate_video, false);

    function rotate_video() {
        video.setAttribute('src', playlist[position]);
        video.load();
        position++;
        if (position >= playlist.length) {position= 0;}
    }
});
