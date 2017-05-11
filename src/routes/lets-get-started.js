module.exports = {
  method: 'GET',
  path: '/lets-get-started',
  handler: (req, reply) => {
    reply.view('donation-first-time-user');
  }
}
