module.exports = {
  method: 'GET',
  path: '/',
  config: {
    auth: false,
    handler: (req, reply) => {
      reply.view('index');
    },
  },
};
