'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MessageLike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MessageLike.belongsTo(models.User, {
        foreignKey: 'user_id'
      })

      MessageLike.belongsTo(models.Message, {
        foreignKey: 'message_id'
      })
    }
  };
  MessageLike.init({
    user_id: DataTypes.INTEGER,
    message_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MessageLike',
  });
  return MessageLike;
};