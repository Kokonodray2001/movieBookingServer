const bookedSeats = require("../models/Seats");
const httpErrors = require("http-errors");
exports.test = (req, res, next) => {
  res.send("working");
};

exports.addSeats = async (req, res, next) => {
  try {
    const response = await bookedSeats.create(req.body);
    res.send({
      status: "sucess",
      data: response,
    });
  } catch (error) {
    next(httpErrors(404, `err ${error}`));
  }
};

exports.updateSeats = async (req, res, next) => {
  try {
    const filter = req.query;
    console.log(filter);

    const response = await bookedSeats.findOneAndUpdate(filter, req.body);
    res.send({ status: "Success", data: response });
  } catch (error) {
    next(httpErrors(404, `error${error}`));
  }
};

exports.checkSeats = async (req, res, next) => {
  try {
    const filter = req.query;
    const response = await bookedSeats.findOne(filter);
    if (response == null) res.send(false);
    else res.send(response);
  } catch {
    next(httpErrors(404, `error ${error}`));
  }
};
