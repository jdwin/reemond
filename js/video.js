$(document).ready(function() {
    var position = i,
        playlist = ['./vid/vancouverearth2.mp4', './vid/torontozoomout2.mp4', './vid/torontozoom2.mp4', './vid/vancouverglass2.mp4', './vid/birdsforsite2.mp4'],
        video = document.getElementById('splashVid');

    video.addEventListener('ended', rotate_video, false);

    function rotate_video() {
        video.setAttribute('src', playlist[position]);
        video.load();
        i = Math.floor((Math.random() * 5) + 1);
        //position = Math.floor((Math.random() * 5) + 1);
        position = i
    }

    var position2 = 0,
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
