const asyncHandler = require('express-async-handler');
const User = require('../models/UserSchema');

const registerUser = asyncHandler(async (req, res) => {
    const { fullname, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400).json({ message: 'User already registered' });
    } else {
        const user = await User.create({ fullname, email, password });
        res.status(201).json({ message: 'User registered successfully', user });
    }
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && user.password === password) {
        res.status(200).json({ message: 'Login successful', user });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

module.exports = { registerUser, loginUser };
