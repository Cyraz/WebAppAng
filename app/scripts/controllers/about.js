'use strict';

/**
 * @ngdoc function
 * @name configuratorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the configuratorApp
 */
angular.module('configuratorApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    alert("INTERCEPTED : this is AboutCtrl controller")
  });
