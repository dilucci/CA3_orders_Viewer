var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res) {
  var id = req.params.id;
  res.render('orderdetails', {title: "Orderdetails", id: id});
});

module.exports = router;
