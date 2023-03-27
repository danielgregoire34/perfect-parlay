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


const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
