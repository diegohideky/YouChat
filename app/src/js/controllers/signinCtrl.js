/**
 *
 */
(function () {
  "use strict";

  angular.module("App")
    .controller("SigninCtrl",
      [ "$scope", "signinService", "toastr", "$location", "cookieService",
        function ($scope, signinService, toastr, $location, cookieService) {
          $scope.submitSignin = function () {
            if ($scope.signinForm.$valid) {
              if (signinService.isSamePassword($scope.entry)) {
                signinService.signinUser($scope.entry)
                  .then(function (res) {
                    if (res.data.success) {
                      $scope.entry = {};

                      cookieService.setId(res.data.user._id);
                      cookieService.setUsername(res.data.user.username);

                      toastr.success(res.data.message, "Parabéns!");

                      $location.path("/chat");
                    } else {
                      toastr.success(res.data.message, "Ops!");
                    }
                  })
                  .catch(function (err) {
                    console.log(err);
                    toastr.error("Houve algum erro", "Erro");
                  });
              } else {
                toastr.error("Senhas não estão iguais", "Erro");
              }
            }
          };
        }
      ]
    );
}());