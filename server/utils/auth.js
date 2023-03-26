const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');
import axios from 'axios';


const app = express();

// Define a POST endpoint to handle user authentication
app.post('/api/authenticate', async (req, res) => {
  const { username, password } = req.body;

  // Retrieve the user from the database
  const user = await User.findOne({ username });

  if (!user) {
    // Return an error if the user is not found
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Compare the provided password with the hashed password from the database
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    // Return an error if the password does not match
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate a JWT and send it back to the client
  const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
  res.json({ token });
});


const createToken = (user) => {
    const token = jwt.sign({ userId: user.id }, process.env.SECRET, { expiresIn: '1h' });
    return token;
};

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        return decoded;
    } catch (err) {
        return null;
    }
};

// Define a POST endpoint to handle user registration
app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
  
    // Hash and salt the password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    // Save the user to the database
    const user = new User({ username, password: hashedPassword });
    await user.save();
  
    // Generate a JWT and send it back to the client
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
    res.json({ token });
  });
  
module.exports = { createToken, verifyToken };