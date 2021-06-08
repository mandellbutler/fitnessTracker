const router = require('express').Router();
const db = require("../../models");

//CREATE New Workout
router.post("/", (req, res) => {
  db.Workout.create(req.body)
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//READ all of the existing workouts
router.get("/", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
})


//UPDATE Workouts

//DELETE Workouts





module.exports = router;