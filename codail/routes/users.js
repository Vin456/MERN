const express = require('express');
const router = express.Router();

const userController = require('../controllers/users-controllers');
const postsController = require('../controllers/posts-controllers');

router.get('/sign-in', userController.signIn);
router.get('/sign-up', userController.signUp);
router.get('/profile', userController.profile);
router.get('/posts', postsController.posts);


router.post('/create', userController.create);
router.post('/create-session', userController.createSession);


module.exports = router;