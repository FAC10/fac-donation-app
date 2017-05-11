module.exports = {
  method: 'GET',
  path: '/profile-select-relation',
  handler: (req, reply) => {
    reply.view('profile-select-relation', { data: req.auth.credentials });
  }
}
