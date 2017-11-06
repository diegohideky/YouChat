var bcrypt = require("bcrypt-nodejs");

module.exports.hash = function (password, callback) {
  bcrypt.hash(password, null, null, function(err, hash) {
    if (err) callback({success: false, message: "Não foi possível criptografar senha."});

    callback({success: true, message: "Senha criptografada", hash: hash});
  });
};

module.exports.compare = function (password, hash, callback) {
  bcrypt.compare(password, hash, function(err, valid) {
    if (err) callback({success: false, message: "Senha inválida"});

    callback({success: valid, message: "Senha válida"});
  });
};