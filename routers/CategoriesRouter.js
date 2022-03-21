const express = require('express');
const { createCategories } = require('../controller/categories');
const auth = require('../middlewares/authenticator.middlewares');
const CategorieAuth = require('../middlewares/CategorieAuth');

const router = express.Router();

router.post('/', CategorieAuth, auth, createCategories);

module.exports = router;