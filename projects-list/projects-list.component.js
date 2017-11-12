'use strict';

angular.
  module('portfolio.projects').
    component('projectsCtrl', {
      templateUrl : 'projects-list/projects-list.html',
      controller : [ '$http',
      function ProjectsListController($http) {
  		  var self = this;

  		  $http.get('projects/projects.json').then(function(response) {
  			  self.projects = response.data;
  		  });
  	  }]
	});