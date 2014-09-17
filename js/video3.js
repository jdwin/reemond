//Random play order of splash videos

$(document.ready(function() {
        var count = 0,
        sequence = [],
        playlist = ['a','b','c','d','e']
        //playlist = ['./vid/vancouverearth2.mp4',  './vid/torontozoomout2.mp4', './vid/torontozoomout2.mp4', './vid/vancouverglass2.mp4', './vid/birdsforsite2.mp4'],
        video = document.getElementById('splashVid');

    function randomVideo() {
        while (count < 5) {
            var next = Math.floor((Math.random() * 5)),
                duplicate = next.indexOf(sequence);
            if (duplicate == -1) {
                sequence += next;
                count ++;
            }
        }
        for (var i = 0; i <= 5; i++) {
             console.log(playlist[i]);
        }
    }
});
