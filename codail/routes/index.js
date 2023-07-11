const express = require('express');
const routes = express.Router();
const homeController = require('../controllers/homeControllers');

console.log('Routes was loaded');
routes.get('/', homeController.home);


module.exports = routes;