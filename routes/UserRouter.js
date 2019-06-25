const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

router.post("/signup", userController.signUp);
router.post("/login", userController.logIn);
router.put("/add/:userId/:movieId", userController.addMovie);
router.put("/remove/:userId/:movieId", userController.removeMovie);

module.exports = router;
