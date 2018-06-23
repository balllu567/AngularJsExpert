var app = angular.module('MyApp', []);
 
    app.controller("Book", function ($scope) {

        if(localStorage.getItem("emplist")){
            $scope.items= JSON.parse(localStorage.getItem("emplist"));
            if($scope.items.length == 0){
                $scope.items = [];
            }
        }
        else{
            $scope.items = [];
        }

        
        $scope.addItem = function (item) {
            $scope.items.push(item);
            localStorage.setItem("emplist", JSON.stringify($scope.items));
            $scope.item = {};
        },
        $scope.removeItem = function (index) {
            console.log(index);
            $scope.items.splice(index, 1);
            localStorage.setItem("emplist", JSON.stringify($scope.items));
        },
        $scope.editItem = function (index) {
            $scope.editing = $scope.items.indexOf(index);
        }
 
    });