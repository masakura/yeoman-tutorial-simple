'use strict';

/**
 * @ngdoc service
 * @name yeomanTutorialSimpleApp.todosModel
 * @description
 * # todosModel
 * Factory in the yeomanTutorialSimpleApp.
 */
angular.module('yeomanTutorialSimpleApp')
  .factory('todosModel', function () {
    var model = {};

    model.todos = [];
    model.addTodo = function () {
      model.todos.push(model.todo);
      model.todo = '';
    };
    model.removeTodo = function (index) {
      model.todos.splice(index, 1);
    };

    return model;
  });
