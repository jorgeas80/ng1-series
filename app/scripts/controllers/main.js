/// <reference path="../../../node_modules/@types/angular/index.d.ts" />

'use strict';

/**
 * @ngdoc function
 * @name seriesng1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the seriesng1App
 */
angular.module('seriesng1App')
  .controller('MainCtrl', function ($rootScope, $scope, tvmaze) {

    var vm = this;

    vm.series_today = [];

    
    // Get JSON with today releases in USA
    tvmaze.getTodayReleases().then(
      // successful
      function (response) {
        vm.series_today = response.data;
      },

      // Error
      function (response) {
        vm.series_today = [];
      }
    )


    // For template
    vm.d = Date.now();

    // Those are to allow ordering the result table
    vm.orderBy = "show.name";
    vm.reverse = false;

    // This is to filter the search table
    vm.searchTerm = {};

    // Listen to menubarctrl, which contains the search term
    var listener = $rootScope.$on('MenubarCtrl:rootScope:emit', function (event, data) {
      vm.searchTerm = data;
    });

    // Subscriptions 
    $scope.$on('$destroy', listener);
  });

