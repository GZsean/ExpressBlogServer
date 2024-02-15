const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  name: String,
  password: String,
});

const User = mongoose.model("user", articleSchema, "users");

module.exports = User;
