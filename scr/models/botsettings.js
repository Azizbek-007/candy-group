'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class botsettings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    } 
  } 
  botsettings.init({
    startHour: DataTypes.INTEGER,
    endHour: DataTypes.INTEGER,
    startMinute: DataTypes.INTEGER,
    endMinute: DataTypes.INTEGER,
    chat_id: DataTypes.INTEGER,
    ChecksendMinut: DataTypes.INTEGER,
    ChecksendHour: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'botsettings',
  });
  return botsettings;
};