const getStripeIdFromDB = require('../lib/getStripeIdFromDB');
const getStripeCharges = require('../lib/getStripeCharges');

module.exports = {
  method: 'GET',
  path: '/display-donations',
  handler: (req, reply) => {
    const userCredentials = req.auth.credentials;

    getStripeIdFromDB(userCredentials, (err, result) => {
      if (err) {
        console.log(err);
        reply('I am not working');
      } else {
        const stripe_id = result;
        getStripeCharges(stripe_id, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            reply.view('display-donations', { donations: result.data, data: req.auth.credentials });
          }
        });
      }
    });
  },
};
