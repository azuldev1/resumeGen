/**
 * Created by Manu on 12/15/15.
 */
var app = angular.module('myApp',['ngRoute',
    'ui.bootstrap', 'ngMessages', 'snap','angular-progress-arc']);
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
            controller:'resumeviewCtrl',
        })
        .otherwise({
        redirectTo: '/'
    });
}]);
app.service('sharedProperties', function () {
    var toolbar = false;

    return {
        getProperty: function () {
            return toolbar;
        },
        setProperty: function(value) {
            toolbar = value;
        }
    }});

app.controller('navControl', ['$scope','sharedProperties', '$location', function($scope, sharedProperties, $location) {
    $scope.toggleSidebar =  function(){
        if (sharedProperties.getProperty() === false){
            sharedProperties.setProperty(true);
        } else {
            sharedProperties.setProperty(false);
        }
    };

    $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };
    $scope.showDots = $location.path() === '/resume_view';

}]);







