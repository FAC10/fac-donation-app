const connect = require('../../database/db_connection.js');

const doesCustomerExistInDB = (userCredentials, callback) => {
  // query the database
  const databaseQuery = 'SELECT * FROM users WHERE stripe_id IS NOT NULL AND github_username = $1';
  const databaseParams = [userCredentials.username];
  connect.query(databaseQuery, databaseParams, (err, result) => {
    if (err) {
      callback(err);
    } else if (result.rows.length === 0) {
      callback(null, false);
    } else {
      callback(null, result.rows[0]);
    }
  });
  // if user has stripe id then return it
  // otherwise return false
};

module.exports = doesCustomerExistInDB;
