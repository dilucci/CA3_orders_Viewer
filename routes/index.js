var express = require('express');
var mongo = require('./../mongo');
var model = require('./../database/model');

var router = express.Router();

/* GET orders page. */
router.get('/', function (req, res) {
    mongo.connect();
    model.OrderModel.find(function (error, orders) {
        orders.sort();
        orders.reverse();

        res.render('index', {title: "Orders", orders: orders});
        mongo.close();
    });
});

router.get('/:productId/:productName', function (req, res) {
    mongo.connect();
    var productId = req.params.productId;
    var productName = req.params.productName;

    model.DetailsModel.find({product: productId}).populate('product').exec(function (err, orderDetails) {
        model.OrderModel.find(function (err, orderResult) {
            res.render('index', {
                title: "Orders containing product " + productName,
                orders: orderResult,
                orderDetails: orderDetails
            });
            mongo.close();
        });
    });
});

module.exports = router;
