(function () {
  "use strict";

  angular.module("App")
    .controller("UserCtrl",
    [ "$rootScope", "$scope", "userService", "cookieService", "toastr",
      function ($rootScope, $scope, userService, cookieService, toastr) {
        $scope.myId = cookieService.getId();
        $scope.users = [];

        userService.getUsers()
          .then(function (res) {
            if (res.data.success) {
              $scope.users = res.data.users;

              toastr.success(res.data.message, "Usuários");
            } else {
              toastr.error(res.data.message, "Erro");
            }
          })
          .catch(function (err) {
            console.log(err);
            toastr.error("Houve algum erro", "Erro");
          });

        $scope.addContact = function (user) {
          userService.addContact(user)
            .then(function (res) {
              if (res.data.success) {
                $scope.users.splice($scope.users.indexOf(user), 1);

                $rootScope.$broadcast("contact.inserted", {contacts: res.data.contacts});
              } else {
                toastr.error("Não foi possível inserir contato", "Erro");
              }
            })
            .catch(function (err) {
              console.log(err);
            });
        };
      }
    ])
}());