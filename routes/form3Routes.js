const express = require('express');
const router = express.Router();
const Form3Data = require('../models/form3');

router.post('/', async (req, res) => {
  try {
    const { checkbox1, checkbox2, checkbox3, checkbox4, checkbox5, checkbox6 } = req.body;

    // Function to determine the specific field value based on the checkbox status
    const getSpecificFieldValue = (checkbox) => {
      if (checkbox) {
        // Return the desired string value based on the checkbox
        // Modify this section to assign different string values for each checkbox
        switch (checkbox) {
          case checkbox1:
            return 'all';
          case checkbox2:
            return  'barbell'
          case checkbox3:
            return 'dumbbell';
          case checkbox4:
            return 'kettlebell';
          case checkbox5:
            return 'smith machine';
          case checkbox6:
            return 'body weight';
          default:
            return 0;
        }
      } else {
        return 0;
      }
    };

    // Create a new Form3Data instance and set the checkbox values
    const newForm3Data = new Form3Data({
      checkbox1: getSpecificFieldValue(checkbox1),
      checkbox2: getSpecificFieldValue(checkbox2),
      checkbox3: getSpecificFieldValue(checkbox3),
      checkbox4: getSpecificFieldValue(checkbox4),
      checkbox5: getSpecificFieldValue(checkbox5),
      checkbox6: getSpecificFieldValue(checkbox6),
    });

    // Save the form data to the database
    const savedForm3Data = await newForm3Data.save();

    console.log('Form data from form3 saved successfully:', savedForm3Data);

    // Send a success response
    res.status(200).json({ message: 'Form data from form3 saved successfully' });
  } catch (error) {
    console.error('Error saving form data from form3:', error);
    // Send an error response
    res.status(500).json({ error: 'Failed to save form data from form3' });
  }
});

router.get('/', async (req, res) => {
    try {
      const form3Data = await Form3Data.find();
      res.status(200).json(form3Data);
    } catch (error) {
      console.error('Error retrieving Form3 data:', error);
      res.status(500).json({ error: 'Failed to retrieve Form3 data' });
    }
  });

module.exports = router;