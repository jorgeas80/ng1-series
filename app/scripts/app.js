'use strict';

/**
 * @ngdoc overview
 * @name seriesng1App
 * @description
 * # seriesng1App
 *
 * Main module of the application.
 */
angular
  .module('seriesng1App', ['ui.bootstrap', 'satellizer', 'ngRoute'])
  .config(function($authProvider, $routeProvider) {
    // Auth urls
    $authProvider.loginUrl = 'http://localhost:3000/auth/login';
    $authProvider.signupUrl = 'http://localhost:3000/auth/signup';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'seriesng1';

    $routeProvider
      .when("/", {
        template: '<main-table></main-table>'
      })

      .when("/myseries", {
        template: '<my-series></my-series>'
      })
  });
