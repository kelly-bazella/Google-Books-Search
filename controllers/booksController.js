const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.Book
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    create: (req, res) => {
        console.log("REQ", req.body)
        db.Book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
        db.Book
        .findOne({googleId: req.params.googleId})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};