const express = require('express');
const router = express.Router();

const profileController = require('../controllers/users-controllers');
const postsController = require('../controllers/posts-controllers');

router.get('/profile', profileController.profile);
router.get('/posts', postsController.posts);

module.exports = router;