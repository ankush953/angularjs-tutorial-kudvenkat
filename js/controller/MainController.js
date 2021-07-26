myApp.controller("country-controller", function(){
    this.message = "India";
})
.controller("state-controller", function(){
    this.message = "Uttar Pradesh";
})
.controller("city-controller", function(){
    this.message = "Jaunpur";
})
.controller("detail-controller", function($scope){
})
.controller("students-controller", function($scope){
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
})
.controller("student-list-controller", function(){

})
.controller("student-detail-controller", function($scope, $stateParams){
    $scope.name = $stateParams.studentName;
});
