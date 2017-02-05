$(document).ready(function() {
    $('select').material_select();
    $('.button-collapse').sideNav();
    $('#start').on('click', show);

    function show() {
        $('#index-banner').fadeOut('slow');
    }

    $('.single-item').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        speed: 300,
        accessibility: true
    });
});