const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  tag: String,
  views: Number,
  title: String,
  content: String,
  createTime: Date,
  lastUpdate: Date,
  describe: String,
  // other field...
});

const Article = mongoose.model("article", articleSchema, "articles");

module.exports = Article;
