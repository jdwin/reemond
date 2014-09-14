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

    var position2 = 0,
        playlist2 = ['./vid/vancouverbridge.mp4'],
    videoLink = document.getElementById('recentVid');

    videoLink.addEventListener('ended', rewind, false);
    
    function rewind() {
        videoLink.setAttribute('src', playlist2[position2]);
        videoLink.load();
        position2++;
        if (position2 >= playlist2.length) {position2 = 0;}
    }
});
