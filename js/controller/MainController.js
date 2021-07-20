myApp.controller("country-controller", function($rootScope){
    this.message = "India";
    $rootScope.hello = "This is in rootscope";
})
.controller("state-controller", function(){
    this.message = "Uttar Pradesh";
})
.controller("city-controller", function(){
    this.message = "Jaunpur";
});
