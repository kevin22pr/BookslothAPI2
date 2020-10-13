'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReplyLike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ReplyLike.belongsTo(models.User, {
        foreignKey: 'user_id'
      })

      ReplyLike.belongsTo(models.Reply, {
        foreignKey: 'reply_id'
      })
    }
  };
  ReplyLike.init({
    user_id: DataTypes.INTEGER,
    reply_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ReplyLike',
  });
  return ReplyLike;
};