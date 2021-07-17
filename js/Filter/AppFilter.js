/// <reference path="../script.js">

const MALE = "male";
const FEMALE = "female";
const NOT_DISCLOSED = "not disclosed";
const NA = "not applied";

myApp.filter("genderFilter", function () {
  return function (genderValue) {
    switch (genderValue) {
      case 1:
        return MALE;
      case 2:
        return FEMALE;
      case 3:
        return NOT_DISCLOSED;
      default:
        return NA;
    }
  };
});
