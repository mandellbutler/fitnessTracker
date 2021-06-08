const router = require('express').Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./html');
// const workoutRoutes = require('./workout.js');

// router.use('/workouts', workoutRoutes);
router.use('/api', apiRoutes);
router.use('/', htmlRoutes)

module.exports = router;