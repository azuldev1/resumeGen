/**
 * Created by Manu on 12/21/15.
 */
/* -------------------------------------------------------

 * Filename:     Adding Form Fields Dynamically
 * Website:      http://www.shanidkv.com
 * Description:  Shanidkv AngularJS blog
 * Author:       Muhammed Shanid shanidkannur@gmail.com

 ---------------------------------------------------------*/

app.controller('DatepickerCtrl', function($scope) {


    $scope.open = function($event) {
        $scope.status.opened = true;
    };
    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
//FORMAT THE DATE
    $scope.format = $scope.formats[0];
    $scope.status = {
        opened: false
    };

});



/**
 * Created by Manu on 12/21/15.
 */
/* -------------------------------------------------------

 * Filename:     Adding Form Fields Dynamically
 * Website:      http://www.shanidkv.com
 * Description:  Shanidkv AngularJS blog
 * Author:       Muhammed Shanid shanidkannur@gmail.com

// ---------------------------------------------------------*/
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