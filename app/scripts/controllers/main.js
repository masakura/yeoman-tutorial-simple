'use strict';

/**
 * @ngdoc function
 * @name yeomanTutorialSimpleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanTutorialSimpleApp
 */
angular.module('yeomanTutorialSimpleApp')
  .controller('MainCtrl', function ($scope, todosModel) {
    var model = {};

    model.todos = [];
    model.addTodo = function () {
      model.todos.push(model.todo);
      model.todo = '';
    };
    model.removeTodo = function (index) {
      model.todos.splice(index, 1);
    };

    $scope.model = model;

    $scope.addTodo = function () {
      model.addTodo();
    };
    $scope.removeTodo = function (index) {
      model.removeTodo(index);
    };
  });
