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
  .controller('wheeldemo',['$scope' , '$http', function ($scope , $http) {
    $http.get('http://37.203.34.21:81/rest/api/wheels').success(function (data) {
      $scope.wheels=data;
      $scope.arto='name';

    });

  }]);

