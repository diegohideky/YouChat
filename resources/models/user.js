/**
 *
 */
var conn   = require("./../connection/db_connect")
  , db     = conn.db()
  , Schema = conn.Schema();

module.exports = function (app) {
  var user = new Schema({
    username: String,
    email: String,
    password: String
  });


  return db.model("users", user);
};
