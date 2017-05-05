const test = require('tape');
const stripe = require('stripe');
const server = require('../../src/server.js');
const stripeCharge = require('../../src/lib/charge.js');
// const stripe = require('stripe')('sk_test_kpL5gpuCaeBdV72eIA3lZi1Z');


test('test that the home route returns a status code of 200', (t) => {
  const options = {
    method: 'GET',
    url: '/',
  };

  server.inject(options, (res) => {
    t.equal(res.statusCode, 200, 'should return status code of 200');
    t.end();
  });
});

test('test that the payment-processor route returns a status code of 200', (t) => {
  const options = {
    method: 'GET',
    url: '/payment-processor',
  };

  server.inject(options, (res) => {
    t.equal(res.statusCode, 200, 'should return status code of 200');
    t.end();
  });
});

test('test that the charge route returns a status of 500 if there is no payload', (t) => {

  const options = {
      method: 'POST',
      url: '/charge',
    };

    server.inject(options, (res) => {
      t.equal(res.statusCode, 500, 'should return a status code of 500');
      t.end();
    });
});

test('test charge route with incorrect payload', (t) => {

  const options = {
      method: 'POST',
      url: '/charge',
      payload: { stripeToken: 'thisIsAnIncorrectPayload' },
    };

    server.inject(options, (res) => {
      // console.log(res);
      t.equal(res.statusCode, 200, 'should return a status code of 200');
      t.equal(res.payload, 'Sorry, there has been an error', 'should return error message');
      t.end();
    });
});

// test('test that the charge route returns a status of 200', (t) => {
//
//   stripe.createToken(card)
//     .then(function(result) {
//       console.log(result);
//       stripeTokenHandler(result.token);
//     })
//     .catch(function(error) {
//       var errorElement = document.getElementById('card-errors');
//       errorElement.textContent = result.error.message;
//     });
//
//   const options = {
//       method: 'POST',
//       url: '/charge',
//       payload: { stripeToken: 'thisIsAnIncorrectPayload' },
//     };
//
//     server.inject(options, (res) => {
//       t.equal(res.statusCode, 200, 'should return a status code of 200');
//       t.equal(res.payload, 'Sorry, there has been an error', 'should return error message');
//       t.end();
//     });
// });
