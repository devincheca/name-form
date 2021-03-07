'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FirstLastNames extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  FirstLastNames.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    firstNameEnc: DataTypes.STRING,
    lastNameEnc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FirstLastNames',
  });
  return FirstLastNames;
};