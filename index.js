const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const formDataRoutes = require('./routes/formDataRoutes');
const cors = require('cors');
const app = express();
const port = 5000;

mongoose
  .connect('mongodb://localhost:27017/inZaneFitness', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to inZaneFitness database');
  })
  .catch((err) => {
    console.error('Error connecting to inZaneFitness database:', err);
  });

app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/formdata', formDataRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
