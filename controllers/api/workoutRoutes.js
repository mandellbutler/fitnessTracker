const router = require('express').Router();
const db = require("../../models");


//READ all of the existing workouts
router.get("/", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.status(200).json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})
//Get workout range data
router.get("/range", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.status(200).json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})


//CREATE New Workout
router.post("/", (req, res) => {
  db.Workout.create(req.body)
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.status(200).json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//UPDATE Workouts
router.put("/:id", ({ params, body }, res) => {
  db.Workout.findOneAndUpdate(
    {
      _id: params.id
    },
    {
      $push: { exercises: body }
    },
    {
      upsert: true,
      useFindandModify: false
    },
    updatedWorkout => {
      res.json(updatedWorkout);
    }
  )
});

module.exports = router;