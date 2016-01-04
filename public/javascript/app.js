/**
 * Created by Manu on 12/15/15.
 */
var app = angular.module('myApp',['ngRoute',
    'ui.bootstrap', 'ngMessages']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
        templateUrl:'/pages/home.html',

    })
        .when('/form',{
        templateUrl:'/pages/resume_form.html',
        controller:'formCtrl'
    })
        .when('/resume_view',{
            templateUrl:'/pages/resume_view.html',
            controller:'resumeviewCtrl'
        })
        .otherwise({
        redirectTo: '/'
    });
}]);




