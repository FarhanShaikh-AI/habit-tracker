const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const habitRoutes = require("./routes/habits");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/userRoutes"); // Import user routes
const habitSuggestions = require('./routes/habits'); // Adjust path

const app = express();

// Enable CORS for Netlify frontend (Replace 'your-netlify-domain' with your actual Netlify domain)
app.use(cors({
    origin: 'https://mellifluous-bavarois-f92cf5.netlify.app/', // Replace with your actual Netlify domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(bodyParser.json());

// Authentication routes
app.use("/api/auth", authRoutes);

// User profile routes
app.use("/api/users", userRoutes); // Add user routes

// Habit management routes
app.use("/api/habits", habitRoutes);

// Habit suggestions route
app.use('/', habitSuggestions);

// Set PORT from environment variable or fallback to 5000 for local development
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
