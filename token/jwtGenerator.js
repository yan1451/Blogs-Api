const jwt = require('jsonwebtoken');

const jwtConfig = { 
  expiresIn: '1d',
};

const SECRET = process.env.JWT_SECRET || '12331asd';

module.exports = (payload = {}) => jwt.sign({ data: payload }, SECRET, jwtConfig);