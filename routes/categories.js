var express = require('express');
var mongo = require('./../mongo');
var model = require('./../database/model');

var router = express.Router();

/* GET categories page. */
router.get('/', function (req, res) {
    mongo.connect();
    model.CategoryModel.find(function (error, categories) {
        categories.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });

        res.render('categories', {title: "Categories", categories: categories});
        mongo.close();
    });
});

module.exports = router;
