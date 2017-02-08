// Import data models.
var db = require('../models');
//including request for API calls
var request = require("request");
module.exports = function (app) {
    // Import popularity service
    var popularityService = require('./popularity_service');
    // GET route for returning popularity.
    app.get('/api/resource-category-popularity/:feeling_id', function (req, res) {
        // returns object of resource category ids as keys and popularity (in decimal) as values
        popularityService(req, res, db);
    });
    // GET route which returns the index.
    app.get('/', function (req, res) {
        var questions = {};
        db.FeelingSuperCategory.findAll({}).then(function (data) {
            questions.feelingSuperCategories = data;
            return;
        }).then(function () {
            db.ResourceCategory.findAll({}).then(function (data) {
                questions.resourceCategories = data;
                res.render('index', questions);
            });
        });
    });
    // API GET routes.
    // Get all feeling super categories.
    app.get('/api/feeling-super-categories', function (req, res) {
        db.FeelingSuperCategory.findAll({}).then(function (data) {
            res.json(data);
        });
    });
    // Get feeling categories by supercategory.
    app.get('/api/feeling-categories/:id', function (req, res) {
        var FeelingSuperCategoryId = req.params.id;
        db.FeelingCategory.findAll({
            where: {
                FeelingSuperCategoryId: FeelingSuperCategoryId
            }
        }).then(function (data) {
            res.json(data);
        });
    });
    // Get feelings by feeling category.
    app.get('/api/feelings/:id', function (req, res) {
        var FeelingCategoryId = req.params.id;
        db.Feeling.findAll({
            where: {
                FeelingCategoryId: FeelingCategoryId
            }
        }).then(function (data) {
            res.json(data);
        });
    });
    // Get resource categories.
    app.get('/api/resource-categories/', function (req, res) {
        db.ResourceCategory.findAll({}).then(function (data) {
            res.json(data);
        });
    });
    //Get resources by resource category.
    app.get('/api/resources/:id', function (req, res) {
        var ResourceCategoryId = req.params.id;
        switch (ResourceCategoryId) {
        case '1':
            apiMedVid1(ResourceCategoryId);
            break;
        case '2':
            queryDB(ResourceCategoryId);
            break;
        case '3':
            apiQuote3(ResourceCategoryId);
            break;
        case '4':
            apiNews4(ResourceCategoryId);
            break;
        default:
            queryDB(ResourceCategoryId);
        }

        function queryDB(ResourceCategoryId) {
            db.Resource.findAll({
                where: {
                    ResourceCategoryId: ResourceCategoryId
                }
            }).then(function (data) {
                res.json(data);
            });
        }

        function apiMedVid1(ResourceCategoryId) {
            //Youtube API for Meditation Videos
            //Step One: Get results from Youtube Search Query API needs Client Key
            // Search for a specified query.
            //using sample Video IDs in array
            var meditationSample = ['PYs5zyM9zk8', 'PvdOyWKQfO8', 'apkexltdO-0'];
            //Randomize Selection
            // //Step Two: Plug In Random Video ID from Search Query to create iframe on client side
            var VIDEO_ID = meditationSample[Math.floor(Math.random() * meditationSample.length)];
            var resObj = {
                name: "Take Some Time To Relax",
                content: VIDEO_ID
            };
            //Run Third party API Request for Video Requires two Parts
            res.json(resObj);
        }

        function apiQuote3(ResourceCategoryId) {
            //Run Third party API Request for Random Quotes. Documentation is available here: http://forismatic.com/en/api/
            request('http://api.forismatic.com/api/1.0/?method=getQuote&key=&format=json&lang=en', function (error, response, body) {
                // Emits callback event. If the request is successful (i.e. if the response status code is 200) 
                if (!error && response.statusCode === 200) {
                    //provides server response to request
                    console.log(body);
                    //Some Returned Strings have escaped backslash \ ; need to remove these
                    var cleanData = body.replace("\\", '');
                    // Parse the body of the site and recover just the essential
                    var quote = JSON.parse(cleanData).quoteText;
                    var author = JSON.parse(cleanData).quoteAuthor;
                    //API returns empty string if author could not be found, replace with Unknown
                    if (author === '') {
                        author = 'Unknown';
                    }
                    var resObj = {
                        name: author,
                        content: quote
                    };
                    console.log(resObj);
                    //put input in array
                    res.json(resObj);
                } else {
                    console.log(error);
                    console.log('unable to service request');
                    //could include default quote with unable to connect message
                }
            });
        }

        function apiNews4(ResourceCategoryId) {
            //New York Times API - Most Popular Under Health
            request.get({
                url: 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/Health/30.json',
                qs: {
                    'api-key': 'cf143926ab5c4ca3b786083109a5d006'
                }
            }, function (err, response, body) {
                body = JSON.parse(body);
                var numResults = body.num_results;
                //pick a health article from the top shared articles randomly
                var chosenResult = body.results[Math.floor(Math.random() * numResults)];
                console.log(body);
                console.log(chosenResult);
                res.json(chosenResult);
            });
        }
    });
    //
    //If we decide to include a journal or text form - Can include a Sentiment API 
    //http://text-processing.com/docs/sentiment.html
    //
    // Post the data from the transaction.
    app.post('/api/new', function (req, res) {
        var FeelingId = req.body.FeelingId;
        var ResourceId = req.body.ResourceId;
        db.Transaction.create({
            FeelingId: FeelingId,
            ResourceId: ResourceId
        }).then(function (data) {
            // Respond with the 'rows affected' code.
            res.json(data);
        });
    });
};