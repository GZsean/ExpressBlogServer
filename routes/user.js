var express = require("express");
var router = express.Router();
const ArticleController = require("../controller/userController");

router.get("/login", ArticleController.getUser);

module.exports = router;
