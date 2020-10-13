'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserMessage.belongsTo(models.User, {
        foreignKey: 'user_id'
      })

      UserMessage.belongsTo(models.Message, {
        foreignKey: 'message_id'
      })
    }
  };
  UserMessage.init({
    user_id: DataTypes.INTEGER,
    message_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserMessage',
  });
  return UserMessage;
};