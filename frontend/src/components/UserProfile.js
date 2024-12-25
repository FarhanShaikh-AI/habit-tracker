import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to access this page.");
      navigate("/login");
    } else {
      fetchUserProfile();
    }
  }, [navigate]);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/', {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch user profile");
      }
  
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      alert('Failed to fetch user profile.');
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/users/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          name: userData.name,
          password: userData.password, // Only update name and password
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update profile");
      }
  
      alert('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile.');
    }
  };
  
  return (
    <div className="user-profile">
      <h2 style={{ color: 'black' }}>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            disabled={!isEditing}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            disabled
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            disabled={!isEditing}
            required
          />
        </div>
        <button type="button" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
        {isEditing && <button type="submit">Save Changes</button>}
      </form>
    </div>
  );
};

export default UserProfile;
