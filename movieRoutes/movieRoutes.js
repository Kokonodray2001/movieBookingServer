const express = require("express");
const movieController = require("../controller/movieController");
const router = express.Router();

router.get("/", movieController.testAPi);
router.post("/save", movieController.saveMovie);
module.exports = router;
