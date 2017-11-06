/**
 *
 */
var conn   = require("./../connection/db_connect")
  , db     = conn.db()
  , Schema = conn.Schema();

module.exports = function (app) {
  var contact = new Schema({
    username: String,
    email: String
  });

  return db.model("contact", contact);
};