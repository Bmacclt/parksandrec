var db = require("../models");

module.exports = function(app) {
   //Home Page
   //=======================================================
    app.get("/", function(req, res) {
        db.Park.findAll({}).then(function(dbPark) {
       
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
        //  include: [db.BasketBall]
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

    //
    //=====================================================
    app.get("/parks/:name", function(req, res) {
        db.Park.findOne({
          where: 
          {parkName : req.param.name}
        }).then(function(dbPark) {     
        var hbsObject = {
          parks: dbPark
        };
                
        res.render("park", hbsObject);
      });
    });
  };


 
  

