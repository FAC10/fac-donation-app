const postdata = require('../database/postData.js');

module.exports = {
  method: 'POST',
  path: '/profile-complete',
  handler: (req, reply) => {
    postdata.insertFACCohort(req.payload, req.auth.credentials, (err, res) => {
      if (err) {
        console.log(err, 'there is an error');
      } else {
        reply.view('profile-complete', { res });
      }
    });
  },
};
