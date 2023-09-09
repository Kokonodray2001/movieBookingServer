require("dotenv");
const movie = require("../models/Movies");
const httpErrors = require("http-errors");

exports.testAPi = async (req, res, next) => {
  res.send("hello working");
};

exports.saveMovie = async (req, res, next) => {
  console.log(req.body);
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
exports.getAllMovies = async (req, res, next) => {
  try {
    const movies = await movie.find();
    res.send(movies);
  } catch (error) {
    next(httpErrors(404, `error : ${error}`));
  }
};

exports.updatePoster = async (req, res, next) => {
  try {
    // const update = {
    //   posters: `${req.file.originalname}`,
    // };
    const imgarr = req.files.map((file) => `${file.originalname}`);
    const update = {
      posters: imgarr,
    };

    console.log(update);
    const updateTask = await movie.findOneAndUpdate(
      { name: req.params.movieName },
      update
    );
    res.send({
      status: "success",
      // data: `http://localhost:8000/posters/tb2.jpg`,
      data: updateTask,
    });
  } catch (error) {
    next(httpErrors(404, `error : ${error}`));
  }
};

exports.getPosters = async (req, res, next) => {
  try {
    res.send({
      poster1: `http://localhost:8000/posters/${encodeURIComponent(
        `${req.params.movieName}1.jpeg`
      )}`,
      poster2: `http://localhost:8000/posters/${encodeURIComponent(
        `${req.params.movieName}2.jpeg`
      )}`,
    });
  } catch (error) {
    next(httpErrors(404, `error : ${error}`));
  }
};
