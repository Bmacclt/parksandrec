// shaun -- routes 
// express router 
// git database 
var db = require("../models");

module.exports = function(app) {
<<<<<<< HEAD
    app.get("/", function(req, res) {
      // Here we add an "include" property to our options in our findAll query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just db.Post
      db.Parks.findAll({
        //include: [db.Post]
      }).then(function(dbParks) {
        res.json(dbParks);
      });
    });
  
  
  };

=======

  app.get("/api/park", function(req, res) {
    db.Park.findAll({

    }).then(function(dbParks) {
      res.json(dbPark);
    });
  });
 
  
  };


>>>>>>> e9b776271698deba504b03b4b3793ee26b2b88fc
