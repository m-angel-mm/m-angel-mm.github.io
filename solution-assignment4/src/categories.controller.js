( function () {

  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController',CategoriesController);

  CategoriesController.$inject=['MenuDataService','categoriesitems'];

  function CategoriesController(MenuDataService,categoriesitems) {
    var categoriesControl = this;

    categoriesControl.categoriesItems=categoriesitems;

  }
})();
