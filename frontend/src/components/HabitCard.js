import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { deleteHabit, getHabitSuggestions } from "../services/habitService"; // Combined imports
import "./HabitsList.css";

function HabitCard({ habit, onEdit }) {
  const formattedDate = new Date(habit.start_date).toLocaleString();

  const [suggestions, setSuggestions] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fetch habit suggestions when the component mounts
    getHabitSuggestions().then((data) => {
      setSuggestions(data);
    });

    // Calculate progress based on habit data
    const calculateProgress = () => {
      const randomProgress = Math.floor(Math.random() * 101); // Generate a random number between 0 and 100
      setProgress(randomProgress);
    };

    calculateProgress();
  }, [habit.status]); // Add habit.status as a dependency

  const handleDelete = () => {
    deleteHabit(habit.habit_id)
      .then(() => {
        alert("Habit deleted successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting habit:", error);
        alert("Failed to delete habit");
      });
  };

  const progressColor = progress === 0 ? "#f44336" : "#4caf50";

  return (
    <div>
      <Card
        className="card"
        style={{
          border: "1px solid #ccc",
          padding: "16px",
          margin: "16px",
          borderRadius: "8px",
        }}
      >
        <Card.Body>
          <Card.Title>{habit.title}</Card.Title>
          <Card.Text>
            <p>
              <strong>Frequency:</strong> {habit.frequency}
            </p>
            <p>
              <strong>Status:</strong> {habit.status}
            </p>
            <p>
              <strong>Start Date:</strong>{" "}
              <span style={{ fontWeight: "bold" }}>{formattedDate}</span>
            </p>
          </Card.Text>

          {/* Responsive Progress Bar */}
          <div className="progress-bar-container">
            <div
              className="progress-bar-fill"
              style={{ width: `${progress}%`, backgroundColor: progressColor }}
            >
              <span className="progress-bar-label">{`${progress}%`}</span>
            </div>
          </div>

          <div className="card-buttons">
            <Button variant="warning" onClick={() => onEdit(habit)}>
              Edit
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Display Habit Suggestions after the card */}
      <div className="recommendations">
        <h5>Habit Recommendations</h5>
        {suggestions.length > 0 ? (
          suggestions.map((suggestion, index) => (
            <Card key={index} className="recommendation-card">
              <Card.Body>
                <Card.Title>{suggestion.title}</Card.Title>
                <Card.Text>{suggestion.description}</Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>Check Combined Recommendations Below</p>
        )}
      </div>
    </div>
  );
}

export default HabitCard;
