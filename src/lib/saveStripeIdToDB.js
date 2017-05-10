const connect = require('../../database/db_connection.js');

const saveStripeIDtoDB = (stripe_id, userCredentials, callback) => {
  const query = `UPDATE users SET stripe_id = $1 WHERE github_username = $2`
  const parameters = [stripe_id, userCredentials.username];

  connect.query(query, parameters, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  })
}


module.exports = saveStripeIDtoDB;
