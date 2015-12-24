/**
 * Created by Manu on 12/10/15.
 */
var express = require('express');
var router = express.Router();
var channelDel = require('../models/deletechannel.js');

/* GET channels listing. */
router.delete('/', function (req, res, next) {
    channelDel(req);
    res.send(200);
});


module.exports = router;


