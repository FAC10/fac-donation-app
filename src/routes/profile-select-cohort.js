module.exports = {
  method: 'POST',
  path: '/profile-select-cohort',
  handler: (req, reply) => {
    console.log(req.payload);
    reply.view('profile-select-cohort');
  }
}
