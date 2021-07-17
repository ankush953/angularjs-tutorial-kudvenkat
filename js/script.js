/// <reference path="angular.min.js">

var myApp = angular.module("myModule", []);
var website = angular
  .module("website", ["ngRoute"])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "../templates/Home.html",
        controller: "homeController",
      })
      .when("/courses", {
        templateUrl: "./templates/Courses.html",
        controller: "courseController",
      })
      .when("/students", {
        templateUrl: "./templates/Students.html",
        controller: "studentController",
      })
      .when("/contact-us", {
        templateUrl: "./templates/Contact-us.html",
        controller: "contactUsController",
      })
      .otherwise({
          redirectTo: "/home"
      });

      $locationProvider.html5Mode(true);
  });
