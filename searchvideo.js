var searchvideoApp = angular.module('searchvideoApp', []);
searchvideoApp.controller('searchvideoController', ['$scope', '$http', 'dataService', function($scope, $http, dataService) {
    console.log('Ready for search video');

    $scope.searchvideo = 'search Video engine';



    /*------- API call to get the searcj json data   -------*/
    $scope.data = null;
    dataService.getData().then(function(dataResponse) {
        $scope.data = dataResponse;
        $scope.datajson = [];
        for (var i = 0; i < $scope.data.data.page["content-items"]["content"].length; i++) {
            // console.log($scope.data.data.page["content-items"]["content"][i]);
            $scope.datajson.push($scope.data.data.page["content-items"]["content"][i]);
            angular.forEach($scope.datajson, function(val, ind) {
                var temp = [];
                angular.forEach(val, function(val1, key) { 
                    $scope.roomNamesObj = { 'poster-image': '', 'name': '' };
                    if (val1.toLowerCase().match('the')) { name = 'the' } else if (val1.toLowerCase().match('Rear')) { name = 'Rear' } else { name = 'default' }

                    $scope.roomNamesObj = { 'poster-image': val1, 'name': name };
                    // $scope.roomNames.push($scope.roomNamesObj);
                });

            });
        }
    });




}]);

/*-------using services getting json data-------------*/

searchvideoApp.service('dataService', function($http) {
    this.getData = function() {
        return $http({
            method: 'GET',
            url: '../API/CONTENTLISTINGPAGE-PAGE1.json',
            headers: { 'Authorization': 'Token token=xxxxYYYYZzzz' }
        });
    }
});

/*-------using filter to get the search pattern-----------*/

searchvideoApp.filter('FilterVideo', function() {
    return function(input, str) {
        var tmpvideo = {};
        angular.forEach(input, function(val, key) {
            if (val.name.toLowerCase().indexOf(str) !== -1) {
                tmpvideo[key] = val;
            }
        });
        return tmpvideo;
    };
});