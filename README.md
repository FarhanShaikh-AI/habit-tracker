HabitBuilt

Getting Started
This project is a Habit Tracker web application that allows users to track and manage their habits effectively. Follow the instructions below to set up and use the application.


Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js (v14 or later)
MySQL (or any compatible database)
Python (for the AI recommendation service)

Setting Up the Backend
Clone the Repository:


git clone https://github.com/yourusername/Habit-Tracker-AI-Integration.git

cd Habit-Tracker-AI-Integration/backend

npm install


Set Up the Database:

Create a new MySQL database.
Update the .env file in the backend directory with your database credentials:

DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name

npm run dev


Setting Up the AI Recommendation Service
Navigate to the AI Service Directory:

cd ai-service

Install Python Dependencies:

Create a virtual environment

python -m venv venv
`venv\Scripts\activate`

pip install -r requirements.txt

now redirect to cs recommendation and run this

python suggest_habits.py


Setting Up the Frontend
Navigate to the Frontend Directory:

cd frontend

npm install

npm start



Using the Application
Sign Up:

Click on the "Sign Up" button to create a new account.
Fill in your details and submit the form.
Log In:

After signing up, log in using your credentials.
Manage Habits:

Once logged in, you can add, edit, and delete habits.
View your progress and receive habit suggestions.
User Profile:

Access your profile to update your information.
Logout:

Click on the "Logout" button to exit your account.
Additional Features
Habit Suggestions: The application provides personalized habit suggestions based on your preferences.
Progress Tracking: Visualize your progress with interactive charts.
