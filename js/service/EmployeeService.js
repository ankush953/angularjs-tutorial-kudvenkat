/// <reference path="../script.js">

myApp.factory("employeeService", function () {
  return {
    getEmployees: getEmployees,
  };

  function getEmployees() {
    {
      let employees = [
        {
          name: "ankush",
          gender: 1,
          doj: new Date("December 28, 2016"),
          salary: 434.232,
          city: "jaunpur",
        },
        {
          name: "ankit",
          gender: 2,
          doj: new Date("November 12, 2015"),
          salary: 4423.3129,
          city: "varanasi",
        },
        {
          name: "Arushi",
          gender: 2,
          doj: new Date("September 10, 2020"),
          salary: 90.192,
          city: "ayodhya",
        },
        {
          name: "Anushka",
          gender: 3,
          doj: new Date("June 29, 2002"),
          salary: 8923.128,
          city: "haldighati",
        },
        {
          name: "Aishwarya",
          gender: 4,
          doj: new Date("October 8, 2019"),
          salary: 7687.98,
          city: "kashmir",
        },
      ];
      return employees;
    }
  }
});
