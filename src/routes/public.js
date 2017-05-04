module.exports = {
  method: 'GET',
  path: '/{alpha*}',
  handler: {
    directory: {
      path: './public/',
    },
  },
};
