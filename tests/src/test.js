const test = require('tape');
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

test('test that the charge route returns a status of 200', (t) => {
  const options = {
    method: 'POST',
    url: '/charge',
    payload: 'tok_1AG4BDDelOQugZzA6ymsuMQp',
  };

  stripeCharge((req) => {
    server.inject(options, (res) => {
      console.log(res);
      t.equal(res.statusCode, 200, 'should return a status code of 200');
    });
  });
  t.end();
});


// TFLCall(function (err, res) {
//   var expected = {'message': 'oops, something has gone wrong'};
//   t.deepEquals(err, expected, 'We recieved an error from TFL');
//   t.end();
// })
