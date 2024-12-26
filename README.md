# habit-tracker
habit-tracker

HabitBuilt
Welcome to the Habit Tracker & Motivator Web App! This application allows users to create, track, and manage their daily habits while receiving personalized habit suggestions powered by AI.



Installation

To set up the project locally, follow these steps:

Clone the repository:

git clone https://github.com/FarhanShaikh-AI/habit-tracker.git

cd habit-tracker

Install Backend Dependencies: Navigate to the backend directory and install the required packages:

cd backend

npm install


Set Up Database:

Create a MySQL database and configure the connection in backend/config/database.js using your database credentials.
Run the SQL scripts to create the necessary tables for users and habits.


Install Frontend Dependencies: 
Navigate to the frontend directory and install the required packages:


cd ../frontend

npm install


Run the Backend Server: 
Navigate back to the backend directory and start the server:

cd backend

node server.js

Run the Frontend Application: 
Open a new terminal, navigate to the frontend directory, and start the React app:

cd ../frontend

npm start


Usage


User Registration/Login: Navigate to the signup or login page to create an account or log in.
Habit Management: Once logged in, you can add, edit, or delete habits from your dashboard.
View Suggestions: The app will provide personalized habit suggestions based on your existing habits.

API Endpoints

User Endpoints
POST /api/auth/signup: Register a new user.
POST /api/auth/login: Log in an existing user.
GET /api/users: Get user profile information.
PUT /api/users: Update user profile details.

Habit Endpoints

POST /api/habits: Create a new habit.
GET /api/habits: Retrieve a list of habits for the authenticated user.
PUT /api/habits/:id: Update a specific habit.
DELETE /api/habits/:id: Delete a specific habit.


AI Service Endpoint
GET /generate-habit-suggestions: Get 3 suggested habits.




Table of Contents
Features
Technologies Used
Installation
Usage
API Endpoints
Contributing
License
Features
Habit Tracking System

Create new habits (daily, weekly, monthly).
Track habits and mark them as done/not done.
View progress through a simple progress bar or calendar view.
Each habit shows its status (Active, Inactive, Completed).
AI-Powered Habit Suggestions

Personalized habit suggestions based on user habits.
AI-based recommendations through a Flask API.
User Account System

User registration and login using JWT.
User dashboard displaying habit progress and suggestions.
Profile section for viewing and editing user details.
Technologies Used
Frontend: React.js
Backend: Node.js, Express.js, MySQL
AI Service: Flask, Scikit-learn, Pandas, Numpy
