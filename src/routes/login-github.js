const querystring = require('querystring');

module.exports = {
  method: 'GET',
  path: '/login-github',
  handler: (req, reply) => {
    const params = {
      client_id: process.env.CLIENT_ID,
      redirect_uri: process.env.BASE_URL + '/create-profile',
    };
    const base = 'https://github.com/login/oauth/authorize?';
    const query = querystring.stringify(params);

    return reply.redirect(base + query);
  },
};
