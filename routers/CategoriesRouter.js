const express = require('express');
const { createCategories, getAll } = require('../controller/categories');
const auth = require('../middlewares/authenticator.middlewares');
const CategorieAuth = require('../middlewares/CategorieAuth');

const router = express.Router();

router.post('/', CategorieAuth, auth, createCategories);

router.get('/', auth, getAll);

module.exports = router;