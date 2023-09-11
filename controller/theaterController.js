const theaterModel = require("../models/theaters");
const httpErrors = require("http-errors");

exports.test = async (req, res, next) => {
  res.send("hello");
};

exports.addTheater = async (req, res, next) => {
  try {
    const nweTheater = await theaterModel.create(req.body);
    res.send({
      status: "success",
      data: nweTheater,
    });
  } catch (error) {
    next(httpErrors(404, `error ${error}`));
  }
};

exports.allTheater = async (req, res, next) => {
  try {
    const theaters = await theaterModel.find();
    res.send(theaters);
  } catch (error) {
    next(httpErrors(404, `error : ${error}`));
  }
};
