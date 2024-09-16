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
  
    // Password validation
    const passwordPattern = /^(?=.*[!@#\$%\^&\*])[A-Za-z\d!@#\$%\^&\*]{8,}$/;
    if (!password.match(passwordPattern)) {
      return res.status(400).json({ message: 'Password must be at least 8 characters long and contain at least one special character' });
    }
  
    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);
  
      // Generate a unique 7-8 digit random userId
      let userId;
      let userExists;
      do {
        userId = Math.floor(Math.random() * 9000000) + 1000000; // Generate a 7-8 digit number
        userExists = await User.findOne({ userId });
      } while (userExists); // Keep generating until it's unique
  
      // Create a new user
      const newUser = new User({
        name,
        email,
        passwordHash,
        userId
      });
  
      await newUser.save();
  
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error.message);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update user details
const updateUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update the user's fields if provided
        user.name = name || user.name;
        user.email = email || user.email;

        // If password is provided, hash it and update
        if (password) {
            const passwordPattern = /^(?=.*[!@#\$%\^&\*])[A-Za-z\d!@#\$%\^&\*]{8,}$/;
            if (!password.match(passwordPattern)) {
                return res.status(400).json({ message: 'Password must be at least 8 characters long and contain at least one special character' });
            }

            const salt = await bcrypt.genSalt(10);
            user.passwordHash = await bcrypt.hash(password, salt);
        }

        const updatedUser = await user.save();
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      await user.deleteOne(); // This replaces the .remove() method
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = { getUsers, createUser, updateUser, deleteUser };