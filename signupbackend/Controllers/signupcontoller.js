const asyncHandler = require('express-async-handler');
const Signup = require('../models/signupSchema');

// Handle user signup
const signupUser = asyncHandler(async (req, res) => {
    const { Fullname, email, password } = req.body;

    if (!Fullname || !email || !password) {
        res.status(400);
        throw new Error('Please provide all required fields');
    }

    // Create new user
    const user = await Signup.create({
        Fullname,
        email,
        password,   
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            Fullname: user.Fullname,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

module.exports = { signupUser };
