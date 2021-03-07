const { Sequelize } = require('sequelize');
const settings = require('../config/config.json')

function sequel() {
  const instanceSettings = {
    database: settings.development.database,
    username: settings.development.username,
    password: settings.development.password,
    options: {
      dialect: 'postgres'
    }
  };
  return new Sequelize(
    instanceSettings.database,
    instanceSettings.username,
    instanceSettings.password,
    instanceSettings.options
  );
}

module.exports = sequel;
