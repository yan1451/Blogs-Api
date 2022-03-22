module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {   
    createdAt: 'published',  
    updatedAt: 'updated',
  });
   
  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.Users, { foreignKey: 'userId', as: 'User' });
  };

  return BlogPosts;
};