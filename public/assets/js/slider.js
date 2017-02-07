$('#start-button').on('click', function() {
    $('.questions').slick('slickNext');
});

$('#super-category-submit').on('click', function() {
    var selection = $('input:radio[name=super-category]:checked').val();
    if (selection === undefined) {
        return;
    }
    $.get('/api/feeling-categories/' + selection).done(
        function(data) {
            $('#categories-options').empty();
            // Use the data to generate the next set of options.
            data.forEach(function(datum) {
                $('#categories-options')
                    .append('<input name="category" type="radio" id="category-' + datum.id + '" value="' + datum.id + '" />')
                    .append('<label for="category-' + datum.id + '" class="white-text">' + datum.name + '</label>')
            });
            $('.questions').slick('slickNext');
        }
    );
});

$('#category-submit').on('click', function() {
    var selection = $('input:radio[name=category]:checked').val();
    if (selection === undefined) {
        return;
    }
    $.get('/api/feelings/' + selection).done(
        function(data) {
            $('#feelings-options').empty();
            console.log(data);
            // Use the data to generate the next set of options.
            data.forEach(function(datum) {
                $('#feelings-options')
                    .append('<input name="feeling" type="radio" id="feeling-' + datum.id + '" value="' + datum.id + '" />')
                    .append('<label for="feeling-' + datum.id + '" class="white-text">' + datum.name + '</label>')
            });
            $('.questions').slick('slickNext');
        }
    );
});

$('#feeling-submit').on('click', function() {
    var selection = $('input:radio[name=feeling]:checked').val();
    if (selection === undefined) {
        return;
    }
    $.get('/api/resource-category-popularity/' + selection).done(
        function(data) {
            for (var key in data) {
                $('#label-' + key).append(' ' + Math.round(data[key] * 100) + '%');
            }
            $('.questions').slick('slickNext');
        }
    );
});

$('#resource-category-submit').on('click', function() {
    var selection = $('input:radio[name=resource-category]:checked').val();
    if (selection === undefined) {
        return;
    }
    $.get('/api/resources/' + selection).done(
        function(data) {
            var keys = Object.keys(data);
            var key = Math.ceil(Math.random() * keys.length - 1);
            $('#resources').append('<h2>' + data[key].name + '</h2><h3>' + data[key].content + '</h3>');
            $('.questions').slick('slickNext');
        }
    );
});