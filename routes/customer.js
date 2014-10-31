var express = require('express');
var mongo = require('./../mongo');
var model = require('./../database/model');
var router = express.Router();

router.get('/', function (req, res) {
    mongo.connect();
    model.CustomerModel.find(function(error, customers) {
        customers.sort(function(a, b) {
            return (a.companyName).localeCompare(b.companyName);
        });

        res.render('customers', {title: "Customers", customers: customers});
        mongo.close();
    });
});

/* GET customer details. */
router.get('/:id', function (req, res) {
    mongo.connect();
    var id = req.params.id;
    model.CustomerModel.find( {_id: id }, function (error, customers) {
        res.render('customerDetails', {title: "Customer details", customer: customers[0]});
        mongo.close();
    });
});

router.get('/:customerId/:companyName', function (req, res) {
    mongo.connect();
        var customerId = req.params.customerId;
        var companyName = req.params.companyName;

        model.OrderModel.find({customer: customerId}, function (err, orders) {
            res.render('orders', {
                title: "Orders for customer " + companyName,
                orders: orders
            });
        mongo.close();
    });
});

module.exports = router;

