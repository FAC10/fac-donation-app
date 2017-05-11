const doesCustomerExistInDB = require('../lib/doesCustomerExistInDB.js');
const chargeRepeatCustomer = require('../lib/chargeRepeatCustomer');
const saveStripeIdToDB = require('../lib/saveStripeIdToDB.js');
const createNewCustomer = require('../lib/createNewCustomer.js')

module.exports = {
  method: 'POST',
  path: '/charge',
  handler: (req, reply) => {
    // we get a req.payload which has a token
    const stripeToken = req.payload.stripeToken;
    const userCredentials = req.auth.credentials;
    const emailAddress = req.payload.email;
    const donationAmount = req.auth.credentials.donation.amount;

    doesCustomerExistInDB(userCredentials, (err, result) => {
      if (err) {
        console.log(err);
        reply('Broken');
      } else if (result === false) {
        // create customer id and charge user
        createNewCustomer(emailAddress, stripeToken, (err, result) => {
          const stripe_id = result;
          if (err) {
            console.log(err);
            reply('unable to create new customer');
          } else {
            saveStripeIdToDB(stripe_id, userCredentials, (err, result) => {
              if (err) {
                reply('unable to save stripe id to db');
              } else {
                chargeRepeatCustomer(donationAmount, stripe_id, (err, result) => {
                  if (err) {
                    console.log(err);
                    reply.view('payment-failure');
                  } else {
                    reply.view('payment-success');
                  }
                });
              }
            });
          }
        });
      } else {
        const stripe_id = result.stripe_id;
        chargeRepeatCustomer(donationAmount, stripe_id, (err, result) => {
          if (err) {
            reply.view('payment-failure')
          } else {
            reply.view('payment-success')
          }
        });
      }
    });
  },
};
