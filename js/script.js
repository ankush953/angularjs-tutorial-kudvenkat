/// <reference path="angular.min.js">

var myApp = angular
  .module("main-app", ["ui.router", "ngRoute"])
  .config(function ($stateProvider, $locationProvider) {
    $stateProvider.caseInsensitiveMatch = true;
    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "../templates/Home.html",
        controller: "country-controller",
      })
      .state("detail", {
        url: "/detail",
        templateUrl: "../templates/Detail.html",
        controller: "city-controller",
      })
      .state("inline", {
        url: "/inline",
        template: "<h1>You are viewing inline template</h1>",
        controller: "state-controller",
      })
      .state("student", {
        url: "/student/{studentName}",
        templateUrl: "../templates/Student.html",
        controller: "student-controller",
      });

    //   $locationProvider.html5Mode(true);
  });
