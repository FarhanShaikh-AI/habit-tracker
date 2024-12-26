import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Auth.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
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
      await axios.post("http://localhost:5000/api/auth/signup", formData);
      alert("Signup successful! Redirecting to login...");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Signup failed", error);
      alert("Signup failed. Try again.");
    }
  };

  return (
    <div className="auth-page">
      <h1 className="auth-title">BuildHabit</h1>
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Sign Up</h2>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit" className="auth-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
