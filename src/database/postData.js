const connect = require('../../database/db_connection.js');

const postData = {};

postData.insertGithubUser = (username, avatar_url, gitHubId, gitHubName, cb) => {

  const databaseQuery = `SELECT * FROM users WHERE github_username = $1 AND profile_picture = $2 AND github_id = $3 AND name = $4`;
  const databaseParameters = [username, avatar_url, gitHubId, gitHubName];

  connect.query(databaseQuery, databaseParameters, (err, res) => {
    if (err) {
      return cb(err);
    } else if (res.rows.length === 0) {

        const databaseQuery = `INSERT INTO users (github_username, profile_picture, github_id, name) VALUES ($1, $2, $3, $4)`;
        const databaseParameters = [username, avatar_url, gitHubId, gitHubName];

        connect.query(databaseQuery, databaseParameters, (err, res) => {
          if (err) return cb(err);
          cb(null, res.rows);
        });
    } else if (res.rows.length === 1) {
      return cb(null, res.rows);
    }
  });
};

postData.insertFACRelation = (reqPayload, credentials, callback) => {

  const databaseQuery = `UPDATE users SET fac_relation = $1 WHERE github_username = $2`;
  const databaseParameters = [reqPayload.relation, credentials.username]

  connect.query(databaseQuery, databaseParameters, (err, res) => {
    if (err) {
      console.log('threw an error', err)
      return callback(err, null);
    } else {
      callback(null, res)
    }
  });

}

postData.insertFACCohort = (reqPayload, credentials, callback) => {

  const databaseQuery = `UPDATE users SET fac_cohort = $1, fac_location = $2 WHERE github_username = $3`;
  const databaseParameters = [reqPayload.facCohort, reqPayload.facLocation, credentials.username];

  connect.query(databaseQuery, databaseParameters, (err, res) => {
    if (err) {
      return callback(err, null);
    } else {
      callback(null, res)
    }
  });
}

module.exports = postData;
