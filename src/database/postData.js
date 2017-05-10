const db_connection = require('../../database/db_connection.js');

const postData = {};

postData.insertGithubUser = (username, avatar_url, gitHubId, gitHubName, cb) => {
  db_connection.query(`SELECT * FROM users WHERE github_username = '${username}' AND profile_picture = '${avatar_url}' AND github_id = '${gitHubId}' AND name = '${gitHubName}'`, (err, res) => {
    if (err) {
      return cb(err);
    } else if (res.rows.length === 0) {
        db_connection.query(`INSERT INTO users (github_username, profile_picture, github_id, name) VALUES ('${username}', '${avatar_url}', '${gitHubId}', '${gitHubName}')`, (err, res) => {
          if (err) return cb(err);
          cb(null, res.rows);
        });
    } else if (res.rows.length === 1) {
      return cb(null, res.rows);
    }
  });
};

postData.insertIntoDatabase = (reqPayload, credentials, callback) => {
  db_connection.query(`SELECT users.id FROM users WHERE users.username = '${credentials.username}'`, (err, dbResponse) => {
    if (err) {
      return callback(err);
    }
    const id = dbResponse.rows[0].id;
    const query = `INSERT INTO blogposts(title, body, username)
      VALUES ('${reqPayload.title}','${reqPayload.content}',${id})`;
    db_connection.query(query, (err, dbResponse) => {
      if (err) {
        return callback(err);
      }
      callback(null, dbResponse);
    });
  });
};

module.exports = postData;
