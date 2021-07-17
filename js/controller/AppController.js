/// <reference path="../angular.min.js">

const myController = function($scope, $location, $anchorScroll){
    $scope.scrollTo = function(tag){
        $location.hash(tag);
        $anchorScroll();
    }
}

myApp.controller("app-controller", myController);
