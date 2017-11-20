'use strict'

describe('TodoListController', function() {
  
  beforeEach(module('todoList.project'));

  describe('todoList', function() {
  	var ctrl;

  	beforeEach(inject(function($componentController) {
  		ctrl = $componentController('todoList');
  	}));

  	it('should have a place to save the todos', function() { 	  
  	  expect(ctrl.todoList.length).toBe(0);

  	  ctrl.todoList = [{todo: 'test'}, {todo: 'test1'}];
  	  expect(ctrl.todoList.length).toBe(2);
  	});

  	it('should properly save a todo', function() {
  	  var todo;

  	  ctrl.todo = 'another test';
  	  ctrl.addTodo(ctrl.todo);
  	  todo = ctrl.todoList[0];

  	  expect(ctrl.todoList.length).toBe(1);
  	  expect(todo.completed).toBe(false);
  	  expect(todo.todo).toBe('another test')
  	});

  	it('should toggle completed', function() {
  	  var todo;

  	  ctrl.todo = 'another test';
  	  ctrl.addTodo(ctrl.todo);
  	  todo = ctrl.todoList[0];

  	  expect(todo.completed).toBe(false);

  	  ctrl.toggleTodo(todo);
  	  expect(todo.completed).toBe(true);
  	});

  	it('should toggleAll', function() {
  	  ctrl.todoList = [{completed: false}, {completed: true}, {completed: false}];

  	  ctrl.toggleAll(true);
  	  expect(ctrl.todoList).toEqual([{completed: true}, {completed: true}, {completed: true}]);

  	  ctrl.toggleAll(false);
  	  expect(ctrl.todoList).toEqual([{completed: false}, {completed: false}, {completed: false}]);  	  
  	});

  	it('should be able to edit todos',function() {
  	  var todo;
  	  ctrl.todoList = [{todo: 'to be edited'}];
  	  todo = ctrl.todoList[0];

  	  expect(todo.todo).toBe('to be edited');

  	  ctrl.editTodo(todo, 'edited');
  	  expect(todo.todo).toBe('edited');
  	});

  	it('should delete individual todos', function() {
  	  var todo;
  	  ctrl.todoList = [{id: 1,todo: 'to be edited'}, {id: 2, todo: 'to be deleted'}];
  	  todo = ctrl.todoList[1];

  	  expect(todo.todo).toBe('to be deleted');
  	  expect(ctrl.todoList.length).toBe(2);

  	  ctrl.deleteTodo(todo, 2);
  	  expect(ctrl.todoList.length).toBe(1);
  	  expect(ctrl.todoList[1]).toBe(undefined);
  	});

  	it('should delete completed todos', function() {
  	  ctrl.todoList = [{todo: 'done', completed: true}, {todo: 'not done', completed: false}];

  	  expect(ctrl.todoList.length).toBe(2);
  	  
  	  ctrl.clearCompleted();
  	  expect(ctrl.todoList.length).toBe(1);
  	  expect(ctrl.todoList).toEqual([{todo: 'not done', completed: false}]);
  	});

  });

});