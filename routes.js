"use strict";

require("./utils/dbConnection");
const cors = require("cors");
const movieRouter = require("./movieRoutes/movieRoutes");
const theaterRouter = require("./theaterRouter/theaterRoutes");
const seatsRouter = require("./seatsRoutes/seatRouter");
const express = require("express");

module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.use(
    cors({
      origin: "http://localhost:3000", // Allow requests from this origin
    })
  );
  app.use("/posters", express.static("public/img/movies"));
  app.use(express.json());
  app.use("/api", movieRouter);
  app.use("/theater", theaterRouter);
  app.use("/seats", seatsRouter);
  app.get("/hello", async (req, res) => {
    res.send("hello");
  });
};
