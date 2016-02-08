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
        url:'/resumeform',
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

app.filter('tel', function () {
    return function (tel) {
        if (!tel) { return ''; }

        var value = tel.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        var country, city, number;

        switch (value.length) {
            case 10: // +1PPP####### -> C (PPP) ###-####
                country = 1;
                city = value.slice(0, 3);
                number = value.slice(3);
                break;

            case 11: // +CPPP####### -> CCC (PP) ###-####
                country = value[0];
                city = value.slice(1, 4);
                number = value.slice(4);
                break;

            case 12: // +CCCPP####### -> CCC (PP) ###-####
                country = value.slice(0, 3);
                city = value.slice(3, 5);
                number = value.slice(5);
                break;

            default:
                return tel;
        }

        if (country == 1) {
            country = "";
        }

        number = number.slice(0, 3) + '-' + number.slice(3);

        return (country + " (" + city + ") " + number).trim();
    };
});

function Ctrl($scope){
    $scope.phoneNumber =  4085265552;

}


//variable to limit characters and dates