module.exports = {
  method: 'POST',
  path: '/donation-first-time-user',
  handler: (req, reply) => {
    reply.view('donation-first-time-user');
  },
};
