(function () {
  "use strict";

  angular.module("App")
    .service("cookieService",
      [ "ipCookie",
        function (ipCookie) {
          this.setId = function (id) {
            ipCookie("id", id);
          };

          this.getId = function () {
            return ipCookie("id");
          };

          this.setUsername = function (username) {
            ipCookie("username", username);
          };

          this.getUsername = function () {
            return ipCookie("username");
          };

          this.destroy = function () {
            ipCookie.remove("id");
            ipCookie.remove("username");
          };

        }
      ]
    );
}());
