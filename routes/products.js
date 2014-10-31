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



router.get('/:productId/:productName', function (req, res) {
    mongo.connect();
    var productId = req.params.productId;
    var productName = req.params.productName;

    model.DetailsModel.find({product: productId}).populate('order').exec(function (err, orderDetails) {
        var orders = [];
        orderDetails.forEach(function (orderDetail) {
            orders.push(orderDetail.order)
        })
        res.render('orders', {
            title: "Orders containing product " + productName,
            orders: orders
        });
        mongo.close();
    });
});

module.exports = router;
