const express = require('express');
const cors = require('cors');
const app = express();

// Allow requests from 'http://10.100.0.56'
app.use(cors({
  origin: 'http://10.100.0.56',
}));

// Rest of your server code...

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
