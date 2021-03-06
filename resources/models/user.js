/**
 *
 */
var conn   = require("./../connection/db_connect")
  , db     = conn.db()
  , Schema = conn.Schema();

module.exports = function (app) {
  var Contact = new Schema({
    username: String,
    email: String
  });

  var user = new Schema({
    username: String,
    email: String,
    password: String,
    contacts: [Contact]
  });

  return db.model("users", user);
};
