$('#start-button').on('click', function () {
    $('.questions').slick('slickNext');
});
$('.back-button').on('click', function () {
    $('.questions').slick('slickPrev');
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
    //Ajax request for data
    $.get('/api/resources/' + selection, function (data) {
        console.log(data);
        if (selection === '3') {
            $('#resTitle').html('<h1 class="resMain">' + data.name + '</h1>');
            $('#resContent').html('<h1 class="resQuote">' + data.content + '</h1>');
        } else if (selection === '1') {
            $('#resTitle').html('<h1 class="resMain">' + data.name + '</h1>');
            $('#resContent').html('<div class="videoWrapper"><iframe id="video"  src = "https://www.youtube.com/embed/' + data.content + '?autoplay=1&rel=0&showinfo=0&color=white&autohide=0" > < /iframe></div>');
            //iframe width="560" height="315"
        } else if (selection === '4') {
            console.log(data);
            //Could Add Image Thumbnail
            // var img = data.media[1];
            // console.log(img);
            // <img src="' + img + '"></img>
            $('#resTitle').html('<h1 class="news resMain">' + data.title + '</h1><p class="news abstract">' + data.abstract + '</p><h3 class="news url">' + data.url + '</h3>');
        } else if (selection === '2') {
            $('#resTitle').html('<h1 class="resMain">' + data.name + '</h1>');
            $('#resContent').html('<h1 class="resQuote">' + data.content + '</h1>');
        } else {
            $('#resources').append('<h2>' + data.name + '</h2><h3>' + data.content + '</h3>');
        }
        $('.questions').slick('slickNext');
    });
});