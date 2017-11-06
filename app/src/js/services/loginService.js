(function () {
  "use strict";

  angular.module("App")
    .service("loginService",
      [ "api",
        function (api) {
          this.loginUser = function (form) {
            var request = {
              username: form.username,
              password: form.password
            };

            return api.loginUser(request);
          };
        }
      ]);
}());
