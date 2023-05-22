const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const db = require('./config/db');

// Create an Express app
const app = express();

app.use(cors());

// Connect to the database
db.connect();

// Middleware to parse incoming requests as JSON
app.use(express.json());

// Register routes
app.use('/users', userRoutes);

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log('Server started on port ' + port);
});