import axios from 'axios';

const API_URL = 'http://localhost:5000/api/habits';
const API_BASE_URL = "https://web-production-26c6.up.railway.app/";
// Get all habits
export const getAllHabits = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Create a new habit
export const createHabit = async (habitData) => {
  const response = await axios.post(API_URL, habitData);
  return response.data;
};

// Update an existing habit
export const updateHabit = async (id, habitData) => {
  const response = await axios.put(`${API_URL}/${id}`, habitData);
  return response.data;
};

// Delete a habit
export const deleteHabit = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};


export const getHabitSuggestions = async () => {
  try {
    const response = await axios.get('/api/habit-suggestions');
    return response.data;
  } catch (error) {
    console.error('Error fetching habit suggestions:', error);
    return [];
  }
};