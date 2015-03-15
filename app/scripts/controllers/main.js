'use strict';

/**
 * @ngdoc function
 * @name yeomanTutorialSimpleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanTutorialSimpleApp
 */
angular.module('yeomanTutorialSimpleApp')
  .controller('MainCtrl', ['TodosFactory', function (TodosFactory) {

    this.todos = TodosFactory.get();

    this.addTodo = function(todo) {
      TodosFactory.addTodo(todo);
      this.todo = '';
    };

    this.removeTodo = function (index) {
      TodosFactory.removeTodo(index);
    };
  }]);
