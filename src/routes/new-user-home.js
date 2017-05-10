module.exports = {
  method: 'GET',
  path: '/new-user-home',
  handler: (req, reply) => {
    reply.view('new-user-home');
  }
}
