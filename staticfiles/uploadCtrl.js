app.controller("UploadCtrl", function($scope,$http,$state) {
    // trigger when user uploaded a image
    document.getElementById("test").addEventListener('change', handleImage, false);
    function handleImage(e) {
        var reader = new FileReader();
        reader.onload = function (event) {
            selected_image = event.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
        var fd = new FormData();
        fd.append('image', e.target.files[0]);
        // post image to the api when user uploaded a image.
        $http.post(location.origin + '/api/v1/gallery-view/', fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
            .success(function (data, status, headers) {
                //on success redirected to user uploaded images page
                $state.go('gallery')
            })
            .error(function (data, status, headers) {
            });

    }
});