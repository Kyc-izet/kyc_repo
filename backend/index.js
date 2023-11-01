const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Collection = require('./models/mongo'); // Assuming this is your model

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://adityathakur6199:mern123@cluster0.tx7zc2l.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.post('/register', async (req, res) => {
  try {
    const { name, email, mobileno } = req.body;

    const data = new Collection({
      name: name,
      email: email,
      mobileno: mobileno
    });

    // Save the data to MongoDB
    await data.save();

    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error registering:', error);
    res.status(500).json({ message: 'Error registering' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});