module.exports = {
  method: 'GET',
  path: '/payment-processor',
  handler: (req, reply) => {
    reply.view('payment-processor');
  }
}
