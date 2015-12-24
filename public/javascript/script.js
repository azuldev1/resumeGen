///**
// * Created by Manu on 12/9/15.
// */
//console.log('HELLLLLO');
//var app = angular.module('myApp',['ngRoute','ui.bootstrap']);
//
//    app.config(['$routeProvider', function($routeProvider){
//        $routeProvider.when('/', {
//            templateUrl:'/pages/home.html',
//            controller:'homeCtrl'
//        }).when('/form',{
//            templateUrl:'/pages/resume_form.html',
//            controller:'formCtrl'
//        });
//    }]);
//
//
//
//    app.controller('homeCtrl',['$scope','$http', function($scope,$http){
//        $scope.message = 'welcome HOME';
//            $http({
//                url:'/channels',
//                method:'get'
//            }).then(function(response){
//                $scope.channels = response.data;
//            });
//    }]);
//    app.controller('formCtrl',['$scope','$http', function($scope,$http){
//        $scope.message = 'slack wishlist form';
//        $scope.submit = function(channel) {
//            $http({
//                url:'/wishlist',
//                method:'post',
//                data: channel
//            }).then(function (response) {
//                console.log(response.status);
//            });
//        };
//        $scope.delete = function(id) {
//            $http({
//                url:'/deletechannel',
//                method:'delete',
//                data: id
//            }).then(function (response) {
//                console.log(response.status);
//            });
//        };
//    }]);
//
//app.controller('ButtonsCtrl', function ($scope) {
//    $scope.singleModel = 1;
//
//    $scope.radioModel = 'Middle';
//
//    $scope.checkModel = {
//        left: false,
//        middle: true,
//        right: false
//    };
//
//    $scope.checkResults = [];
//
//    $scope.$watchCollection('checkModel', function () {
//        $scope.checkResults = [];
//        angular.forEach($scope.checkModel, function (value, key) {
//            if (value) {
//                $scope.checkResults.push(key);
//            }
//        });
//    });
//});