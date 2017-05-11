module.exports = {
  method: 'POST',
  path: '/payment-processor',
  handler: (req, reply) => {
    req.cookieAuth.set(Object.assign({},req.auth.credentials,{
      data: req.payload,
    }))
    reply.view('payment-processor', { data: req.payload });
  },
};
