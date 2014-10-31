var mongoose = require('mongoose');

module.exports.connect = function() {
    mongoose.connect("mongodb://gruppe4:deterenMOCK!@ds056727.mongolab.com:56727/ca3_ordersviewer");

    mongoose.connection.once("open", function() {
        console.log("Connected to Northwind");
    });
};

module.exports.close = function() {
    mongoose.connection.close();
    console.log("Connection closed");
};