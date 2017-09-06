(function () {

'use strict';

  angular.module('MenuApp')
  .component('categoriesData',{
    templateUrl:'src/template/categories.data.html',
    bindings: {
      categories: '<'
    }
  });
})();
