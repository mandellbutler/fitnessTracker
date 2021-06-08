const router = require('express').Router();
const db = require("../../models");

//CREATE New Workout
router.post("/exercise", (req, res) => {
  db.Exercise.create(req.body)
    .then(dbExercise => {
      console.log(dbExercise);
      res.json(dbExercise);
    })
    .catch(err => {
      res.json(err);
    });
});

//READ all of the existing workouts
router.get("/exercise", (req, res) => {
  db.Exercise.find({})
  console.log(Exercise)
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.json(err);
    });
})


//UPDATE Workouts

//DELETE Workouts





module.exports = router;