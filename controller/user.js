const { Users } = require('../models');
const jwtGenerator = require('../token/jwtGenerator');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

      const alreadyExist = await Users.findOne({ where: { email } });

      if (alreadyExist) return res.status(409).json({ message: 'User already registered' });

      const created = await Users.create({ displayName, email, password, image });

      const token = jwtGenerator({ id: created.id, password });

      return res.status(201).json({ token });
};

const login = async (req, res) => {
    const { email, password } = req.body;

    const validLogin = await Users.findOne({ where: { email, password } });
    console.log(validLogin);

    if (!validLogin) return res.status(400).send({ message: 'Invalid fields' });

    const token = jwtGenerator({ id: validLogin.id, password });

    return res.status(200).json({ token });
};

const getAll = async (req, res) => {
    const getUsers = await Users.findAll();
      return res.status(200).json(getUsers);
};

const getById = async (req, res) => {
  const user = await Users.findByPk(req.params.id);

  if (!user) return res.status(404).send({ message: 'User does not exist' });

  return res.status(200).json(user);
};

module.exports = { 
  create,
  login,
  getAll,
  getById,
};