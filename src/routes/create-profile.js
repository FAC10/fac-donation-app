const request = require('request');
const postData = require('./../database/postData');

module.exports = {
  method: 'GET',
  path: '/create-profile',
  config: {
    auth: false,
    handler: (req, reply) => {
      request.post(`https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${req.url.query.code}`, (err, response, body) => {
        const accessToken = body.split('&')[0].split('=')[1];

        const getOptions = {
          method: 'GET',
          url: 'https://api.github.com/user',
          headers: {
            'User-Agent': 'oauth_github_jwt',
            Authorization: `token ${accessToken}`,
          },
        };

        request(getOptions, (error, response, body) => {
          if (error) {
            console.log(error);
            return;
          }

          const parsedBody = JSON.parse(body);

          postData.insertGithubUser(parsedBody.login, parsedBody.avatar_url, parsedBody.id, parsedBody.name, (err, res) => {
            if (err) {
              console.log(err);
              return;
            };
            req.cookieAuth.set({
              accessToken,
              username: parsedBody.login,
              avatar_url: parsedBody.avatar_url,
              id: parsedBody.id,
              name: parsedBody.name,
            });
            reply({ data: req.auth.credentials }).redirect('/profile-select-relation');
          });
        });
      });
    },
  },
};
