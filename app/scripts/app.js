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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/v1', {
        templateUrl: 'views/demo.html',
        controller: 'demo'
      })
      .when('/details/:itemId', {
        templateUrl: 'views/details.html',
        controller: 'detailCtrl'
      })
      .when('/wheels', {
        templateUrl: 'views/wheelDemo.html',
        controller: 'detailCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  });
