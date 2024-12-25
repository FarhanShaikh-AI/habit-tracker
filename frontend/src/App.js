import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';  
import Home from './components/Home';  
import About from './components/About';  
import HabitsList from './components/HabitsList';
import Footer from './components/Footer';
import Signup from "./components/Signup";
import Login from "./components/Login";
import UserProfile from './components/UserProfile'; // Import the UserProfile component

import "./components/Auth.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to BuildHabit!</h1>

      <p className="home-description">
        Start your transformative journey today with BuildHabit – the platform that helps you achieve your personal growth goals by turning positive actions into lasting habits.
      </p>

      <section className="home-section">
        <h2>Why Choose BuildHabit?</h2>
        <ul>
          <li><strong>Small Actions, Big Changes:</strong> Transform your life one habit at a time with small, consistent actions.</li>
          <li><strong>Personalized Tracking:</strong> Tailor habits to your unique needs and goals, ensuring you stay on the right track.</li>
          <li><strong>Built for Your Lifestyle:</strong> Whether you're a morning person or a night owl, BuildHabit adapts to your rhythm.</li>
        </ul>
      </section>

      <section className="home-section">
        <h2>Key Features You'll Love</h2>
        <ul>
          <li><strong>Customizable Habits:</strong> Set goals that align with your vision for personal growth.</li>
          <li><strong>Progress Visualization:</strong> Track your journey and celebrate milestones with interactive charts.</li>
          <li><strong>Timely Reminders:</strong> Stay consistent with smart notifications and reminders.</li>
          <li><strong>Community Support:</strong> Connect with like-minded individuals and stay motivated together.</li>
        </ul>
      </section>

      <section className="home-section">
        <h2>Make Every Day Count</h2>
        <p>
          Success is built on consistency. Let BuildHabit help you transform your habits and, ultimately, your life. With every small effort, you're one step closer to becoming the best version of yourself.
        </p>
      </section>

      <section className="home-cta">
        <h2>Join BuildHabit Today</h2>
        <p>Take the first step toward building meaningful habits that will last a lifetime. Your future self will thank you!</p>

        <div className="home-buttons">
          <button onClick={() => navigate('/login')} className="home-btn">Log In</button>
          <button onClick={() => navigate('/signup')} className="home-btn signup-btn">Sign Up</button>
        </div>
      </section>
    </div>
  );
};

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/habits" element={<HabitsList />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />   
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} /> {/* Add this line */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;