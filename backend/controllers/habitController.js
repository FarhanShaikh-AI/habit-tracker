const Habit = require('../models/Habit');

exports.getAllHabits = (req, res) => {
  Habit.getAll((err, results) => {
    if (err) {
      console.error("Error fetching habits:", err);
      return res.status(500).json({ error: "Failed to fetch habits." });
    }
    res.status(200).json(results);
  });
};

exports.createHabit = (req, res) => {
  const habit = {
    title: req.body.title,
    frequency: req.body.frequency,
    status: req.body.status || 'active', // Default to 'active' if not provided
    start_date: req.body.start_date,
  };

  Habit.create(habit, (err, results) => {
    if (err) {
      console.error("Error creating habit:", err);
      return res.status(500).send(err);
    }
    console.log("Habit created successfully, ID:", results.insertId);
    res.status(201).json({ message: 'Habit created successfully', id: results.insertId });
  });
};

exports.updateHabit = (req, res) => {
  const updatedHabit = {
    title: req.body.title,
    frequency: req.body.frequency,
    status: req.body.status,
    start_date: req.body.start_date,
  };

  Habit.update(req.params.id, updatedHabit, (err) => {
    if (err) {
      console.error("Error updating habit:", err);
      return res.status(500).send(err);
    }
    console.log("Habit updated successfully, ID:", req.params.id);
    res.json({ message: 'Habit updated successfully' });
  });
};

exports.deleteHabit = (req, res) => {
  const { id } = req.params; // The parameter name here is 'id'

  Habit.delete(id, (err) => {
    if (err) {
      console.error("Error deleting habit:", err);
      return res.status(500).json({ error: "Failed to delete habit." });
    }
    res.status(204).send(); // Send success response
  });
};

