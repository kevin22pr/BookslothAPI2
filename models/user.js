'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.UserMessage, {
        foreignKey: 'user_id'
      })

      User.hasMany(models.UserReply, {
        foreignKey: 'user_id'
      })

      User.hasMany(models.MessageLike, {
        foreignKey: 'user_id'
      })

      User.hasMany(models.ReplyLike, {
        foreignKey: 'user_id'
      })
    }
  };
  User.init({
    full_name: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};