const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN } = require('../config');

// generate a token
const genToken = (id) => {
    return jwt.sign({id}, ACCESS_TOKEN, {expiresIn: "2minutes"});
};

module.exports = genToken;