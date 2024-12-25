const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Fetch user profile
router.get("/", userController.getUserProfile);

// Update user profile
router.put("/", userController.updateUserProfile);

module.exports = router;
