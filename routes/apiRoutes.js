var db = require("../models");

module.exports = function (app) {
    app.get("/api/:name", function (req, res) {
        db.AllPark.findOne({
            where: {
                parkName: req.params.name
            }
        }).then(function (dbPark) {
            var hbsObject = {
                parks: dbPark
            };
            res.json(hbsObject); 
        })
    });

    app.get("/api/all", function (req, res) {
        db.AllPark.findAll({}).then(function (dbPark) {
            var hbsObject = {
                parks: dbPark
            };
            res.json(hbsObject);
        })
    });

};