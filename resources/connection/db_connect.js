/**
 *
 */
var mongoose = require("mongoose")
  , db = mongoose.createConnection("mongodb://localhost/youchat");

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("DB connected");
});

module.exports.db = function () {
  return db;
};

module.exports.Schema = function () {
  return mongoose.Schema;
};