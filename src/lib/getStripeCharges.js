const stripe = require('stripe')(process.env.STRIPE_SECRET);

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
