const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route for user registration
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    const userWithoutPassword = result.toObject();
    delete userWithoutPassword.password;
    res.send(userWithoutPassword);
    console.log('User registered successfully:', userWithoutPassword);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Error registering user');
  }
});

module.exports = router;