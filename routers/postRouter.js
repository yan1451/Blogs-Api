const express = require('express');
const { createPosts } = require('../controller/post');
const { titleValidator, 
  contentValidator, 
  categoryIdsValidator } = require('../middlewares/postsValidator');  
const auth = require('../middlewares/authenticator.middlewares');

const router = express.Router();

router.post('/', auth, titleValidator, contentValidator, categoryIdsValidator, createPosts);

module.exports = router;