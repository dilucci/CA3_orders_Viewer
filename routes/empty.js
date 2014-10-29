var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('categories', { title: 'Categories' }); // jade kald, kalder filen index.jade
});

module.exports = router;
