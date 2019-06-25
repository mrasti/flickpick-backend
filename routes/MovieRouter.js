
const express = require("express");
const router = express.Router();
const controller = require("../controllers/MovieController");

router.get('/', controller.getRandomFive);
router.get('/:id', controller.getById);
router.get('/title/:title', controller.getByTitle);

module.exports = router