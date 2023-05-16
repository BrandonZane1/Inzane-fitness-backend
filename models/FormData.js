const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  checkbox1: Boolean,
  checkbox2: Boolean,
  checkbox3: Boolean,
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;