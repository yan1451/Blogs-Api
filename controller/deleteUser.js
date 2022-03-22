const { Users } = require('../models');

const deleteUser = async (req, res) => {
  const { id } = req.dataToken; 

  const findUserDelete = await Users.findByPk(id);
  findUserDelete.destroy();

  return res.status(204).end();
};

module.exports = deleteUser;