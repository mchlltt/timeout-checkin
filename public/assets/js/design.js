$(document).ready(function() {
    $('#start').on('click', show);

    function show() {
        $('#index-banner').fadeOut('slow');
    }

    $('.single-item').slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        speed: 300,
        accessibility: true
    });
});