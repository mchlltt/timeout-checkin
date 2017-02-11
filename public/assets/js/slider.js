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
            $('#categories-options').append('<input name="category" type="radio" id="category-' + datum.id + '" value="' + datum.id + '" />').append('<label for="category-' + datum.id + '" class="white-text">' + datum.name + '</label>');
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

    // Update title text on next slide.
    var feelingText = $('input:radio[name=feeling]:checked + label').text();
    $('#feeling-display').append('You are feeling <span class="feeling-text">' + feelingText + '.</span>');

    $.get('/api/resource-category-popularity/' + selection).done(function(data) {
        // For each resource category label,
        ['1', '2', '3', '4'].forEach(function(item) {
            var percentage = Math.round(data[item] * 100);

            if (percentage) {
                $('#label-' + item[0]).attr('data-tooltip', percentage + '% of people feeling ' + feelingText + ' chose this.').tooltip();
            } else {
                $('#label-' + item[0]).attr('data-tooltip', '0% of people feeling ' + feelingText + ' chose this.').tooltip();
            }
        });

        $('.questions').slick('slickNext');
    });
});

$('#resource-category-submit').on('click', function() {
    // Get resource category selection.
    var ResourceCategoryId = $('input:radio[name=resource-category]:checked').val();

    // Get feeling ID from previous page.
    var FeelingId = $('input:radio[name=feeling]:checked').val();

    // Must select value
    if (ResourceCategoryId === undefined) {
        return;
    }

    if (ResourceCategoryId && FeelingId) {
        // Post resource ID and feeling ID.
        $.post('/api/new', {
            FeelingId: FeelingId,
            ResourceCategoryId: ResourceCategoryId
        });
    }

    // AJAX request for data
    $.get('/api/resources/' + ResourceCategoryId, function(data) {

        // Get the length of the data returned.
        var numberResults = data.length;
        var whichResult = Math.floor(Math.random() * numberResults);

        var resource = data[whichResult];

        $('#resource-title').empty().append('<h1><a href="https://www.youtube.com/watch?v=' + resource.embed + '" class="white-text" target="_blank">' + resource.name + '</a></h1>');
        $('#resource-content').empty().append('<iframe width="400px" height="300px" src="https://www.youtube.com/embed/' + resource.embed + '"></iframe>');

        $('.questions').slick('slickNext');

    });
});