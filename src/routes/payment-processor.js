module.exports = {
  method: 'POST',
  path: '/payment-processor',
  handler: (req, reply) => {
    reply.view('payment-processor');
  }
}
