const mongoose = require('mongoose');

const form2DataSchema = new mongoose.Schema({
  checkbox1: Number,
  checkbox2: Number,
  checkbox3: Number,
  checkbox4: Number,
  checkbox5: Number,
  checkbox6: Number,
  checkbox7: Number,
});

module.exports = mongoose.model('Form2Data', form2DataSchema);