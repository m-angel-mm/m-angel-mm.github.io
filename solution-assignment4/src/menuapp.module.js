(function () {
'use strict';

angular.module('MenuApp',['data','ui.router']);

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];

function RoutesConfig($stateProvider,$urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('/',{
      url: '/',
      templateUrl: 'src/template/welcome.html'
    }
  );
}
}) ();
