(function () {
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',lunchCheckController);

lunchCheckController.$inject=['$scope'];

function lunchCheckController($scope) {

$scope.lunch= function () {

if($scope.lunchs == undefined){
	$scope.messStyle={color:'red'};
	$scope.mess="Please enter data first";
	return;
}
	
  var elemts = $scope.lunchs.split(",");
  $scope.mess='';


  if(totalElemnts(elemts) > 3){
    $scope.messStyle={color:'red'};
      $scope.mess="Too much!";
  }
    else if( totalElemnts(elemts) > 0 && totalElemnts(elemts) <= 3) {
      $scope.messStyle={color:'green'};
      $scope.mess="Enjoy";
    }
	
}

function totalElemnts(array) {

var totElem=0;

  for (var i = 0; i < array.length; i++) {
      if(array[i] != '' && array[i] != ' ')
        totElem = totElem+1;
  }
  return totElem;

}
}

})()
