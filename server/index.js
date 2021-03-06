const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const HapiServerConfig = require('./HapiServerConfig.js');
const Routes = require('./routes/Routes.js');

const init = async () => {
    const server = Hapi.server(HapiServerConfig);
    await server.register(Inert);
    Routes.map(route => server.route(route));
    await server.start();
    console.log('Server running on port 3000');
};

init();
