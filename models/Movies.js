const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    enum: ["2D", "3D"],
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  category: {
    // Corrected field name from "catagory" to "category"
    type: String,
    required: true,
  },
  posters: {
    type: String,
    default: "0",
  },
  language: {
    type: String,
    required: true,
  },
  timeSlots: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
});

const Movies = mongoose.model("movietable", schema);
module.exports = Movies;
