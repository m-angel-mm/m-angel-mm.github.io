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
  };

}


MenuSearchService.$inject=['$http','ApiBasePath'];
function MenuSearchService ($http,ApiBasePath) {
  var service = this;


  service.getMatchedMenuItems = function (searchTerm) {

      var promise= $http ({
        method:"GET",
        url:ApiBasePath + "/menu_items.json"
      });

      promise.then(function (response) {
        var items = response.data;
        service.foundItems = [];

        for(var i=0; i < items.length;i++ ){
            if( items[i].description.includes(searchTerm) )
              service.foundItems.push(items[i]);
        }
      });

      console.log(service.foundItems);
      return  service.foundItems;
  };

}


})()
