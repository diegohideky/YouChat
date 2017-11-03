/**
 *
 */
(function () {
  "use strict";

  angular.module("App")
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/login");
      $stateProvider
        .state("login", {
          url: "/login",
          templateUrl: "views/pages/login.html",
          data: {pageTitle: 'Login'},
          controller: 'LoginCtrl'
        })
        // .state('dashboard', {
        //   abstract: true,
        //   url: "",
        //   templateUrl: "views/partials/common/content.html"
        // })
        // .state('dashboard.home', {
        //   url: "/home",
        //   templateUrl: "views/pages/home.html",
        //   data: {pageTitle: 'FOTOSENSORES'},
        //   params: {
        //     selectedDetection: null,
        //     selectedIrregularity: null
        //   },
        //   controller: 'DetectionCtrl'
        // })
    }]);
}());
