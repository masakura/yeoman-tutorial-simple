'use strict';

/**
 * @ngdoc function
 * @name yeomanTutorialSimpleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanTutorialSimpleApp
 */
angular.module('yeomanTutorialSimpleApp')
  .controller('MainCtrl', function ($scope) {
    var model = {};

    model.todos = [];
    model.addTodo = function () {
      model.todos.push(model.todo);
      model.todo = '';
    };
    model.removeTodo = function (index) {
      model.todos.splice(index, 1);
    };

    $scope.todos = [];
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
