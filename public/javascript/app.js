/**
 * Created by Manu on 12/15/15.
 */
var app = angular.module('myApp',['ngRoute',
    'ui.bootstrap',]);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
        templateUrl:'/pages/home.html',
        controller:'homeCtrl'
    })
        .when('/form',{
        templateUrl:'/pages/resume_form.html',
        controller:'formCtrl'
    })
        .otherwise({
        redirectTo: '/'
    });
}]);




