module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {   
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, { timestamps: false });
  PostsCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(
      models.Categories, 
      { foreignKey: 'postId', otherKey: 'categoryId', through: PostsCategories, as: 'categories' },
      );    
      models.Categories.belongsToMany(
        models.BlogPosts, 
        { foreignKey: 'categoryId', 
        otherKey: 'postId', 
        through: PostsCategories, 
        as: 'categories' },
        );
  };

  return PostsCategories;
};