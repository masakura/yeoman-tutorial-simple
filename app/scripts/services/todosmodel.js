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
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
