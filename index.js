const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://christianfleischhauer007:rPzDVDi7YUgsN7vj@cluster0.wimqjvk.mongodb.net/';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your server or do other operations after successful connection.
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    // Handle the error appropriately, e.g., exit the application or retry.
  });
