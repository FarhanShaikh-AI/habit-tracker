const db = require("../config/database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "Farhan@123$123"; 

// User signup
exports.signup = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Check if email already exists
  const checkQuery = "SELECT * FROM users WHERE email = ?";
  db.query(checkQuery, [email], async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error." });

    if (results.length > 0) {
      return res.status(400).json({ message: "Email already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the user into the database
    const insertQuery = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(insertQuery, [name, email, hashedPassword], (err) => {
      if (err) return res.status(500).json({ message: "Signup failed." });
      res.status(201).json({ message: "User signed up successfully." });
    });
  });
};

// User login
exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error." });

    if (results.length === 0) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Generate JWT token
    const token = jwt.sign({ user_id: user.user_id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });
    res.status(200).json({ message: "Login successful.", token });
  });
};

// Middleware to verify JWT
exports.verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token." });

    req.user = decoded; // Store user info in request
    next();
  });
};
