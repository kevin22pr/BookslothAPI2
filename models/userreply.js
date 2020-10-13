'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserReply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserReply.belongsTo(models.User, {
        foreignKey: 'user_id'
      })

      UserReply.belongsTo(models.Reply, {
        foreignKey: 'reply_id'
      })
    }
  };
  UserReply.init({
    user_id: DataTypes.INTEGER,
    reply_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserReply',
  });
  return UserReply;
};