const express = require("express");
const router = express.Router();
const controller = require("../controllers/MovieController");
const passport = require("passport");

router.get("/", controller.getRandomFive);
router.get("/:id", controller.getById);
router.get("/title/:title", controller.getByTitle);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.deleteMovie
);

module.exports = router;
