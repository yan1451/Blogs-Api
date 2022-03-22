const express = require('express');
const { createPosts, getAllPosts, findById, EditPost, DeletePost } = require('../controller/post');
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

router.delete('/:id', auth, DeletePost);

module.exports = router;