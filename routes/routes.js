// shaun -- routes 
// express router 
// git database 
var db = require("../models");

module.exports = function(app) {

  app.get("/api/park", function(req, res) {
    db.Park.findAll({

    }).then(function(dbParks) {
      res.json(dbPark);
    });
  });
 
  
  };


