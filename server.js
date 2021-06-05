// Add code to userModel.js to complete the model 18.1.13 REFERENCE

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 7540;

// const User = require("./userModel.js"); //make sure path is correct

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethoddb", { useNewUrlParser: true }); //change local host db name

// Routes 


//Listener
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
