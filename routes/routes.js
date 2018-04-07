var db = require("../models");

module.exports = function(app) {
   //Home Page
   //=======================================================
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
                
        res.render("index", hbsObject);
      });
    });

   //Parks A-Z 
   //====================================================== 
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

    //About
    //=====================================================
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

    //Add Park
    //===================================================== 
    app.get("/add-park", function(req, res) {
      db.Park.findAll({}).then(function(dbPark) {
      var hbsObject = {
        parks: dbPark
      };
              
      res.render("add", hbsObject);
      });
    });
  };


 
  

