const hapi = require('hapi');
const routes = require('./routes');

const server = new hapi.Server();


server.connection({
  host: process.env.HOSTNAME || 'localhost',
  port: process.env.PORT || 4000,
});

server.route(routes);

module.exports = server;
