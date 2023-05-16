const mongoose = require('mongoose');

const form3Schema = new mongoose.Schema({
  checkbox1: {
    type: String,
    required: true,
  },
  checkbox2: {
    type: String,
    required: true,
  },
  checkbox3: {
    type: String,
    required: true,
  },
  checkbox4: {
    type: String,
    required: true,
  },
  checkbox5: {
    type: String,
    required: true,
  },
  checkbox6: {
    type: String,
    required: true,
  },
});

const Form3Data = mongoose.model('Form3Data', form3Schema);

module.exports = Form3Data;