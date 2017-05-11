const stripe = require('stripe')('sk_test_5vjln3z3FwdABvb229LkatOa');

const createNewCustomer = (stripeToken, callback) => {
  stripe.customers.create({
    email: 'paying.user@example.com',
    source: stripeToken,
  }, (err, customer) => {
    if (err) {
      callback(err);
    } else {
      callback(null, customer.id);
    }
  })
}

module.exports = createNewCustomer;
