(function () {

'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];

  function RoutesConfig($stateProvider,$urlRouterProvider) {


    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'src/template/welcome.html'
      }
    )
    .state('categories',{
      url:'/categories-list',
      templateUrl: 'src/template/categories.list.template.html',
      controller: 'CategoriesController as categoriesCtrl',
      resolve: {
        categoriesitems:['MenuDataService',function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    }
  );

  $urlRouterProvider.otherwise('/');

  }

}

)();
