

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'static/angular_html/upload.html',
            controller:'UploadCtrl'
        })

        .state('gallery', {
            url: '/gallery',
            templateUrl: 'static/angular_html/gallery.html',
            controller: 'GalleryCtrl'
        });

});