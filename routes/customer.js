var express = require('express');
var mongo = require('./../mongo');
var model = require('./../database/model');
var router = express.Router();

//$(document).ready(function() {
//
//
//})

router.get('/', function (req, res) {
    mongo.connect();
    model.CustomerModel.find(function (error, customers) {
        customers.sort(function (a, b) {
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
    model.CustomerModel.find({_id: id}, function (error, customers) {
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


//$(document).ready(function () {
//});

router.post('/:id', function (req, res) {
    console.log("PUT customer");
    mongo.connect();


    console.log(req.params.id)
    console.log(req.body.customerCompanyName)
    mongo.close()
    //model.CustomerModel.update(
    //    {_id: req.body.customerId}, {
    //        companyName: req.body.customerCompanyName,
    //        contactName: $('customerContactName').val(),
    //        contactTitle: $('customerContactTitle').val(),
    //        address: $('customerAddress').val(),
    //        city: $('customerCity').val(),
    //        region: $('customerRegion').val(),
    //        postalCode: $('customerPostalCode').val(),
    //        country: $('customerCountry').val(),
    //        phone: $('customerPhone').val(),
    //        fax: $('customerFax').val()
    //    },
    //    {
    //        upsert: false,
    //        multi: false
    //    },
    //
    //    function (error) {
    //        mongo.close();
    //    }
    //);




    //model.CustomerModel.update(
    //    {_id: $('customerId').val()}, {
    //        companyName: $('customerCompanyName').val(),
    //        contactName: $('customerContactName').val(),
    //        contactTitle: $('customerContactTitle').val(),
    //        address: $('customerAddress').val(),
    //        city: $('customerCity').val(),
    //        region: $('customerRegion').val(),
    //        postalCode: $('customerPostalCode').val(),
    //        country: $('customerCountry').val(),
    //        phone: $('customerPhone').val(),
    //        fax: $('customerFax').val()
    //    },
    //    {
    //        upsert: false,
    //        multi: false
    //    },
    //
    //    function (error) {
    //        mongo.close();
    //    }
    //);



    //var name = companyName;
    //mongo.connect();
    //var id = req.params.id;
    //console.log(id);
    //model.Custo
    //merModel.find({_id: id}, function (error, customers) {
    //    res.render('customerDetails', {title: "Customer details", customer: customers[0]});
    //    mongo.close();
    //});
});


//document.read(YES)
//{
//    function editButton() {
//        $( '#customerInput').attr("disabled", false);
//    }
//
//}


module.exports = router;

