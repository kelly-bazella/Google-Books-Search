const router = require('express').Router();
const db = require("../models")
// routes will go here

router.get("/books", apiRoutes);
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports=router;