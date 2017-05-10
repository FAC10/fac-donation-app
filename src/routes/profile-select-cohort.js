const postdata = require('../database/postData.js');


module.exports = {
  method: 'POST',
  path: '/profile-select-cohort',
  handler: (req, reply) => {
    console.log(req.payload);

    postdata.insertFACRelation(req.payload, req.auth.credentials, (err, res) => {
      if (err) {
        console.log(err, 'there is an error');
      } else {
        reply.view('profile-select-cohort', { res });
      }

    });
  }
}
