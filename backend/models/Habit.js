const db = require("../config/database");

class Habit {
  static getAll(callback) {
    const query = "SELECT * FROM habits";
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error fetching habits:", err);
        return callback(err, null);
      }
      callback(null, results);
    });
  }

  static create(habit, callback) {
    const query = "INSERT INTO habits (title, frequency, status, start_date) VALUES (?, ?, ?, ?)";
    const params = [habit.title, habit.frequency, habit.status || 'active', habit.start_date];
    db.query(query, params, (err, results) => {
      if (err) {
        console.error("Error creating habit:", err);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  }

  static update(id, updatedHabit, callback) {
    const query = "UPDATE habits SET title = ?, frequency = ?, status = ?, start_date = ? WHERE habit_id = ?";
    const params = [updatedHabit.title, updatedHabit.frequency, updatedHabit.status, updatedHabit.start_date, id];
    db.query(query, params, (err) => {
      if (err) {
        console.error("Error updating habit:", err);
        callback(err);
      } else {
        callback(null);
      }
    });
  }

  static delete(id, callback) {
    const query = "DELETE FROM habits WHERE habit_id = ?";
    db.query(query, [id], (err) => {
      if (err) {
        console.error("Error deleting habit:", err);
        callback(err);
      } else {
        callback(null);
      }
    });
  }
}

module.exports = Habit;
