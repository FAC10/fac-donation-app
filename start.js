const server = require('./src/server');

server.start((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Server is up and running on port', server.info.uri);
  }
});
