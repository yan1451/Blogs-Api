const express = require('express');
const { create, getAll, getById } = require('../controller/user');
const emailValidator = require('../middlewares/emailValidator');
const DisplayNameSize = require('../middlewares/DisplayNameSize');
const passwordMiddlewares = require('../middlewares/passwordMiddlewares');
const auth = require('../middlewares/authenticator.middlewares');
const deleteUser = require('../controller/deleteUser');

const router = express.Router();

router.post('/', DisplayNameSize, emailValidator, passwordMiddlewares, create);

router.get('/', auth, getAll);

router.get('/:id', auth, getById);

router.delete('/me', auth, deleteUser);
module.exports = router;