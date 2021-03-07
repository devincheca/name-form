const Hapi = require('@hapi/hapi');
const HapiServerConfig = require('./HapiServerConfig.js');
const Routes = require('./routes/Routes.js');

const init = async () => {
    const server = Hapi.server(HapiServerConfig);
    Routes.map(route => server.route(route));
    await server.start();
    console.log('Server running on port 4321');
};

init();
