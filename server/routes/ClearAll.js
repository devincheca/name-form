const { DataTypes } = require('sequelize');
const sequel = require('../helpers/sequel');
const FirstLastNames = require('../models/firstlastnames')(sequel(), DataTypes)

module.exports = {
  method: 'POST',
  path: '/names/clearAll',
  options: { cors: true },
  handler: async (request, h) => {
    const names = await FirstLastNames.destroy({
      where: {},
      truncate: true
    });
    return names;
  }
};
