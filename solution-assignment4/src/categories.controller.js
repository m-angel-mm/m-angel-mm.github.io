( function () {

  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController',CategoriesController);

  CategoriesController.$inject=['categoriesitems'];

  function CategoriesController(categoriesitems) {
    var categoriesControl = this;

    categoriesControl.categoriesItems=categoriesitems;

  }
})();
