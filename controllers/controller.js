// Import data models.
var db = require('../models');
//including request for API calls
var request = require('request');
var Sequelize = require('sequelize');

module.exports = function(app) {
    // Import popularity service
    var popularityService = require('./popularity_service');
    // GET route for returning popularity.
    app.get('/api/resource-category-popularity/:feeling_id', function(req, res) {
        // returns object of resource category ids as keys and popularity (in decimal) as values
        popularityService(req, res, db);
    });

    app.get('/data', function(req, res) {
        res.render('data');
    });

    app.get('/api/resource-category-count', function(req, res) {
        db.Transaction.findAll({
            attributes: ['ResourceCategoryId', [Sequelize.fn('COUNT', Sequelize.col('ResourceCategory.id')), 'categorycount']],
            include: [{ attributes: [], model: db.ResourceCategory }],
            group: ['Transaction.id']
        }).then(function(data) {
            function filterById(id) {
                return data.filter(function(d) {
                    return d.ResourceCategoryId === id;
                }).length;
            }
            whatever = [filterById(1), filterById(2), filterById(3), filterById(4)];
            res.json(whatever);
        });
    });

    // GET route which returns the index.
    app.get('/', function(req, res) {
        var questions = {};
        db.FeelingSuperCategory.findAll({}).then(function(data) {
            questions.feelingSuperCategories = data;
        }).then(function() {
            db.ResourceCategory.findAll({}).then(function(data) {
                questions.resourceCategories = data;
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
        var ResourceCategoryId = req.body.ResourceCategoryId;
        db.Transaction.create({
            FeelingId: FeelingId,
            ResourceCategoryId: ResourceCategoryId
        }).then(function(data) {
            // Respond with the 'rows affected' code.
            res.json(data);
        });
    });

    app.get('*',function (req, res) {
        res.redirect('/');
    });
};