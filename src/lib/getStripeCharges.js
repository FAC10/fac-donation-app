const stripe = require('stripe')('sk_test_5vjln3z3FwdABvb229LkatOa');

const getStripeCharges = (stripe_id, callback) => {
  stripe.charges.list({
    customer: stripe_id,
  }, (err, charges) => {
    if (err) {
      callback(err);
    } else {
      callback(null, charges);
    }
    // asynchronously called
  });
};

module.exports = getStripeCharges;
