module.exports = {
  method: 'POST',
  path: '/names/getNames',
  options: { cors: true },
  handler: async (request, h) => {
    /*
    const response = h.response({
      names: [
        {
          firstName: 'testFirst',
          lastName: 'testLast',
        }
      ]
    })
    response.header('Access-Control-Allow-Origin', '*');
    return response;
    */
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
