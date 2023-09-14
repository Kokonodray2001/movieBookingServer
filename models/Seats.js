const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  movie: {
    type: String,
    required: true,
  },
  theater: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  bookedSeats: {
    type: [Number],
    required: true,
  },
});

module.exports = mongoose.model("seatTable", schema);
