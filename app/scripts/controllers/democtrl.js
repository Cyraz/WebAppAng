'use strict';
/**
 * Created by Code_Beast on 5/3/2016.
 */


/**
 * @ngdoc function
 * @name configuratorApp.controller:AboutCtrl
 * @description
 * # demo
 * Controller of the configuratorApp
 */
angular.module('configuratorApp')
  .controller('demo',['$scope' , '$http', function ($scope , $http) {
    $http.get('data/data.json').success(function (data) {
      $scope.artists=data;
      $scope.arto='name';

    });

  }]);

