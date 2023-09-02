require("dotenv");
const movie = require("../models/movies");
const httpErrors = require("http-errors");

exports.testAPi = async (req, res, next) => {
  res.send("hello working");
};

exports.saveMovie = async (req, res, next) => {
  try {
    const newMovie = await movie.create(req.body);
    res.send({
      status: "success",
      data: newMovie,
    });
  } catch (error) {
    next(httpErrors(404, `error ${error}`));
  }
};
