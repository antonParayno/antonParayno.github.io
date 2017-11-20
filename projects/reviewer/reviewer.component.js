(function() {

'use strict'

angular.
  module('Reviewer.project').
    component('enggReview', {
      templateUrl: 'projects/reviewer/reviewer.template.html',
      controller: ['$http', function ReviewController($http) {
        var self = this;

        self.msg = 'To be filled';



        // $http.get('projects/reviewer/review.json').then(function(response) {
        //   self.questions = response
        // });



      }]
    });



})();