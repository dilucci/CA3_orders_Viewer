var express = require('express');
var mongo = require('./../mongo');
var model = require('./../database/model');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.render('empty', {title: "employee"});
});

