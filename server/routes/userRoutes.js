const express = require('express');
const router = express.Router();
const userController = require('../controllers/apiController');

// Create a user
router.post('/users', userController.createUser);

// Get user details
router.get('/users/:id', userController.getUserDetails);

module.exports = router;
