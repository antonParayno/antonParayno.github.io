(function() {
    'use strict'

    angular.
      module('todoList.project').
        component('todoList', {
        	templateUrl : 'projects/todoList/todoList.template.html',
        	controller: TodoController
        });


  // component controller function
    function TodoController() {
      var self = this;

      // storage for the todos
      self.todoList = [];
      // this will keep the value of the input field blank
      self.todo = '';
      // used to set all, active, completed tabs
      self.tab = 1;
      self.tabIsSet = tabIsSet;
      self.setTab = setTab;
      // bindable functions
      self.uuid = uuid;
      self.addTodo = addTodo;
      self.toggleTodo = toggleTodo;
      self.toggleAll = toggleAll;
      self.editTodo = editTodo;
      self.deleteTodo = deleteTodo;
      self.clearCompleted = clearCompleted;

      // Function Declarations
      // create a unique id for the todo
      function uuid() {
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

      function addTodo(todo) { 
        if(todo) {
          self.todoList.push({
            id : self.uuid(),
            todo : todo,
            completed : false
          });
          self.todo = ''
        };
      }

      function toggleTodo(todo) {
        todo.completed = !todo.completed;
      }

      function toggleAll(checked) {
        self.todoList.map(function (todo) {
            todo.completed = checked;
        });
      }

      function editTodo(todo, todoText) {
        var id = todo.id;

        if (todoText) {
          self.todoList.map(function (todo) {
            if(id === todo.id) {
              todo.todo = todoText;
            }
          });
        };
      }

      function deleteTodo(todo, id) {
        self.todoList = self.todoList.filter(function (todo) {
            return !(id === todo.id)
        });
      }

      function clearCompleted() {
        self.todoList = self.todoList.filter(function (todo) {
            return !todo.completed;
        });
      }

      // responsible for all,active and completed tabs.

      function tabIsSet(tab) {
        return self.tab === tab;
      }

      function setTab(value) {
        self.tab = value;
      }
    }
})();