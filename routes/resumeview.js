var express = require('express');
var router = express.Router();
var resumeDoc = require('../models/resumeview.js');

/* GET channels listing. */
router.get('/', function (req, res, next) {
  // replace with mongo data from resumes collection
  resumeDoc(res);
});


module.exports = router;


