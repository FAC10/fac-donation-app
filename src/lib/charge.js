const stripe = require('stripe')('sk_test_kpL5gpuCaeBdV72eIA3lZi1Z');

function stripeCharge(req, reply) {
  const token = req.payload.stripeToken;

  const charge = stripe.charges.create({
    amount: 1000,
    currency: 'gbp',
    description: 'example charge',
    source: token,
  }, function (err, charge) {
    // asynchronously called
    console.log(charge, 'this is the charge object');
  },
  );
}

module.exports = stripeCharge;
