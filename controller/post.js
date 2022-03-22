const { BlogPosts, PostsCategories, Categories, Users } = require('../models');

const createPosts = async (req, res) => {
  const { title, categoryIds, content } = req.body;
  const exist = await Categories.findAll();
  const newMap = exist.map((element) => element.id);
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

const getAllPosts = async (req, res) => {
  const findAll = await BlogPosts.findAll({
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories' },
    ],    
  });
  return res.status(200).json(findAll);
};

module.exports = {
  createPosts,
  getAllPosts,
};