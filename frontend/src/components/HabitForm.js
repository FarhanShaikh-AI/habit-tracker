import React, { useState, useEffect } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { createHabit, updateHabit } from "../services/habitService";

function HabitForm({ habit, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    title: "",
    frequency: "daily",
    status: "active",
    start_date: "",
  });
  const [errors, setErrors] = useState({});
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString()); // State for current time

  // Update form data if habit prop changes (for editing an existing habit)
  useEffect(() => {
    if (habit) {
      setFormData({
        title: habit.title,
        frequency: habit.frequency,
        status: habit.status,
        start_date: habit.start_date,
      });
    }
  }, [habit]);

  // Update current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Clear errors for the current field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required.";
    if (!formData.start_date) newErrors.start_date = "Start date is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (habit) {
      // Updating an existing habit
      updateHabit(habit.habit_id, formData)
        .then(() => onSubmitSuccess())
        .catch((error) => console.error("Error updating habit:", error));
    } else {
      // Creating a new habit
      createHabit(formData)
        .then(() => onSubmitSuccess())
        .catch((error) => console.error("Error creating habit:", error));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <strong style={{ fontSize: "16px" }}>
          Current Time: {currentTime}
        </strong>
      </div>

      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          isInvalid={!!errors.title}
        />
        {errors.title && <Alert variant="danger">{errors.title}</Alert>}
      </Form.Group>

      <Form.Group>
        <Form.Label>Frequency</Form.Label>
        <Form.Control
          as="select"
          name="frequency"
          value={formData.frequency}
          onChange={handleChange}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Status</Form.Label>
        <Form.Control
          as="select"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          type="date"
          name="start_date"
          value={formData.start_date}
          onChange={handleChange}
          isInvalid={!!errors.start_date}
        />
        {errors.start_date && (
          <Alert variant="danger">{errors.start_date}</Alert>
        )}
      </Form.Group>

      <Button type="submit" variant="primary">
        {habit ? "Update Habit" : "Create Habit"}
      </Button>
    </Form>
  );
}

export default HabitForm;
