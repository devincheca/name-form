module.exports = {
  method: 'POST',
  path: '/names/getNames',
  options: { cors: true },
  handler: async (request, h) => {
    return {
      names: [
        {
          firstName: 'testFirst',
          lastName: 'testLast',
        }
      ]
    };
  }
};
