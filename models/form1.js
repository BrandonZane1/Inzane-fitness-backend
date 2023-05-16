const mongoose = require('mongoose');

const form1Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
});

const Form1Data = mongoose.model('Form1Data', form1Schema);

module.exports = Form1Data;