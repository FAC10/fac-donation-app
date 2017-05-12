module.exports = {
  method: 'GET',
  path: '/donation-regular',
  handler: (req, reply) => {
    reply.view('donation-regular', { data: req.auth.credentials });
  }
}
