var express = require('express');
var mongo = require('./../mongo');
var model = require('./../database/model');

var router = express.Router();

/* GET categories page. */
router.get('/', function (req, res) {
    mongo.connect();
    model.ProductModel.find(function(error, products) {
        products.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });

        res.render('products', {title: "Products", products: products});
        mongo.close();
    });
});

router.get('/:categoryId/:categoryName', function (req, res) {
    mongo.connect();
    var categoryId = req.params.categoryId;
    var categoryName = req.params.categoryName;
    model.ProductModel.find( {category: categoryId}, function (error, products) {
        products.sort();

        res.render('products', {title: "Products of type " + categoryName, products: products});
        mongo.close();
    });
});



module.exports = router;
