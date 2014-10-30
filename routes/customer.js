var express = require('express');
var mongo = require('./../mongo');
var model = require('./../database/model');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('empty', {title: "Customer details"});
});

/* GET customer details. */
router.get('/:id', function (req, res) {
    mongo.connect();
    var id = req.params.id;
    model.CustomerModel.find( {_id: id }, function (error, customers) {
        res.render('customer', {title: "Customer details", customer: customers[0]});
        mongo.close();
    });
});

module.exports = router;

