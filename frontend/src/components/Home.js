import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirection
import { getAllHabits } from '../services/habitService'; // Assuming you have this function
import HabitCard from './HabitCard'; // HabitCard component to display each habit
import './Home.css';

function Home() {
  const [habits, setHabits] = useState([]);
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to access this page.");
      navigate("/login");
    }
  }, [navigate]);

  // Fetch habits when component mounts
  useEffect(() => {
    getAllHabits()
      .then((data) => {
        // Log the response to check the structure
        console.log('Fetched habits:', data);
        
        // Ensure the data is an array before setting it
        setHabits(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error('Error fetching habits:', error);
        // Optionally handle the error, e.g., set empty array or show a message
        setHabits([]);
      });
  }, []);

  return (
    <div className="home-container">
     <div class="marquee">
     <h1>Welcome to BuildHabit - Your Personalized Habit Tracker</h1>
</div>

      <p>Track and improve your daily habits effectively!</p>

      <div className="card-container">
        {habits.length === 0 ? (
          <p>No habits found. Start by adding your first habit to achieve your goals!</p>
        ) : (
          habits.map((habit) => (
            <HabitCard key={habit.habit_id} habit={habit} onEdit={() => {}} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;






