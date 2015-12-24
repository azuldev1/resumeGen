/**
 * Created by Manu on 12/10/15.
 */
var MONGO_DB = 'mongodb://localhost:27017/resumeGen';
var express = require('express');
// Retrieve the mongo client
var mongoClient = require('mongodb').MongoClient;

// connects to MongoDB for us, using the URL we're passing in
var channelPost = function(req){
    mongoClient.connect(MONGO_DB, function(err, db) {
        var collection = db.collection('resumes');
        collection.insert(req.body);


    });
};

module.exports = channelPost;
