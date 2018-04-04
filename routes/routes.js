// shaun -- routes 
// express router 
// git database 
<<<<<<< HEAD
var db = require("../models");

module.exports = function(app) {
    app.get("/api/authors", function(req, res) {
      // Here we add an "include" property to our options in our findAll query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just db.Post
      db.Parks.findAll({
        //include: [db.Post]
      }).then(function(dbParks) {
        res.json(dbParks);
      });
    });
  ;
 
  
  };

=======


var express = require('express');
var routerExpress = require('router-express');


var app = express() 

var routes = []
>>>>>>> 23b2b073b5ee5ee60b7c1a7a5b696b75883dbe47
