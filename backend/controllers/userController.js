const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Fetch user profile for the logged-in user
exports.getUserProfile = (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "your-secret-key"); // Replace "your-secret-key" with your actual secret key
    const userId = decoded.id;

    User.getById(userId, (err, user) => {
      if (err) {
        console.error("Error fetching user profile:", err);
        return res.status(500).json({ message: "Server error" });
      }
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    });
  } catch (error) {
    console.error("Token verification failed:", error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

// Update user profile for the logged-in user
exports.updateUserProfile = (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "your-secret-key");
    const userId = decoded.id;

    const { name, password } = req.body;

    if (!name || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    const updatedUser = {
      name,
      password, // Replace with a hashed password in production
    };

    User.update(userId, updatedUser, (err) => {
      if (err) {
        console.error("Error updating user profile:", err);
        return res.status(500).json({ message: "Server error" });
      }
      res.json({ message: "Profile updated successfully" });
    });
  } catch (error) {
    console.error("Token verification failed:", error);
    res.status(401).json({ message: "Unauthorized" });
  }
};
