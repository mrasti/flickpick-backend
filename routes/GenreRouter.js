
const express = require("express");
const router = express.Router();
const controller = require("../controllers/GenreController");

router.get('/', controller.getAllGenres);
router.get('/id/:id', controller.getMoviesByGenre);

module.exports = router