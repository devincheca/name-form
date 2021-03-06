const Path = require('path');
module.exports = {
  port: 4321,
  host: 'localhost',
  routes: {
    cors: true,
    files: {
      relativeTo: Path.join(__dirname, 'staticdist')
    }
  }
};
