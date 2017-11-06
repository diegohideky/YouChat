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
        .state("signin", {
          url: "/signin",
          templateUrl: "views/pages/signin.html",
          data: {pageTitle: 'Signin'},
          controller: 'SigninCtrl'
        })
        .state("home", {
          abstract: true,
          url: "",
          templateUrl: "views/partials/navbar.html",
          controller: "NavbarCtrl"
        })
        .state("home.chat", {
          url: "/chat",
          templateUrl: "views/pages/chat.html",
          data: {pageTitle: 'Chat'}
        })
        .state("home.add", {
          url: "/adicionar",
          templateUrl: "views/pages/add.html",
          data: {pageTitle: 'Adicionar'}
        });
    }]);
}());
