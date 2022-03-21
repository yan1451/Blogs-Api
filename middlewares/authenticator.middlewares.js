const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {  
  const token = req.headers.authorization;
  console.log(token);

  if (!token) return res.status(401).json({ message: 'Token not found' });

   try {    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.dataToken = decoded.data;

    next();
     } catch (error) {  
       console.log(error.message);    
        return res.status(401).json({ message: 'Expired or invalid token' });
       }    
};