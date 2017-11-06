var assert = require("assert")
  , encrypt = require("./../helpers/encrypt");

module.exports = function (app) {
  var User = app.resources.models.user
    , validator = app.resources.validators.user;

  return {
    findAll: function (req, res) {
      findUsers(User, function (docs) {
        if (docs && docs.length > 0) {
          res.send({success: true, message: "Usuários encontrados", users: docs});
        } else {
          res.send({success: false, message: "Usuários não encontrados", users: []});
        }
      });
    },
    find: function (req, res) {
      var user = req.params;

      findUserById(User, user, function (doc) {
        if (doc) {
          res.send({success: true, message: "Usuário encontrado", user: doc});
        } else {
          res.send({success: false, message: "Usuário não encontrado", user: null});
        }
      });
    },
    login: function (req, res) {
      var user = req.body;

      findUser(User, user, function (doc) {
        if (doc) {
          encrypt.compare(user.password, doc.password, function (encryption) {
            if (!encryption.success) {
              res.send(encryption);
            } else {
              req.session._id = doc._id;
              req.session.username = doc.username;
              req.session.email = doc.email;

              res.send({success: true, message: "Usuário encontrado", user: doc});
            }
          });
        } else {
          res.send({success: false, message: "Usuário não encontrado", user: []});
        }
      });
    },
    insert: function (req, res) {
      var newUser = req.body
        , validation = validator.validate(newUser);

      if (!validation.success ) {
        res.send(validation);
      } else {
        encrypt.hash(newUser.password, function (encryption) {
          if (!encryption.success) {
            res.send(encryption)
          } else {
            newUser.password = encryption.hash;

            insertUser(User, newUser, function (response) {
              res.send(response);
            });
          }
        });
      }
    },
    insertContact: function (req, res) {
      var request = req.body;

      findUserById(User, request.user, function (user) {
        if (user) {
          user.contacts.push(request.contact);
          user.save(function (err) {
            if (err) res.send({success: false, message: "Não foi possível inserir contato"});

            res.send({success: true, message: "Contato cadastrado com sucesso", contacts: user.contacts});
          })
        } else {
          res.send({success: false, message: "Usuário não encontrado"});
        }
      });
    }
  }
};

var execQuery = function (query, callback) {
  assert.ok(!(query instanceof require("mpromise")));

  var promise = query.exec();
  assert.ok(promise instanceof require('mpromise'));

  callback(promise);
};

var findUser = function (User, user, callback) {
  execQuery(User.findOne({username: user.username}), function (promise) {
    promise.then(function (doc) {
      callback(doc);
    });
  });
};

var findUserById = function (User, user, callback) {
  execQuery(User.findOne({_id: user._id}), function (promise) {
    promise.then(function (doc) {
      callback(doc);
    });
  });
};

var findUsers = function (User, callback) {
  execQuery(User.find({}), function (promise) {
    promise.then(function (users) {
      callback(users);
    });
  });
};

var insertUser = function (User, newUser, callback) {
  execQuery(User.findOne(newUser), function (promise) {
    promise.then(function (user) {
      if (user) {
        callback({ success: false, message: "Usuário já existe" });
      } else {
        User.create(newUser, function (err, user) {
          if (err) callback({ success: false, message: "Não foi possível inserir usuário" });

          callback({ success: true, message: "Usuário inserido com sucesso", user: user });
        });
      }
    });
  });
};


