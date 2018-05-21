var express = require('express');
var approvalData = require('../json/approvallimit');
var _ = require('lodash');
var router = express.Router();

router.get('/:designation', function(req, res, next) {
  console.log(req.params.designation);
  var designation = req.params.designation;
  var result = _.find(approvalData,{"designation": designation});
  if(result){
  	res.status(201).json(result);
  } else {
  	res.status(200).json({"Error Code": "12002","Error Message":"Approval limit not define for input data."});
  }
  
});

module.exports = router;