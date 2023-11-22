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
      await Article.create(req.body);

      sendResponse(res, 200, "success");
    } catch (err) {
      sendResponse(res, 400, err.message);
    }
  },

  getArticleById: async (req, res) => {
    try {
      const ArticleTarget = await Article.findById(req.params.id);
      sendResponse(res, 200, "Success", ArticleTarget);
    } catch (err) {
      sendResponse(res, 400, err.message);
    }
  },

  updateArticleById: async (req, res) => {
    try {
      await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
