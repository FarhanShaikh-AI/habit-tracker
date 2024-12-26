const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const habitRoutes = require("./routes/habits");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/userRoutes");
const habitSuggestions = require('./routes/habits');

const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'https://mellifluous-bavarois-f92cf5.netlify.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(bodyParser.json());

// Authentication routes
app.use("/api/auth", authRoutes);

// User profile routes
app.use("/api/users", userRoutes);

// Habit management routes
app.use("/api/habits", habitRoutes);

// Habit suggestions route
app.use('/', habitSuggestions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
