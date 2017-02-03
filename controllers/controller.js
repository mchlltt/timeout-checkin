// Import NPM dependency and Express router function.
var express = require('express');
var router = express.Router();

// Import data models.
var db = require('../models');

// GET route which calls the data model's 'all' method.
// This route then hands the data it receives to handlebars so index can be rendered.
router.get('/', function (req, res) {
    db.burgers.findAll({
        order: 'burger_name ASC'
    }).then(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});


// POST route which calls the model's 'post' method with the burger name given.
router.post('/', function (req, res) {
    var burgerName = req.body.name;
    db.burgers.create({
        burger_name: burgerName
    }).then(function () {
        res.redirect('/');
    });
});

// PUT (update) route which calls the model's update method.
// This route sends the id and 'devoured' state on the burger modified.
router.put('/:id', function (req, res) {
    var devoured = req.body.devoured;
    var ID = req.params.id;

    db.burgers.update(
        {devoured: devoured},
        {where: {id: ID}}
    ).then(function () {
        res.redirect('/');
    });
});

// Export routes for server.js.
module.exports = router;