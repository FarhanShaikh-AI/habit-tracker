const mysql = require('mysql2');

const db = mysql.createConnection({
  MYSQLHOST: 'localhost',
  MYSQLUSER: 'root',
  MYSQLPASSWORD: 'Ayan8765@',
  MYSQLDATABASE: 'habit_tracker',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    process.exit(1); // Exit if database connection fails
  }
  console.log('Connected to database.');
});

module.exports = db;