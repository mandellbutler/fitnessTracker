const router = require('express').Router();
const db = require("../../models");


//READ all of the existing workouts
router.get("/", (req, res) => {
  db.Workout.aggregate([
    {
      $set: {
        totalDuration: {
          $sum: '$exercises.duration'
        }
      }
    }])
    .then(dbWorkout => {
      console.log(dbWorkout)
      res.status(200).json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})

//Get workout range data
router.get('/range', (req, res) => {
  db.Workout.aggregate([
    {
      $set: {
        totalDuration: {
          $sum: '$exercises.duration'
        }
      }
    },
    {
      $sort: { day: -1 }
    },
    { $limit: 7 }
  ])
    .then((dbWorkout) => {
      res.json(dbWorkout.reverse())
    })
    .catch((err) => {
      res.json(err)
    })
})


//CREATE New Workout
router.post("/", (req, res) => {
  db.Workout.create(req.body)
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.status(200).json(dbWorkout);
    })
    .catch(err => {
      console.log(err)
      res.status(400).json(err);
    });
});

//UPDATE Workouts
router.put('/:id', (req, res) => {
  db.Workout.updateOne(
    { _id: req.params.id },
    { $push: { exercises: req.body } }
  )
    .then((dbWorkout) => {
      console.log(dbWorkout)
      res.json(dbWorkout)
    })
    .catch((err) => res.json(err))
})

module.exports = router;