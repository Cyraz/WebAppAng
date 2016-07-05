'use strict';

/**
 * @ngdoc overview
 * @name configuratorApp
 * @description
 * # configuratorApp
 *
 * Main module of the application.
 */
angular
  .module('configuratorApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  });
