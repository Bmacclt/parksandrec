// requiring our models 

var db = require("../models");

module.exports = function(app) {

// POST route for saving a new post 

app.post("/api/parks", function(req, res) {
    console.log(req.body);
    db.Park.create(req.body).then(function(dbPark) {
        res.json(dbPark);
    });
});
}

//in the front end html/javascript create a form
//on submit, send the form data to the above route
//when you do that, the create Park function will run, to save it to your database