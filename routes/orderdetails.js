var express = require('express');
var mongo = require('./../mongo');
var model = require('./../database/model');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.render('empty', {title: "Order details"});
});

router.get('/:id', function (req, res) {
    mongo.connect();
    var orderId = req.params.id;

    model.OrderModel.find({_id: orderId}).populate('customer').populate('employee').exec(function (err, orderResult) {
            model.DetailsModel.find({order: orderId}).populate('product').exec(function (err, orderDetails) {
                res.render('orderdetails', {
                    title: "Order details",
                    order: orderResult[0],
                    orderDetails: orderDetails
                });
                mongo.close();
            });
        });
    });

module.exports = router;
