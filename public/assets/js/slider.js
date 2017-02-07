$('#start-button').on('click', function () {
    $('.questions').slick('slickNext');
});
$('#super-category-submit').on('click', function () {
    var selection = $('input:radio[name=super-category]:checked').val();
    if (selection === undefined) {
        return;
    }
    $.get('/api/feeling-categories/' + selection).done(function (data) {
        // Use the data to generate the next set of options.
        data.forEach(function (datum) {
            $('#categories-form').append('<input name="category" type="radio" id="category-' + datum.id + '" value="' + datum.id + '" />').append('<label for="category-' + datum.id + '" class="white-text">' + datum.name + '</label>')
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
        console.log(data);
        // Use the data to generate the next set of options.
        data.forEach(function (datum) {
            $('#feelings-form').append('<input name="feeling" type="radio" id="feeling-' + datum.id + '" value="' + datum.id + '" />').append('<label for="feeling-' + datum.id + '" class="white-text">' + datum.name + '</label>')
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
        $('.questions').slick('slickNext');
    });
});
$('#resource-category-submit').on('click', function () {
    var selection = $('input:radio[name=resource]:checked').val();
    if (selection === undefined) {
        return;
    }
    $.get('/api/resource-category/' + selection).done(function (data) {
        console.log(data);
        if (selection === 'inspire') {
            $('#resTitle').html('<h1 class="resMain">' + data.name + '</h1>');
            $('#resContent').html('<h1 class="resQuote">' + data.content + '</h1>');
        } else if (selection === 'relax') {
            $('#resTitle').html('<h1 class="resMain">' + data.name + '</h1>');
            $('#resContent').html('<iframe width="420" height="315" src = "https://www.youtube.com/embed/' + data.content + '&loop=1" > < /iframe>');
        } else if (selection === 'cope') {
            $('#resTitle').html('<h1 class="resMain">' + data + '</h1>');
        }
    });
});
/*
    <input name="resource-category" type="radio" id="resource-category-{{id}}" />
    <label for="resource-category-{{id}}" class="white-text">{{name}}</label>
*/