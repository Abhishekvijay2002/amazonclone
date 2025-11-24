const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id, role) => {
    if (!id || !role) {
        throw new Error("Missing ID or Role for token creation");
    }
    return jwt.sign({ id, role },process.env.JWT_SECRET, { expiresIn: maxAge });
};

module.exports = { createToken };