(function () {

'use strict'

angular.module("ShoppingListCheckOff",[])
.controller("ToBuyController",ToBuyController)
.controller("AlreadyBoughtController",AlreadyBoughtController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);


//Controller As syntaxis

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
	var buyController=this;

	buyController.itemsToBuy=ShoppingListCheckOffService.getItems();
	buyController.removeItems = function (itemIndex) {
			var item=ShoppingListCheckOffService.getItem(itemIndex);
			ShoppingListCheckOffService.itemBought(item);
			ShoppingListCheckOffService.removeItems(itemIndex);
	}
}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService){
	var boughtController=this;

	boughtController.itemsBought=ShoppingListCheckOffService.getItemsBought();
}


function ShoppingListCheckOffService () {

	var service=this;

	var itemsBought=[];

	var itemsToBuy=[{
		name:"Flour",
		quantity:1
	},
	{
		name:"Eggs",
		quantity:12
	},
	{
		name:"Butter",
		quantity:1
	},
	{
		name:"Milk",
		quantity:1
	},
	{
		name:"Chocolate",
		quantity:4
	},
	{
		name:"Strawberries",
		quantity:10
	}];
	var itemsBought=[];

	service.getItems=function() {
		return itemsToBuy;
	};

	service.removeItems=function(itemIndex){
		itemsToBuy.splice(itemIndex,1);
	}

	service.itemBought=function (item) {

		itemsBought.push(item);

	}

	service.getItem=function ( itemIndex) {
		return itemsToBuy[itemIndex];
	}

	service.getItemsBought=function(){
		return itemsBought;
	}
}
} )()
