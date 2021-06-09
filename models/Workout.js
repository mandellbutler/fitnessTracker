const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  exercises: [
    {
      day: {
        type: Date,
        default: Date.now
      },
      type: Schema.Types.ObjectId,
      ref: "Exercise"
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