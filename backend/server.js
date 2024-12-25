const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const habitRoutes = require("./routes/habits");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/userRoutes"); // Import user routes
const habitSuggestions = require('./routes/habits'); // Adjust path

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Authentication routes
app.use("/api/auth", authRoutes);

// User profile routes
app.use("/api/users", userRoutes); // Add user routes

// Habit management routes
app.use("/api/habits", habitRoutes);

app.use('/', habitSuggestions);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
