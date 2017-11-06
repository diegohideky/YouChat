(function () {
  "use strict";

  angular.module("App")
    .controller("ContactCtrl",
      [ "$rootScope", "$scope", "userService",
        function ($rootScope, $scope, userService) {
          $scope.contacts = [];

          userService.getUser()
            .then(function (res) {
              console.log(res);
              if (res.data.success) {
                $scope.contacts = res.data.user.contacts;
              }
            })
            .catch(function (err) {
              console.log(err);
            });

          $rootScope.$on("contact.inserted", function (e, data) {
            $scope.contacts = data.contacts;
          });
        }
      ]
    )
}());