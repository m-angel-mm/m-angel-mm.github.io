(function () {

'use strict'

angular.module("NarrowItDownApp",[])
.controller("NarrowItDownController",NarrowItDownController)
.service("MenuSearchService",MenuSearchService)
.directive("foundItems",FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
;

/*
* Controller NarrowItDownController, use to looking for items
*/
NarrowItDownController.$inject=['$scope','MenuSearchService'];
function NarrowItDownController ($scope,MenuSearchService) {
  var narrowItDown = this;

  narrowItDown.menuSearch = function () {

    if($scope.sTerm == undefined || $scope.sTerm == "")
      return narrowItDown.found = [];

  var promise = MenuSearchService.getMatchedMenuItems($scope.sTerm);

  promise.then( function (response) {
    narrowItDown.found = response;

  }, function (error) {
    narrowItDown.found = [];
  })
  .catch(function (error) {
    console.log(error);
  });

  };

  narrowItDown.removeItem = function (itemIndex) {
    narrowItDown.found.splice(itemIndex,1);
  }

}


/*
* Service MenuSearchService, use to call menu_items REST service and
* get list of items
*/
MenuSearchService.$inject=['$http','ApiBasePath'];
function MenuSearchService ($http,ApiBasePath) {
  var service = this;


  service.getMatchedMenuItems = function (searchTerm) {

//return array of menu items
      return $http ({
        method:"GET",
        url:ApiBasePath + "/menu_items.json"
      }).then(function (response) {
        return response.data.menu_items;
      }).then(function ( menu_items) {
        var foundItems = [];
          for(var i = 0; i < menu_items.length; i++){
            if (menu_items[i].description.includes(searchTerm)) {
              foundItems.push(menu_items[i]);
            }
          }
       return foundItems;
     });
  };

}

//itemsFound directive function

function FoundItemsDirective() {

  var ddo = {
    templateUrl:'menuList.html',
    scope:{
      found: '<',
      onRemove : '&'
    },
    controller: 'NarrowItDownController',
    controllerAs: 'narrowItDown',
    bindToController: true

  };

  return ddo;
}

}) ();
