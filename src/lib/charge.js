const stripe = require('stripe')('sk_test_kpL5gpuCaeBdV72eIA3lZi1Z');

const stripeCharge = (req, callback) => {
  const token = req.payload.stripeToken;

// this function takes a object and a callback
  const charge = stripe.charges.create({
    amount: 1000,
    currency: 'gbp',
    description: 'example charge',
    source: token,
  }, (err, charge) => {
    console.log(err);
    if (err) {
      return callback(err, null);
    } else {
      return callback(null, charge);
    }
    // asynchronously called
    console.log(charge, 'this is the charge object');
  }
);
}

module.exports = stripeCharge;
