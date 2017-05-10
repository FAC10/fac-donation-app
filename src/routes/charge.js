// const stripeCharge = require('../lib/charge.js');
const stripeCustomer = require('../lib/create-customer.js');
const doesCustomerExistInDB = require('../lib/doesCustomerExistInDB.js');
const chargeRepeatCustomer = require('../lib/chargeRepeatCustomer');
const saveStripeIdToDB = require('../lib/saveStripeIdToDB.js');
const createNewCustomer = require('../lib/createNewCustomer.js')

module.exports = {
  method: 'POST',
  path: '/charge',
  handler: (req, reply) => {
    console.log('>>>>>>>>>>>>>>>>>>', req.payload);
    // we get a req.payload which has a token
    const stripeToken = req.payload.stripeToken;
    const userCredentials = req.auth.credentials;

    doesCustomerExistInDB(userCredentials, (err, result) => {
      if (err) {
        console.log(err);
        reply('Broken');
      } else if (result === false) {
        // create customer id and charge user
        createNewCustomer(stripeToken, (err, result) => {
          const stripe_id = result;
          if (err) {
            reply('unable to create new customer');
          } else {
            saveStripeIdToDB(stripe_id, userCredentials, (err, result) => {
              if (err) {
                reply('unable to save stripe id to db');
              } else {
                chargeRepeatCustomer(stripe_id, (err, result) => {
                  if (err) {
                    console.log(err);
                    reply('unable to charge user');
                  } else {
                    reply('success1!!!');
                  }
                });
              }
            });
          }
        });
      } else {
        const stripe_id = result.stripe_id;
        chargeRepeatCustomer(stripe_id, (err, result) => {
          if (err) {
            reply('error, charge not gone through, they dont have any money.')
          } else {
            console.log(result);
            reply('success!!!!')
          }
        });
        // just charge user
      }
    });
  },
};
