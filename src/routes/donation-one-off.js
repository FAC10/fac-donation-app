module.exports = {
  method: 'GET',
  path: '/donation-one-off',
  handler: (req, reply) => {
    reply.view('donation-one-off', { data: req.auth.credentials });
  },
}
