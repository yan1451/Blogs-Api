module.exports = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
  const validEmail = emailRegex.test(email);
  console.log(validEmail);

  if (!email) return res.status(400).send({ message: '"email" is required' });
  if (!validEmail) return res.status(400).send({ message: '"email" must be a valid email' });

  next();
};