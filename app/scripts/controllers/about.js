'use strict';

/**
 * @ngdoc function
 * @name yeomanTutorialSimpleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanTutorialSimpleApp
 */
angular.module('yeomanTutorialSimpleApp')
  .controller('AboutCtrl', ['TodosFactory', function (TodosFactory) {

    this.todos = TodosFactory.get().length;

  }]);
