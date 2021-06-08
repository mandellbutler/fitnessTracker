const router = require('express').Router();

const homeRoutes = require('../home-routes.js');
const workoutRoutes = require('./workoutRoutes.js');
const exerciseRoutes = require('./exerciseRoutes.js');



router.use('/', homeRoutes);
router.use('/workouts', workoutRoutes);
router.use('/exercise', exerciseRoutes);



module.exports = router;