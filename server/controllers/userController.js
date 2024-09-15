const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

// Fetch all users from the database
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Create a new user
const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
            name,
            email,
            passwordHash
        });

        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { getUsers, createUser };