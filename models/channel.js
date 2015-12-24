var MONGO_DB = 'mongodb://localhost:27017/resumeGen';
var express = require('express');
// Retrieve the mongo client
var mongoClient = require('mongodb').MongoClient;

// connects to MongoDB for us, using the URL we're passing in
 var channelDoc = function(res){
     mongoClient.connect(MONGO_DB, function(err, db) {
         var collection = db.collection('resumes');
         var results = collection.find();
         var array = results.toArray(function(err, result) {
             res.json(result);
         });

     });
};

module.exports = channelDoc;
