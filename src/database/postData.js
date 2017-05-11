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

postData.insertFACRelation = (reqPayload, credentials, callback) => {

  const query = `UPDATE users SET fac_relation = '${reqPayload.relation}' WHERE github_username = '${credentials.username}'`;

  db_connection.query(query, (err, res) => {
    if (err) {
      console.log('threw an error', err)
      return callback(err, null);
    } else {
      callback(null, res)
    }
  });

}

postData.insertFACCohort = (reqPayload, credentials, callback) => {

  const query = `UPDATE users
                 SET fac_cohort='${reqPayload.facCohort}', fac_location='${reqPayload.facLocation}'
                 WHERE github_username = '${credentials.username}'`;

  db_connection.query(query, (err, res) => {
    if (err) {
      return callback(err, null);
    } else {
      callback(null, res)
    }
  });
}

module.exports = postData;
