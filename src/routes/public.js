module.exports = {
  method: 'GET',
  path: '/{alpha*}',
  config: {
    auth: false,
    handler: {
      directory: {
        path: './public/',
      },
    },
  },
};
