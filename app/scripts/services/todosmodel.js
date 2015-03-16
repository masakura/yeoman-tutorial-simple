'use strict';

/**
 * @ngdoc service
 * @name yeomanTutorialSimpleApp.todosModel
 * @description
 * # todosModel
 * Factory in the yeomanTutorialSimpleApp.
 */
angular.module('yeomanTutorialSimpleApp')
  .factory('todosModel', function (todoContainer) {
    var model = {};

    model.todos = todoContainer.todos;
    model.addTodo = function () {
      todoContainer.addTodo(model.todo);
      model.todo = '';
    };
    model.removeTodo = function (index) {
      todoContainer.removeTodo(index);
    };

    return model;
  });
