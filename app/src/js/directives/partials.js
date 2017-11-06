(function () {
  "use strict";

  angular.module("App")
    .directive("contacts", [
      function () {
        return {
          restrict: "E",
          templateUrl: "views/partials/contacts.html",
          controller: "ContactCtrl"
        }
      }
    ])
    .directive("conversation", [
      function () {
        return {
          restrict: "E",
          templateUrl: "views/partials/conversation.html",
          controller: "ConversationCtrl"
        }
      }
    ])
    .directive("users", [
      function () {
        return {
          restrict: "E",
          templateUrl: "views/partials/users.html",
          controller: "UserCtrl"
        }
      }
    ]);
}());
