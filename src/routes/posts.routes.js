const express = require('express');
const router = express.Router();
// 1. Import the controller
const postController = require('../controllers/posts.controller.js');

// 2. Point the route to the controller function
router.get('/posts', postController.getAllPosts);

module.exports = router;