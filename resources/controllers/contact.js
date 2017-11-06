var assert  = require("assert")
  , mongoose = require("mongoose")
  , Schema  = mongoose.Schema;

module.exports = function (app) {
  var Contact   = app.resources.models.contact
    , User      = app.resources.models.user
    , validator = app.resources.validators.contact;

  return {
    findAll: function (req, res) {
      var user = req.params;

      findUser(User, user, function (doc) {
        if (doc) {
          res.send({success: true, message: "Contatos encontrados", contacts: doc});
        } else {
          res.send({success: false, message: "Contatos não foram encontrados", contacts: []});
        }
      });
      
    },
    insert: function (req, res) {
      var user = req.body
        , validation = validator.validate(user);

      if (!validation.success) {
        res.send(validation);
      } else {
        insertContact(User, user, function (response) {
          res.send(response);
        });
      }
    }
  }
};

var execQuery = function (query, callback) {
  assert.ok(!(query instanceof require("mpromise")));

  var promise = query.exec();
  assert.ok(promise instanceof require('mpromise'));

  callback(promise);
};

var findContact = function (Contact, contact, callback) {
  execQuery(Contact.findOne({contactname: contact.contactname}), function (promise) {
    promise.then(function (doc) {
      callback(doc);
    });
  });
};

var findUser = function (User, user, callback) {
  execQuery(User.findOne({_id: user.userId}), function (promise) {
    promise.then(function (user) {
      callback(user);
    });
  });
};

var insertContact = function (Contact, newContact, callback) {
  execQuery(Contact.findOne(newContact), function (promise) {
    promise.then(function (contact) {
      if (contact) {
        callback({ success: false, message: "Contato já existe" });
      } else {
        Contact.create(newContact, function (err, contact) {
          if (err) callback({ success: false, message: "Não foi possível inserir contato" });

          callback({ success: true, message: "Contato inserido com sucesso", contact: contact });
        });
      }
    });
  });
};


