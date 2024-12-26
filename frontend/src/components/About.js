import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="aboutus-container">
      <h1 className="aboutus-title">About BuildHabit</h1>
      
      <p className="aboutus-description">
        BuildHabit is designed to help you make lasting changes in your life by turning small actions into powerful habits. Whether you're looking to track your progress, get personalized reminders, or stay motivated, BuildHabit is here to help you on your journey to personal growth.
      </p>
      
      <section className="aboutus-section">
        <h2>Why BuildHabit?</h2>
        <ul>
          <li><strong>Transformative Habits:</strong> Start with small, consistent steps that lead to big changes.</li>
          <li><strong>Personal Growth:</strong> Achieve your goals through custom habit tracking and visual progress.</li>
          <li><strong>Stay Consistent:</strong> With timely reminders and smart notifications, you can stay on track.</li>
        </ul>
      </section>

      <section className="aboutus-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple – to help you build good habits, stay motivated, and become the best version of yourself, one day at a time.
        </p>
      </section>

      <section className="aboutus-cta">
        <h2>Start Building Habits Today</h2>
        <p>Begin your journey of personal growth. It all starts with the right habit, and we’re here to guide you every step of the way!</p>
      </section>
    </div>
  );
}

export default AboutUs;
