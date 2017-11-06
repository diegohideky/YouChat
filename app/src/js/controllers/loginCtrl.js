/**
 *
 */
(function () {
  "use strict";

  angular.module("App")
    .controller("LoginCtrl",
      [ "$rootScope", "$scope", "loginService", "toastr", "$location", "cookieService",
        function ($rootScope, $scope, loginService, toastr, $location, cookieService) {
          $scope.submitLogin = function () {
            if ($scope.loginForm.$valid) {
              loginService.loginUser($scope.entry)
                .then(function (res) {
                  if (res.data.success) {
                    $scope.entry = {};

                    cookieService.setId(res.data.user._id);
                    cookieService.setUsername(res.data.user.username);

                    toastr.success(res.data.message, "Você está logado!");

                    $location.path("/chat");
                  } else {
                    toastr.error(res.data.message, "Ops!");
                  }
                })
                .catch(function (err) {
                  toastr.error("Houve algum erro", "Erro");
                });
            }
          };

          $rootScope.$on("logout", function (e) {
            cookieService.destroy();
            $location.path("/login");
          });
        }
      ]
    );
}());