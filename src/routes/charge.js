const stripeCharge = require('../lib/charge.js');

module.exports = {
  method: 'POST',
  path: '/charge',
  handler: (req, reply) => {
    // console.log(req.payload);
    reply('you are on the charges page. give us ur dolla');
    stripeCharge(req);
  },
};
