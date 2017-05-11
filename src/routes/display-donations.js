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
            console.log('yayy', result.data);
            reply.view('display-donations', { donations: result.data })
            // then use this result (array of charge objects) to display customer charges (will need to reply with the info in a view);
          }
        });
      }
    });

    // reply.view('display-donations', { result });
  },
}
