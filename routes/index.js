var express = require('express');
var mongo = require('./../mongo');
var model = require('./../database/model');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    mongo.connect();

    model.OrderModel.find(function (error, orders) {
        console.log(orders);

        res.render('index', {orders: orders});
        console.log('vi er her nu!');
        mongo.close();
    });

    //model.OrderModel.find(function (error, orders) {
    //    console.log(orders);
    //
    //    orders.forEach(function (order) {
    //        res.render('index', {
    //            id: order._id,
    //            orderDate: order.orderDate,
    //            shipName: order.shipName,
    //            shipAddress: order.shipAddress
    //        });
    //    });
    //    console.log('vi er her nu!');
    //    //mongo.close();
    //});
});

module.exports = router;
