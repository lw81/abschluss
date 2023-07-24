const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware to allow requests from 'http://10.100.0.56'
app.use(cors({
  origin: 'http://10.100.0.56',
}));

// Define your server-side routes and logic here...

// Example server-side route
app.get('/api/data', (req, res) => {
  const data = { message: 'Hello from the server!' };
  res.json(data);
});

// Serve the client-side code (HTML, CSS, JavaScript)
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Client-side code using Fetch API
document.getElementById('fetchDataBtn').addEventListener('click', () => {
  fetch('http://10.100.0.56:5000/api/data', {
    method: 'GET',
    mode: 'cors',
  })
    .then(response => response.json())
    .then(data => {
      // Process the data received from the server
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
