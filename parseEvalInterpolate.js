var parseEvalInterpolate = angular.module('parseEval', []);

parseEvalInterpolate.controller('parseEvalInterpolate', function($scope, $parse, $interpolate, $compile, $http) {
    $scope.age = 28;
    $scope.id = 172;
    $scope.name = 'mukund';
    $scope.eval = $scope.$eval("age*id*aged", {
        aged: 22
    });

    $scope.parses = $parse("age*id")($scope);


    $scope.interpolate = $interpolate("{{age*id}}")($scope);

    var html = "<div ng-click='clickme();'>{{text}}</div>";
    $com = $compile(html)($scope);
    $scope.comlist = $com[0];

    /*------- RESTful API call start------*/
 
//    Our GET request function
    $scope.getRequest = function () {
        console.log("I've been pressed!");  
        $http.get("Area.json")
            .then(function successCallback(response,status,headers,config){
                $scope.response = response;
            }, function errorCallback(response){
                console.log("Unable to perform get request");
            });
    };
    
//    Our POST request function
    $scope.postRequest = function () {
        $http.post("Area.json", data)
            .then(function successCallback(response,status,headers,config){
                console.log("Successfully POST-ed data");
            }, function errorCallback(response){
                console.log("POST-ing of data failed");
            });
    };
    
 


    /*------- RESTful API call start------*/



 
    $scope.update = function (user) {
        $http({
            method: 'POST',
            url: 'Area.json',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: function (data) {
                var postData = [];
                for (var prop in data)
                postData.push(encodeURIComponent(prop) + "=" + encodeURIComponent(data[prop]));
                return postData.join("&");
            },
            data: user
        });
    }
 



});