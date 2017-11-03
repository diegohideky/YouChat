var bcrypt = require("bcrypt-nodejs");

module.exports.hash = function (password, callback) {
  bcrypt.hash(password, null, null, function(err, hash) {
    if (err) callback({success: false, message: "Could not encrypt password"});

    callback({success: true, message: "Password encrypted", hash: hash});
  });
};

module.exports.compare = function (password, hash, callback) {
  bcrypt.compare(password, hash, function(err, valid) {
    if (err) callback({success: false, message: "Could not compare passwords"});

    callback({success: valid, message: "Passwords compared"});
  });
};