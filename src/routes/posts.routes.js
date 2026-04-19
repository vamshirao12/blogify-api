const express = require('express');
const router = express.Router();

router.get('/posts', (req, res) => {
  res.json({ message: 'List of posts' });
});

module.exports = router;