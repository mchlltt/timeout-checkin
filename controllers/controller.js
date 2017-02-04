// Import NPM dependency and Express router function.
var express = require('express');
var router = express.Router();

// Import data models.
var db = require('../models');

// GET route which returns the index.
router.get('/', function (req, res) {
    res.render('index');
});

// Export routes for server.js.
module.exports = router;
