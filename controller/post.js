const { BlogPosts, PostsCategories, Categories } = require('../models');

const createPosts = async (req, res) => {
  const { title, categoryIds, content } = req.body;
  const exist = await Categories.findAll();
  const newMap = exist.map((a) => a.id);
  const foundId = categoryIds.every((i) => newMap.includes(i));  
  if (!foundId) return res.status(400).send({ message: '"categoryIds" not found' });
  const createPost = await BlogPosts.create({ 
    title,
    content,
    userId: req.dataToken.id,
    published: new Date().getTime(),
    updated: new Date().getTime(),
  });
  await Promise
  .all((categoryIds.map((id) => PostsCategories.create({ postId: createPost.id, categoryId: id }))
  ));
  return res.status(201).json(createPost);
};

module.exports = {
  createPosts,
};