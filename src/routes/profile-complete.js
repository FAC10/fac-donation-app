module.exports = {
  method: 'GET',
  path: '/profile-complete',
  handler: (req, reply) => {
    reply.view('profile-complete');
  }
}
