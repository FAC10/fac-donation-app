module.exports = {
  method: 'GET',
  path: '/donation-first-time-user',
  handler: (req, reply) => {
    reply.view('donation-first-time-user');
  },
};
