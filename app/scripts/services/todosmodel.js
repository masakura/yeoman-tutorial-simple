'use strict';

/**
 * @ngdoc service
 * @name yeomanTutorialSimpleApp.todosModel
 * @description
 * # todosModel
 * Factory in the yeomanTutorialSimpleApp.
 */
angular.module('yeomanTutorialSimpleApp')
  .factory('TodosFactory', function () {

    // モデルの初期化
    var model = {};
    model.todos = [];

    // モデルに関するメソッド
    return {
      get: function () {
        return model.todos;
      },
      addTodo: function (todo) {
        model.todos.push(todo);
      },
      removeTodo: function (index) {
        model.todos.splice(index, 1);
      }
    };
  });
