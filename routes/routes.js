var db = require("../models");

module.exports = function(app) {
  //Home Page
  //=======================================================
  app.get("/", function(req, res) {
        db.AllPark.findAll({}).then(function(dbPark) {
       
        var hbsObject = {
          parks: dbPark,
          home: {selected : true}
        };
         res.render("index", hbsObject);
               
        
      });
  }); 

  //Parks A-Z 
  //====================================================== 
  app.get("/all-parks", function(req, res) {
      db.AllPark.findAll({        
        order:  ["parkName"]
          
      }).then(function(dbPark) {
      var hbsObject = {
        parks: dbPark,
        az : {selected : true}
      };
         
      res.render("all-parks", hbsObject);
      });
  });

  //All Features
  //=====================================================
  app.get("/all-features", function(req, res) {
    db.AllPark.findAll({}).then(function(dbPark) {
    var hbsObject = {
      parks: dbPark,
      feat : {selected : true}
    };
        
    res.render("all-features", hbsObject);
    });
  });

  //About
  //=====================================================
  app.get("/about", function(req, res) {
    db.AllPark.findAll({
      order:  ["parkName"]
    }).then(function(dbPark) {
    var hbsObject = {
      parks: dbPark,
      about : {selected : true}
    };              
      res.render("about", hbsObject);
    });
  });

  //Add Park
  //===================================================== 
  app.get("/add-park", function(req, res) {
      db.AllPark.findAll({}).then(function(dbPark) {
      var hbsObject = {
        parks: dbPark,
        add : {selected : true}
      };
              
      res.render("add-park", hbsObject);
      });
  });

  //Individual Feature Page -- need a features table
  //=====================================================
  app.get("/features/:feature", function(req, res) {
    var feature = req.params.feature;
      db.AllPark.findAll({ 
        where:  {feature : true}        
      }).then(function(dbPark) {     
      var hbsObject = {
        parks: dbPark
      };
      // console.log(req.params.name);
      // console.log(hbsObject);
              
      res.render("feature", hbsObject);
    });
  });

  //Individual Park Page 
  //=====================================================

  app.get("/:name", function(req, res) {
      db.AllPark.findOne({
        where: {
          parkName : req.params.name
        }        
      }).then(function(dbPark) {     
      var hbsObject = {
        parks: dbPark
      };
      // console.log(req.params.name);
      // console.log(hbsObject);
              
      res.render("park", hbsObject);
    });
  });
 

  //Individual Feature Page 
  //=====================================================

  app.get("/:feature", function(req, res) {
    var feature = req.params.feature;
    db.AllPark.findAll({
      where: {
          feature : true
      }        
    }).then(function(dbPark) {     
    var hbsObject = {
      parks: dbPark
    };
    // console.log(req.params.name);
    console.log(req.body);
    console.log(hbsObject);
            
    res.render("feature", hbsObject);
    });
  });

  // API Post
  //======================================================= 

  app.post("/api/parks", function(req, res) {
    db.AllPark.create(req.body).then(function(dbPark) {
      res.json(dbPark);
    
    });
  }); 



  };
