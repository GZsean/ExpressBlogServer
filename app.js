const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const lessMiddleware = require("less-middleware");
const logger = require("morgan");
const mongoose = require("mongoose");
const databaseConfig = require("./config/config");

const articleRouter = require("./routes/article");
const userRouter = require("./routes/user");
const { recordMiddleware } = require("./middleware/recordMiddleware");

let app = express();

mongoose
  .connect(databaseConfig.url)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));
app.use(recordMiddleware);

app.use("/", userRouter);
app.use("/article", articleRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;
