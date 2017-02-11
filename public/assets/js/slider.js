$('#start-button').on('click', function() {
    $('.questions').slick('slickNext');
});

$('.back-button').on('click', function() {
    $('.questions').slick('slickPrev');
});

$('#super-category-submit').on('click', function() {
    var selection = $('input:radio[name=super-category]:checked').val();
    if (selection === undefined) {
        return;
    }
    $.get('/api/feeling-categories/' + selection).done(function(data) {
        $('#categories-options').empty();
        // Use the data to generate the next set of options.
        data.forEach(function(datum) {
            $('#categories-options').append('<input name="category" type="radio" id="category-' + datum.id + '" value="' + datum.id + '" />').append('<label for="category-' + datum.id + '" class="white-text">' + datum.name + '</label>')
        });
        $('.questions').slick('slickNext');
    });
});
$('#category-submit').on('click', function() {
    var selection = $('input:radio[name=category]:checked').val();
    if (selection === undefined) {
        return;
    }
    $.get('/api/feelings/' + selection).done(function(data) {
        $('#feelings-options').empty();
        // Use the data to generate the next set of options.
        data.forEach(function(datum) {
            $('#feelings-options').append('<input name="feeling" type="radio" id="feeling-' + datum.id + '" value="' + datum.id + '" />').append('<label for="feeling-' + datum.id + '" class="white-text">' + datum.name + '</label>');
        });
        $('.questions').slick('slickNext');
    });
});
$('#feeling-submit').on('click', function() {
    var selection = $('input:radio[name=feeling]:checked').val();
    if (selection === undefined) {
        return;
    }
    $.get('/api/resource-category-popularity/' + selection).done(function(data) {
        Object.keys(data).forEach(function(key) {
            $('#percentage-' + key).empty().append(' ' + Math.round(data[key] * 100) + '%');
        });
        $('.questions').slick('slickNext');
    });
});

$('#resource-category-submit').on('click', function() {
    // Get resource category selection.
    var selection = $('input:radio[name=resource-category]:checked').val();
    // Get feeling ID from previous page.
    var FeelingId = $('input:radio[name=feeling]:checked').val();

    // Must select value
    if (selection === undefined) {
        return;
    }

    if (selection && FeelingId) {
        // Post resource ID and feeling ID.
        $.post('/api/new', {
            FeelingId: FeelingId,
            ResourceCategoryId: selection
        });
    }

    // // AJAX request for data
    // $.get('/api/resources/' + selection, function(data) {

    //     // Get the length of the data returned.
    //     var numberResults = data.length;
    //     var whichResult = Math.floor(Math.random() * numberResults);

    //     var resource = data[whichResult];
    //     ResourceId = resource.id;

    //     if (resource.embed) {
    //         $('#resource-title').empty().append('<h1><a href="' + resource.content + '" class="white-text" target="_blank">' + resource.name + '</a></h1>');
    //         $('#resource-content').empty().append('<iframe width="400px" height="300px" src="' + resource.embed + '"></iframe>');
    //     } else {
    //         $('#resource-title').empty();
    //         $('#resource-content').empty().append('<h1><a href="' + resource.content + '" class="white-text" target="_blank">' + resource.name + '</a></h1>');
    //     }

    //     $('.questions').slick('slickNext');

    // });
});