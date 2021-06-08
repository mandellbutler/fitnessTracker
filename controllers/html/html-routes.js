const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, '../../public/views/index.html'))
});


router.get('/stats', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, '../../public/views/stats.html'))
});


router.get('/exercise', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, '../../public/views/exercise.html'))
});




module.exports = router;