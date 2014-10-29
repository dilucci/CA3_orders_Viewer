var express = require('express');
var mongo = require('./../mongo');
var model = require('./../database/model');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.render('orderdetails', {title: "Orderdetails"});
});

/*
OBS prøv med mongoose.populate for at slippe for 3 seperate db kald.
 */
router.get('/:id', function (req, res) {
    mongo.connect();
    var orderId = req.params.id;

    model.OrderModel.find({_id: orderId}, function (err, order) {
        model.DetailsModel.find({orderId: orderId}).populate('productId').exec(function (err, orderDetails) {
            orderDetails.forEach(function(orderDetail) {
                console.log(orderDetail);
            })
            mongo.close();
        })

        //model.ProductModel.find().populate('orderId').exec(function(err, products) {
            //    console.log(products)
            //});
        });

        //model.DetailsModel.find({orderId: orderId}, function (err, orderDetails) {
        //    model.ProductModel.find({_id: orderDetails[0].productId}, function (err, products) {
        //        var price = orderDetails[0].unitPrice * orderDetails[0].quantity
        //        console.log(products.length());
        //        res.render('orderdetails', {
        //            title: "Orderdetails",
        //            order: order[0],
        //            products: products,
        //            orderDetail: orderDetails[0],
        //            price: price
        //        });
        //        mongo.close();
        //    })
        //})
    });

module.exports = router;
