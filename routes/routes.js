// shaun -- routes 
// express router 
// git database 
var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        db.Park.findAll({
          order:  ["parkName"]
        }).then(function(dbPark) {
        // console.log(dbPark[0].dataValues.parkName);
        // console.log(dbPark[1].dataValues.parkName);
        // console.log(dbPark[2].dataValues.parkName);
        // console.log(dbPark.length);
        var hbsObject = {
          parks: dbPark
        };
                
        res.render("index", hbsObject); //change this back to
      });
    });

    app.get("/all-parks", function(req, res) {
      db.Park.findAll({
        order:  ["parkName"]
      }).then(function(dbPark) {
      var hbsObject = {
        parks: dbPark
      };
              
      res.render("all-parks", hbsObject);
      });
    });

    app.get("/about", function(req, res) {
      db.Park.findAll({
        order:  ["parkName"]
      }).then(function(dbPark) {
      var hbsObject = {
        parks: dbPark
      };
              
      res.render("about", hbsObject);
      });
    });

    app.get("/form", function(req, res) {
      db.Park.findAll({
        order:  ["parkName"]
      }).then(function(dbPark) {
      var hbsObject = {
        parks: dbPark
      };
              
      res.render("form", hbsObject);
      });
    });

  };


 
  

