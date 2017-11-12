'use strict';

// Declare app level module which depends on views, and components
angular.module('portfolioApp').
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
      when('/projects', {
          template: '<projects-ctrl></projects-ctrl>',
      }).
      when('/projects/todoList', {
        	template : '<todo-list></todo-list>'
      }).otherwise('/home');
}]);