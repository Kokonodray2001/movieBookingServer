const express = require("express");
const router = express.Router();
const seatController = require("../controller/seatsController");

router.get("/", seatController.test);
router.post("/addSeats", seatController.addSeats);
router.patch("/updateSeats", seatController.updateSeats);
router.get("/checkSeats", seatController.checkSeats);

module.exports = router;
