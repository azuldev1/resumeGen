/**
 * Created by Manu on 12/15/15.
 */
app.controller('resumeviewCtrl',['$scope','$http', function($scope,$http){
    $scope.message = 'welcome HOME';
    $http({
        url:'/resumeview',
        method:'get'
    }).then(function(response){
        $scope.resumeviews = response.data;
    });
}]);