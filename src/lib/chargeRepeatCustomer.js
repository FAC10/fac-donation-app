const stripe = require('stripe')(process.env.STRIPE_SECRET);

const chargeRepeatCustomer = (donationAmount, stripe_id, callback) => {
  const stripeAmount = donationAmount * 100;
  stripe.charges.create({
    amount: stripeAmount,
    currency: 'gbp',
    customer: stripe_id,
  }, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
}


module.exports = chargeRepeatCustomer;
