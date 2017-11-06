(function () {
  "use strict";

  angular.module("App")
    .service("api",
      [ "$http", "cookieService",
        function ($http, cookieService) {
          this.findAllUsers = function () {
            return $http.get("/api/users");
          };

          this.addUser = function (request) {
            return $http.post("/api/user", request);
          };

          this.loginUser = function (request) {
            return $http.post("/api/login", request);
          };

          this.findUser = function() {
            return $http.get("/api/user/" + cookieService.getId());
          };

          this.findUserContacts = function () {
            return $http.get("/api/user/" + cookieService.getId());
          };

          this.insertContact = function (request) {
            request.user = {
              _id: cookieService.getId()
            };

            return $http.post("/api/user/add/contact", request);
          }
        }
      ]);
}());
