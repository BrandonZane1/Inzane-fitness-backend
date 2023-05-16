const express = require('express');
const router = express.Router();
const Form2Data = require('../models/form2');

// Define the mapping object for checkbox numbers
const checkboxNumbers = {
    checkbox1: 1,
    checkbox2: 2,
    checkbox3: 3,
    checkbox4: 4,
    checkbox5: 5,
    checkbox6: 6,
    checkbox7: 7,
  };
  
  router.post('/', async (req, res) => {
    try {
      const { checkbox1, checkbox2, checkbox3, checkbox4, checkbox5, checkbox6, checkbox7 } = req.body;
  
      // Convert checkbox values to numbers
      const convertedCheckbox1 = checkbox1 ? checkboxNumbers.checkbox1 : 0;
      const convertedCheckbox2 = checkbox2 ? checkboxNumbers.checkbox2 : 0;
      const convertedCheckbox3 = checkbox3 ? checkboxNumbers.checkbox3 : 0;
      const convertedCheckbox4 = checkbox4 ? checkboxNumbers.checkbox4 : 0;
      const convertedCheckbox5 = checkbox5 ? checkboxNumbers.checkbox5 : 0;
      const convertedCheckbox6 = checkbox6 ? checkboxNumbers.checkbox6 : 0;
      const convertedCheckbox7 = checkbox7 ? checkboxNumbers.checkbox7 : 0;
  
      // Create a new Form2Data instance and set the checkbox values
      const newForm2Data = new Form2Data({
        checkbox1: convertedCheckbox1,
        checkbox2: convertedCheckbox2,
        checkbox3: convertedCheckbox3,
        checkbox4: convertedCheckbox4,
        checkbox5: convertedCheckbox5,
        checkbox6: convertedCheckbox6,
        checkbox7: convertedCheckbox7,
      });
  
      // Save the form data to the database
      const savedForm2Data = await newForm2Data.save();
  
      console.log('Form data from form2 saved successfully:', savedForm2Data);
  
      // Send a success response
      res.status(200).json({ message: 'Form data from form2 saved successfully' });
    } catch (error) {
      console.error('Error saving form data from form2:', error);
      // Send an error response
      res.status(500).json({ error: 'Failed to save form data from form2' });
    }
  });
  

router.get('/', async (req, res) => {
    try {
      const form2Data = await Form2Data.find();
      res.status(200).json(form2Data);
    } catch (error) {
      console.error('Error retrieving Form2 data:', error);
      res.status(500).json({ error: 'Failed to retrieve Form2 data' });
    }
  });

module.exports = router;