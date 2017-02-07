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
    app.get('/', function (req, res) {
        var questions = {};
        db.FeelingSuperCategory.findAll({}).then(function (data) {
            questions.feelingSuperCategories = data;
            return;
        }).then(function () {
            return db.FeelingCategory.findAll({}).then(function (data) {
                questions.feelingCategories = data;
                return;
            });
        }).then(function () {
            return db.Feeling.findAll({}).then(function (data) {
                questions.feelings = data;
                return;
            });
        }).then(function () {
            return db.ResourceCategory.findAll({}).then(function (data) {
                return questions.resourceCategories = data;
            });
        }).then(function () {
            db.Resource.findOne({
                where: {
                    id: 1
                }
            }).then(function (data) {
                questions.resource = data;
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
    // Get resources by resource category.
    app.get('/api/resources/:id', function (req, res) {
        var ResourceCategoryId = req.params.id;
        db.Resource.findAll({
            where: {
                ResourceCategoryId: ResourceCategoryId
            }
        }).then(function (data) {
            res.json(data);
        });
    });
    //Adding test route  for requesting Third Party APIs for resource categories
    // Include the request npm package, which simplifies HTTP requests
    app.get('/api/resource-categories/quote', function (req, res) {
        //Run Third party API Request for Random Quotes. Documentation is available here: http://forismatic.com/en/api/
        request("http://api.forismatic.com/api/1.0/?method=getQuote&key=&format=json&lang=en", function (error, response, body) {
            // Emits callback event. If the request is successful (i.e. if the response status code is 200) 
            if (!error && response.statusCode === 200) {
                //provides server response to request
                console.log(body);
                // Parse the body of the site and recover just the essential
                var quote = JSON.parse(body).quoteText;
                var author = JSON.parse(body).quoteAuthor;
                //API returns empty string if author could not be found, replace with Unknown
                if (author === '') {
                    author = "Unknown";
                }
                //put input in array
                res.json([quote, author]);
            } else {
                console.log(error);
                console.log("unable to service request");
                //could include default quote with unable to connect message
            }
        });
    });
    //
    //If we decide to include a journal or text form - Can include a Sentiment API 
    //http://text-processing.com/docs/sentiment.html
    //
    //Youtube API for Meditation Videos
    app.get('/api/resource-categories/video', function (req, res) {
        //Step One: Get results from Youtube Search Query API needs Client Key
        // Search for a specified query.
        //using sample Video IDs in array
        var meditationSample = ['PYs5zyM9zk8', 'PvdOyWKQfO8', 'apkexltdO-0'];
        //Randomize Selection
        var medRand = meditationSample[Math.floor(Math.random() * meditationSample.length)];
        // //Step Two: Plug In Random Video ID from Search Query to create iframe on client side
        var VIDEO_ID = medRand;
        //Run Third party API Request for Video Requires two Parts
        res.json(VIDEO_ID);
    });
    //New York Times API - Most Popular Under Health
    app.get('/api/resource-categories/news', function (req, res) {
        request.get({
            url: "https://api.nytimes.com/svc/mostpopular/v2/mostviewed/Health/30.json",
            qs: {
                'api-key': "cf143926ab5c4ca3b786083109a5d006"
            },
        }, function (err, response, body) {
            body = JSON.parse(body);
            console.log(body);
            res.json(body);
        });
    });
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