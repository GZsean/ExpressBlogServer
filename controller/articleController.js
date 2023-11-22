// ArticleController.js
const Article = require("../models/articleModel");
const { sendResponse } = require("../middleware/responseHandler");

const ArticleController = {
  getAllArticles: async (req, res) => {
    try {
      const articles = await Article.find();
      sendResponse(res, 200, "success", articles);
    } catch (err) {
      sendResponse(res, 500, "Fail", { error: err.message });
    }
  },

  createArticle: async (req, res) => {
    try {
      const newArticle = await Article.create(req.body);
      // res.status(201).json({ code: 200, msg: "success" });
      sendResponse(res, 200, "success");
    } catch (err) {
      sendResponse(res, 400, err.message);
    }
  },

  getArticleById: async (req, res) => {
    try {
      const Article = await Article.findById(req.params.id);
      sendResponse(res, 200, "Success", Article);
    } catch (err) {
      sendResponse(res, 400, err.message);
    }
  },

  updateArticleById: async (req, res) => {
    try {
      const updatedArticle = await Article.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
      );
      sendResponse(res, 200, "updated");
    } catch (err) {
      sendResponse(res, 400, err.message);
    }
  },

  deleteArticleById: async (req, res) => {
    try {
      await Article.findByIdAndDelete(req.params.id);
      sendResponse(res, 200, "Article deleted");
    } catch (err) {
      sendResponse(res, 400, err.message);
    }
  },
};

module.exports = ArticleController;
