$('#start-button').on('click', function() {
    $('.questions').slick('slickNext');
});

$('#super-category-submit').on('click', function() {
    var selection = $('input:radio[name=group1]:checked').data('name');
    $.get('/api/feeling-categories/' + selection).done(
        function(data) {

            // Use the data to generate the next set of options.
            console.log(data);
            $('.questions').slick('slickNext');
        }
    );

});

$('#category-submit').on('click', function() {
    var selection = $('input:radio[name=group2]:checked').data('name');
    $.get('/api/feelings/' + selection).done(
        function(data) {

            // Use the data to generate the next set of options.
            console.log(data);
            $('.questions').slick('slickNext');
        }
    );

});