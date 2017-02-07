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
            // Use the data to generate the next set of options.
            data.forEach(function(datum) {
                $('#feelings-options')
                    .append('<input name="feeling" type="radio" id="feeling-' + datum.id + '" value="' + datum.id + '" />')
                    .append('<label for="feeling-' + datum.id + '" class="white-text">' + datum.name + '</label>');
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
            Object.keys(data).forEach(function(key) {
                $('#percentage-' + key).empty().append(' ' + Math.round(data[key] * 100) + '%');
            });

            $('.questions').slick('slickNext');
        }
    );
});

$('#resource-category-submit').on('click', function() {
    var selection = $('input:radio[name=resource-category]:checked').val();
    if (selection === undefined) {
        return;
    }
    var feelingSelection = $('input:radio[name=feeling]:checked').val();
    var resource;
    $.get('/api/resources/' + selection, function(data) {
        var keys = Object.keys(data);
        resource = Math.ceil(Math.random() * keys.length - 1);
        $('#resources').append('<h2>' + data[resource].name + '</h2><h3>' + data[resource].content + '</h3>');
        $('.questions').slick('slickNext');
    }).done(function() {
        $.post('/api/new', { FeelingId: feelingSelection, ResourceId: resource }, function(data) {
            console.log(data);
        });
    });
});