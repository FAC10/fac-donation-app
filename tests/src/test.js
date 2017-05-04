const test = require('tape');
const server = require('../../src/server.js');

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
