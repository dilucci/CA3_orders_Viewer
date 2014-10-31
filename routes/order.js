var express = require('express');
var mongo = require('./../mongo');
var model = require('./../database/model');
var router = express.Router();

/* GET order details. */
/* GET orders page. */
router.get('/', function (req, res) {
    mongo.connect();
    model.OrderModel.find(function (error, orders) {
        orders.sort();
        orders.reverse();

        res.render('orders', {title: "Orders", orders: orders});
        mongo.close();
    });
});

router.get('/:id', function (req, res) {
    mongo.connect();
    var orderId = req.params.id;

    model.OrderModel.find({_id: orderId}).populate('customer').populate('employee').exec(function (err, orderResult) {
        model.DetailsModel.find({order: orderId}).populate('product').exec(function (err, orderDetails) {
            res.render('orderDetails', {
                title: "Order details",
                order: orderResult[0],
                orderDetails: orderDetails
            });
            mongo.close();
        });
    });
});



module.exports = router;
