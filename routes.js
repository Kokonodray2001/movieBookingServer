"use strict";

require("./utils/dbConnection");
const movieRouter = require("./movieRoutes/movieRoutes");
const express = require("express");
module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.use(express.json());
  app.use("/api", movieRouter);
};
