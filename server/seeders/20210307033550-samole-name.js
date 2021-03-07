'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('FirstLastNames', [{
      firstName: 'Kevin',
      lastName: 'Truong',
      firstNameEnc: 'veikn',
      lastNameEnc: 'uorntg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('FirstLastNames', null, {});
  }
};
