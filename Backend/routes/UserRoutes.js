const express=require("express")
const users = require('../models/user_model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const userRoute=express.Router()
const saltrounds = 10

//!Get the user details
userRoute.get('/users', async(req, res) => {
    try {
        const result = await users.find({},{password:0});
        res.status(200).json({message: "All users", result});
    } catch (error) {
        res.status(500).json({message: "Internal server error", error: error});
    }
});
//!Creating a user
userRoute.post('/create', async (req, res) => {
    const { name, email, mobilenumber, course, role, password, timestamps } = req.body;
    
    try {
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            res.status(200).json({ message: 'User already exists' });
        } else {
            const hashedPassword = await bcrypt.hash(password, saltrounds);
            const result = await users.insertOne({
                name, email, mobilenumber, course, role, password: hashedPassword, timestamps
            });
            res.status(200).json({ message: 'User details saved successfully', result });
        }
    } catch (error) {
        // Log the error more clearly for debugging purposes
        console.error('Error during registration:', error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});


//!Logging in
userRoute.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const currUser = await users.findOne({ email: email });
        console.log(currUser)
        if (!currUser) {
            return res.status(404).json({ message: 'User not Found' });
        } else {
            console.log('Password from frontend:', password);
            console.log('Stored hashed password:', currUser);

              bcrypt.compare(password, currUser.password, (err, result) => {
                if (err) {
                    return res.status(200).json({ message: 'Error comparing password' });
                }

                const token = jwt.sign({ user: currUser }, process.env.jwt_secret_key, { expiresIn: '3hr' });

                // Send token as a cookie
                res.cookie('verification_token', token, {
                    httpOnly: true,
                    sameSite: 'Strict',
                    maxAge: 3 * 60 * 60 * 1000,
                });

                res.status(200).json({ message: 'Logged in Successfully', currUser: { name: currUser.name },token});
            });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
});



module.exports=userRoute