const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: 'http://10.100.0.56:3000', // Replace this with the frontend URL (http://10.100.0.56:3000)
}));

// Sample user data
const users = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
];

// GET /api/users - Get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// POST /api/users - Add a new user
app.post('/api/users', (req, res) => {
  const { id, name, age } = req.body;
  if (!id || !name || !age) {
    return res.status(400).json({ error: 'Please provide valid user data.' });
  }

  const newUser = { id, name, age };
  users.push(newUser);
  res.status(201).json(newUser);
});

// GET /api/users/:id - Get a user by ID
app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  res.json(user);
});

// PUT /api/users/:id - Update a user by ID
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const userIndex = users.findIndex((user) => user.id === parseInt(id));

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found.' });
  }

  users[userIndex].name = name || users[userIndex].name;
  users[userIndex].age = age || users[userIndex].age;

  res.json(users[userIndex]);
});

// DELETE /api/users/:id - Delete a user by ID
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id === parseInt(id));

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found.' });
  }

  const deletedUser = users.splice(userIndex, 1);
  res.json(deletedUser[0]);
});

const PORT = 5000; // or any other port you want to use
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
