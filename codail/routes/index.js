const express = require('express');
const routes = express.Router();
const homeController = require('../controllers/home-controllers');

routes.get('/', homeController.home);
routes.use('/users', require('./users'));


module.exports = routes;