const router = require('express').Router();
const db = require("../models")
// routes will go here

router.get("/books", (req, res) => {
    db.Book.find({
        title: { $regex: new RegExp(req.query.q, 'i')}
    })
    .then(books => res.json(books))
    .catch(err => res.status(422).end());
});

module.exports=router;