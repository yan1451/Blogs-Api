const express = require('express');
const { createPosts, getAllPosts, findById, EditPost } = require('../controller/post');
const { titleValidator, 
  contentValidator, 
  categoryIdsValidator, 
  notAutorized } = require('../middlewares/postsValidator');  
const auth = require('../middlewares/authenticator.middlewares');

const router = express.Router();

router.post('/', auth, titleValidator, contentValidator, categoryIdsValidator, createPosts);

router.get('/', auth, getAllPosts);

router.get('/:id', auth, findById);

router.put('/:id', auth, titleValidator, contentValidator, notAutorized, EditPost);

module.exports = router;