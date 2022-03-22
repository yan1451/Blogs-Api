const titleValidator = (req, res, next) => {
  const { title } = req.body;
  if (!title) return res.status(400).send({ message: '"title" is required' }); 
  next();
};

const contentValidator = (req, res, next) => {
  const { content } = req.body;
  if (!content) return res.status(400).send({ message: '"content" is required' });
  next(); 
};

const categoryIdsValidator = (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) return res.status(400).send({ message: '"categoryIds" is required' });
  next();
};

module.exports = { 
  titleValidator,
  contentValidator,
  categoryIdsValidator,
};
