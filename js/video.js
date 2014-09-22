//Random play order of splash videos

$(document).ready(function() {
    var sequence = [0,1,2,3,4],
        count = 1,
        playlist = ['./vid/vancouverearth.mp4',  './vid/torontozoomout.mp4', './vid/torontozoom.mp4', './vid/vancouverglass.mp4', './vid/birds.mp4'],
        video = document.getElementById('splashVid');

    video.addEventListener('ended', random_video, false);

    sequence.sort(function() {return 0.5 - Math.random()});

    function random_video() {
        video.setAttribute('src', playlist[sequence[count]]);
        video.load();
        count++;
        if (count >= playlist.length) {count=1;}
        }
});
