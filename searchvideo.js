var searchvideoApp = angular.module('searchvideoApp', []);
searchvideoApp.controller('searchvideoController', ['$scope', '$http', 'dataService', function($scope, $http, dataService) {
    console.log('Ready for search video');

    $scope.searchvideo = 'search Video engine';
    $scope.datajson = [];


    /*------- API call to get the searcj json data   -------*/
    $scope.data = null;
    dataService.getData().then(function(dataResponse) {
        $scope.data = dataResponse;
        for (var i = 0; i < $scope.data.data.page["content-items"]["content"].length; i++) {
            console.log($scope.data.data.page["content-items"]["content"][i]);
            $scope.datajson.push($scope.data.data.page["content-items"]["content"][i]);
            angular.forEach($scope.datajson, function(val, ind) {
                var temp = [];
                angular.forEach(val, function(val1, ind1) {
                    if (ind1.match('scene')) {
                        val1['id'] = val.id
                        temp.push(val1);
                    }
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