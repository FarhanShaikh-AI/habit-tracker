const db = require("../config/database");

class User {
  // Fetch user by ID
  static getById(id, callback) {
    const query = "SELECT * FROM users WHERE user_id = ?";
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error("Error fetching user:", err);
        return callback(err, null);
      }
      if (results.length === 0) {
        return callback(null, null); // No user found
      }
      callback(null, results[0]);
    });
  }

  // Update user profile
  static update(id, updatedUser, callback) {
    const query = "UPDATE users SET name = ?, password = ? WHERE user_id = ?";
    const params = [updatedUser.name, updatedUser.password, id];
    db.query(query, params, (err, results) => {
      if (err) {
        console.error("Error updating user:", err);
        return callback(err);
      }
      callback(null, results);
    });
  }
}

module.exports = User;
