const express = require("express");
const router = express.Router();
const axios = require("axios");
const habitController = require("../controllers/habitController");
const {} = require("../controllers/authController");

// Protect routes
router.get("/", habitController.getAllHabits);
router.post("/", habitController.createHabit);
router.put("/:id", habitController.updateHabit);
router.delete("/:id", habitController.deleteHabit);

// Get habit progress
router.get("/habit/progress/:id", (req, res) => {
  const habitId = req.params.id;
  Habit.findProgressById(habitId, (err, progress) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({ progress });
    }
  });
});

// Route to fetch habit suggestions
router.get("/api/habit-suggestions", async (req, res) => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:5000/generate-habit-suggestions"
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching habit suggestions:", error.message);
    res.status(500).json({ error: "Failed to fetch habit suggestions" });
  }
});

// Example of how you might calculate progress in your backend
router.get("/habit/progress/:id", (req, res) => {
  const habitId = req.params.id;
  // Logic to calculate progress based on habit data
  const progress = calculateProgress(habitId); // Implement this function
  res.status(200).json({ progress });
});
module.exports = router;
