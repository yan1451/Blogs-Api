const { Categories } = require('../models');

const createCategories = async (req, res) => {
  const { name } = req.body;

      const createdCategorie = await Categories.create({ name });

      return res.status(201).json(createdCategorie);
};

module.exports = {
  createCategories,
};