const stripe = require('stripe')('sk_test_5vjln3z3FwdABvb229LkatOa');

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
