var express = require('express');
var _ = require('lodash');
var jsonData = require('../json/data');
var router = express.Router();

/* GET users listing. */
router.get('/:invNumber', function(req, res, next) {
  console.log(req.params.invNumber);
  var invoiceId = req.params.invNumber;
  var resultData = _.find(jsonData,{"Invoice No": invoiceId});
  	if (!resultData) {
  		resultData = _.find(jsonData, {"Invoice Number" : invoiceId});
  	}
  if(resultData) {
     res.status(201).json({"Invoice Number": invoiceId, "Invoice status": resultData["Invoice Status "],"Invoice Amount" : resultData["Invoice Amount (In Entered Currency)"] });
  } else {
  	 res.status(200).json({"Error Code": "12001","Error Message":"Invoice Details Not Available"});
  }
});

module.exports = router;
