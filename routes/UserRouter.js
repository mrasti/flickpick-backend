const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

router.post("/signup", userController.signUp);
router.post("/login", userController.logIn);
router.put("/:userId/:movieId", userController.addMovie);

module.exports = router;