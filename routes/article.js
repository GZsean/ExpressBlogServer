var express = require("express");
var router = express.Router();
const ArticleController = require("../controller/articleController");

/* GET home page. */
// router.get("/:id", ArticleController.getArticleById);
router.get("/all", ArticleController.getAllArticles);

module.exports = router;
