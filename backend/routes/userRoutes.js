const express = require("express");
const userController = require("../controllers/user-controller");
const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.put("/users/:userId", userController.updateUser);
router.get("/users/:userId", userController.getUserById);

module.exports = router;
