(function () {

  angular.module("MenuApp")
  .component("itemComponent", {
    templateUrl:'src/template/items.data.html',
    bindings: {
      items : '<'
    }
  });
})();
