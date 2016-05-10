'use strict';

/**
 * @ngdoc function
 * @name configuratorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the configuratorApp
 */
angular.module('configuratorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
alert("INTERCEPTED : this is main controler")
  });
