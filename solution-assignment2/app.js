(function () {
	
var toBuy = [{name:"Milk",quantity:2},
{name:"Flour",quantity:1},
{name:"Egg",quantity:12},
{name:"Butter",quantity:2},
{name:"Chocolate",quantity:3},
{name:"Rasperries",quantity:15}];

angular.module("ShoppingListCheckOff",[])
.controller("toBuyController",ToBuyController)
.controller("alreadyBougthController",AlreadyBoughtController);	



//Controller As syntaxis

toBuyController.$inject=['$scope']
function ToBuyController($scope){
	var buyController = this;
	
}

alreadyBougthController.$inject=['$scope']

function AlreadyBoughtController($scope){
	var boughtController = this;
	
}
	
} )()

