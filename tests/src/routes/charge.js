const test = require('tape');
const server = require('../../../src/server.js');
const stripe = require('stripe')('sk_test_kpL5gpuCaeBdV72eIA3lZi1Z');

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

test('test that charge route with correct payload returns a status of 200 and success message', (t) => {

  stripe.tokens.create({
    card: {
      'number': '4242424242424242',
      'exp_month': 12,
      'exp_year': 2018,
      'cvc': '123'
    }
  }, (err, token) => {
    if (err) {
        console.log('token error ->>>>', err);
    } else {
      const options = {
        method: 'POST',
        url: '/charge',
        payload: { stripeToken: token.id },
      };

      server.inject(options, (res) => {
        t.equal(res.statusCode, 200, 'should return a status code of 200');
        t.equal(res.payload, 'you are on the charges page. give us ur dolla', 'should return success message');
        t.end();
      });
    }
  });
});
