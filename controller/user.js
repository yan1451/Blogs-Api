const { Users } = require('../models');
const jwtGenerator = require('../token/jwtGenerator');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

      const alreadyExist = await Users.findOne({ where: { email } });

      if (alreadyExist) return res.status(409).json({ message: 'User already registered' });

      const created = await Users.create({ displayName, email, password, image });

      const token = jwtGenerator({ id: created.id, displayName });

      return res.status(201).json({ token });
};

module.exports = create;