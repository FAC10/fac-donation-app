const postdata = require('../database/postData.js');

module.exports = {
  method: 'POST',
  path: '/donation-first-time-user',
  handler: (req, reply) => {
    postdata.insertFACRelation(req.payload, req.auth.credentials, (err, res) => {
      if (err) {
        console.log(err, 'there is an error');
      } else {
        reply.view('donation-first-time-user', { data: req.auth.credentials });
      }
    })
  },
};
