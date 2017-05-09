module.exports = {
  method: 'GET',
  path: '/profile-select-cohort',
  handler: (req, reply) => {
    reply.view('profile-select-cohort');
  }
}
