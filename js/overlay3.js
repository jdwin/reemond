function overlayAssign(target) {
    $('videoReel' + target).bind('mouseenter', function() {
            $('#videoReel' + target + ' img').animate({'opacity':0.1});
            $('#videoReel' + target + ' .overlay').animate({'opacity':1});
            $('.overlay').width($('#videoReel' + target + ' img').width());
            $('.overlay').height($('#videoReel' + target + ' img').height());
    });
    $('videoReel' + target).bind('mouseleave', function() {
        $('videoReel' + target + ' img').animate({'opacity':1});
        $('videoReel' + target ' .overlay').animate({'opacity':0});
    });
};

function overlayExecute() {

    var targets = ['1','2','3','4','5','6'];

    $.each(targets, overlayAssign(target))
    }
};

$(document).ready(function() {
    overlayExecute();
});
