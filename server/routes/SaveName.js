const FirstLastNames = require('../models/firstlastnames');

module.exports = {
  method: 'POST',
  path: '/names/saveName',
  options: { cors: true },
  handler: async (request, h) => {
    const newName = await FirstLastNames.create({
      firstName: request.payload.firstName,
      lastName: request.payload.lastName,
      firstNameEnc: request.payload.firstNameEnc,
      lastNameEnc: request.payload.lastNameEnc
    });
    return { roundtrip: true };
  }
};