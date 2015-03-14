'use strict';

/**
 * @ngdoc function
 * @name yeomanTutorialSimpleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanTutorialSimpleApp
 */
angular.module('yeomanTutorialSimpleApp')
  .controller('AboutCtrl', function ($scope, todosModel) {
    $scope.model = todosModel;

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
