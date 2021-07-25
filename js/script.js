/// <reference path="angular.min.js">

var myApp = angular
  .module("main-app", ["ui.router", "ngRoute"])
  .config(function (
    $stateProvider,
    $urlMatcherFactoryProvider,
    $urlRouterProvider
  ) {
    $urlMatcherFactoryProvider.caseInsensitive(true);
    $urlRouterProvider.otherwise("/detail");
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
      .state("students", {
        url: "/students",
        templateUrl: "../templates/Students.html",
        controller: "students-controller",
        abstract: true,
      })
      .state("students.student-detail", {
        url: "/{studentName}",
        templateUrl: "../templates/Student-Detail.html",
        controller: "student-detail-controller",
      })
      .state("students.student-list", {
        url: "/list",
        templateUrl: "../templates/Student-List.html",
        controller: "student-list-controller",
      });
  });
