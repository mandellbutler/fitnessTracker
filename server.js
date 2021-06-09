//================DEPENDENCIES==============
const path = require('path');
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 7540;


const app = express();
const routes = require('./controllers');

//MIDDLEWARE
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout",
  {
    useNewUrlParser: true
  }
);

//ROUTES
app.use(routes);

//Listener
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});