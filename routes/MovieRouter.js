
const express = require("express");
const router = express.Router();
const controller = require("../controllers/MovieController");

router.get('/', controller.getRandomFive);
router.get('/:id', controller.getById);
router.get('/title/:title', controller.getByTitle);

router.post('/', controller.createNew);

router.put('/title/:title', controller.putMovie);
router.patch('/title/:title', controller.patchMovie);

router.delete('/title/:title', controller.deleteMovie);

module.exports = router