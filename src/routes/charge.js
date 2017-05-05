const stripeCharge = require('../lib/charge.js');

module.exports = {
  method: 'POST',
  path: '/charge',
  handler: (req, reply) => {
    console.log('>>>>>>>>>>>>>>>>>>',req.payload);
    stripeCharge(req, (err, res) => {
      if (err) {
        console.log('ERRORRRRRR');
        return reply('Sorry, there has been an error');
      } else {
        console.log('YAYYYYYY');
        return reply('you are on the charges page. give us ur dolla');
      }
    });
  },
};
