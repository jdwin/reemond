$(document).ready(function() {
    $('h1.recentHead').click(function() {
        $(this).fadeOut('fast');
    });
});

$(document).ready(function() {
    $('#videoContent img').hover(function() {
        $(this).toggleClass('hoverColour');
    });
});
