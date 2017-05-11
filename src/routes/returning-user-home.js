module.exports = {
  method: 'GET',
  path: '/returning-user-home',
  handler: (req, reply) => {
    reply.view('returning-user-home');
  }
}
