var express = require('express');
var mongo = require('./../mongo');
var model = require('./../database/model');

var router = express.Router();

router.get('/', function (req, res) {
    res.render('empty', {title: "Employee details"});
});

/* GET employee details. */
router.get('/:id', function (req, res) {
    mongo.connect();
    var id = req.params.id;
    model.EmployeeModel.find( {_id: id }, function (error, employees) {
        res.render('employee', {title: "Employee details", employee: employees[0]});
        mongo.close();
    });
});

module.exports = router;
