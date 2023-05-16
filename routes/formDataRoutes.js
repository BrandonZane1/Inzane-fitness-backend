const express = require('express');
const router = express.Router();
const FormData = require('../models/FormData');

// Route for saving form data
router.post('/formdata', (req, res) => {
  const { checkbox1, checkbox2, checkbox3 } = req.body;

  const newFormData = new FormData({
    checkbox1,
    checkbox2,
    checkbox3
  });

  newFormData.save()
    .then((result) => {
      console.log('Form data saved successfully:', result);
      res.send('Form data saved successfully');
    })
    .catch((error) => {
      console.error('Error saving form data:', error);
      res.status(500).send('Error saving form data');
    });
});

module.exports = router;