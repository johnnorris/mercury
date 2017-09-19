$('.nav-trigger').click(function () {
    $('header nav').toggleClass('show');
});

$('.info').hover(function () {
    var $anchor = $(this).find('a');

    if ($anchor.length > 0) {
        $(this).addClass('link');
    }
}).click(function () {
    var $anchor = $(this).find('a');

    if ($anchor.length > 0) {
        window.location = $anchor.attr('href');
    }
});