// Brian M. 
// turn off the force true during week 2 or ELSE!
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var exphbs = require("express-handlebars");
var db = require("./models");
//var methodOverride = require("method-override");

var PORT = process.env.PORT || 8080;



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/public'));
// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Serve static content for the app from the "public" directory in the application directory.



//ROUTES 
//======================================================
require("./routes/routes.js")(app);

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });

