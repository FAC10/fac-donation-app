const request = require('request');

module.exports = {
  method: 'GET',
  path: '/create-profile',
  config: {
    auth: false,
    handler: (req, reply) => {
      request.post(`https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${req.url.query.code}`, (err, response, body) => {
        const accessToken = body.split('&')[0].split('=')[1];
        console.log('accessToken', accessToken);
        console.log('body', body);

        req.cookieAuth.set({ accessToken });
        reply('hey you have returned from github!');
      });
    },
  },
};
