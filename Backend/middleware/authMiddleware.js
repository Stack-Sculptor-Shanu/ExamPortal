const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.cookies.verification_token;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized, please log in." });
    }

    jwt.verify(token, process.env.jwt_secret_key, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Invalid or expired token." });
        }
        req.user = decoded.user;
        next();
    });
};
module.exports = authenticate