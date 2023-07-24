const express = require('express');
const cors = require('cors'); // Import the cors package

const app = express();

// Enable CORS for the specified frontend URL (http://localhost:3000)
const frontendURL = 'http://localhost:3000';
const corsOptions = {
  origin: frontendURL,
};

app.use(cors(corsOptions));

// Define your routes here
// For example:
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
