module.exports = {
  method: 'POST',
  path: '/names/saveName',
  options: { cors: true },
  handler: async (request, h) => {
    return { roundtrip: true };
  }
};