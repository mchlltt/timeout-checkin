$('#start-button').on('click', function () {
    $('.questions').slick('slickNext');
});
$('#super-category-submit').on('click', function () {
    var selection = $('input:radio[name=super-category]:checked').val();
    if (selection === undefined) {
        return;
    }
    $.get('/api/feeling-categories/' + selection).done(function (data) {
        $('#categories-options').empty();
        // Use the data to generate the next set of options.
        data.forEach(function (datum) {
            $('#categories-options').append('<input name="category" type="radio" id="category-' + datum.id + '" value="' + datum.id + '" />').append('<label for="category-' + datum.id + '" class="white-text">' + datum.name + '</label>')
        });
        $('.questions').slick('slickNext');
    });
});
$('#category-submit').on('click', function () {
    var selection = $('input:radio[name=category]:checked').val();
    if (selection === undefined) {
        return;
    }
    $.get('/api/feelings/' + selection).done(function (data) {
        $('#feelings-options').empty();
        // Use the data to generate the next set of options.
        data.forEach(function (datum) {
            $('#feelings-options').append('<input name="feeling" type="radio" id="feeling-' + datum.id + '" value="' + datum.id + '" />').append('<label for="feeling-' + datum.id + '" class="white-text">' + datum.name + '</label>');
        });
        $('.questions').slick('slickNext');
    });
});
$('#feeling-submit').on('click', function () {
    var selection = $('input:radio[name=feeling]:checked').val();
    if (selection === undefined) {
        return;
    }
    $.get('/api/resource-category-popularity/' + selection).done(function (data) {
        Object.keys(data).forEach(function (key) {
            $('#percentage-' + key).empty().append(' ' + Math.round(data[key] * 100) + '%');
        });
        $('.questions').slick('slickNext');
    });
});

$('#resource-category-submit').on('click', function () {
    //Empty DOM from previous Ajax Calls to account for user navigating back
    $('#resTitle').empty();
    $('#resContent').empty();
    $('#resources').empty();
    //Get Value from selection
    var selection = $('input:radio[name=resource-category]:checked').val();
    //must select value
    if (selection === undefined) {
        return;
    }
    var feelingSelection = $('input:radio[name=feeling]:checked').val();
    var ResourceId;
    //Ajax request for data
    $.get('/api/resources/' + selection, function (data) {
        //For Our DB Selection
        var resource = data[0]; 
        ResourceId = resource.id;
        if (selection === '3') {
            $('#resTitle').html('<h1 class="resMain">' + resource.name + '</h1>');
            $('#resContent').html('<h1 class="resQuote">' + resource.content + '</h1>');
        } else if (selection === '1') {
            $('#resTitle').html('<h1 class="resMain">' + resource.name + '</h1>');
            $('#resContent').html('<iframe width="100%" height="100%"  src = "https://www.youtube.com/embed/' + resource.content + '" > < /iframe>');
        } else if (selection === '4') {
            $('#resTitle').html('<h1 class="news resMain">' + resource.title + '</h1><p class="news abstract">' + resource.abstract + '</p><h3 class="news url">' + resource.url + '</h3>');
        } else if (selection === '2') {
            $('#resTitle').html('<h1 class="resMain">' + resource.name + '</h1>');
            $('#resContent').html('<h1 class="resQuote">' + resource.content + '</h1>');
        } else {
            $('#resources').append('<h2>' + resource.name + '</h2><h3>' + resource.content + '</h3>');
        }
        $('.questions').slick('slickNext');
    }).done(function () {
        $.post('/api/new', {
            FeelingId: feelingSelection,
            ResourceId: ResourceId
        }, function (data) {
            console.log(data);
        });
    });
});