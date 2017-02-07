// Import data models.
var db = require('../models');

module.exports = function(app) {
    // Import popularity service
    var popularityService = require('./popularity_service');

    // GET route for returning popularity.
    app.get('/api/resource-category-popularity/:feeling_id', function(req, res) {
        // returns object of resource category ids as keys and popularity (in decimal) as values
        popularityService(req, res, db);
    });

    // GET route which returns the index.
    app.get('/', function(req, res) {
        var questions = {};
        db.FeelingSuperCategory.findAll({}).then(function(data) {
            questions.feelingSuperCategories = data;
            return;
        }).then(function() {
            return db.FeelingCategory.findAll({}).then(function(data) {
                questions.feelingCategories = data;
                return;
            });
        }).then(function() {
            return db.Feeling.findAll({}).then(function(data) {
                questions.feelings = data;
                return;
            });
        }).then(function() {
            return db.ResourceCategory.findAll({}).then(function(data) {
                return questions.resourceCategories = data;
            });
        }).then(function() {
            db.Resource.findOne({
                where: {
                    id: 1
                }
            }).then(function(data) {
                questions.resource = data;
                res.render('index', questions);
            });
        });
    });

    // API GET routes.
    // Get all feeling super categories.
    app.get('/api/feeling-super-categories', function(req, res) {
        db.FeelingSuperCategory.findAll({}).then(function(data) {
            res.json(data);
        });
    });

    // Get feeling categories by supercategory.
    app.get('/api/feeling-categories/:id', function(req, res) {
        var FeelingSuperCategoryId = req.params.id;
        db.FeelingCategory.findAll({
            where: {
                FeelingSuperCategoryId: FeelingSuperCategoryId
            }
        }).then(function(data) {
            res.json(data);
        });
    });

    // Get feelings by feeling category.
    app.get('/api/feelings/:id', function(req, res) {
        var FeelingCategoryId = req.params.id;
        db.Feeling.findAll({
            where: {
                FeelingCategoryId: FeelingCategoryId
            }
        }).then(function(data) {
            res.json(data);
        });
    });

    // Get resource categories.
    app.get('/api/resource-categories/', function(req, res) {
        db.ResourceCategory.findAll({}).then(function(data) {
            res.json(data);
        });
    });

    // Get resources by resource category.
    app.get('/api/resources/:id', function(req, res) {
        var ResourceCategoryId = req.params.id;
        db.Resource.findAll({
            where: {
                ResourceCategoryId: ResourceCategoryId
            }
        }).then(function(data) {
            res.json(data);
        });
    });

    // Post the data from the transaction.
    app.post('/api/new', function(req, res) {
        var FeelingId = req.body.FeelingId;
        var ResourceId = req.body.ResourceId;
        db.Transaction.create({
            FeelingId: FeelingId,
            ResourceId: ResourceId
        }).then(function(data) {
            // Respond with the 'rows affected' code.
            res.json(data);
        });
    });
};