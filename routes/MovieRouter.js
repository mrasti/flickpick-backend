const express = require("express");
const router = express.Router();
const controller = require("../controllers/MovieController");

router.get("/", controller.getRandomMovies);
router.get("/allmovies", controller.getAllMovies);
router.get("/:id", controller.getById);
router.get("/search/:title", controller.searchByTitle);

module.exports = router;
