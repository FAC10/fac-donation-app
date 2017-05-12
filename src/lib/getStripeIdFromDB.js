const connect = require('../../database/db_connection');

const getStripeIdFromDB = (userCredentials, callback) => {
  const databaseQuery = `SELECT stripe_id FROM users WHERE github_username = $1`;
  const databaseParameters = [userCredentials.username];

  connect.query(databaseQuery, databaseParameters, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result.rows[0].stripe_id);
    }
  });
};

module.exports = getStripeIdFromDB;
