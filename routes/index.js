var express = require('express');
var mongo = require('./../mongo');
var model = require('./../database/model');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    mongo.connect();

    model.OrderModel.find(function (error, orders) {
        //console.log(orders);
        orders.sort();
        orders.reverse();

        res.render('index', {title: "Orders", orders: orders});
        console.log('vi er her nu!');
        mongo.close();
    });
});

module.exports = router;
