(function () {
  "use strict";

  angular.module("App")
    .service("signinService",
    [ "api",
      function (api) {
        this.isSamePassword = function (form) {
          return form.password === form.passwordRepeated;
        };

        this.signinUser = function (form) {
          var request = {
            username: form.username,
            email: form.email,
            password: form.password,
            passwordRepeated: form.passwordRepeated
          };

          return api.addUser(request);
        };
      }
    ]);
}());
