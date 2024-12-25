import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import HabitCard from './HabitCard';
import HabitForm from './HabitForm';
import { getAllHabits } from '../services/habitService';
import { getRecommendations } from '../services/recommendationService';

function HabitsList() {
  const [habits, setHabits] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedHabit, setSelectedHabit] = useState(null);

  useEffect(() => {
    // Fetch all habits and recommendations when the component mounts
    fetchHabitsAndRecommendations();
  }, []);

  const fetchHabitsAndRecommendations = async () => {
    const [habitData, recommendationData] = await Promise.all([
      getAllHabits(),
      getRecommendations(),
    ]);
    setHabits(habitData);
    setRecommendations(recommendationData);
  };

  const handleAddHabit = () => {
    setSelectedHabit(null);
    setShowForm(true);
  };

  const handleEditHabit = (habit) => {
    setSelectedHabit(habit);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  const handleFormSubmitSuccess = async () => {
    setShowForm(false);
    // Fetch updated habits and recommendations after form submission
    await fetchHabitsAndRecommendations();
  };

  return (
    <div className="container">
      <center>
        <Button className="add-habit-btn" variant="primary" onClick={handleAddHabit}>
          Add Habit
        </Button>
      </center>

      <div className="card-container">
        {habits.length > 0 ? (
          habits.map((habit) => (
            <HabitCard
              key={habit.habit_id}
              habit={habit}
              onEdit={handleEditHabit}
            />
          ))
        ) : (
        <strong> <center><p className="no-habits-message">No habits to display. Add your first habit to get started!</p></center> </strong>
        )}
      </div>

      {/* Recommendations Section - Only show if habits exist */}
      {habits.length > 0 && recommendations.length > 0 && (
        <div className="recommendations-container">
          <h3>Recommended Habits</h3>
          <div className="card-container">
            {recommendations.map((rec) => (
              <div key={rec.id} className="habit-card">
                <h4>{rec.title}</h4>
                <p>{rec.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <Modal show={showForm} onHide={handleFormClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedHabit ? 'Edit Habit' : 'Add Habit'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HabitForm
            habit={selectedHabit}
            onSubmitSuccess={handleFormSubmitSuccess}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default HabitsList;
