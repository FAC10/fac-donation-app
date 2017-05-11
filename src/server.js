const hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');
const hapiAuthCookie = require('hapi-auth-cookie');
const handlebars = require('./handlebars');
const routes = require('./routes');
require('env2')('./config.env');

const server = new hapi.Server();


server.connection({
  port: process.env.PORT || 4000,
});

server.register([inert, vision, hapiAuthCookie], (err) => {
  if (err) {
    throw err;
  }

  server.auth.strategy('base', 'cookie', 'required', {
    password: process.env.COOKIE_PASSWORD,
    cookie: 'FAC-donation-app-cookie',
    isSecure: false, // @TODO when on heroku change to true
    ttl: 6 * 30 * 24 * 60 * 60 * 1000,
    isSameSite: false,
  });

  server.views(handlebars);
  server.route(routes);
});

module.exports = server;
