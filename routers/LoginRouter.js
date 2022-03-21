const express = require('express');
const { login } = require('../controller/user');

const router = express.Router();

router.post('/', login);

module.exports = router;