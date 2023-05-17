const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const form1Routes = require("./routes/form1routes");
const form2Routes = require("./routes/form2Routes");
const form3Routes = require("./routes/form3Routes");

const app = express();
const port = 5000;

mongoose
  .connect("mongodb://localhost:27017/inZaneFitness", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to inZaneFitness database");
  })
  .catch((err) => {
    console.error("Error connecting to inZaneFitness database:", err);
  });

app.use(express.json());
app.use(cors());

app.use("/api/form1", form1Routes);
app.use("/api/form2", form2Routes);
app.use("/api/form3", form3Routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
