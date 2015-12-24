var express = require('express');
var router = express.Router();
var channelDoc = require('../models/channel.js');

/* GET channels listing. */
router.get('/', function (req, res, next) {
  // replace with mongo data from channels collection
  channelDoc(res);
});


module.exports = router;


