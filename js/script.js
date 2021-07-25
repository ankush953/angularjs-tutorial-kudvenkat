/// <reference path="angular.min.js">

var myApp = angular
  .module("main-app", ["ngRoute"])
  .config(function ($routeProvider, $locationProvider) {
      $routeProvider.caseInsensitiveMatch = true;
      $routeProvider.when('/home',
      {
          templateUrl: "../templates/Home.html",
          controller: "country-controller",
      })
      .when('/detail', {
          templateUrl: "../templates/Detail.html",
          controller: "city-controller",
      })
      .when('/inline', {
          template: "<h1>You are viewing inline template</h1>",
          controller: "state-controller"
      })
      .when('/student/:studentName', {
          template: '<h1>In student detail page</h1>',
      })
      .otherwise('/home');

      $locationProvider.html5Mode(true);
  });
