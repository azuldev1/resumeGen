/**
 * Created by Manu on 12/15/15.
 */
app.controller('resumeviewCtrl',['$scope', '$routeParams', 'sharedProperties', '$http', function($scope, $routeParams, sharedProperties ,$http){
    $scope.toggle = function(){
        return sharedProperties.getProperty();
    };
    $scope.$on('$routeChangeSuccess', function ($event, current){
        sharedProperties.setProperty(false);
    });
    $http({
        url:'/resumeview',
        method:'get'
    }).then(function(response){
        $scope.resumeviews = response.data;
        $scope.selected = $scope.resumeviews[0];
    });
    $scope.limitContact = 1;
    $scope.setResume = function(resume){
        $scope.selected = resume;
    }
    $scope.isSelected = function(resume) {
        return $scope.selected === resume;
    }

}]);

app.filter('dateFormat', function($filter)
{
    return function(input)
    {
        if(input == null){ return ""; }

        var _date = $filter('date')(new Date(input), 'MMM yyyy');

        return _date.toUpperCase();

    };
});

//variable to limit characters and dates