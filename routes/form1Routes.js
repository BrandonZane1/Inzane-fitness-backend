const express = require("express");
const router = express.Router();
const Form1Data = require("../models/form1");

router.post("/", async (req, res) => {
  try {
    const { firstName } = req.body;

    if (!firstName) {
      return res.status(400).json({ error: "Please provide a first name" });
    }

    const newForm1Data = new Form1Data({ firstName });

    const savedForm1Data = await newForm1Data.save();

    console.log("Form data from form1 saved successfully:", savedForm1Data);

    res
      .status(200)
      .json({ message: "Form data from form1 saved successfully" });
  } catch (error) {
    console.error("Error saving form data from form1:", error);

    res.status(500).json({ error: "Failed to save form data from form1" });
  }
});

module.exports = router;
