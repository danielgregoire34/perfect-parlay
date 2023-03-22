const jwt = require('jsonwebtoken');

const createToken = (user) => {
    const token = jwt.sign({ userId: user.id }, process.env.SECRET, { expiresIn: '1h' });
    return token;
};

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        return decoded;
    } catch (err) {
        return null;
    }
};

module.exports = { createToken, verifyToken };