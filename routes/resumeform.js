/**
 * Created by Manu on 12/10/15.
 */
var express = require('express');
var router = express.Router();
var resumePost = require('../models/resumeform.js');

/* GET channels listing. */
router.post('/', function (req, res, next) {
    resumePost(req);
    res.send(200);
});


module.exports = router;


