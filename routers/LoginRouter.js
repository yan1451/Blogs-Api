const express = require('express');
const { login } = require('../controller/user');
const emailValidator = require('../middlewares/emailValidator');
const passwordMiddlewares = require('../middlewares/passwordMiddlewares');

const router = express.Router();

router.post('/', emailValidator, passwordMiddlewares, login);

module.exports = router;