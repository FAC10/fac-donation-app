const hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');
const handlebars = require('./handlebars');
const routes = require('./routes');
require('env2')('./config.env');

const server = new hapi.Server();


server.connection({
  port: process.env.PORT || 4000,
});

server.register([inert, vision], (err) => {
  if (err) {
    throw err;
  }

  server.views(handlebars);
  server.route(routes);
});

module.exports = server;
