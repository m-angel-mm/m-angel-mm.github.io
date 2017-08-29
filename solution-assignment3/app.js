(function () {

'use strict'

angular.module("NarrowItDownApp",[])
.controller("NarrowItDownController",NarrowItDownController)
.service("MenuSearchService",MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject=['$scope','MenuSearchService'];
function NarrowItDownController ($scope,MenuSearchService) {
  var narrowItDown = this;

  narrowItDown.menuSearch = function () {

    var found = MenuSearchService.getMatchedMenuItems($scope.sTerm);
    console.log(found);
  };

}


MenuSearchService.$inject=['$http','ApiBasePath'];
function MenuSearchService ($http,ApiBasePath) {
  var service = this;


  service.getMatchedMenuItems = function (searchTerm) {

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

})()
