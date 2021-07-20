myApp.controller("country-controller", function($scope){
    this.message = "India";
    $scope.$on("$locationChangeStart", function(event, next, current){
        if(!confirm("do you want to go to " + next)){
            event.preventDefault();
        }
    })
})
.controller("state-controller", function(){
    this.message = "Uttar Pradesh";
})
.controller("city-controller", function(){
    this.message = "Jaunpur";
});
