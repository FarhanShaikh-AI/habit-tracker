import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Auth.css';  // Import the CSS file for styling

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData);
      const { token } = response.data;
      localStorage.setItem("token", token); // Save the token
      alert("Login successful! Redirecting to home...");
      navigate("/home"); // Redirect to home page
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed. Check your credentials.");
    }
  };
  

  return (
    <div className="auth-page">
      <h1 className="auth-title">BuildHabit</h1>
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit" className="auth-btn">Login</button>
        <button type="button" className="auth-btn-secondary" onClick={() => navigate('/signup')}>Sign Up</button>
      </form>
    </div>
  );
};

export default Login;
