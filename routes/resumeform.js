/**
 * Created by Manu on 12/10/15.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require("mongoose");
var Resume = require('../models/resumeform.js');

/* Get resumes. */
router.get("/", function(req,res){
    Resume.find({}, function(err, data){
        if(err){
            console.log("Error: ", err);
        }

        res.send(data);
    });
});
/* Post new resumes. */
router.post("/", function(req,res){
    console.log(req.body);

    var resume = new Resume();
    resume.resumename = req.body.resumename
    resume.title = req.body.title
    resume.firstname = req.body.firstname
    resume.lasttname = req.body.lasttname
    resume.city = req.body.city
    resume.state = req.body.state
    resume.profile = req.body.profile
    resume.contact.info0 = req.body.contact.info0.detail
    console.log("HERE: ", req.body);


    console.log("TEST", resume);


    resume.save(function(err, data){
        if(err){
            console.log("Error: ", err);
        }

        res.send(data);
    });


});



module.exports = router;


