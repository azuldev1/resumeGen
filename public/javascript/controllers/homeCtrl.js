/**
 * Created by Manu on 12/15/15.
 */
app.controller('homeCtrl',['$scope','$http', function($scope,$http){
    $scope.message = 'welcome HOME';
    $http({
        url:'/channels',
        method:'get'
    }).then(function(response){
        $scope.channels = response.data;
    });
}]);