const stripeCharge = require('../lib/charge.js');

module.exports = {
  method: 'POST',
  path: '/charge',
  handler: (req, reply) => {
    console.log('>>>>>>>>>>>>>>>>>>',req.payload);
    stripeCharge(req, (err, res) => {
      if (err) {
        console.log('ERRORRRRRR');
        return reply.view('payment-failure');
      } else {
        console.log('YAYYYYYY');
        return reply.view('payment-success');
      }
    });
  },
};
