module.exports = (req, res, next) => {
  const { email } = req.body;
  const emailR = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
  const validEmail = emailR.test(email);
  console.log(validEmail);

  if (email === '') res.status(400).send({ message: '"email" is not allowed to be empty' }); 
  if (!email) return res.status(400).send({ message: '"email" is required' });  
  if (!validEmail) return res.status(400).send({ message: '"email" must be a valid email' });

  next();
};