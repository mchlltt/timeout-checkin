// Import NPM dependency and Express router function.
var express = require('express');
var router = express.Router();

// Import data models.
var db = require('../models');

// TODO: GET route for returning popularity.

// GET route which returns the index.
router.get('/', function (req, res) {
    res.sendFile('index.html');
});

// API GET routes.
// Get all feeling super categories.
router.get('/api/feeling-super-categories', function (req, res) {
    db.FeelingSuperCategory.findAll(
        {}
    ).then(function (data) {
        res.json(data);
    });
});

// Get feeling categories by supercategory.
router.get('/api/feeling-categories/:id', function (req, res) {
    var FeelingSuperCategoryId = req.params.id;
    db.FeelingCategory.findAll(
        {
            where: {
                FeelingSuperCategoryId: FeelingSuperCategoryId
            }
        }
    ).then(function (data) {
        res.json(data);
    });
});

// Get feelings by feeling category.
router.get('/api/feelings/:id', function (req, res) {
    var FeelingCategoryId = req.params.id;
    db.Feeling.findAll(
        {
            where: {
                FeelingCategoryId: FeelingCategoryId
            }
        }
    ).then(function (data) {
        res.json(data);
    });
});

// Get resource categories.
router.get('/api/resource-categories/', function (req, res) {
    db.ResourceCategory.findAll(
        {}
    ).then(function (data) {
        res.json(data);
    });
});

// Get resources by resource category.
router.get('/api/resources/:id', function (req, res) {
    var ResourceCategoryId = req.params.id;
    db.Resource.findAll(
        {
            where: {
                ResourceCategoryId: ResourceCategoryId
            }
        }
    ).then(function (data) {
        res.json(data);
    });
});

// Post the data from the transaction.
router.post('/api/new', function (req, res) {
    var body = req.body;
    db.Transaction.create({
        feelingId: body.feelingId,
        resourceId: body.resourceId
    }).then(function (data) {
        // Respond with the 'rows affected' code.
        res.json(data);
    });
});

// Export routes for server.js.
module.exports = router;
