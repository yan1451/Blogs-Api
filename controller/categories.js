const { Categories } = require('../models');

const createCategories = async (req, res) => {
  const { name } = req.body;

      const createdCategorie = await Categories.create({ name });

      return res.status(201).json(createdCategorie);
};

const getAll = async (req, res) => {
  const findAllCategories = await Categories.findAll();
  return res.status(200).json(findAllCategories);
};

module.exports = {
  createCategories,
  getAll,
};