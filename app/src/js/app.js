/**
 *
 */
angular.module('App', [
  "ui.router",
  "oitozero.ngSweetAlert"
]).run(['$rootScope', '$state', function ($rootScope, $state) {
  $rootScope.$state = $state;
}]);