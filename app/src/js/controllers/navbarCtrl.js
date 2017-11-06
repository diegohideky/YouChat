(function () {
  "use strict";

  angular.module("App")
    .controller("NavbarCtrl",
    [ "$rootScope", "$scope",
      function ($rootScope, $scope) {

        $scope.logout = function () {
          $rootScope.$broadcast("logout");
        };
      }
    ]);
}());
