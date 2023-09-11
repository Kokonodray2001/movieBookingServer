const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: "22.106073825825835 88.12594129800904",
  },
  city: {
    type: String,
    enum: ["Kolkata", "Delhi", "Mumbai", "Bangalore"],
    required: true,
  },
  timeSlots: {
    type: [String],
    required: true,
  },
});

const theaterModel = mongoose.model("theaterTable", schema);
module.exports = theaterModel;
