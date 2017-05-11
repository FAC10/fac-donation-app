module.exports = {
  method: 'POST',
  path: '/payment-processor',
  handler: (req, reply) => {
    req.cookieAuth.set(Object.assign({},req.auth.credentials,{
      donation: req.payload,
    }))
    reply.view('payment-processor', { donation: req.payload, data: req.auth.credentials });
  },
};
