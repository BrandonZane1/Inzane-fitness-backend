const express = require('express');
const router = express.Router();
const Form1Data = require('../models/form1'); // Assuming you have a model for Form1Data

router.post('/', async (req, res) => {
  try {
    const { firstName } = req.body;

    // Validate the input data
    if (!firstName) {
      return res.status(400).json({ error: 'Please provide a first name' });
    }

    // Create a new Form1Data instance and set the firstName property
    const newForm1Data = new Form1Data({ firstName });

    // Save the form data to the database
    const savedForm1Data = await newForm1Data.save();

    console.log('Form data from form1 saved successfully:', savedForm1Data);

    // Send a success response
    res.status(200).json({ message: 'Form data from form1 saved successfully' });
  } catch (error) {
    console.error('Error saving form data from form1:', error);
    // Send an error response
    res.status(500).json({ error: 'Failed to save form data from form1' });
  }
});

module.exports = router;