// index.js (or app.js)

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Load environment variables from .env file (optional but recommended)
require('dotenv').config();

// MongoDB connection
const mongoURI = process.env.MONGO_URL; // Use the environment variable for the MongoDB connection URL

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your server or do other operations after successful connection.
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    // Handle the error appropriately, e.g., exit the application or retry.
  });
