var db = require("../models");

module.exports = function(app) {
   //Home Page
   //=======================================================
    app.get("/", function(req, res) {
        db.Park.findAll({}).then(function(dbPark) {
       
        var hbsObject = {
          parks: dbPark
        };
                
        res.render("index", hbsObject); //change this back to
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

    //Individual Feature Page -- need a features table
    //=====================================================
    app.get("/features/:feature", function(req, res) {
        db.Park.findAll({ 
          where: 
          {parkName : req.params.feature}
          
        }).then(function(dbPark) {     
        var hbsObject = {
          parks: dbPark
        };
        // console.log(req.params.name);
        // console.log(hbsObject);
                
        res.render("park", hbsObject);
      });
    });

     //Individual Park Page 
    //=====================================================

    app.get("/parks/:name", function(req, res) {
      db.Park.findOne({
        where: 
        {parkName : req.params.name}
        
      }).then(function(dbPark) {     
      var hbsObject = {
        parks: dbPark
      };
      // console.log(req.params.name);
      // console.log(hbsObject);
              
      res.render("park", hbsObject);
    });
  });

    //All Features
    //=====================================================
    app.get("/all-features", function(req, res) {
      db.Park.findAll({}).then(function(dbPark) {
      var hbsObject = {
        parks: dbPark
      };
         
      res.render("all-features", hbsObject);
      });
    });

  };


 
  

