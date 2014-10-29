var express = require('express');
var mongo = require('./../mongo');
var model = require('./../database/model');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.render('orderdetails', {title: "Orderdetails"});
});

router.get('/:id', function (req, res) {
    mongo.connect();
    var id = req.params.id;
    model.OrderModel.find({_id: id}, function(err,order){
        res.render('orderdetails', {title: "Orderdetails", order: order});
        mongo.close();
    });
});

module.exports = router;
