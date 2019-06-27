const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const passport = require("passport");

router.get("/:id", userController.getById);
router.post("/signup", userController.signUp);
router.post("/login", userController.logIn);
router.put(
  "/add/:userId/:movieId",
  passport.authenticate("jwt", { session: false }),
  userController.addMovie
);
router.put(
  "/remove/:userId/:movieId",
  passport.authenticate("jwt", { session: false }),
  userController.removeMovie
);
router.delete("/:userId", userController.delete);

module.exports = router;
