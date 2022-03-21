module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Categories', {
    name: DataTypes.STRING,  
  }, {
    timestamps: false,
  });

  return Users; 
};