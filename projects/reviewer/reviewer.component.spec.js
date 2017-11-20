(function() {
  'use strict';

  describe('ReviewerController', function() {
  	
  	beforeEach(module('Reviewer.project'));

  	describe('reviewer', function() {
  	  var ctrl;
  	  beforeEach(inject(function($componentController) {
  	  	ctrl = $componentController('enggReview'); 
  	  }));

  	  it('should fetch question from data bank', function() {
  	  	expect(ctrl.questions).toEqual({});
  	  });
  	});
  });
})();