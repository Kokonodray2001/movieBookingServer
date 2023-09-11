const express = require("express");
const router = express.Router();
const theaterController = require("../controller/theaterController");

router.get("/", theaterController.test);
router.post("/save", theaterController.addTheater);
router.get("/all", theaterController.allTheater);

module.exports = router;
