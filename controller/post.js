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

const findById = async (req, res) => {
  const { id } = req.params;
  const alreadyExist = await BlogPosts.findByPk(id);

  if (!alreadyExist || alreadyExist === null) { 
    return res.status(404).send({ message: 'Post does not exist' });
  }
  const findId = await BlogPosts.findByPk(id, {
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories' },
    ],    
  });
  return res.status(200).json(findId);
};

const EditPost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;  
  const findPost = await BlogPosts.findByPk(id, {
    include: [ 
      { model: Categories, as: 'categories', exclude: PostsCategories,
    }],

  });

  if (findPost.userId !== req.dataToken.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  await findPost.set({
    title,
    content,
  });
await findPost.save();

  res.status(200).json(findPost);
};

const DeletePost = async (req, res) => {
  const { id } = req.params;

  const alreadyExist = await BlogPosts.findByPk(id);
  if (!alreadyExist || alreadyExist === null) { 
    return res.status(404).send({ message: 'Post does not exist' });
  }

  const findPost = await BlogPosts.findByPk(id);

  if (findPost.userId !== req.dataToken.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  await findPost.destroy({
    force: true });

    return res.status(204).end();
};

module.exports = {
  createPosts,
  getAllPosts,
  findById,
  EditPost,
  DeletePost,
};