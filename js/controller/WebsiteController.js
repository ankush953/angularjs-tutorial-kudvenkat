/// <reference path="../angular.js">

website
  .controller("homeController", function ($scope) {
    $scope.title = "Home Page";
  })
  .controller("studentController", function ($scope) {
    $scope.title = "Student Page";
  })
  .controller("courseController", function ($scope) {
    $scope.title = "Course Page";
  })
  .controller("contactUsController", function ($scope) {
    $scope.title = "Contact Us Page";
  });
