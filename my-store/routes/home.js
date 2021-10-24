const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hi, this is my first server with Express');
});

module.exports = router;
