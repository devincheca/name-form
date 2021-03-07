const { DataTypes } = require('sequelize');
const sequel = require('../helpers/sequel');
const FirstLastNames = require('../models/firstlastnames')(sequel(), DataTypes)

module.exports = {
  method: 'POST',
  path: '/names/getNames',
  options: { cors: true },
  handler: async (request, h) => {
    const names = await FirstLastNames.findAll();
    return names;
  }
};
