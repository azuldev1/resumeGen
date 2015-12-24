/**
 * Created by Manu on 12/15/15.
 */
app.controller('formCtrl',['$scope','$http', function($scope,$http){
    $scope.message = 'slack wishlist form';
    //contact info scope
    $scope.infos = [{id: 'info1'}];
    //personal skills scope
    $scope.perSkills = [{id: 'skill1'}, {id: 'skill2'}, {id: 'skill3'}, {id: 'skill4'}];
    //Education scope
    $scope.schools = [{id: 'education1'}];
    //Employert scope
    $scope.employers = [{id: 'employer1'}];
    //Contact add/delete
    $scope.addNewChoice = function() {
        var newItemNo = $scope.infos.length+1;
        $scope.infos.push({'id':'info'+newItemNo});
    };

    $scope.removeChoice = function(index) {
        $scope.infos.splice(index, 1);
    };
    //Education add/delete
    $scope.addNewChoiceEdu = function() {
        var newItemNo = $scope.schools.length+1;
        $scope.schools.push({'id':'education'+newItemNo});
    };

    $scope.removeChoiceEdu = function(index) {
        $scope.schools.splice(index, 1);
    };
    //Employer add/delete
    $scope.addNewChoiceEmp = function() {
        var newItemNo = $scope.employers.length+1;
        $scope.employers.push({'id':'employer'+newItemNo});
    };

    $scope.removeChoiceEmp = function(index) {
        $scope.employers.splice(index, 1);
    };

    $scope.submit = function(resume) {

        $http({
            url:'/resumeform',
            method:'post',
            data: resume
        }).then(function (response) {
            console.log(response.status);
        });
    };
}]);


//
//app.controller('contactCtrl', function($scope) {
//
//    $scope.infos = [{id: 'info1'}];
//
//
//    $scope.addNewChoice = function() {
//        var newItemNo = $scope.infos.length+1;
//        $scope.infos.push({'id':'info'+newItemNo});
//    };
//
//    $scope.removeChoice = function(index) {
//        $scope.infos.splice(index, 1);
//    };
//
//});