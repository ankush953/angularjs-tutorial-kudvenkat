myApp.controller("country-controller", function(){
    this.message = "India";
})
.controller("state-controller", function(){
    this.message = "Uttar Pradesh";
})
.controller("city-controller", function(){
    this.message = "Jaunpur";
})
.controller("detail-controller", function($scope, $log){
    $scope.students = [
        {
            name: "ankush",
            place: "chennai"
        },
        {
            name: "ankit",
            place: "sikkim"
        },
        {
            name: "virendra",
            place: "jaunpur"
        }
    ]
    $log.info($scope.students);
});
