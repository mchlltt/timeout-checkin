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
    console.log('Selection Value Below: ');
    console.log(selection);
    var feelingSelection = $('input:radio[name=feeling]:checked').val();
    var resource;
    //Ajax request for data
    $.get('/api/resources/' + selection, function (data) {
        console.log(data);
        //For Our DB Selection
        var keys = Object.keys(data);
        key = Math.ceil(Math.random() * keys.length - 1);
        // resource = data[key].id;
        if (selection === '3') {
            $('#resTitle').html('<h1 class="resMain">' + data.name + '</h1>');
            $('#resContent').html('<h1 class="resQuote">' + data.content + '</h1>');
        } else if (selection === '1') {
            $('#resTitle').html('<h1 class="resMain">' + data.name + '</h1>');
            $('#resContent').html('<iframe width="100%" height="100%"  src = "https://www.youtube.com/embed/' + data.content + '" > < /iframe>');
        } else if (selection === '4') {
            console.log(data);
            //Could Add Image Thumbnail
            // var img = data.media[1];
            // console.log(img);
            // <img src="' + img + '"></img>
            $('#resTitle').html('<h1 class="news resMain">' + data.title + '</h1><p class="news abstract">' + data.abstract + '</p><h3 class="news url">' + data.url + '</h3>');
        } else if (selection === '2') {
            $('#resTitle').html('<h1 class="resMain">' + data[key].name + '</h1>');
            $('#resContent').html('<h1 class="resQuote">' + data[key].content + '</h1>');
        } else {
            $('#resources').append('<h2>' + data[key].name + '</h2><h3>' + data[key].content + '</h3>');
        }
        $('.questions').slick('slickNext');
    }).done(function () {
        $.post('/api/new', {
            FeelingId: feelingSelection,
            ResourceId: resource
        }, function (data) {
            console.log(data);
        });
    });
});