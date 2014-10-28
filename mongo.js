var mongoose = require('mongoose');

module.exports.connect = function() {
    mongoose.connect("mongodb://localhost/northwind");

    mongoose.connection.once("open", function() {
        console.log("Connected to Northwind");
    });
};

module.exports.close = function() {
    mongoose.connection.close();
    console.log("Connection closed");
};