'use strict';

// Declare app level module which depends on views, and components
angular.module('dribbble', [
  'ngRoute',
  'dribbble.services',
  'dribbble.shotsList',
  'dribbble.shot',
  'dribbble.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  // Rotas possíveis são: "detalhes do shot" (/shot/:id) e "listagem de shots" (/shotsList)
  $routeProvider
    .when("/shot/:id", {controller: "shotCtrl", templateUrl: "shot/shot.html"})
    .otherwise({redirectTo: '/shotsList'});
  
}]);
