const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();

// Enable CORS for all routes
app.use(cors());

// Define your backend routes here (this is just an example)
app.get('/api/data', (req, res) => {
  const data = { message: 'This is data from the backend!' };
  res.json(data);
});

// ... Your other backend routes ...

const PORT = 5000; // or any other port you are using
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
