const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: String,
      distance: Number,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number
    }
  ],
  totalDuration: {
    type: Number,
    default: 0
  },
});

// This creates our model from the above schema, using mongoose's model method
const Workout = mongoose.model("Workout", WorkoutSchema);

// Export the User model
module.exports = Workout;