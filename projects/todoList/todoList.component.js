'use strict'

angular.
  module('todoList.project').
    component('todoList', {
    	templateUrl : 'projects/todoList/todoList.template.html',
    	controller: function TodoController() {
    	  var self = this;

    	  // create a unique id for the todo

		  self.uuid = function () {
			/*jshint bitwise:false */
			var i, random;
			var uuid = '';

			for (i = 0; i < 32; i++) {
				random = Math.random() * 16 | 0;
				if (i === 8 || i === 12 || i === 16 || i === 20) {
					uuid += '-';
				}
				uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
			}

			return uuid;
		  }	

          // storage for the todos
    	  self.todoList = [];

          // the object for the todo

    	  self.todo = {
    	  	id : self.uuid(),
    	  	todo : "",
    	  	completed : false
    	  }

    	  self.addTodo = function () { 
    	  	if(self.todo.todo) {
    	  	  self.todoList.push(self.todo);
    	  	  self.todo = {
    	  	   	id : self.uuid(),
    	  		todo : "",
    	  		completed : false
    	  	  }
    	  	};
    	  }

    	  self.toggleTodo = function (todo) {
    	  	todo.completed = !todo.completed;
    	  }

    	  self.toggleAll = function (checked) {
    	  	self.todoList.map(function (todo) {
    	  		todo.completed = checked;
    	  	});
    	  }

    	  self.editTodo = function (todo, todoText) {
    	  	var id = todo.id;
    	  	if (todoText) {
    	  	  self.todoList.map(function (todo) {
    	  	    if(id === todo.id) {
    	  	  	  todo.todo = todoText;
    	  	    }
    	  	  });
    	  	};
    	  }

    	  self.deleteTodo = function (todo, id) {
    	  	self.todoList = self.todoList.filter(function (todo) {
    	  		return !(id === todo.id)
    	  	});
    	  }

    	  self.clearCompleted = function () {
    	  	self.todoList = self.todoList.filter(function (todo) {
    	  		return !todo.completed;
    	  	});
    	  }

    	  // responsible for all,active and completed tabs.
    	  self.tab = 1;

    	  self.tabIsSet = function (tab) {
    	  	return self.tab === tab;
    	  }

    	  self.setTab = function (value) {
    	  	self.tab = value;
    	  }
    	}
    });