const express = require("express");
const movieController = require("../controller/movieController");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img/movies");
  },
  filename: function (req, file, cb) {
    return cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

router.get("/", movieController.testAPi);
router.post("/save", movieController.saveMovie);
router.get("/getMovies", movieController.getAllMovies);
router.patch(
  "/updatePoster/:movieName",
  upload.array("posters", 2),
  movieController.updatePoster
);
router.get("/getPosters/:movieName", movieController.getPosters);

module.exports = router;
