const express = require('express');
const router = express.Router();
// 1. Import the controller
const postController = require('../controllers/posts.controller.js');

// 2. Point the route to the controller function
router.get('/posts', postController.getAllPosts);

// This handles GET /api/v1/posts/:postId
router.get('/posts/:postId', postController.getPostById);

module.exports = router;