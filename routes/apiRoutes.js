var db = require("../models");

module.exports = function (app) {

    app.get("/api/parks", function (req, res) {
        db.AllPark.findAll({
            order: ["parkName"]
        }).then(function (dbPark) {

            res.json(dbPark);
        });
    });

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


    app.get("/api/basketball", function (req, res) {
        db.AllPark.findAll({
            where: {
                basketball: true
            }
        }).then(function (dbPark) {
            var hbsObject = {
                parks: dbPark
            };
            res.json(hbsObject);
        })
    });

};