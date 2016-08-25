

app.controller("GalleryCtrl", function($scope,$http) {

        // retrieve all images from backend
        $http.get(location.origin + '/api/v1/gallery-view/',  {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
            .success(function (data, status, headers) {
                    $scope.results = data.results
            })
            .error(function (data, status, headers) {
            });

});
