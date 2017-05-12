const stripe = require('stripe')(process.env.STRIPE_SECRET);

const createNewCustomer = (emailAddress, stripeToken, callback) => {
  stripe.customers.create({
    email: emailAddress,
    source: stripeToken,
  }, (err, customer) => {
    if (err) {
      callback(err);
    } else {
      callback(null, customer.id);
    }
  });
};

module.exports = createNewCustomer;
