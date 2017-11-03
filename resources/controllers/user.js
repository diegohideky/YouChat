var assert = require("assert")
  , encrypt = require("./../helpers/encrypt");

module.exports = function (app) {
  var User = app.resources.models.user
    , validator = app.resources.validators.user;

  return {
    find: function (req, res) {
      findUsers(User, function (users) {
        if (users && users.length > 0) {
          res.send({ success: true, users: users });
        } else {
          res.send({ success: false, users: []});
        }
      });
    },
    insert: function (req, res) {
      // var newUser = req.body
      //   , validation = validator.validate(newUser);
      //
      // if (!validation.success ) {
      //   res.send(validation);
      // } else {
      //   encrypt.hash(newUser.password, function (encryption) {
      //     if (!encryption.success) {
      //       res.send(encryption)
      //     } else {
      //       newUser.password = encryption.hash;
      //
      //       insertUser(User, newUser, function (response) {
      //         res.send(response);
      //       });
      //     }
      //   });
      // }
    }
  }
};

var execQuery = function (query, callback) {
  assert.ok(!(query instanceof require("mpromise")));

  var promise = query.exec();
  assert.ok(promise instanceof require('mpromise'));

  callback(promise);
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
        callback({ success: false, message: "User already inserted" });
      } else {
        User.create(newUser, function (err, user) {
          if (err) callback({ success: false, message: "Not possible to insert" });

          callback({ success: true, message: "User inserted successfully", user: user });
        });
      }
    });
  });
};


