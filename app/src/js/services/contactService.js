(function () {
  "use strict";

  angular.module("App")
    .service("contactService",
      [ "api",
        function (api) {
          this.getUserContacts = function () {
            return api.findUserContacts();
          }
        }
      ]
    );
}());