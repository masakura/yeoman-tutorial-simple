'use strict';

/**
 * @ngdoc service
 * @name yeomanTutorialSimpleApp.todoContainer
 * @description
 * # todoContainer
 * Factory in the yeomanTutorialSimpleApp.
 */
angular.module('yeomanTutorialSimpleApp')
  .factory('todoContainer', function () {
    return {
      todos: [],
      addTodo: function (todo) {
        this.todos.push(todo);
      },
      removeTodo: function (index) {
        this.todos.splice(index, 1);
      }
    };
  });
