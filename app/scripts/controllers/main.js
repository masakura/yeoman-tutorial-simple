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
    var model = todosModel;
    $scope.model = model;

    $scope.addTodo = function () {
      model.addTodo();
    };
    $scope.removeTodo = function (index) {
      model.removeTodo(index);
    };
  });
