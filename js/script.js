/// <reference path="angular.min.js">

var myApp = angular
  .module("main-app", ["ngRoute"])
  .config(function ($routeProvider) {
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
      .otherwise('/home');
  });
