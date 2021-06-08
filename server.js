//================DEPENDENCIES==============
// Add code to userModel.js to complete the model 18.1.13 REFERENCE
const path = require('path');
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 7540;

// const User = require("./userModel.js"); //make sure path is correct


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

// Create Data base & Routes======================================================
// db.Workout.create({ name: "My Workout" })
//   .then(dbWorkout => {
//     console.log(dbWorkout);
//   })
//   .catch(({message}) => {
//     console.log(message);
//   });

// app.post("/submit", ({body}, res) => {
//   db.Exercise.create(body)
//     .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/exercises", (req, res) => {
//   db.Book.find({})
//     .then(dbExercise => {
//       res.json(dbExercise);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/api/workouts", (req, res) => {
//   db.Workout.find({})
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/populated", (req, res) => {
//   db.Workout.find({})
//     .populate("exercises")
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

//=======================================================================
//ROUTES
app.use(routes);

//Listener
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});