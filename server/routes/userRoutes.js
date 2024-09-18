const express = require('express');
const { getUsers, createUser, updateUser, deleteUser, loginUser } = require('../controllers/userController');
const { check } = require('express-validator');
const router = express.Router();

// GET all users
router.get('/', getUsers);

// Create a new user (SignUp)
router.post('/register', createUser);

// Login user
router.post('/login', loginUser);

// Get all users (for testing)
router.get('/users', getUsers);

// POST create a new user
router.post(
    '/', 
    [
      check('name', 'Name is required').not().isEmpty(),
      check('email', 'Please include a valid email').isEmail(),
      check('password', 'Password must be at least 8 characters and contain a special character')
        .isLength({ min: 8 })
        .matches(/[!@#$%^&*(),.?":{}|<>]/)  // Ensures a special character is present
        .not()
        .matches(/['"\\;]/),  // Avoid characters that could lead to SQL injection
    ],
    createUser
);

// PUT update user details
router.put('/:id', 
    [
      check('name', 'Name is required').not().isEmpty(),
      check('email', 'Please include a valid email').isEmail(),
      check('password', 'Password must be at least 8 characters and contain a special character')
        .isLength({ min: 8 })
        .matches(/[!@#$%^&*(),.?":{}|<>]/)
        .not()
        .matches(/['"\\;]/),  
    ],
    updateUser
);

// DELETE remove a user
router.delete('/:id', deleteUser);

module.exports = router;