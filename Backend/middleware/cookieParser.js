const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Use cookie-parser middleware to read cookies
app.use(cookieParser());

app.get('/protected', (req, res) => {
    const token = req.cookies.verification_token;
    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    // Verify the token (using jwt.verify or similar)
    jwt.verify(token, process.env.jwt_secret_key, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        res.status(200).json({ message: 'Authenticated', user: decoded.user });
    });
});