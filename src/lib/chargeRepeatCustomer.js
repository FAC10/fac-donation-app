const stripe = require('stripe')('sk_test_5vjln3z3FwdABvb229LkatOa');

const chargeRepeatCustomer = (stripe_id, callback) => {
  stripe.charges.create({
    amount: 1000,
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
