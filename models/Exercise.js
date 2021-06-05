const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: { type: String },
  name: String,
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number
});

const Exercise = mongoose.model("Excercise", ExerciseSchema);

module.exports = Exercise;
