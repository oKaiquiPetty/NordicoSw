var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    res.render("index", { title: "Express" });
});


module.exports = router;