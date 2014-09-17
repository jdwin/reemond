$(document).ready(function() {
    var position = 1,
        playlist = ['./vid/vancouverearth2.mp4', './vid/torontozoom2.mp4', './vid/torontozoom2.mp4', './vid/vancouverglass2.mp4', './vid/birdsforsite2.mp4'],
        video = document.getElementById('splashVid');

    video.addEventListener('ended', rotate_video, false);

    function rotate_video() {
        video.setAttribute('src', playlist[position]);
        video.load();
        position++;
        if (position >= playlist.length) {position= 1;}
    }

    var position2 = 1,
        playlist2 = ['./vid/vancouverbridge2.mp4'],
    videoLink = document.getElementById('recentVid');

    videoLink.addEventListener('ended', rewind, false);
    
    function rewind() {
        videoLink.setAttribute('src', playlist2[position2]);
        videoLink.load();
        position2++;
        if (position2 >= playlist2.length) {position2 = 0;}
    }
});
