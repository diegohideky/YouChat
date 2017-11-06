(function () {
  "use strict";

  angular.module("App")
    .service("userService",
    [ "api",
      function (api) {
        this.getUser = function () {
          return api.findUser();
        };

        this.getUsers = function () {
          return api.findAllUsers();
        };

        this.addContact = function (user) {
          var request = {
            contact: {
              username: user.username,
              email: user.email
            }
          };

          return api.insertContact(request);
        };
      }
    ])
}());
