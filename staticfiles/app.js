/**
 * Created by sayone on 23/8/16.
 */

 var app = angular.module("myApp", ['ui.router']);


 app.config(function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
});